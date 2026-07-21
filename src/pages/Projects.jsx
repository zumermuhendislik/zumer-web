import React from 'react';

export default function Projects() {
  const projects = [
    "Yıldız Teknik Üniversitesi Makine Fakültesi Laboratuvarlara Temiz Su ve Gider Tesisatı Yapımı",
    "Yıldız Teknik Üniversitesi Mimarlık Fakültesi Laboratuvarı Altyapısı Yapımı",
    "Tübitak-Slovakya Saas Laboratuvarı Yapımı",
    "Yıldız Teknik Üniversitesi Kongre Merkezi Zemin ve Parke Yapımı",
    "İstanbul Vergi Kaçakçılığı-4 Denetim Daire Başkanlığı Elektrik Altyapısı",
    "Harbiye Orduevi Zemin ve Parke İmalatı",
    "Türkiye Hudut ve Sahiller Sağlık Genel Müdürlüğü Muhtelif Tadilat ve Onarım İşleri",
    "Milli Savunma Bakanlığı Teras Revizyonu",
    "Yıldız Teknik Üniversitesi Gemi İnşaatı ve Denizcilik Fakültesi Acil Durum Tahliye Krokisi"
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-surface-container-lowest grid-pattern">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
              Projelerimiz
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Mühendislik mükemmelliği ve üstün kalite anlayışımızla tamamladığımız projelerimiz.
            </p>
          </div>
        </div>
      </header>

      {/* Projects List */}
      <main className="py-24 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl mx-auto divide-y divide-outline-variant/30">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-6 py-8 first:pt-0 last:pb-0 hover:bg-surface-container-low/10 px-4 rounded-lg transition-all duration-300"
              >
                <span className="font-display-md text-headline-md-mobile md:text-display-md text-primary/40 group-hover:text-primary transition-colors duration-300 select-none pt-0.5 min-w-[3rem]">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h2 className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-on-surface group-hover:text-primary transition-colors duration-300 font-medium leading-snug">
                    {project}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
