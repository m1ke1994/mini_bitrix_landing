import Image from "next/image";

export function HeroVideo({ videoSrc, previewSrc, previewLabel = "LIVE PREVIEW" }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[28px] border border-white/60 bg-gradient-to-b from-white/70 to-slate-50/60 shadow-[0_30px_80px_rgba(2,6,23,0.16)] aspect-[16/10] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_45%),linear-gradient(135deg,rgba(234,242,255,0.7)_0%,rgba(226,238,255,0.5)_100%)]" />

      {videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-contain object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={videoSrc}
        />
      ) : previewSrc ? (
        <Image
          src={previewSrc}
          alt="TrackNode preview"
          fill
          unoptimized
          className="absolute inset-0 h-full w-full object-contain object-center"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f6f9ff] to-[#e5efff] text-sm font-medium tracking-[0.08em] text-slate-500">
          Preview
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0)_34%,rgba(10,23,44,0.08)_100%)]" />
      <span className="absolute right-3 top-3 rounded-full bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-700 backdrop-blur">
        {previewLabel}
      </span>
    </div>
  );
}