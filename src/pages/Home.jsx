import React from 'react';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-primary">
        <Slider />
        {/* Gradient Overlay for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10"></div>
        {/* Hero Content */}
        <div className="relative z-20 grid grid-cols-4 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
          <div className="col-span-4 md:col-span-8 lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-primary">
              Geleceği İnşa Eden Mühendislik
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant max-w-xl opacity-95">
              Küresel ölçekte vizyoner altyapı projeleri, sürdürülebilir mimari çözümler ve stratejik mühendislik harikaları ile yarının dünyasını bugünden yapılandırıyoruz.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#projects"
                className="bg-surface text-primary font-label-lg text-label-lg px-8 py-4 rounded-DEFAULT hover:bg-surface-variant transition-colors duration-300 text-center"
              >
                Projeleri İncele
              </a>
              <a
                href="#corporate"
                className="border border-surface text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-DEFAULT hover:bg-surface/10 transition-colors duration-300 flex items-center gap-2 text-center"
              >
                Kurumsal Profil
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Vizyon (About Us) */}
      <section className="relative py-24 md:py-40 px-margin-mobile md:px-margin-desktop bg-surface bg-structural-grid">
        <div className="max-w-container-max mx-auto grid grid-cols-4 md:grid-cols-12 gap-gutter items-center">
          <div className="col-span-4 md:col-span-5 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-outline"></div>
              <span className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-widest">
                Kurumsal Vizyon
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Stratejik Çözümler, Kusursuz İcraat.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Zümer Mühendislik olarak, yalnızca yapılar değil, nesiller boyu ayakta kalacak güçlü altyapı sistemleri geliştiriyoruz. Küresel endüstriyel standartları belirleyen mühendislik disiplinimiz, devasa ölçekli projeleri milimetrik hassasiyetle hayata geçirmemizi sağlar.
            </p>
            <ul className="flex flex-col gap-4 mt-4 border-l border-outline-variant pl-6">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  architecture
                </span>
                <span className="font-label-lg text-label-lg text-on-surface">
                  Mimari Tasarım ve Projelendirme
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  foundation
                </span>
                <span className="font-label-lg text-label-lg text-on-surface">
                  Anahtar Teslim Yapı İnşaatı
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  home_work
                </span>
                <span className="font-label-lg text-label-lg text-on-surface">
                  Kentsel Dönüşüm Danışmanlığı
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  engineering
                </span>
                <span className="font-label-lg text-label-lg text-on-surface">
                  Zemin Sondajı
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-4 md:col-span-6 md:col-start-7 mt-12 md:mt-0 relative">
            <img
              className="w-full aspect-[4/3] object-cover rounded-DEFAULT shadow-md"
              alt="İnşaat ve Mühendislik Sahası"
              src="/images/corporate_construction.jpg"
            />
            <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-DEFAULT border border-outline-variant/20 shadow-2xl">
              <p className="font-display-lg text-headline-lg text-on-primary">60+</p>
              <p className="font-label-sm text-label-sm text-surface-variant uppercase">
                Operasyon
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
