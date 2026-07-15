import React, { useState, useEffect } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAbwa6KJkio3oHp2yedNu6T41IZ8iCEPfTCMzjdeJPzldXVZE-9l2v7prO5FmBR7LHWvADcXhixGCMXifjv3oM00u7-kc0WXnGG3Ftliw9GsD7M-OE0pbwqGOkMoxfIWS1D6ehlIeCCxXfkLqUhIVHwMTl0gD2TvhwdTVqltl5Xinn8uSkiC9fL4whnzZDAQMRaY_sguNYlEWX5wwecNf829dAYd277Yx7vfOglCXV8w7876Que30WFqx_FZI6r9o8NiAZlGA1bsR0S',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAy5yn5pg7ZTO5yTTeMLhIGY-qus7kQ8-axya4gVC6tgXZd2Lo7Sx_7aWsoh2bQwxN5n5ji1_s82LRYRgnLcdlI5X1sM2wAkaLbazvOFhagVz4I_RcYKtlbo6I-4XyJJ0x1_q6I_m87IRMjtGwfkyWcwBodu6fhlmLqCcAeRPxo-TuZt-q9-a2dwrWsHWFs4Y96C4TdPow6eUkNrRLffDskoQeFede3O8nwKic7QRwVtkA7n_nI0C5d8s0EDNKj_RzwqNyUY11CufZF',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCcvr6pzkXZ2ilDWBtjlN79GrhUWQKI7K3_W_frkGSKx_ZPUhmPzain3C6O1yCXA7kbmdhiEsa1RMicJBbSh0NaqtA3S50n7h1egBZAue7oxfqDg6AqlMs4Vh4ROjkKoAN3pzUTSwro6W_H3JJePblZrSKK2BSNqRE47XY07G94uL3Yq-E5v4RdGYTDqlcpAJmyn5d0sKEEopvYAQoKRDmC6MuClhqFM82Ql4btEBZ_ToePPcAkc9uwQND_WjY8A7kwEDdyh45oonl2',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 w-full h-full" id="hero-slider">
      {slides.map((url, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url('${url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'bg-on-primary w-8'
                : 'bg-on-primary/45 hover:bg-on-primary/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
