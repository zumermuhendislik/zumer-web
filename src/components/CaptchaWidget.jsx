import React, { useEffect, useRef, useState, useCallback, forwardRef, useImperativeHandle } from 'react';

const CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // No 0/O/1/I to avoid confusion

function generateCode(length = 6) {
  let code = '';
  for (let i = 0; i < length; i++) {
    code += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return code;
}

function drawCaptcha(canvas, code) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;

  // Background
  ctx.clearRect(0, 0, W, H);
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#f0f4fa');
  bg.addColorStop(1, '#e4eaf5');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Noise dots
  for (let i = 0; i < 180; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * W,
      Math.random() * H,
      Math.random() * 2,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `rgba(${Math.floor(Math.random() * 120)},${Math.floor(Math.random() * 120)},${Math.floor(Math.random() * 200)},${0.25 + Math.random() * 0.3})`;
    ctx.fill();
  }

  // Interference lines
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * W, Math.random() * H);
    ctx.bezierCurveTo(
      Math.random() * W, Math.random() * H,
      Math.random() * W, Math.random() * H,
      Math.random() * W, Math.random() * H
    );
    ctx.strokeStyle = `rgba(${80 + Math.floor(Math.random() * 80)},${80 + Math.floor(Math.random() * 80)},${140 + Math.floor(Math.random() * 80)},0.35)`;
    ctx.lineWidth = 1 + Math.random() * 1.5;
    ctx.stroke();
  }

  // Draw each character with individual transforms
  const charW = W / code.length;
  for (let i = 0; i < code.length; i++) {
    ctx.save();

    const x = charW * i + charW / 2;
    const y = H / 2;

    ctx.translate(x, y);
    ctx.rotate((Math.random() - 0.5) * 0.55); // ±~16 degrees
    ctx.scale(1 + (Math.random() - 0.5) * 0.25, 1 + (Math.random() - 0.5) * 0.2);

    const fontSize = 26 + Math.floor(Math.random() * 8);
    ctx.font = `bold ${fontSize}px 'Courier New', monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Shadow for depth
    ctx.shadowColor = 'rgba(0,0,40,0.3)';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    // Random dark-ish colors
    const hue = Math.floor(Math.random() * 360);
    ctx.fillStyle = `hsl(${hue}, 70%, 28%)`;
    ctx.strokeStyle = `hsl(${hue}, 80%, 18%)`;
    ctx.lineWidth = 0.5;

    ctx.fillText(code[i], 0, (Math.random() - 0.5) * 12);
    ctx.strokeText(code[i], 0, (Math.random() - 0.5) * 12);

    ctx.restore();
  }

  // Top noise overlay
  for (let i = 0; i < 60; i++) {
    ctx.beginPath();
    ctx.rect(Math.random() * W, Math.random() * H, Math.random() * 3, Math.random() * 3);
    ctx.fillStyle = `rgba(200,210,255,${Math.random() * 0.4})`;
    ctx.fill();
  }
}

// forwardRef so parent can call .reset() and .validate(userInput)
const CaptchaWidget = forwardRef(function CaptchaWidget({ onValidChange }, ref) {
  const canvasRef = useRef(null);
  const [code, setCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = userInput.toUpperCase() === code;

  const refresh = useCallback(() => {
    const newCode = generateCode();
    setCode(newCode);
    setUserInput('');
    setTouched(false);
    if (onValidChange) onValidChange(false);
  }, [onValidChange]);

  useEffect(() => {
    refresh();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (canvasRef.current && code) {
      drawCaptcha(canvasRef.current, code);
    }
  }, [code]);

  useEffect(() => {
    if (onValidChange) onValidChange(isValid);
  }, [isValid, onValidChange]);

  useImperativeHandle(ref, () => ({
    reset: refresh,
    validate: () => isValid,
  }));

  const handleInput = (e) => {
    setTouched(true);
    setUserInput(e.target.value);
  };

  const showError = touched && userInput.length > 0 && !isValid;
  const showSuccess = isValid;

  return (
    <div className="flex flex-col gap-2.5">
      <label className="font-label-md text-label-md text-primary">
        Güvenlik Doğrulaması <span className="text-error">*</span>
      </label>

      {/* Grid container for Canvas and Input */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
        {/* Left: Canvas + Refresh */}
        <div className="flex items-center gap-3">
          <div className="relative rounded-lg overflow-hidden border border-outline-variant/40 shadow-sm flex-shrink-0">
            <canvas
              ref={canvasRef}
              width={200}
              height={56}
              className="block select-none"
              aria-hidden="true"
            />
          </div>
          <button
            type="button"
            onClick={refresh}
            title="Yeni kod üret"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/40 text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-all duration-200 flex-shrink-0"
            aria-label="CAPTCHA kodunu yenile"
          >
            <span className="material-symbols-outlined text-xl">refresh</span>
          </button>
        </div>

        {/* Right: Input */}
        <div className="relative">
          <input
            type="text"
            maxLength={6}
            value={userInput}
            onChange={handleInput}
            placeholder="Yukarıdaki kodu girin"
            autoComplete="off"
            spellCheck={false}
            className={`w-full bg-surface-container-lowest border rounded-DEFAULT px-4 py-3 font-body-md text-body-md tracking-[0.25em] uppercase focus:outline-none focus:ring-1 transition-colors ${
              showError
                ? 'border-error focus:border-error focus:ring-error/30 text-error'
                : showSuccess
                ? 'border-primary focus:border-primary focus:ring-primary/20 text-primary'
                : 'border-outline-variant/40 focus:border-primary focus:ring-primary/20 text-on-surface'
            }`}
          />
          {showSuccess && (
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              check_circle
            </span>
          )}
          {showError && (
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-error text-xl">
              cancel
            </span>
          )}
        </div>
      </div>

      {showError && (
        <p className="font-body-sm text-body-sm text-error flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">error</span>
          Kod hatalı. Lütfen tekrar deneyin veya kodu yenileyin.
        </p>
      )}
    </div>
  );
});

export default CaptchaWidget;
