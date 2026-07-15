import React from 'react';

const rights = [
  { icon: 'manage_search', title: 'Bilgi Alma', desc: 'Kişisel verilerinizin işlenip işlenmediğini ve hangi verilerin işlendiğini öğrenme hakkı.' },
  { icon: 'fact_check', title: 'Bilgi Talep Etme', desc: 'İşlenen kişisel verilerinize ilişkin bilgi talep etme hakkı.' },
  { icon: 'help', title: 'Amacı Öğrenme', desc: 'İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme hakkı.' },
  { icon: 'share', title: 'Aktarım Bilgisi', desc: 'Verilerin yurt içi veya yurt dışında aktarıldığı üçüncü kişileri bilme hakkı.' },
  { icon: 'edit', title: 'Düzeltme', desc: 'Eksik veya yanlış işlenen verilerin düzeltilmesini isteme hakkı.' },
  { icon: 'delete', title: 'Silme / Yok Etme', desc: 'Yasal şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme hakkı.' },
  { icon: 'block', title: 'İtiraz', desc: 'İşlemenin otomatik sistemlerle gerçekleştirilmesi durumunda aleyhine çıkan sonuca itiraz etme hakkı.' },
  { icon: 'payments', title: 'Tazminat', desc: 'Kanuna aykırı işleme nedeniyle uğranılan zararın giderilmesini talep etme hakkı.' },
];

const dataCategories = [
  { category: 'Kimlik Bilgileri', examples: 'Ad, soyad, unvan', purpose: 'İletişim ve sözleşme süreçleri', basis: 'Sözleşme / Meşru menfaat' },
  { category: 'İletişim Bilgileri', examples: 'E-posta, telefon, adres', purpose: 'Teklif, bilgilendirme, destek', basis: 'Açık rıza / Sözleşme' },
  { category: 'İşlem Güvenliği', examples: 'IP adresi, çerez verileri', purpose: 'Site güvenliği ve istatistik', basis: 'Meşru menfaat' },
  { category: 'Profesyonel Bilgiler', examples: 'Şirket adı, pozisyon', purpose: 'Kurumsal iletişim', basis: 'Sözleşme öncesi adımlar' },
];

export default function KVKK() {
  return (
    <div className="w-full min-h-screen bg-surface pt-[100px] pb-[80px]">
      <div className="max-w-[860px] mx-auto px-margin-mobile md:px-margin-desktop">

        {/* Header */}
        <div className="mb-12">
          <span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest mb-4 block">
            6698 Sayılı Kanun Kapsamında
          </span>
          <h1 className="font-display-sm text-display-sm text-primary mb-4">
            KVKK Aydınlatma Metni
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant border-l-2 border-surface-tint pl-4">
            Son güncelleme: Temmuz 2025 · Zümer Mühendislik olarak kişisel verilerinizi
            6698 Sayılı Kişisel Verilerin Korunması Kanunu uyarınca işliyoruz.
          </p>
          <div className="w-full h-px bg-outline-variant/30 mt-8" />
        </div>

        {/* Veri Sorumlusu */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-surface-tint text-xl">corporate_fare</span>
            Veri Sorumlusu
          </h2>
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: 'Unvan', value: 'Zümer Mühendislik İnşaat San. ve Tic. Ltd. Şti.' },
              { label: 'Adres', value: 'Büyükdere Cad. No:195, Levent 34394, Şişli / İstanbul' },
              { label: 'E-posta', value: 'info@zumermuhendislik.com' },
              { label: 'Telefon', value: '+90 212 555 01 23' },
            ].map((item, i) => (
              <div key={i}>
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wide mb-1">{item.label}</p>
                <p className="font-body-md text-body-md text-on-surface">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* İşlenen Veriler Tablosu */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-surface-tint text-xl">table_chart</span>
            İşlenen Kişisel Veri Kategorileri
          </h2>
          <div className="overflow-x-auto rounded-xl border border-outline-variant/20">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container border-b border-outline-variant/20">
                  <th className="font-label-md text-label-md text-primary px-5 py-3">Kategori</th>
                  <th className="font-label-md text-label-md text-primary px-5 py-3">Örnekler</th>
                  <th className="font-label-md text-label-md text-primary px-5 py-3">Amaç</th>
                  <th className="font-label-md text-label-md text-primary px-5 py-3">Hukuki Dayanak</th>
                </tr>
              </thead>
              <tbody>
                {dataCategories.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-outline-variant/10 ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-container-lowest'}`}
                  >
                    <td className="font-body-md text-body-md text-on-surface px-5 py-3 font-medium">{row.category}</td>
                    <td className="font-body-sm text-body-sm text-on-surface-variant px-5 py-3">{row.examples}</td>
                    <td className="font-body-sm text-body-sm text-on-surface-variant px-5 py-3">{row.purpose}</td>
                    <td className="font-body-sm text-body-sm text-on-surface-variant px-5 py-3">{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Toplama Yöntemleri */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-surface-tint text-xl">input</span>
            Verilerin Toplanma Yöntemi
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Kişisel verileriniz; web sitesi iletişim formu, teklif talep formu, e-posta yazışmaları,
            telefon görüşmeleri ve sözleşme süreçleri aracılığıyla otomatik ya da otomatik olmayan
            yollarla toplanmaktadır. Toplanan veriler yalnızca KVKK'nın 5. ve 6. maddelerinde
            belirtilen işleme şartlarına uygun olarak kullanılmaktadır.
          </p>
        </section>

        {/* Aktarım */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-surface-tint text-xl">sync_alt</span>
            Verilerin Aktarılması
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Kişisel verileriniz; hizmet sağlayıcılar (e-posta altyapısı, barındırma hizmetleri),
            iş ortakları ve yasal zorunluluk halinde yetkili kamu kurum ve kuruluşları ile KVKK'nın
            8. ve 9. maddeleri çerçevesinde paylaşılabilir. Yurt dışına aktarım yalnızca açık
            rızanızın bulunması veya yasal gerekliliklerin karşılanması durumunda gerçekleştirilir.
          </p>
        </section>

        {/* Haklarınız */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-surface-tint text-xl">shield_person</span>
            KVKK Kapsamındaki Haklarınız
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rights.map((r, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:border-primary/30 transition-colors"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-lg">{r.icon}</span>
                </div>
                <div>
                  <p className="font-label-lg text-label-lg text-primary mb-0.5">{r.title}</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Başvuru Yöntemi */}
        <section className="mb-12">
          <h2 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-surface-tint text-xl">mail</span>
            Başvuru Yöntemi
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-4">
            Haklarınızı kullanmak için kimliğinizi doğrulayan belgelerle birlikte aşağıdaki kanallardan
            bize ulaşabilirsiniz. Başvurunuz yasal süre olan <strong className="text-primary">30 gün</strong> içinde yanıtlanacaktır.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@zumermuhendislik.com"
              className="flex items-center gap-3 px-5 py-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl hover:border-primary/40 transition-colors group"
            >
              <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">mail</span>
              <div>
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wide">E-posta</p>
                <p className="font-body-md text-body-md text-on-surface">info@zumermuhendislik.com</p>
              </div>
            </a>
            <div className="flex items-center gap-3 px-5 py-4 bg-surface-container-lowest border border-outline-variant/20 rounded-xl">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wide">Posta / Elden</p>
                <p className="font-body-md text-body-md text-on-surface">Büyükdere Cad. No:195, Levent / İstanbul</p>
              </div>
            </div>
          </div>
        </section>

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
