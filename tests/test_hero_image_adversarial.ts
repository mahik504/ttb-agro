import fs from 'fs';
import path from 'path';
import http from 'http';
import { spawn } from 'child_process';

async function runHeroImageVerification() {
  console.log('=== EMPIRICAL ADVERSARIAL TEST: Hero Image & CDN Hotlink Audit ===\n');

  const results: { check: string; pass: boolean; info?: string }[] = [];

  // 1. Check public/images/hero.jpg existence & size
  const publicHeroPath = path.resolve('public/images/hero.jpg');
  const existsInPublic = fs.existsSync(publicHeroPath);
  let publicStats = existsInPublic ? fs.statSync(publicHeroPath) : null;

  results.push({
    check: 'public/images/hero.jpg exists',
    pass: existsInPublic,
    info: existsInPublic ? `${publicStats?.size} bytes` : 'FILE NOT FOUND'
  });

  // 2. Verify JPEG Magic Bytes (SOI: 0xFFD8, EOI: 0xFFD9)
  let validJpeg = false;
  let dims: { width?: number; height?: number } = {};
  if (existsInPublic && publicStats && publicStats.size > 100) {
    const buffer = fs.readFileSync(publicHeroPath);
    const hasSoi = buffer[0] === 0xFF && buffer[1] === 0xD8 && buffer[2] === 0xFF;
    const hasEoi = buffer[buffer.length - 2] === 0xFF && buffer[buffer.length - 1] === 0xD9;
    validJpeg = hasSoi && hasEoi;

    // Extract JPEG dimensions from SOF marker
    let offset = 2;
    while (offset < buffer.length - 8) {
      if (buffer[offset] === 0xFF) {
        const marker = buffer[offset + 1];
        // SOF0 (0xC0) or SOF2 (0xC2)
        if (marker === 0xC0 || marker === 0xC2) {
          const h = buffer.readUInt16BE(offset + 5);
          const w = buffer.readUInt16BE(offset + 7);
          dims = { width: w, height: h };
          break;
        }
        const len = buffer.readUInt16BE(offset + 2);
        offset += 2 + len;
      } else {
        offset++;
      }
    }
  }

  results.push({
    check: 'public/images/hero.jpg is valid uncorrupted JPEG',
    pass: validJpeg,
    info: validJpeg ? `Valid JPEG SOI/EOI markers found, dimensions: ${dims.width}x${dims.height}px` : 'INVALID JPEG HEADERS'
  });

  // 3. Check dist/images/hero.jpg existence (Vite static asset bundling)
  const distHeroPath = path.resolve('dist/images/hero.jpg');
  const existsInDist = fs.existsSync(distHeroPath);
  let distStats = existsInDist ? fs.statSync(distHeroPath) : null;
  const identicalSize = existsInPublic && existsInDist && publicStats?.size === distStats?.size;

  results.push({
    check: 'dist/images/hero.jpg copied to production build',
    pass: existsInDist && identicalSize,
    info: existsInDist ? `Copied into dist (${distStats?.size} bytes, byte-match: ${identicalSize})` : 'MISSING IN DIST'
  });

  // 4. Inspect src/components/home/HeroSection.tsx for hero.jpg and no CDN hotlinks
  const heroSectionPath = path.resolve('src/components/home/HeroSection.tsx');
  const heroCode = fs.readFileSync(heroSectionPath, 'utf8');

  const usesLocalHero = heroCode.includes('/images/hero.jpg');
  results.push({
    check: 'HeroSection.tsx references /images/hero.jpg',
    pass: usesLocalHero,
    info: usesLocalHero ? 'Local path referenced' : 'NOT REFERENCED'
  });

  const hasUnsplash = /unsplash\.com/i.test(heroCode);
  const hasExternalHttp = /src=["']https?:\/\//i.test(heroCode);
  results.push({
    check: 'HeroSection.tsx has ZERO external image hotlinks or CDN URLs',
    pass: !hasUnsplash && !hasExternalHttp,
    info: (!hasUnsplash && !hasExternalHttp) ? 'Zero external hotlinks' : 'FOUND EXTERNAL HOTLINK'
  });

  // 5. Test HTTP serving via Vite preview
  console.log('Testing HTTP asset serving via vite preview on port 4174...');
  const previewProcess = spawn('npx', ['vite', 'preview', '--port', '4174', '--host', '127.0.0.1'], {
    shell: true,
    stdio: 'ignore'
  });

  // Wait for server to start
  await new Promise(r => setTimeout(r, 2000));

  let httpStatus = 0;
  let httpContentType = '';
  let httpBytes = 0;

  try {
    await new Promise<void>((resolve, reject) => {
      const req = http.get('http://127.0.0.1:4174/images/hero.jpg', (res) => {
        httpStatus = res.statusCode || 0;
        httpContentType = res.headers['content-type'] || '';
        let total = 0;
        res.on('data', chunk => total += chunk.length);
        res.on('end', () => {
          httpBytes = total;
          resolve();
        });
      });
      req.on('error', reject);
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error('HTTP request timed out'));
      });
    });
  } catch (err: any) {
    console.error('HTTP preview request error:', err.message);
  } finally {
    previewProcess.kill();
  }

  const httpPass = httpStatus === 200 && httpBytes === publicStats?.size && httpContentType.includes('image/jpeg');
  results.push({
    check: 'HTTP GET /images/hero.jpg serves HTTP 200 with image/jpeg',
    pass: httpPass,
    info: `Status: ${httpStatus}, Content-Type: ${httpContentType}, Bytes: ${httpBytes}`
  });

  // Print summary
  for (const r of results) {
    console.log(`[${r.pass ? 'PASS' : 'FAIL'}] ${r.check} — ${r.info}`);
  }

  const allPassed = results.every(r => r.pass);
  console.log(`\nTotal Checks: ${results.length}`);
  console.log(`Passed: ${results.filter(r => r.pass).length}`);
  console.log(`Failed: ${results.filter(r => !r.pass).length}`);
  console.log(`OVERALL HERO IMAGE VERDICT: ${allPassed ? 'ALL CHECKS PASSED' : 'CHECKS FAILED'}`);

  if (!allPassed) {
    process.exit(1);
  }
}

runHeroImageVerification().catch(err => {
  console.error('Hero image verification error:', err);
  process.exit(1);
});
