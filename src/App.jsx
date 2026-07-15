import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Corporate from './pages/Corporate';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import KVKK from './pages/KVKK';
import Cookies from './pages/Cookies';

const VALID_PAGES = [
  'home', 'services', 'projects', 'corporate', 'careers', 'contact', 'privacy', 'cookies', 'terms', 'kvkk',
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (VALID_PAGES.includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
        window.location.hash = '#home';
      }
      // Scroll to top immediately on page change
      window.scrollTo(0, 0);
    };

    // Run on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onOpenQuote={() => setIsQuoteModalOpen(true)} />;
      case 'services':
        return <Services />;
      case 'projects':
        return <Projects />;
      case 'corporate':
        return <Corporate />;
      case 'careers':
        return <Careers />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Privacy />;
      case 'cookies':
        return <Cookies />;
      case 'terms':
        return <Terms />;
      case 'kvkk':
        return <KVKK />;
      default:
        return <Home onOpenQuote={() => setIsQuoteModalOpen(true)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        currentPage={currentPage}
        onOpenQuote={() => setIsQuoteModalOpen(true)}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <CookieBanner />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
