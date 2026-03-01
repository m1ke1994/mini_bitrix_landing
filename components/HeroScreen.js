import Image from "next/image";

function GraphOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px] opacity-75">
      <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(to_right,rgba(226,232,240,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.28)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="absolute bottom-[6%] right-[2%] h-[68%] w-[74%]">
        <svg viewBox="0 0 520 300" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="growth-line" x1="20" y1="240" x2="500" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#16a34a" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#22c55e" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
            </linearGradient>

            <linearGradient id="growth-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.34" />
              <stop offset="65%" stopColor="#22c55e" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>

            <filter id="line-glow" x="-12%" y="-12%" width="124%" height="124%">
              <feGaussianBlur stdDeviation="1.6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M20 246 C92 236 142 222 188 206 C236 189 288 166 332 137 C378 108 418 85 452 63 C472 50 487 43 500 40 L500 295 L20 295 Z"
            fill="url(#growth-fill)"
            opacity="0"
          >
            <animate
              attributeName="opacity"
              values="0;0;0.18;0.42;0.42;0"
              keyTimes="0;0.16;0.32;0.58;0.82;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 10;0 10;0 2;0 0;0 0;0 10"
              keyTimes="0;0.16;0.32;0.58;0.82;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
          </path>

          <path
            d="M20 246 C92 236 142 222 188 206 C236 189 288 166 332 137 C378 108 418 85 452 63 C472 50 487 43 500 40"
            pathLength="1"
            fill="none"
            stroke="url(#growth-line)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1"
            strokeDashoffset="1"
            filter="url(#line-glow)"
            opacity="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="1;1;0;0;1"
              keyTimes="0;0.1;0.62;0.84;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.18;0.2;0.84;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
          </path>

          <circle cx="500" cy="40" r="5" fill="#22c55e" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.54;0.64;0.84;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="4.2;4.2;5;5;4.8"
              keyTimes="0;0.54;0.64;0.84;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle cx="500" cy="40" r="7" fill="none" stroke="rgba(34,197,94,0.45)" strokeWidth="2" opacity="0">
            <animate
              attributeName="opacity"
              values="0;0;0.45;0;0"
              keyTimes="0;0.6;0.72;0.84;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="4;4;7;12;12"
              keyTimes="0;0.6;0.72;0.84;1"
              dur="5.2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
}

export function HeroScreen({ previewSrc, previewAlt, showPreview, badgeText }) {
  const resolvedSrc = typeof previewSrc === "string" && previewSrc.trim().length > 0 ? previewSrc : null;
  const hasPreview = Boolean(showPreview && resolvedSrc);
  const isVideo = hasPreview ? /\.(mp4|webm|ogg|mov)$/i.test(resolvedSrc) : false;

  return (
    <div className="relative w-full overflow-hidden rounded-[30px] border border-white/70 bg-[#edf3ff] shadow-[0_30px_80px_rgba(2,6,23,0.16)] aspect-[16/10] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
      <div className="absolute inset-[1px] overflow-hidden rounded-[28px] bg-gradient-to-b from-white/70 to-slate-50/60">
        {hasPreview ? (
          isVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-contain object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              src={resolvedSrc}
            />
          ) : (
            <Image
              src={resolvedSrc}
              alt={previewAlt}
              fill
              unoptimized
              className="absolute inset-0 h-full w-full object-contain object-center"
            />
          )
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f6f9ff] to-[#e5efff] text-sm font-medium tracking-[0.08em] text-slate-500">
            Preview
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0)_34%,rgba(15,23,42,0.08)_100%)]" />
        <GraphOverlay />

        <span className="absolute right-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 backdrop-blur">
          {badgeText}
        </span>
      </div>
    </div>
  );
}