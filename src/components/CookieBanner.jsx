import React, { useState, useEffect } from 'react';

const CONSENT_KEY = 'zuemer_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on mount
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] animate-fade-in-up"
      role="dialog"
      aria-label="Çerez izin bildirimi"
    >
      {/* Backdrop blur strip */}
      <div className="bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-8px_32px_rgba(0,0,0,0.12)]">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            {/* Icon + Text */}
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-primary">cookie</span>
              </div>
              <div>
                <p className="font-label-lg text-label-lg text-primary mb-1">
                  Çerezleri Kullanıyoruz
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed max-w-2xl">
                  Web sitemizin düzgün çalışması ve deneyiminizi iyileştirmek amacıyla çerezler
                  kullanıyoruz.{' '}
                  <a href="#cookies" className="text-secondary underline hover:text-primary transition-colors">
                    Çerez Politikası
                  </a>{' '}
                  ve{' '}
                  <a href="#privacy" className="text-secondary underline hover:text-primary transition-colors">
                    Gizlilik Politikası
                  </a>{' '}
                  hakkında daha fazla bilgi alabilirsiniz.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={decline}
                id="cookie-decline-btn"
                className="flex-1 md:flex-none font-label-lg text-label-lg px-5 py-2.5 border border-outline text-on-surface-variant rounded-DEFAULT hover:bg-surface-variant transition-colors duration-200 cursor-pointer"
              >
                Reddet
              </button>
              <button
                onClick={accept}
                id="cookie-accept-btn"
                className="flex-1 md:flex-none font-label-lg text-label-lg px-6 py-2.5 bg-primary text-on-primary rounded-DEFAULT hover:bg-secondary transition-colors duration-200 cursor-pointer"
              >
                Kabul Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
