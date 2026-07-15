import React from 'react';

export default function Footer() {
  const quickLinks = [
    { name: 'Hizmetler', hash: '#services' },
    { name: 'Projeler', hash: '#projects' },
    { name: 'Kurumsal', hash: '#corporate' },
    { name: 'Kariyer', hash: '#careers' },
    { name: 'İletişim', hash: '#contact' },
  ];

  const legalLinks = [
    { name: 'Gizlilik Politikası', hash: '#privacy' },
    { name: 'Kullanım Koşulları', hash: '#terms' },
    { name: 'KVKK Aydınlatma Metni', hash: '#kvkk' },
    { name: 'Çerez Politikası', hash: '#cookies' },
  ];

  return (
    <footer className="w-full bg-primary text-on-primary pt-16 pb-8 px-margin-mobile md:px-margin-desktop flex flex-col gap-12 mt-auto border-t border-outline-variant/10">
      {/* Top Footer Section */}
      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Description */}
        <div className="col-span-1 md:col-span-2">
          <a className="flex items-center gap-3 font-display-lg text-headline-md font-black text-on-primary mb-4" href="#home">
            <img 
              src="/logo.png" 
              alt="Zümer Mühendislik Logo" 
              className="h-14 w-14 object-contain drop-shadow-sm" 
            />
            <span>Zümer Mühendislik</span>
          </a>
          <p className="mt-4 font-body-md text-body-md text-surface-variant/70 max-w-sm">
            Geleceği İnşa Eden Mühendislik. Küresel ölçekte yenilikçi, sürdürülebilir ve kalıcı altyapı projeleri.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline-sm text-headline-sm text-on-primary">Hızlı Bağlantılar</h4>
          <nav className="flex flex-col gap-2">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                className="font-body-md text-body-md text-surface-variant/70 hover:text-on-primary transition-colors duration-200"
                href={link.hash}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headline-sm text-headline-sm text-on-primary">İletişim</h4>
          <p className="font-body-md text-body-md text-surface-variant/70 leading-relaxed">
            muhendislikzumer@gmail.com<br />
            +90 532 153 21 78
          </p>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-container-max mx-auto w-full pt-8 border-t border-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="font-body-md text-body-md text-surface-variant/70">
          © 2026 Zümer Mühendislik Altyapı Yatırımları. Tüm Hakları Saklıdır.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {legalLinks.map((link, idx) => (
            <a
              key={idx}
              className="font-body-md text-body-md text-surface-variant/70 hover:text-on-primary hover:underline transition-colors"
              href={link.hash}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
