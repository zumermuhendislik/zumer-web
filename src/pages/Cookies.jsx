import React from 'react';

const cookieTypes = [
  {
    icon: 'lock',
    name: 'Zorunlu Çerezler',
    badge: 'Her Zaman Aktif',
    badgeColor: 'bg-primary-container text-on-primary-container',
    desc:
      'Web sitesinin temel işlevlerinin çalışması için gereklidir. Bu çerezler devre dışı bırakılamaz. Genellikle yalnızca gizlilik tercihlerinizi, oturum açma bilgilerinizi veya form doldurmalarınızı hatırlamak amacıyla kullanılır.',
    examples: ['Oturum tanımlama çerezleri', 'Güvenlik doğrulama çerezleri', 'CSRF koruma tokenleri'],
  },
  {
    icon: 'bar_chart',
    name: 'Analitik / Performans Çerezleri',
    badge: 'İsteğe Bağlı',
    badgeColor: 'bg-secondary-container text-on-secondary-container',
    desc:
      'Ziyaretçilerin web sitemizi nasıl kullandığını anlamamıza yardımcı olur. Toplanan veriler anonim tutulur ve bireysel kullanıcıları tanımlamak için kullanılmaz.',
    examples: ['Sayfa görüntüleme sayıları', 'Trafik kaynakları', 'Kullanıcı etkileşim metrikleri'],
  },
  {
    icon: 'tune',
    name: 'İşlevsellik Çerezleri',
    badge: 'İsteğe Bağlı',
    badgeColor: 'bg-secondary-container text-on-secondary-container',
    desc:
      'Web sitesinin gelişmiş özelliklerini ve kişiselleştirme seçeneklerini etkinleştirmek için kullanılır. Bu çerezlerin devre dışı bırakılması bazı hizmetlerin düzgün çalışmamasına neden olabilir.',
    examples: ['Dil ve bölge tercihleri', 'Tema ve görünüm ayarları', 'Form ön doldurmalar'],
  },
];

export default function Cookies() {
  const handleClearConsent = () => {
    localStorage.removeItem('zuemer_cookie_consent');
    window.location.reload();
  };

  return (
    <div className="w-full min-h-screen bg-surface pt-[100px] pb-[80px]">
      <div className="max-w-[860px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <div className="mb-12">
          <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-4 block">
            Çerez Yönetimi
          </span>
          <h1 className="font-display-sm text-display-sm text-primary mb-4">Çerez Politikası</h1>
          <p className="font-body-md text-body-md text-on-surface-variant border-l-2 border-surface-tint pl-4">
            Son güncelleme: Temmuz 2025 · Bu politika, Zümer Mühendislik web sitesinde kullanılan
            çerezlerin türlerini ve amaçlarını açıklamaktadır.
          </p>
          <div className="w-full h-px bg-outline-variant/30 mt-8"></div>
        </div>

        {/* What are cookies */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Çerez Nedir?</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız tarafından cihazınıza yerleştirilen
            küçük metin dosyalarıdır. Web sitelerinin sizi hatırlamasını ve deneyiminizi
            kişiselleştirmesini sağlarlar. Çerezler zararlı değildir ve kişisel bilgilerinizi
            doğrudan içermezler.
          </p>
        </section>

        {/* Cookie types */}
        <section className="mb-12 space-y-6">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-6">
            Kullandığımız Çerez Türleri
          </h2>
          {cookieTypes.map((ct, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary text-xl">{ct.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">{ct.name}</h3>
                </div>
                <span className={`font-label-sm text-label-sm px-3 py-1 rounded-full whitespace-nowrap ${ct.badgeColor}`}>
                  {ct.badge}
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
                {ct.desc}
              </p>
              <div className="border-t border-outline-variant/20 pt-4">
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wide mb-2">
                  Örnekler
                </p>
                <ul className="flex flex-wrap gap-2">
                  {ct.examples.map((ex, i) => (
                    <li
                      key={i}
                      className="font-body-sm text-body-sm bg-surface-container px-3 py-1 rounded-full text-on-surface-variant"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

        {/* How to control */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4">
            Çerezleri Nasıl Kontrol Edebilirsiniz?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
            Tarayıcınızın ayarlarından çerezleri yönetebilir, silebilir veya engelleyebilirsiniz.
            Çerezleri tamamen devre dışı bırakmak web sitemizin bazı özelliklerini olumsuz
            etkileyebilir. Aşağıdaki butonu kullanarak çerez tercihlerinizi sıfırlayabilirsiniz.
          </p>
          <button
            onClick={handleClearConsent}
            className="inline-flex items-center gap-2 font-label-lg text-label-lg border border-outline text-primary px-6 py-3 rounded-DEFAULT hover:bg-surface-variant transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-sm">restart_alt</span>
            Çerez Tercihlerimi Sıfırla
          </button>
        </section>

        {/* Contact */}
        <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xl flex items-start gap-4">
          <span className="material-symbols-outlined text-secondary mt-0.5">info</span>
          <div>
            <p className="font-label-lg text-label-lg text-primary mb-1">
              Çerez politikamız hakkında sorularınız için
            </p>
            <a
              href="mailto:info@zumermuhendislik.com"
              className="font-body-md text-body-md text-secondary hover:underline"
            >
              info@zumermuhendislik.com
            </a>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              adresine ulaşabilirsiniz.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#home" className="font-label-lg text-label-lg text-primary hover:underline flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    </div>
  );
}
