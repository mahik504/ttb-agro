import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AgriAssistantModal } from './components/chatbot/AgriAssistantModal';
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
import { Sparkles } from 'lucide-react';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFBF9] text-gray-900 selection:bg-agri-600 selection:text-white">
        
        {/* Main Sticky Navigation */}
        <Navbar onOpenAssistant={() => setIsAssistantOpen(true)} />

        {/* Content Viewport */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenAssistant={() => setIsAssistantOpen(true)} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/commodities" element={<CommoditiesPage />} />
            <Route path="/supply-chain" element={<SupplyChainPage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/group" element={<GroupPage />} />
            <Route path="/quality-compliance" element={<CompliancePage />} />
            <Route path="/contact" element={<ContactPage onOpenAssistant={() => setIsAssistantOpen(true)} />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Corporate Footer */}
        <Footer />

        {/* Floating Quick Action Button for B2B Assistant */}
        <div className="fixed bottom-6 right-6 z-30">
          <button
            onClick={() => setIsAssistantOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-forest-950 hover:bg-forest-900 text-white rounded-full shadow-2xl border border-forest-700 hover:border-agri-400 transition-all duration-200 btn-tactile group"
            aria-label="Open B2B Procurement Assistant"
          >
            <div className="w-6 h-6 rounded-full bg-agri-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
              <Sparkles className="w-3.5 h-3.5 text-amberGold-300" />
            </div>
            <span className="text-xs font-bold font-display text-gray-100 pr-1 hidden sm:inline">
              B2B Agri Assistant
            </span>
          </button>
        </div>

        {/* Domain-Locked B2B Agri Assistant Modal */}
        <AgriAssistantModal
          isOpen={isAssistantOpen}
          onClose={() => setIsAssistantOpen(false)}
        />

      </div>
    </Router>
  );
}

export default App;
