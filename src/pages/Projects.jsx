import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Lumina Rezidans (İstanbul)',
      category: 'Konut & Karma Kullanım',
      desc: 'Sürdürülebilir yaşam standartlarını yeniden tanımlayan, akıllı bina teknolojileriyle donatılmış premium konut projesi.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPrIaFMTQ-TdZAdjoO82c_dQr6K6OnjgpMdBVrD7n6khhZ09zfVozilt1SFvVjaJdJ9M1eH4qr0Nf2Kae3TtINlz1PS4LMUmYrH050uvGwZ3Ut7hpr_nNKHCMpIuw1L8m5D-zn623fLAANmwtVJI1tRgDRkAoic2lzI8hxmkbJLfWy56cqyrqh-kLG-kUMGhIeIpNsBIhG_se0RdmMi-TLB37gSW6R55HKtkxjzq7-jtcoGWRh-s_OLDhWCneKtUrWCyEWCDEOJmcF',
      offset: false,
    },
    {
      title: 'Merkez Ticaret Odası (Ankara)',
      category: 'Ticari & Kurumsal',
      desc: 'Başkentin ticari kalbinde yer alan, yenilikçi ofis alanları ve kongre merkezini barındıran ikonik yapı.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0aQbyUUsbK_gqndUELysI7CCNK2wA2qv5zEASKZWPNzLraTdQiMIekAGlGwpMdOKbKDOO0lVVH0pTK_HuMjWUAcao8ePvVCi593fkYuMan-hKkAOXkK-1JDD-iEDxe7f-qOppThnsN72pht3phA1Ii_F2OTihzcr37T-Pzc1pSATwXWao3nwkIJVhWn2zVufg6eXqrhRViTf3LP5ojF-6cwu_zfsQA3H_LRFJ5eyZHHGhYMW1oA_UXk3EQ6STRUBqi2kO7-WLaH9O',
      offset: true, // creates the elegant offset bento pattern
    },
    {
      title: 'Vadi Konakları (Çankaya)',
      category: 'Lüks Konut',
      desc: 'Doğayla iç içe, mahremiyet ve lüksü bir araya getiren prestijli yaşam alanı kompleksi.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCekZdF5NW8vzqrh9ziMPb7j8OmIMvKWjOcRdOJxAWsgc-pDaiPkRmNrK4fedrOa3Cuy7CEK9LC-2rHkPQ6e-2ryLxzhlgXEhiy81zyPkj1fAyimwxta9Mh3aFlCDWToDU20PN5jgxIf-_F4PvRrhQOJ7t9R8YfRefS2cHhREfoDwrR5g7zcAv_vFZPZiw4qLrIRC7LN3wuKmTYg0Hxr714T0zD8fyhTCtkQSUYes7tOM5wHfhmq04ZWxo61zNph-gu95Pn6u_rKwOJ',
      offset: false,
    },
    {
      title: 'Körfez Geçiş Köprüsü & Otoyolu',
      category: 'Altyapı & Ulaşım',
      desc: 'Bölgesel ticareti hızlandıran, ileri mühendislik teknikleriyle inşa edilmiş devasa ulaşım ağı projesi.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp2wuaa-GIqFpmqsD2v-yI1xW2-bVdj7NeJST7KOizs5V2PUqH9k4RCSkZhw29ptUAmnvF2-r_SmfHYRM9IF0zc73rBpEq8At_lkynXGnEs2Et3b0zv3-V4furDrfEMgMbTFdnYuePD1QNUskGpo12-86VgcPujXUQNHFIKdvAVUddHzPObaHLN1Ex9JIqF3TMWtW8YB7AyuxUbHgLyGNqsJk8rwiKIZA3nfkqryB-8Od5GkbwVKjXA2yXoRAL78xc-3XiXQu7IDiv',
      offset: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-surface-container-lowest grid-pattern">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
              Projelerimiz
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Mühendislik mükemmelliği ve vizyoner tasarımı bir araya getiren, geleceği şekillendiren küresel altyapı ve mimari projelerimiz.
            </p>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="py-24 bg-background">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter md:gap-16">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className={`group cursor-pointer ${project.offset ? 'md:mt-24' : ''}`}
              >
                <div className="relative overflow-hidden rounded bg-surface-variant aspect-[4/3] mb-6 border border-outline-variant/20 shadow-sm">
                  <img
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    alt={project.title}
                    src={project.img}
                  />
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-primary uppercase tracking-widest mb-2">
                    {project.category}
                  </p>
                  <h2 className="font-headline-md text-headline-sm md:text-headline-md text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-24 text-center">
            <button className="inline-flex items-center justify-center border border-outline text-primary font-label-lg text-label-lg px-8 py-4 rounded hover:bg-primary hover:text-on-primary transition-colors duration-300">
              Tüm Projeleri İncele
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
