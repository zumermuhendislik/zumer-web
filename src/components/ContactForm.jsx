import React, { useState, useRef } from 'react';
import CaptchaWidget from './CaptchaWidget';

const FORMSUBMIT_EMAIL = 'muhendislikzumer@gmail.com';

const INITIAL = { fullname: '', phone: '', email: '', message: '' };

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

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [captchaValid, setCaptchaValid] = useState(false);
  const captchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData((p) => ({ ...p, [name]: formatPhoneNumber(value) }));
    } else {
      setFormData((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.phone || !formData.email || !formData.message) {
      setErrorMsg('Lütfen tüm zorunlu alanları doldurun.');
      setStatus('error');
      return;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMsg('Lütfen geçerli bir e-posta adresi girin.');
      setStatus('error');
      return;
    }
    if (!captchaValid) {
      setErrorMsg('Lütfen güvenlik kodunu doğru girin.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `İletişim Formu — ${formData.fullname}`,
          Ad_Soyad: formData.fullname,
          Telefon: formData.phone,
          E_posta: formData.email,
          Mesaj: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success === 'true') {
        setStatus('success');
        setFormData(INITIAL);
        captchaRef.current?.reset();
        setCaptchaValid(false);
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

  const canSubmit = formData.fullname && formData.phone && formData.email && formData.message && captchaValid && status !== 'sending';

  if (status === 'success') {
    return (
      <div className="bg-surface-container-low border border-primary/20 p-8 rounded-lg text-center space-y-4 animate-fade-in-up">
        <span className="material-symbols-outlined text-[64px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <h3 className="font-headline-md text-headline-sm text-primary">Mesajınız İletildi!</h3>
        <p className="font-body-md text-on-surface-variant max-w-md mx-auto">
          Kurumsal talebiniz alınmıştır. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 px-6 py-2 bg-primary text-on-primary font-label-lg rounded-DEFAULT hover:bg-secondary transition-colors cursor-pointer"
        >
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
      {/* Error banner */}
      {status === 'error' && (
        <div className="bg-error-container text-on-error-container p-4 rounded-DEFAULT font-label-md flex items-center gap-2 animate-fade-in-up">
          <span className="material-symbols-outlined">error</span>
          {errorMsg}
        </div>
      )}

      {/* Ad-Soyad */}
      <div className="relative">
        <input
          type="text" id="fullname" name="fullname"
          value={formData.fullname} onChange={handleChange}
          placeholder=" "
          className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-b-2 focus:border-primary transition-colors placeholder-transparent"
          disabled={status === 'sending'}
        />
        <label htmlFor="fullname" className="absolute left-0 -top-3.5 font-label-sm text-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-label-sm peer-focus:text-primary">
          Ad-Soyad <span className="text-error">*</span>
        </label>
      </div>

      {/* Telefon */}
      <div className="relative">
        <input
          type="tel" id="phone" name="phone"
          value={formData.phone} onChange={handleChange}
          placeholder=" "
          className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-b-2 focus:border-primary transition-colors placeholder-transparent"
          disabled={status === 'sending'}
        />
        <label htmlFor="phone" className="absolute left-0 -top-3.5 font-label-sm text-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-label-sm peer-focus:text-primary">
          Telefon Numarası <span className="text-error">*</span>
        </label>
      </div>

      {/* E-posta */}
      <div className="relative">
        <input
          type="email" id="email" name="email"
          value={formData.email} onChange={handleChange}
          placeholder=" "
          className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-b-2 focus:border-primary transition-colors placeholder-transparent"
          disabled={status === 'sending'}
        />
        <label htmlFor="email" className="absolute left-0 -top-3.5 font-label-sm text-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-label-sm peer-focus:text-primary">
          E-posta Adresi <span className="text-error">*</span>
        </label>
      </div>

      {/* Mesaj */}
      <div className="relative">
        <textarea
          id="message" name="message" rows="4"
          value={formData.message} onChange={handleChange}
          placeholder=" "
          className="peer w-full bg-transparent border-0 border-b border-outline-variant py-3 font-body-lg text-body-lg text-on-surface focus:ring-0 focus:border-b-2 focus:border-primary transition-colors placeholder-transparent resize-none"
          disabled={status === 'sending'}
        />
        <label htmlFor="message" className="absolute left-0 -top-3.5 font-label-sm text-label-sm text-on-surface-variant transition-all peer-placeholder-shown:text-body-lg peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-label-sm peer-focus:text-primary">
          Kısa Mesaj <span className="text-error">*</span>
        </label>
      </div>

      {/* CAPTCHA */}
      <div className="border-t border-outline-variant/20 pt-6">
        <CaptchaWidget ref={captchaRef} onValidChange={setCaptchaValid} />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={!canSubmit}
          className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary font-label-lg text-label-lg overflow-hidden rounded-DEFAULT transition-all duration-300 hover:bg-primary-container hover:text-on-primary-container w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <span className="relative z-10 flex items-center gap-2">
            {status === 'sending' ? (
              <>
                <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                GÖNDERİLİYOR...
              </>
            ) : (
              <>
                MESAJI GÖNDER
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              </>
            )}
          </span>
        </button>
      </div>
    </form>
  );
}
