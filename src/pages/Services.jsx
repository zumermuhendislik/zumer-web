import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Proje & Mimari Tasarım',
      desc: 'Hayalinizdeki yapıları işlevsellik ve estetikle harmanlayarak dijital dünyada şekillendiriyoruz. Modern yaşamın gereksinimlerine uygun, özgün mimari projeler üretiyoruz.',
      icon: 'architecture',
      bullets: [
        'Kavramsal Tasarım ve Geliştirme',
        'BIM (Building Information Modeling) Uygulamaları',
        'İç Mimari ve Mekan Planlama',
      ],
      img: "https://lh3.googleusercontent.com/aida/AP1WRLu08GQDOBK92RAY9Ahs2_fMCMWuyXgFOssfysrQfkUmP5Vt2KLK7vYXROo7C3I55H-5Nr5mI7OqfV0P2RQbZQlHcl1kT0NEZKR_eHRh8j8W0CirQSXVp7L7dG30xUBE-vA4zZcFPXIO_RqzC2N1B5n-SDdzHK82SHXae96Psy_1zXGptVo8nq8GGv4dGPAdNNajrXndpBPDuuY3J6AH1etYEmVVVhCKX6D6rWSROHPuUNh4gI-7INAUoRc",
      imageLeft: true,
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
      img: "https://lh3.googleusercontent.com/aida/AP1WRLtJnkN7zhVADkK-PzOJaqjVc3MS1Rh4JKs7xp1rLFiCI-EMr_0N-wzkA8JVf9fU3lIcOy07B80PNjicnrF5iPVOBynQK8yAO55QC9qA76SlpXSpwHnwfiDdTrxDIirkWNieG2nDCNwictJwLgdj2Q9liQ5DCkq_uMh394DgsphcBubh9THcujSIISRa0A-LL-twL6PoYPBdATauGFIx8ehuFDKEv4FwBuESqHN9wTixL37f9MPdk-dRZygQ",
      imageLeft: false,
    },
    {
      title: 'Kentsel Dönüşüm',
      desc: 'Eski yapıları deprem yönetmeliğine uygun, güvenli ve modern yaşam komplekslerine dönüştürüyoruz. Geleceğin şehirlerini bugünden daha güvenli hale getiriyoruz.',
      icon: 'location_city',
      bullets: [
        'Riskli Yapı Tespiti ve Raporlama',
        'Yasal Süreç Yönetimi ve Danışmanlık',
        'Sürdürülebilir Şehir Planlaması',
      ],
      img: "https://lh3.googleusercontent.com/aida/AP1WRLulvVKBYxDwxIqBPXltEJ4ZxuIqN4FVMe8IamKQZjqusHAlfy1xeLPhzcL-4na7DqdgZvXKKB4khwHwDjR1uWxjEvdmxlXjxoG9mu7vT16itzexCQ4E1TEY8gaHvekGE9s5F3gFNehqDUUu0Z2VsXQCoqZwK0psbBNaTdr3qX0vzRf8yMdXyIW5pVVCQ7mMXyN9gzxYDNvQ7idnF9hmdPY86_C-s01LEEBcbzNNUpsMwy4e984u2njYYmQU",
      imageLeft: true,
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
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-32">
          {services.map((srv, idx) => (
            <div key={idx} className="col-span-1 md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              {/* Image Column */}
              <div className={`md:col-span-6 relative group ${srv.imageLeft ? 'order-2 md:order-1' : 'md:col-start-7 order-2 md:order-2'}`}>
                <div className={`absolute inset-0 bg-primary/5 rounded-lg z-0 ${srv.imageLeft ? '-translate-x-4 translate-y-4' : 'translate-x-4 translate-y-4'}`}></div>
                <img
                  className="relative z-10 w-full h-[350px] md:h-[500px] object-cover rounded-DEFAULT shadow-md border border-outline-variant/20 group-hover:-translate-y-1 transition-transform duration-500"
                  alt={srv.title}
                  src={srv.img}
                />
              </div>

              {/* Content Column */}
              <div className={`md:col-span-5 order-1 md:order-2 space-y-6 ${srv.imageLeft ? 'md:col-start-8' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container/10 text-primary mb-2">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {srv.icon}
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary">{srv.title}</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {srv.desc}
                </p>
                <ul className="space-y-4 mt-8 font-body-md text-body-md text-on-surface-variant">
                  {srv.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
