import React from 'react';

const sections = [
  {
    title: 'Genel Hükümler',
    content: `Bu web sitesi, Zümer Mühendislik İnşaat San. ve Tic. Ltd. Şti. ("Zümer Mühendislik") tarafından işletilmektedir. Siteye erişerek veya siteyi kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız lütfen siteyi kullanmayınız.`,
  },
  {
    title: 'Hizmetlerin Kapsamı',
    content: `Web sitemiz; Zümer Mühendislik'in sunduğu mühendislik ve inşaat hizmetleri hakkında bilgi sunmak, iletişim ve teklif taleplerini almak amacıyla tasarlanmıştır. Sitede yer alan bilgiler yalnızca genel bilgi amaçlıdır ve bağlayıcı nitelik taşımaz. Hizmet şart ve fiyatları, proje bazında belirlenerek taraflara ayrıca bildirilir.`,
  },
  {
    title: 'Fikri Mülkiyet Hakları',
    content: `Bu web sitesinde yer alan tüm metin, görsel, logo, grafik, tasarım ve diğer içerikler Zümer Mühendislik'e aittir veya lisanslı olarak kullanılmaktadır. İzinsiz kopyalanması, çoğaltılması, dağıtılması veya herhangi bir amaçla kullanılması yasaktır. İçeriklerin kaynak gösterilerek alıntılanması için önceden yazılı izin alınması gerekmektedir.`,
  },
  {
    title: 'Sorumluluk Sınırlaması',
    content: `Zümer Mühendislik, web sitesindeki bilgilerin doğruluğunu ve güncelliğini sağlamak için makul çaba göstermektedir; ancak bilgilerin eksiksiz veya hatasız olduğunu garanti etmez. Sitedeki bilgilere dayanılarak yapılan işlemlerden doğabilecek doğrudan veya dolaylı zararlardan Zümer Mühendislik sorumlu tutulamaz.`,
  },
  {
    title: 'Üçüncü Taraf Bağlantılar',
    content: `Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kullanıcı kolaylığı amacıyla sunulmakta olup, söz konusu sitelerin içerikleri, gizlilik politikaları veya uygulamaları üzerinde herhangi bir kontrolümüz bulunmamaktadır. Bu sitelere erişim kullanıcının kendi sorumluluğundadır.`,
  },
  {
    title: 'Değişiklik Hakkı',
    content: `Zümer Mühendislik, bu kullanım koşullarını önceden haber vermeksizin değiştirme hakkını saklı tutar. Değişiklikler web sitesinde yayımlandığı tarihten itibaren geçerli olacaktır. Siteyi kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.`,
  },
  {
    title: 'Uygulanacak Hukuk ve Yetki',
    content: `Bu kullanım koşulları Türk Hukuku'na tabidir. Koşullardan doğabilecek uyuşmazlıklarda İstanbul Merkez Mahkemeleri ve İcra Daireleri yetkilidir.`,
  },
  {
    title: 'İletişim',
    content: `Kullanım koşullarımız hakkında sorularınız için info@zumermuhendislik.com adresine e-posta gönderebilir veya Büyükdere Cad. No:195, Levent / İstanbul adresimize yazılı başvuruda bulunabilirsiniz.`,
  },
];

export default function Terms() {
  return (
    <div className="w-full min-h-screen bg-surface pt-[100px] pb-[80px]">
      <div className="max-w-[860px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <div className="mb-12">
          <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-4 block">
            Yasal Belge
          </span>
          <h1 className="font-display-sm text-display-sm text-primary mb-4">
            Kullanım Koşulları
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant border-l-2 border-surface-tint pl-4">
            Son güncelleme: Temmuz 2025 · Bu koşullar, Zümer Mühendislik web sitesini kullanımınıza
            ilişkin yasal çerçeveyi belirlemektedir.
          </p>
          <div className="w-full h-px bg-outline-variant/30 mt-8" />
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((sec, idx) => (
            <div key={idx}>
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-start gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary mt-0.5">
                  {idx + 1}
                </span>
                <span>{sec.title}</span>
              </h2>
              <div className="pl-11">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {sec.content}
                </p>
              </div>
              {idx < sections.length - 1 && (
                <div className="w-full h-px bg-outline-variant/20 mt-10" />
              )}
            </div>
          ))}
        </div>

        {/* Info box */}
        <div className="mt-16 p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xl flex items-start gap-4">
          <span className="material-symbols-outlined text-secondary mt-0.5">gavel</span>
          <div>
            <p className="font-label-lg text-label-lg text-primary mb-1">
              Kullanım koşulları hakkında sorularınız için
            </p>
            <a
              href="mailto:info@zumermuhendislik.com"
              className="font-body-md text-body-md text-secondary hover:underline"
            >
              info@zumermuhendislik.com
            </a>
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
