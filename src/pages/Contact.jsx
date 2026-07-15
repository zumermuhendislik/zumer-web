import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero Title Area */}
      <section className="relative w-full overflow-hidden pt-[80px]">
        <div className="absolute inset-0 bg-architectural-grid bg-grid-pattern pointer-events-none z-0"></div>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-[80px] md:py-[120px] relative z-10 animate-fade-in-up">
          <h1 className="font-display-lg text-display-lg text-primary tracking-tighter mb-6">
            Bizimle İletişime Geçin
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Kurumsal talepleriniz, proje detayları ve küresel mühendislik çözümleri hakkında uzman ekibimizle görüşmek için formu doldurun veya doğrudan merkez ofisimize ulaşın.
          </p>
        </div>
      </section>

      {/* Contact Section Split Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-[120px] md:pb-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] lg:gap-gutter">
          {/* Left Column: Contact Details & Visual Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            {/* Details Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 rounded-lg shadow-sm">
              <h2 className="font-headline-md text-headline-md text-primary mb-8 border-b border-outline-variant/20 pb-4">
                İletişim Bilgileri
              </h2>
              <ul className="space-y-8">
                <li className="flex items-start gap-4 group">
                  <span
                    className="material-symbols-outlined text-surface-tint group-hover:text-primary transition-colors mt-1"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    call
                  </span>
                  <div>
                    <h3 className="font-label-lg text-label-lg text-on-surface mb-1 uppercase tracking-widest text-xs">
                      Telefon
                    </h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      +90 532 153 21 78
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <span
                    className="material-symbols-outlined text-surface-tint group-hover:text-primary transition-colors mt-1"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    mail
                  </span>
                  <div>
                    <h3 className="font-label-lg text-label-lg text-on-surface mb-1 uppercase tracking-widest text-xs">
                      E-Posta
                    </h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      muhendislikzumer@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Decorative Map / Building Context */}
            <div className="relative w-full h-64 bg-surface-container overflow-hidden rounded-lg border border-outline-variant/20 shadow-sm">
              <div
                className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-90 transition-transform duration-1000 hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGQWqHRXx_A0KpL4wxNo5wlo5pNbF-RfhbmRAgdxiDzn22NynMJE_ly-4Mglv8H399WzZwj9jwcE-165hIkpEdPV8XYlOXWXSNbs-CwJqJY-QaPMkjJ-neL6IxDx6olqbCgtPe-CGLJQJwL654s4L_6xXxTjWVs20LB55BfNUGe57SsW7HMmXZOzpQVFoXg85bHgJzrcpKazmMeKD9DK8ETi8X_gBqZQA0mtFAzmBGP8oNL8ptQSMH_ECh95f5MGtPpIDAtCy-hLoP')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="font-label-lg text-label-lg text-on-primary">Zümer Mühendislik</span>
                <span
                  className="material-symbols-outlined text-on-primary"
                  style={{ fontVariationSettings: "'FILL' 0" }}
                >
                  arrow_forward
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-lg border border-outline-variant/20 shadow-sm relative overflow-hidden">
            {/* Subtle background logo watermark */}
            <div className="absolute -right-20 -bottom-20 opacity-[0.03] text-[200px] font-display-lg font-bold leading-none select-none pointer-events-none text-primary">
              A
            </div>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-8">
              Dijital İletişim Formu
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
