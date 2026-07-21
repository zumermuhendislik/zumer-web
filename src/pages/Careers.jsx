import React from 'react';

export default function Careers() {
  const benefits = [
    {
      title: 'Küresel Ölçekte Vizyoner Projeler',
      desc: 'Sınırları zorlayan, karmaşık ve yüksek etkili mühendislik projelerinde yer alma fırsatı. Fikirlerinizin dünya çapında metropollerin silüetlerinde hayat bulmasına şahit olun.',
      icon: 'architecture',
      cols: 'md:col-span-8',
    },
    {
      title: 'Sürekli Gelişim',
      desc: 'İç eğitim programlarımız ve sektör lideri mentorluk sistemimiz ile kariyer basamaklarını güvenle tırmanın.',
      icon: 'school',
      cols: 'md:col-span-4',
    },
    {
      title: 'Sürdürülebilirlik Odaklı',
      desc: 'Çevreye duyarlı tasarımlar ve yeşil mühendislik çözümleri ile geleceğe sorumlulukla yaklaşıyoruz.',
      icon: 'eco',
      cols: 'md:col-span-4',
    },
    {
      title: 'Kapsayıcı ve İnovatif Kültür',
      desc: 'Farklı disiplinlerden gelen yeteneklerin bir arada uyumla çalıştığı, fikirlerin özgürce paylaşıldığı hiyerarşiden uzak bir çalışma ortamı.',
      icon: 'diversity_3',
      cols: 'md:col-span-8',
      hasImage: true,
      imgUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAiXoExyUF-OFpII-Kwkt26ZaDDqgtbW9ZzcwzEQYH79odLB4hNXW8xMK6snJVSd0RO_zCu3F-OCScJbTWcu3DNxMDtLrHFXB8rMGs7weGPiRLDa2zCNPXvyJYvImTxuHW6ZNnXJUu_dG8aI8UI8Xste3ls6RT5r5jDqS-mSeZ-0XN8CMlJMasme-DoQfzjGy6_RawGmt-aXm25jnUJOQsLzKAXF2l28weNFf5VWWRB9VjQankBYvb-3ad08A7np-TZ8mz95QZhQCHT',
    },
  ];

  const jobs = [];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden pt-[80px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhIOO-P2LQm3xYCWXo4t3CMm_iPpkyanvsYRqff4wxm_uB1iVMN4s8lquuNMW1XKZPk7_8fpnD4bps3G80tu-k66s3O3LahKirIJVVy9Qxrcty4iPZy2TuLD7bdPkn7yF2GqauOT9GYXd1_caS8y7AJxyXs0bPDVPlean5GQrWgLP133Wq05u3W70BdD1jX9GCtUaljmS0HrzkUY94wXOK0kEJNUEAEUDGxNUBUZwI6vnUw73g5BWizzjvdS3oSr9nFuvW9Xs2yQ4l')",
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm z-10"></div>
        <div className="relative z-20 text-center max-w-4xl px-margin-mobile md:px-margin-desktop mx-auto animate-fade-in-up">
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-6">
            Geleceği Beraber İnşa Edelim
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
            Sıradışı yapıların ardındaki vizyoner ekibe katılın. Zümer Mühendislik'te mühendislik mükemmelliği ve yenilikçi tasarımı harmanlayarak yarının siluetlerini şekillendiriyoruz.
          </p>
          <a
            className="inline-flex items-center justify-center font-label-lg text-label-lg bg-primary text-on-primary px-8 py-4 rounded-DEFAULT hover:bg-secondary transition-colors duration-300"
            href="#acik-pozisyonlar"
          >
            Açık Pozisyonları İncele
          </a>
        </div>
      </section>

      {/* Why Us Bento Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-transparent">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            Neden Zümer Mühendislik?
          </h2>
          <div className="w-24 h-1 bg-primary mb-6 mx-auto md:mx-0"></div>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
            Sadece yapılar inşa etmiyoruz; kariyerleri, toplulukları ve sürdürülebilir bir geleceği inşa ediyoruz. Küresel projelere imza atarken, bireysel gelişiminizi her zaman ön planda tutuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {benefits.map((bn, idx) => (
            <div
              key={idx}
              className={`${bn.cols} bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              {bn.hasImage ? (
                <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                  <div className="flex-1">
                    <span className="material-symbols-outlined text-4xl text-primary mb-6">{bn.icon}</span>
                    <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">
                      {bn.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {bn.desc}
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden border border-outline-variant/20">
                    <img
                      className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                      alt={bn.title}
                      src={bn.imgUrl}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <span className="material-symbols-outlined text-4xl text-primary mb-6">{bn.icon}</span>
                  <h3 className="font-headline-md text-headline-sm md:text-headline-md text-primary mb-4">
                    {bn.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {bn.desc}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/20" id="acik-pozisyonlar">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
              Açık Pozisyonlar
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Ekibimize katılmak üzere yetenekli profesyoneller arıyoruz. Uzmanlık alanınıza uygun fırsatları keşfedin.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.length > 0 ? (
              jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="group bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-primary transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                        {job.title}
                      </h3>
                      <span
                        className={`font-label-sm text-label-sm px-2 py-1 rounded-sm ${
                          job.tagType === 'primary'
                            ? 'bg-primary-container text-on-primary-container'
                            : 'bg-secondary-container text-on-secondary-container'
                        }`}
                      >
                        {job.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-on-surface-variant font-body-md text-body-md">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">engineering</span>
                        {job.dept}
                      </span>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center font-label-lg text-label-lg border border-primary text-primary px-6 py-2 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap">
                    Başvur <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 px-6 bg-surface-container-lowest border border-outline-variant/20 rounded-lg shadow-sm">
                <p className="font-body-lg text-body-lg text-on-surface-variant font-medium">
                  Şu an için aktif bir açık pozisyonumuz bulunmamaktadır.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant/75 mt-2">
                  Bizimle çalışmak isterseniz genel başvuru yapabilirsiniz.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Size uygun bir pozisyon bulamadınız mı?
            </p>
            <a
              className="inline-flex items-center font-label-lg text-label-lg text-primary hover:underline hover:text-secondary transition-all"
              href="#contact"
            >
              Genel Başvuru Yapın <span className="material-symbols-outlined ml-1 text-sm">mail</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
