import React, { useState, useEffect } from 'react';

export default function Header({ currentPage, onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', hash: '#home', id: 'home' },
    { name: 'Hizmetler', hash: '#services', id: 'services' },
    { name: 'Projeler', hash: '#projects', id: 'projects' },
    { name: 'Kurumsal', hash: '#corporate', id: 'corporate' },
    { name: 'Kariyer', hash: '#careers', id: 'careers' },
    { name: 'İletişim', hash: '#contact', id: 'contact' },
  ];

  const headerClass = `fixed top-0 w-full z-50 transition-all duration-500 border-none ${
    isScrolled
      ? 'bg-primary text-on-primary shadow-md py-3'
      : 'bg-gradient-to-b from-black/40 to-transparent text-on-primary backdrop-blur-none py-4'
  }`;

  const linkClass = (id) => {
    const isActive = currentPage === id;
    // Always white text — readable over both the dark hero images and the scrolled primary bg
    return `font-label-lg text-label-lg transition-all duration-300 px-3 py-2 rounded-DEFAULT ${
      isActive
        ? 'text-on-primary border-b-2 border-on-primary font-bold opacity-100'
        : 'text-on-primary/80 hover:text-on-primary hover:bg-white/10 opacity-90'
    }`;
  };

  const logoClass = 'font-headline-sm text-headline-sm font-bold tracking-tighter transition-colors duration-300 text-on-primary';

  return (
    <header className={headerClass}>
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Logo & Name */}
        <a className="flex items-center gap-3" href="#home">
          <img 
            src="/logo.png" 
            alt="Zümer Mühendislik Logo" 
            className="h-14 w-14 object-contain drop-shadow-sm" 
          />
          <span className={logoClass}>
            Zümer Mühendislik
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.id} className={linkClass(link.id)} href={link.hash}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Trailing Action */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenQuote}
            className={`font-label-lg text-label-lg px-6 py-3 rounded-DEFAULT transition-all duration-300 cursor-pointer ${
              isScrolled
                ? 'bg-on-primary text-primary hover:bg-on-primary/95'
                : 'bg-primary text-on-primary hover:bg-secondary'
            }`}
          >
            TEKLİF AL
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary/95 text-on-primary backdrop-blur-xl border-t border-on-primary/10 shadow-lg py-6 px-margin-mobile transition-all duration-300 animate-fade-in-up">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.hash}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 px-3 rounded text-lg font-medium transition-all ${
                  currentPage === link.id
                    ? 'bg-on-primary/15 text-on-primary font-bold'
                    : 'text-on-primary/80 hover:bg-on-primary/5 hover:text-on-primary'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="mt-4 bg-on-primary text-primary text-center font-bold py-3 rounded-DEFAULT hover:bg-on-primary/90 w-full cursor-pointer"
            >
              TEKLİF AL
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
