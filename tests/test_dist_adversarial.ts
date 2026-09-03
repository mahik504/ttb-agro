import fs from 'fs';
import path from 'path';

async function runDistVerification() {
  console.log('=== EMPIRICAL ADVERSARIAL TEST: dist/ Production Assets ===\n');

  const distDir = path.resolve('dist');
  if (!fs.existsSync(distDir)) {
    throw new Error('dist/ directory does not exist! Run npm run build first.');
  }

  const assetsDir = path.join(distDir, 'assets');
  const files = fs.readdirSync(assetsDir);
  const cssFile = files.find(f => f.endsWith('.css'));
  if (!cssFile) {
    throw new Error('No CSS file found in dist/assets!');
  }

  const cssContent = fs.readFileSync(path.join(assetsDir, cssFile), 'utf8');
  const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

  const results: { check: string; pass: boolean; info?: string }[] = [];

  // 1. All CSS variables defined in src/index.css
  const requiredVars = [
    '--evergreen-950', '--evergreen-900', '--evergreen-800',
    '--field-900', '--field-800', '--field-700',
    '--leaf-800', '--leaf-700', '--leaf-600',
    '--cream-50', '--cream-100', '--cream-200',
    '--parchment-100', '--parchment-200', '--parchment-300',
    '--ink-950', '--ink-900', '--ink-800', '--ink-soft',
    '--gold-400', '--gold-500', '--gold-600',
    '--paper-50', '--paper-100',
    '--danger', '--line-gold', '--line-ink'
  ];

  for (const v of requiredVars) {
    const pass = cssContent.includes(v);
    results.push({
      check: `CSS Variable: ${v}`,
      pass,
      info: pass ? 'Compiled in :root' : 'MISSING from compiled CSS'
    });
  }

  // 2. Custom classes
  const requiredClasses = [
    '.ledger-hairline',
    '.ledger-hairline-t',
    '.ledger-hairline-b',
    '.btn-tactile',
    '.harvest-light-field',
    'harvestDriftA',
    'harvestDriftB'
  ];

  for (const cls of requiredClasses) {
    const pass = cssContent.includes(cls);
    results.push({
      check: `Custom Utility / Animation: ${cls}`,
      pass,
      info: pass ? 'Present' : 'PURGED or MISSING'
    });
  }

  // 3. Purged clichés must NOT be present
  const forbiddenClasses = [
    '.glass-panel',
    '.dark-glass-panel',
    '.text-gradient'
  ];

  for (const cls of forbiddenClasses) {
    const pass = !cssContent.includes(cls);
    results.push({
      check: `Purged Cliché Absense: ${cls}`,
      pass,
      info: pass ? 'Successfully purged' : 'STILL PRESENT IN COMPILED CSS'
    });
  }

  // 4. Bespoke Font Utilities
  const fontChecks = [
    { name: 'font-display -> Fraunces', pattern: /font-family:[^;]*Fraunces/i },
    { name: 'font-sans -> Plus Jakarta Sans', pattern: /font-family:[^;]*Plus Jakarta Sans/i },
    { name: 'font-mono -> JetBrains Mono', pattern: /font-family:[^;]*JetBrains Mono/i }
  ];

  for (const fc of fontChecks) {
    const pass = fc.pattern.test(cssContent);
    results.push({
      check: `Font Utility: ${fc.name}`,
      pass,
      info: pass ? 'Present' : 'MISSING'
    });
  }

  // 5. Tailwind Raw Directives should NOT be present (would indicate postcss failure)
  const unparsedDirectives = ['@tailwind base', '@tailwind components', '@tailwind utilities', '@apply'];
  for (const dir of unparsedDirectives) {
    const pass = !cssContent.includes(dir);
    results.push({
      check: `No unparsed PostCSS directive: ${dir}`,
      pass,
      info: pass ? 'Cleanly parsed' : 'UNPARSED DIRECTIVE FOUND'
    });
  }

  // 6. Balanced braces check in compiled CSS
  const openBraces = (cssContent.match(/\{/g) || []).length;
  const closeBraces = (cssContent.match(/\}/g) || []).length;
  const bracesBalanced = openBraces === closeBraces;
  results.push({
    check: `CSS Braces Balanced (${openBraces} { vs ${closeBraces} })`,
    pass: bracesBalanced,
    info: bracesBalanced ? 'Syntax valid' : 'MISMATCHED BRACES'
  });

  // Print results
  for (const r of results) {
    console.log(`[${r.pass ? 'PASS' : 'FAIL'}] ${r.check} — ${r.info}`);
  }

  const allPassed = results.every(r => r.pass);
  console.log(`\nTotal Checks: ${results.length}`);
  console.log(`Passed: ${results.filter(r => r.pass).length}`);
  console.log(`Failed: ${results.filter(r => !r.pass).length}`);
  console.log(`OVERALL ASSET VERDICT: ${allPassed ? 'ALL CHECKS PASSED' : 'CHECKS FAILED'}`);

  if (!allPassed) {
    process.exit(1);
  }
}

runDistVerification().catch(err => {
  console.error('Dist verification failed:', err);
  process.exit(1);
});
