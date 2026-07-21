import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Mimari ve Statik Proje Çizimi',
      desc: 'Modern mimari ve mühendislik prensiplerine uygun, güvenli, estetik ve işlevsel statik proje ve mimari çizimler gerçekleştiriyoruz.',
      icon: 'architecture',
      bullets: [
        'BIM ve 3D Modelleme Uygulamaları',
        'Statik Hesap Raporları ve Analizler',
        'Uygulama ve Detay Projeleri',
      ],
    },
    {
      title: 'Acil Durum Tahliye Kroki Çizimi',
      desc: 'Yapılarınızın iş güvenliği ve yangın yönetmeliklerine tam uyumlu, anlaşılır ve profesyonel acil durum tahliye krokilerini çiziyoruz.',
      icon: 'draw',
      bullets: [
        'Yangın ve Kaçış Yolları Belirleme',
        'İş Sağlığı ve Güvenliği Standartları',
        'Mimari Plan Tabanlı Çizimler',
      ],
    },
    {
      title: 'Mekan Planlama',
      desc: 'İç ve dış mekanları, kullanım amaçlarına en uygun şekilde analiz ederek ergonomik, estetik ve maksimum verimlilik sunacak tasarımlar yapıyoruz.',
      icon: 'space_dashboard',
      bullets: [
        'Kullanım Alanı Analizleri',
        'Ergonomi ve Fonksiyonellik Tasarımı',
        'İç Mimari ve Yerleşim Planları',
      ],
    },
    {
      title: 'Anahtar Teslim İnşaat',
      desc: 'Planlama aşamasından teslime kadar tüm süreci titizlikle yönetiyor, size sadece taşınmanın keyfini bırakıyoruz. Söz verdiğimiz sürede ve en yüksek kalitede yaşam alanları inşa ediyoruz.',
      icon: 'foundation',
      bullets: [
        'Proje Yönetimi ve Koordinasyon',
        'Kalite Kontrol ve Güvence',
        'İş Sağlığı ve Güvenliği Standartları',
      ],
    },
    {
      title: 'Kentsel Dönüşüm',
      desc: 'Eski ve riskli yapıları deprem yönetmeliğine uygun, güvenli ve modern yaşam komplekslerine dönüştürüyoruz. Geleceğin şehirlerini güvenle kuruyoruz.',
      icon: 'location_city',
      bullets: [
        'Riskli Yapı Tespiti ve Raporlama',
        'Yasal Süreç Yönetimi ve Danışmanlık',
        'Sürdürülebilir Şehir Planlaması',
      ],
    },
    {
      title: 'Sondaj Zemin Etüt İşleri',
      desc: 'Deprem güvenliği ve statik projelerin en kritik aşaması olan zemin sondajı, jeolojik-jeoteknik etüt ve zemin mekaniği çalışmalarını profesyonelce yapıyoruz.',
      icon: 'construction',
      bullets: [
        'Zemin Sondaj ve Numune Alımı',
        'Jeolojik ve Jeoteknik Raporlama',
        'Laboratuvar Analizleri ve Raporlama',
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[62vh] flex items-center justify-center overflow-hidden pt-[80px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://lh3.googleusercontent.com/aida/AP1WRLtJnkN7zhVADkK-PzOJaqjVc3MS1Rh4JKs7xp1rLFiCI-EMr_0N-wzkA8JVf9fU3lIcOy07B80PNjicnrF5iPVOBynQK8yAO55QC9qA76SlpXSpwHnwfiDdTrxDIirkWNieG2nDCNwictJwLgdj2Q9liQ5DCkq_uMh394DgsphcBubh9THcujSIISRa0A-LL-twL6PoYPBdATauGFIx8ehuFDKEv4FwBuESqHN9wTixL37f9MPdk-dRZygQ')",
          }}
        />
        {/* Dark gradient overlay — ensures full readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />

        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20 animate-fade-in-up">
          <span className="inline-block font-label-lg text-label-lg text-on-primary/70 uppercase tracking-widest mb-4">
            Zümer Mühendislik
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-primary mb-6 leading-tight">
            Hizmetlerimiz
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto">
            Geleceğin dünyasını şekillendiren mühendislik ve mimari mükemmeliyet.
          </p>
          {/* Divider accent */}
          <div className="w-16 h-1 bg-on-primary/40 mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container/10 text-primary mb-6 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {srv.icon}
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary mb-4">{srv.title}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>
              <ul className="space-y-3 font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/10 pt-4">
                {srv.bullets.map((bullet, bidx) => (
                  <li key={bidx} className="flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Projenizi Beraber Şekillendirelim
          </h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Uzman ekibimizle vizyonunuzu gerçeğe dönüştürmek için ilk adımı atın.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-on-primary font-label-lg text-label-lg px-8 py-4 rounded-DEFAULT hover:bg-secondary transition-colors duration-300"
          >
            BİZİMLE İLETİŞİME GEÇİN
          </a>
        </div>
      </section>
    </div>
  );
}
