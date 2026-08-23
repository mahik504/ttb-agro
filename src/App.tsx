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
import { MessageSquare } from 'lucide-react';

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
      <div className="flex flex-col min-h-screen bg-[#F4EFE4] text-[#0E1C14] selection:bg-[#1A3C2C] selection:text-[#FBF7EE]">
        
        {/* Main Navigation */}
        <Navbar />

        {/* Content Viewport */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
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

        {/* Footer */}
        <Footer />

        {/* Quiet FAB for Assistant */}
        <div className="fixed bottom-5 right-5 z-30">
          <button
            onClick={() => setIsAssistantOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 bg-[#1A3C2C] hover:bg-[#133022] text-[#FBF7EE] rounded shadow-elevated border border-[#C4A35A]/40 transition-colors btn-tactile group text-xs font-medium"
            aria-label="Ask TTB Agro Assistant"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C4A35A]" />
            <span>Ask TTB</span>
          </button>
        </div>

        {/* Assistant Modal */}
        <AgriAssistantModal
          isOpen={isAssistantOpen}
          onClose={() => setIsAssistantOpen(false)}
        />

      </div>
    </Router>
  );
}

export default App;
