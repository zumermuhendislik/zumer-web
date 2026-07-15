import React, { useState, useEffect, useRef } from 'react';
import CaptchaWidget from './CaptchaWidget';

// ✏️ Change this to your inbox
const FORMSUBMIT_EMAIL = 'muhendislikzumer@gmail.com';

const PROJECT_TYPES = [
  'Konut Projesi',
  'Ticari Proje',
  'Altyapı Projesi',
  'Kentsel Dönüşüm',
  'Endüstriyel Tesis',
  'Diğer',
];

const INITIAL_FORM = { name: '', email: '', phone: '', projectType: '', details: '' };

const formatPhoneNumber = (value) => {
  let digits = value.replace(/\D/g, '');
  if (digits.length === 0) return '';
  if (digits.startsWith('90')) {
    digits = digits.slice(2);
  } else if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }
  digits = digits.slice(0, 10);
  let result = '+90';
  if (digits.length > 0) {
    result += ' ' + digits.slice(0, 3);
  }
  if (digits.length > 3) {
    result += ' ' + digits.slice(3, 6);
  }
  if (digits.length > 6) {
    result += ' ' + digits.slice(6, 8);
  }
  if (digits.length > 8) {
    result += ' ' + digits.slice(8, 10);
  }
  return result;
};

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const captchaRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setForm(INITIAL_FORM);
      setStatus('idle');
      setErrorMsg('');
      setCaptchaValid(false);
      captchaRef.current?.reset();
      setTimeout(() => firstInputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setForm((p) => ({ ...p, [name]: formatPhoneNumber(value) }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValid) return;
    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Teklif Talebi — ${form.projectType} | ${form.name}`,
          Ad_Soyad: form.name,
          Email: form.email,
          Telefon: form.phone || '—',
          Proje_Turu: form.projectType,
          Detaylar: form.details || '—',
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success === 'true') {
        setStatus('success');
      } else {
        throw new Error(data.message || 'Sunucu hatası');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Bilinmeyen hata oluştu.');
      captchaRef.current?.reset();
      setCaptchaValid(false);
    }
  };

  const canSubmit = form.name && form.email && form.projectType && captchaValid && status !== 'sending';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="qm-title">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-md animate-fade-in" onClick={onClose} />

      {/* Modal card */}
      <div className="relative w-full max-w-[680px] max-h-[96dvh] flex flex-col bg-surface rounded-2xl shadow-[0_32px_96px_rgba(0,0,0,0.35)] border border-outline-variant/20 animate-fade-in-up overflow-hidden">

        {/* ── Decorative header band ── */}
        <div className="relative bg-primary px-6 pt-5 pb-6 flex-shrink-0 overflow-hidden">
          {/* abstract circles */}
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-on-primary/5 pointer-events-none" />
          <div className="absolute -bottom-16 -left-6 w-40 h-40 rounded-full bg-on-primary/5 pointer-events-none" />
          {/* logo watermark */}
          <img src="/logo.png" alt="" aria-hidden="true" className="absolute right-6 bottom-2 h-20 object-contain opacity-10 pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-on-primary/70 text-base">request_quote</span>
                <span className="font-label-sm text-label-sm text-on-primary/70 uppercase tracking-widest">Zümer Mühendislik</span>
              </div>
              <h2 id="qm-title" className="font-headline-sm text-headline-sm text-on-primary leading-tight">
                Ücretsiz Teklif Alın
              </h2>
              <p className="font-body-sm text-body-sm text-on-primary/70 mt-1">
                Formu doldurun, ekibimiz 24 saat içinde dönüş yapsın.
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Kapat"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-on-primary/10 hover:bg-on-primary/20 text-on-primary transition-colors flex-shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="px-6 pt-5 pb-6">

            {/* ── Success ── */}
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center py-8 gap-4 animate-fade-in-up">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary">Talebiniz Alındı!</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xs mx-auto">
                    En kısa sürede <span className="font-semibold text-primary">muhendislikzumer@gmail.com</span> adresi üzerinden dönüş yapılacaktır.
                  </p>
                </div>
                <button onClick={onClose} className="mt-2 font-label-lg text-label-lg bg-primary text-on-primary px-8 py-3 rounded-DEFAULT hover:bg-secondary transition-colors cursor-pointer">
                  Kapat
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="qm-name" className="font-label-sm text-label-sm text-on-surface-variant">Ad Soyad <span className="text-error">*</span></label>
                    <input
                      ref={firstInputRef}
                      id="qm-name" name="name" type="text" required autoComplete="name"
                      value={form.name} onChange={handleChange} placeholder="Ahmet Yılmaz"
                      className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="qm-phone" className="font-label-sm text-label-sm text-on-surface-variant">Telefon</label>
                    <input
                      id="qm-phone" name="phone" type="tel" autoComplete="tel"
                      value={form.phone} onChange={handleChange} placeholder="+90 5xx xxx xx xx"
                      className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Email + Project Type */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="qm-email" className="font-label-sm text-label-sm text-on-surface-variant">E-posta <span className="text-error">*</span></label>
                    <input
                      id="qm-email" name="email" type="email" required autoComplete="email"
                      value={form.email} onChange={handleChange} placeholder="ornek@sirket.com"
                      className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="qm-projectType" className="font-label-sm text-label-sm text-on-surface-variant">Proje Türü <span className="text-error">*</span></label>
                    <div className="relative">
                      <select
                        id="qm-projectType" name="projectType" required
                        value={form.projectType} onChange={handleChange}
                        className="w-full appearance-none bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3 py-2.5 pr-9 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors cursor-pointer"
                      >
                        <option value="" disabled>Seçiniz...</option>
                        {PROJECT_TYPES.map((pt) => <option key={pt} value={pt}>{pt}</option>)}
                      </select>
                      <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant text-lg">expand_more</span>
                    </div>
                  </div>
                </div>

                {/* Row 3: Details */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="qm-details" className="font-label-sm text-label-sm text-on-surface-variant">Proje Detayları</label>
                  <textarea
                    id="qm-details" name="details" rows={2}
                    value={form.details} onChange={handleChange}
                    placeholder="Kısa bilgi verin — metrekare, lokasyon, bütçe vb."
                    className="bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3 py-2.5 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  />
                </div>

                {/* Row 4: CAPTCHA */}
                <div className="border-t border-outline-variant/20 pt-4">
                  <CaptchaWidget ref={captchaRef} onValidChange={setCaptchaValid} />
                </div>

                {/* Error */}
                {status === 'error' && (
                  <div className="flex items-start gap-3 p-3 bg-error-container rounded-lg animate-fade-in-up">
                    <span className="material-symbols-outlined text-error text-lg flex-shrink-0 mt-0.5">error</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-error">Gönderim başarısız</p>
                      <p className="font-body-sm text-body-sm text-on-error-container mt-0.5">{errorMsg}</p>
                    </div>
                  </div>
                )}

                {/* Submit row */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    <a href="#privacy" onClick={onClose} className="underline hover:text-primary transition-colors">Gizlilik Politikası</a>'nı kabul ediyorum.
                  </p>
                  <button
                    type="submit" id="quote-submit-btn"
                    disabled={!canSubmit}
                    className="flex-shrink-0 font-label-lg text-label-lg bg-primary text-on-primary px-7 py-3 rounded-DEFAULT hover:bg-secondary transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-base">send</span>
                        Teklif Al
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
