"use client";

import { useEffect, useRef, useState } from "react";

const START_CONVERSION = 8.0;
const END_CONVERSION = 8.6;
const ANIMATION_DURATION_MS = 2100;
const PAUSE_DURATION_MS = 2500;

const CHART_LINE_PATH =
  "M20 122 C58 118 89 109 118 98 C148 86 177 76 205 61 C229 49 251 38 280 24";
const CHART_AREA_PATH =
  "M20 122 C58 118 89 109 118 98 C148 86 177 76 205 61 C229 49 251 38 280 24 L280 134 L20 134 Z";

const INITIAL_MARKER = { x: 20, y: 122 };

function easeOutCubic(value) {
  return 1 - Math.pow(1 - value, 3);
}

export function HeroConversionDemo() {
  const lineRef = useRef(null);
  const lineLengthRef = useRef(1);
  const markerStartRef = useRef(INITIAL_MARKER);
  const frameRef = useRef(0);
  const restartTimeoutRef = useRef(0);
  const accentTimeoutRef = useRef(0);

  const [lineLength, setLineLength] = useState(1);
  const [isAccented, setIsAccented] = useState(false);
  const [frame, setFrame] = useState({
    conversion: START_CONVERSION,
    progress: 0,
    visits: 18200,
    leads: 124,
    marker: INITIAL_MARKER,
  });

  useEffect(() => {
    const pathElement = lineRef.current;

    if (pathElement) {
      const totalLength = pathElement.getTotalLength();
      lineLengthRef.current = totalLength;
      setLineLength(totalLength);

      const startPoint = pathElement.getPointAtLength(0);
      markerStartRef.current = { x: startPoint.x, y: startPoint.y };

      setFrame((prev) => ({
        ...prev,
        marker: { x: startPoint.x, y: startPoint.y },
      }));
    }

    let animationStart = 0;

    const animate = (timestamp) => {
      if (!animationStart) {
        animationStart = timestamp;
      }

      const elapsed = timestamp - animationStart;
      const linearProgress = Math.min(elapsed / ANIMATION_DURATION_MS, 1);
      const easedProgress = easeOutCubic(linearProgress);

      const conversion = START_CONVERSION + (END_CONVERSION - START_CONVERSION) * easedProgress;
      const visits = Math.round(18200 + 420 * easedProgress);
      const leads = Math.round(124 + 8 * easedProgress);

      let marker = markerStartRef.current;

      if (pathElement && lineLengthRef.current > 0) {
        const point = pathElement.getPointAtLength(lineLengthRef.current * easedProgress);
        marker = { x: point.x, y: point.y };
      }

      setFrame({
        conversion,
        progress: easedProgress,
        visits,
        leads,
        marker,
      });

      if (linearProgress < 1) {
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      setIsAccented(true);

      accentTimeoutRef.current = window.setTimeout(() => {
        setIsAccented(false);
      }, 420);

      restartTimeoutRef.current = window.setTimeout(() => {
        animationStart = 0;

        setFrame({
          conversion: START_CONVERSION,
          progress: 0,
          visits: 18200,
          leads: 124,
          marker: markerStartRef.current,
        });

        frameRef.current = requestAnimationFrame(animate);
      }, PAUSE_DURATION_MS);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.clearTimeout(restartTimeoutRef.current);
      window.clearTimeout(accentTimeoutRef.current);
    };
  }, []);

  const dashOffset = lineLength * (1 - frame.progress);
  const areaOpacity = Math.max(0, Math.min(0.46, frame.progress * 0.52));

  return (
    <div className="relative w-full overflow-hidden rounded-[30px] border border-white/70 bg-[#edf3ff] shadow-[0_30px_80px_rgba(2,6,23,0.16)] aspect-[16/10] min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">
      <div className="absolute inset-[1px] overflow-hidden rounded-[28px] bg-gradient-to-b from-white/70 to-slate-50/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(191,219,254,0.55)_0%,rgba(191,219,254,0)_48%),radial-gradient(circle_at_12%_88%,rgba(186,230,253,0.4)_0%,rgba(186,230,253,0)_55%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:34px_34px]" />

        <div className="relative z-10 flex h-full flex-col gap-3 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">Dashboard preview</p>
            <span className="rounded-full bg-white/75 px-3 py-1 text-[11px] font-medium text-slate-700 backdrop-blur">LIVE PREVIEW</span>
          </div>

          <div className="grid flex-1 auto-rows-[minmax(0,1fr)] grid-cols-12 gap-3">
            <section
              className={`col-span-12 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-[0_16px_30px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-all duration-500 lg:col-span-8 lg:row-span-2 ${
                isAccented ? "ring-1 ring-emerald-300/80 shadow-[0_0_0_1px_rgba(134,239,172,0.55),0_18px_36px_rgba(21,128,61,0.18)]" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[14px] font-semibold text-slate-700">Конверсия</p>
                  <p className="mt-1 text-[34px] font-bold tracking-[-0.02em] text-slate-900 sm:text-[38px]">{frame.conversion.toFixed(2)}%</p>
                  <p className="mt-1 text-[12px] text-slate-500">за последние 7 дней</p>
                </div>
                <span className="rounded-full border border-emerald-200/90 bg-emerald-50/95 px-2.5 py-1 text-[12px] font-semibold text-emerald-700">+7.5%</span>
              </div>

              <div className="mt-3 h-[136px] sm:h-[150px]">
                <svg viewBox="0 0 300 140" className="h-full w-full">
                  <defs>
                    <linearGradient id="conversion-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.42" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="conversion-stroke" x1="20" y1="120" x2="280" y2="20" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#16a34a" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  <g opacity="0.25" stroke="rgba(148,163,184,0.5)" strokeWidth="1">
                    <line x1="20" y1="120" x2="280" y2="120" />
                    <line x1="20" y1="94" x2="280" y2="94" />
                    <line x1="20" y1="68" x2="280" y2="68" />
                    <line x1="20" y1="42" x2="280" y2="42" />
                  </g>

                  <path d={CHART_AREA_PATH} fill="url(#conversion-fill)" opacity={areaOpacity} />

                  <path
                    ref={lineRef}
                    d={CHART_LINE_PATH}
                    fill="none"
                    stroke="url(#conversion-stroke)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      strokeDasharray: lineLength,
                      strokeDashoffset: dashOffset,
                      filter: "drop-shadow(0 0 5px rgba(34,197,94,0.28))",
                    }}
                  />

                  <circle cx={frame.marker.x} cy={frame.marker.y} r="4.8" fill="#22c55e" />
                  <circle
                    cx={frame.marker.x}
                    cy={frame.marker.y}
                    r="9"
                    fill="none"
                    stroke="rgba(34,197,94,0.35)"
                    strokeWidth="2"
                    className="animate-[ping_2.4s_ease-out_infinite]"
                  />
                </svg>
              </div>
            </section>

            <section className="col-span-6 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_10px_22px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:col-span-4">
              <p className="text-[12px] font-medium text-slate-500">Визиты</p>
              <p className="mt-2 text-[24px] font-bold tracking-[-0.02em] text-slate-900">{(frame.visits / 1000).toFixed(1)}K</p>
              <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 animate-[pulse_5.8s_ease-in-out_infinite]">
                <span aria-hidden="true">↗</span>
                +3.2%
              </p>
            </section>

            <section className="col-span-6 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_10px_22px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:col-span-4">
              <p className="text-[12px] font-medium text-slate-500">Заявки</p>
              <p className="mt-2 text-[24px] font-bold tracking-[-0.02em] text-slate-900">{frame.leads}</p>
              <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 animate-[pulse_6.1s_ease-in-out_infinite]">
                <span aria-hidden="true">↗</span>
                +12%
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}