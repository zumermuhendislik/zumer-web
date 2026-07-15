import React from 'react';

const sections = [
  {
    title: '1. Veri Sorumlusunun Kimliği',
    content:
      '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; veri sorumlusu sıfatıyla Zümer Mühendislik İnşaat San. ve Tic. Ltd. Şti. (bundan böyle "Zümer Mühendislik" veya "Şirket" olarak anılacaktır) tarafından aşağıda açıklanan kapsamda işlenmektedir.',
  },
  {
    title: '2. İşlenen Kişisel Veriler ve Toplanma Yöntemleri',
    content:
      'Şirketimiz; ad-soyad, e-posta adresi, telefon numarası, şirket/kurum bilgisi gibi kişisel verileri; web sitesi iletişim formu, teklif talep formu, e-posta yazışmaları ve sözleşme süreçleri aracılığıyla otomatik ya da otomatik olmayan yollarla toplamaktadır.',
  },
  {
    title: '3. Kişisel Verilerin İşlenme Amaçları',
    content: `Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:\n• Teklif, bilgi ve randevu taleplerinizin yanıtlanması\n• Proje teklifi ve sözleşme süreçlerinin yürütülmesi\n• Yasal yükümlülüklerin yerine getirilmesi\n• İş ortakları ve müşterilerle iletişimin sağlanması\n• Hizmet kalitesinin artırılmasına yönelik analizlerin yapılması`,
  },
  {
    title: '4. Kişisel Verilerin Aktarılması',
    content:
      'Kişisel verileriniz; hizmet sağlayıcılar, iş ortakları ve yasal zorunluluk halinde kamu kurum ve kuruluşları ile KVKK\'nın 8. ve 9. maddelerinde belirtilen şartlar dahilinde paylaşılabilir. Yurt dışına kişisel veri aktarımı yalnızca açık rızanızın alınması veya yasal gerekliliklerin karşılanması durumunda gerçekleştirilir.',
  },
  {
    title: '5. Kişisel Verilerin Saklanma Süresi',
    content:
      'Kişisel verileriniz, ilgili mevzuatta öngörülen süreler veya işleme amacının gerektirdiği süre boyunca saklanmakta; bu sürelerin sona ermesi ile birlikte silinmekte, yok edilmekte veya anonim hale getirilmektedir.',
  },
  {
    title: '6. Veri Sahibinin Hakları (KVKK Madde 11)',
    content: `KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:\n• Kişisel verilerinizin işlenip işlenmediğini öğrenme\n• İşlenmişse buna ilişkin bilgi talep etme\n• İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme\n• Yurt içinde / yurt dışında aktarıldığı üçüncü kişileri bilme\n• Eksik veya yanlış işlenmişse düzeltilmesini isteme\n• Yasal şartlar çerçevesinde silinmesini veya yok edilmesini isteme\n• İşlemeye itiraz etme ve otomatik sistemler vasıtasıyla analiz edilmesi nedeniyle aleyhine çıkan sonuca itiraz etme\n• Zararın giderilmesini talep etme`,
  },
  {
    title: '7. İletişim',
    content:
      'KVKK kapsamındaki haklarınızı kullanmak veya kişisel verilerinizle ilgili sorularınız için info@zumermuhendislik.com adresine e-posta gönderebilir ya da Büyükdere Cad. No:45, Şişli / İstanbul adresine yazılı başvuruda bulunabilirsiniz. Başvurunuz en geç 30 gün içinde yanıtlanacaktır.',
  },
];

export default function Privacy() {
  return (
    <div className="w-full min-h-screen bg-surface pt-[100px] pb-[80px]">
      <div className="max-w-[860px] mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Header */}
        <div className="mb-12">
          <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-4 block">
            Yasal Bildirim
          </span>
          <h1 className="font-display-sm text-display-sm text-primary mb-4">
            Gizlilik Politikası
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant border-l-2 border-surface-tint pl-4">
            Son güncelleme: Temmuz 2025 · Bu politika, Zümer Mühendislik'in kişisel verileri nasıl
            topladığını, kullandığını ve koruduğunu açıklamaktadır.
          </p>
          <div className="w-full h-px bg-outline-variant/30 mt-8"></div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((sec, idx) => (
            <div key={idx} className="group">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-3 flex items-start gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary mt-0.5">
                  {idx + 1}
                </span>
                <span>{sec.title.replace(/^\d+\.\s/, '')}</span>
              </h2>
              <div className="pl-11">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed whitespace-pre-line">
                  {sec.content}
                </p>
              </div>
              {idx < sections.length - 1 && (
                <div className="w-full h-px bg-outline-variant/20 mt-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 p-6 bg-surface-container-lowest border border-outline-variant/20 rounded-xl flex items-start gap-4">
          <span className="material-symbols-outlined text-secondary mt-0.5">info</span>
          <div>
            <p className="font-label-lg text-label-lg text-primary mb-1">
              Bu politika hakkında sorularınız için
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
