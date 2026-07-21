import React from 'react';

export default function Corporate() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[716px] w-full flex items-end pb-[120px] px-margin-mobile md:px-margin-desktop">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full"
            style={{
              backgroundImage:
                "url('/images/corporate_hero.jpg')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto animate-fade-in-up">
          <h1 className="font-display-lg text-display-lg md:text-display-lg text-headline-lg-mobile text-on-primary mb-4 max-w-3xl">
            Kurumsal Vizyonumuz
          </h1>
          <p className="font-body-lg text-body-lg text-inverse-on-surface max-w-2xl border-l-2 border-surface-tint pl-4">
            Küresel ölçekte yapısal bütünlük, mühendislik mükemmelliği ve sürdürülebilir gelecek inşa etme kararlılığımızla endüstriye yön veriyoruz.
          </p>
        </div>
      </section>

      {/* Mission & Vision (Bento Grid Style) */}
      <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay z-0 pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Section Title */}
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-4 block">
                  Yönelim
                </span>
                <h2 className="font-headline-lg text-headline-lg md:text-headline-lg text-headline-lg-mobile text-primary leading-tight">
                  Geleceği
                  <br />
                  Şekillendiriyoruz.
                </h2>
              </div>
              <div className="hidden md:block">
                <span
                  className="material-symbols-outlined text-[64px] text-surface-tint opacity-20"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  architecture
                </span>
              </div>
            </div>

            {/* Bento Content */}
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Misyon */}
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 flex flex-col justify-between group hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="w-12 h-12 bg-surface-container rounded flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">target</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Misyonumuz</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    En zorlu mühendislik problemlerine yenilikçi, güvenilir ve sürdürülebilir çözümler üreterek, paydaşlarımız için kalıcı değer yaratmak. Her projede teknik hassasiyeti ve operasyonel mükemmelliği temel alıyoruz.
                  </p>
                </div>
              </div>
              {/* Vizyon */}
              <div className="bg-primary text-on-primary p-8 flex flex-col justify-between relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                {/* Subtle graphic */}
                <div className="absolute -bottom-10 -right-10 opacity-10">
                  <span
                    className="material-symbols-outlined text-[160px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    explore
                  </span>
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-on-primary/10 rounded flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span className="material-symbols-outlined text-on-primary">visibility</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary mb-4">Vizyonumuz</h3>
                  <p className="font-body-md text-body-md text-inverse-on-surface leading-relaxed">
                    Uluslararası standartlarda, öncü teknolojileri kullanarak küresel altyapı ve üstyapı projelerinde dünyanın en saygın ve referans alınan mühendislik-inşaat firması olmak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/10">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-4 block">
              İlkelerimiz
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">Temel Değerlerimiz</h2>
            <div className="w-16 h-1 bg-surface-tint mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Value 1 */}
            <div className="border-t-2 border-primary pt-6">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-surface-tint">verified_user</span>
                Dürüstlük
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tüm faaliyetlerimizde şeffaflık ve etik kurallara tavizsiz bağlılık esastır. Güven, inşa ettiğimiz en güçlü yapıdır.
              </p>
            </div>
            {/* Value 2 */}
            <div className="border-t-2 border-surface-dim pt-6">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-surface-tint">workspace_premium</span>
                Mükemmellik
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mühendislik disiplininden ödün vermeden, her detayda en yüksek kaliteyi hedefleyerek standartları belirliyoruz.
              </p>
            </div>
            {/* Value 3 */}
            <div className="border-t-2 border-surface-dim pt-6">
              <h4 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-surface-tint">health_and_safety</span>
                Güvenlik
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Sıfır kaza prensibiyle hareket eder, insan hayatını ve çevreyi korumayı tüm operasyonlarımızın merkezinde tutarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brief History & Stats */}
      <section className="py-[120px] px-margin-mobile md:px-margin-desktop bg-background">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-[80px] items-center">
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-center rounded-DEFAULT shadow-md"
              style={{
                backgroundImage:
                  "url('/images/corporate_construction.jpg')",
              }}
            ></div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -right-8 bg-surface-container-lowest p-6 border border-outline-variant/20 hidden md:block shadow-lg rounded-DEFAULT">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="font-headline-lg text-headline-lg text-primary block">5+</span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase">Yıllık Tecrübe</span>
                </div>
                <div>
                  <span className="font-headline-lg text-headline-lg text-primary block">60+</span>
                  <span className="font-label-sm text-label-sm text-secondary uppercase">Tamamlanan Proje</span>
                </div>
              </div>
            </div>
          </div>
          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest block">
              Köklü Geçmiş
            </span>
            <h2 className="font-headline-md text-headline-md text-primary">
              Mühendislikte Çeyrek Asrı Aşan Güven
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Zümer Mühendislik, kurulduğu günden bu yana girdiğimiz bütün işleri başarılı bir şekilde sonlandırmayı ilke edinmiştir. Projelerimizdeki teknik başarı ve disiplinli çalışma anlayışımız, mühendislik disiplinine olan sadakatimizin bir göstergesidir.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Global endüstri standartlarını sadece uygulamakla kalmıyor, aynı zamanda Ar-Ge yatırımlarımızla sektörel gelişime liderlik ediyoruz. Güçlü finansal yapımız ve uzman kadromuzla geleceğin şehirlerini inşa etmeye devam ediyoruz.
            </p>
            <button className="border border-outline text-primary font-label-lg text-label-lg px-6 py-3 rounded-DEFAULT hover:bg-surface-variant transition-colors duration-300 flex items-center gap-2">
              Kurumsal Profil (PDF) <span className="material-symbols-outlined text-sm">download</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
