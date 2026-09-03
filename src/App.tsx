import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CommoditiesPage } from './pages/CommoditiesPage';
import { SupplyChainPage } from './pages/SupplyChainPage';
import { NetworkPage } from './pages/NetworkPage';
import { GroupPage } from './pages/GroupPage';
import { CompliancePage } from './pages/CompliancePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream-100 text-ink-900 selection:bg-field-900 selection:text-cream-100 font-sans">
        {/* Main Navigation */}
        <Navbar />

        {/* Content Viewport */}
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/commodities" element={<CommoditiesPage />} />
            <Route path="/supply-chain" element={<SupplyChainPage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/group" element={<GroupPage />} />
            <Route path="/compliance" element={<CompliancePage />} />
            <Route path="/quality-compliance" element={<CompliancePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
