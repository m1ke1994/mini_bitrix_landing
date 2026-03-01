globalThis.__timing__.logStart('Load chunks/build/index-6CPEXmwl');import { mergeProps, unref, createVNode, resolveDynamicComponent, ref, reactive, computed, h, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderVNode, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _imports_0 = publicAssetsURL("/brand/logo.svg");
const _sfc_main$4 = {
  __name: "UpHeader",
  __ssrInlineRender: true,
  props: {
    brand: {
      type: Object,
      required: true
    },
    nav: {
      type: Array,
      required: true
    },
    headerCta: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative z-10 mx-auto flex w-full max-w-[1280px] items-center justify-between gap-2 rounded-[18px] border border-[#dee5f2] bg-white/95 px-3 py-2.5 shadow-[0_12px_36px_rgba(34,51,90,0.08)] backdrop-blur sm:px-4" }, _attrs))}><a href="#" class="flex min-w-fit items-center gap-2.5 pr-2"><img${ssrRenderAttr("src", _imports_0)} alt="TrackNode" class="h-8 w-8"><span class="text-[22px] font-semibold tracking-[-0.02em] text-[#1f2738]">${ssrInterpolate(__props.brand.name)}</span></a><nav class="hidden items-center gap-8 lg:flex"><!--[-->`);
      ssrRenderList(__props.nav, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="inline-flex items-center gap-1.5 text-[16px] font-medium text-[#2a3244] transition-colors hover:text-[#1d5fff]">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2 sm:gap-2.5"><a${ssrRenderAttr("href", __props.headerCta.href)} class="inline-flex min-h-10 items-center justify-center rounded-[11px] bg-gradient-to-r from-[#49a2ff] via-[#347cff] to-[#244cf3] px-4 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(47,106,255,0.35)] transition hover:brightness-105 sm:px-6 sm:text-[16px]">${ssrInterpolate(__props.headerCta.label)}</a><button type="button" aria-label="Profile" class="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#d7dfee] bg-white text-[#2a3246] shadow-[0_3px_10px_rgba(25,33,56,0.07)]"><svg viewBox="0 0 20 20" class="h-[17px] w-[17px]" fill="none" aria-hidden="true"><path d="M10 10.6C11.9882 10.6 13.6 8.98823 13.6 7C13.6 5.01177 11.9882 3.4 10 3.4C8.01177 3.4 6.4 5.01177 6.4 7C6.4 8.98823 8.01177 10.6 10 10.6Z" stroke="currentColor" stroke-width="1.4"></path><path d="M3.9 16.6C4.7 14.45 6.98 13 10 13C13.02 13 15.3 14.45 16.1 16.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg></button><button type="button" aria-label="Menu" class="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#d7dfee] bg-white text-[#2a3246] lg:hidden"><svg viewBox="0 0 20 20" class="h-[16px] w-[16px]" fill="none" aria-hidden="true"><path d="M4 6H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><path d="M4 10H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><path d="M4 14H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const START_CONVERSION = 8;
const CHART_LINE_PATH = "M20 122 C58 118 89 109 118 98 C148 86 177 76 205 61 C229 49 251 38 280 24";
const CHART_AREA_PATH = "M20 122 C58 118 89 109 118 98 C148 86 177 76 205 61 C229 49 251 38 280 24 L280 134 L20 134 Z";
const _sfc_main$3 = {
  __name: "HeroConversionDemo",
  __ssrInlineRender: true,
  setup(__props) {
    const INITIAL_MARKER = { x: 20, y: 122 };
    ref(null);
    const lineLength = ref(1);
    ref({ ...INITIAL_MARKER });
    const isAccented = ref(false);
    const frame = reactive({
      conversion: START_CONVERSION,
      progress: 0,
      visits: 18200,
      leads: 124,
      marker: { ...INITIAL_MARKER }
    });
    const areaOpacity = computed(() => Math.max(0, Math.min(0.46, frame.progress * 0.52)));
    const lineStyle = computed(() => ({
      strokeDasharray: lineLength.value,
      strokeDashoffset: lineLength.value * (1 - frame.progress),
      filter: "drop-shadow(0 0 5px rgba(34,197,94,0.28))"
    }));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative aspect-[16/10] min-h-[320px] w-full overflow-hidden rounded-[30px] border border-white/70 bg-[#edf3ff] shadow-[0_30px_80px_rgba(2,6,23,0.16)] sm:min-h-[360px] lg:min-h-[420px]" }, _attrs))}><div class="absolute inset-[1px] overflow-hidden rounded-[28px] bg-gradient-to-b from-white/70 to-slate-50/60"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(191,219,254,0.55)_0%,rgba(191,219,254,0)_48%),radial-gradient(circle_at_12%_88%,rgba(186,230,253,0.4)_0%,rgba(186,230,253,0)_55%)]"></div><div class="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:34px_34px]"></div><div class="relative z-10 flex h-full flex-col gap-3 p-4 sm:p-5"><div class="flex items-center justify-between"><p class="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">Dashboard preview</p><span class="rounded-full bg-white/75 px-3 py-1 text-[11px] font-medium text-slate-700 backdrop-blur">LIVE PREVIEW</span></div><div class="grid flex-1 auto-rows-[minmax(0,1fr)] grid-cols-12 gap-3"><section class="${ssrRenderClass([isAccented.value ? "ring-1 ring-emerald-300/80 shadow-[0_0_0_1px_rgba(134,239,172,0.55),0_18px_36px_rgba(21,128,61,0.18)]" : "", "col-span-12 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-[0_16px_30px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-all duration-500 lg:col-span-8 lg:row-span-2"])}"><div class="flex items-start justify-between gap-3"><div><p class="text-[14px] font-semibold text-slate-700">\u041A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F</p><p class="mt-1 text-[34px] font-bold tracking-[-0.02em] text-slate-900 sm:text-[38px]">${ssrInterpolate(frame.conversion.toFixed(2))}%</p><p class="mt-1 text-[12px] text-slate-500">\u0437\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439</p></div><span class="rounded-full border border-emerald-200/90 bg-emerald-50/95 px-2.5 py-1 text-[12px] font-semibold text-emerald-700">+7.5%</span></div><div class="mt-3 h-[136px] sm:h-[150px]"><svg viewBox="0 0 300 140" class="h-full w-full"><defs><linearGradient id="conversion-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e" stop-opacity="0.42"></stop><stop offset="100%" stop-color="#22c55e" stop-opacity="0"></stop></linearGradient><linearGradient id="conversion-stroke" x1="20" y1="120" x2="280" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#16a34a" stop-opacity="0.7"></stop><stop offset="100%" stop-color="#22c55e" stop-opacity="1"></stop></linearGradient></defs><g opacity="0.25" stroke="rgba(148,163,184,0.5)" stroke-width="1"><line x1="20" y1="120" x2="280" y2="120"></line><line x1="20" y1="94" x2="280" y2="94"></line><line x1="20" y1="68" x2="280" y2="68"></line><line x1="20" y1="42" x2="280" y2="42"></line></g><path${ssrRenderAttr("d", CHART_AREA_PATH)} fill="url(#conversion-fill)"${ssrRenderAttr("opacity", areaOpacity.value)}></path><path${ssrRenderAttr("d", CHART_LINE_PATH)} fill="none" stroke="url(#conversion-stroke)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle(lineStyle.value)}"></path><circle${ssrRenderAttr("cx", frame.marker.x)}${ssrRenderAttr("cy", frame.marker.y)} r="4.8" fill="#22c55e"></circle><circle${ssrRenderAttr("cx", frame.marker.x)}${ssrRenderAttr("cy", frame.marker.y)} r="9" fill="none" stroke="rgba(34,197,94,0.35)" stroke-width="2" class="animate-[ping_2.4s_ease-out_infinite]"></circle></svg></div></section><section class="col-span-6 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_10px_22px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:col-span-4"><p class="text-[12px] font-medium text-slate-500">\u0412\u0438\u0437\u0438\u0442\u044B</p><p class="mt-2 text-[24px] font-bold tracking-[-0.02em] text-slate-900">${ssrInterpolate((frame.visits / 1e3).toFixed(1))}K</p><p class="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 animate-[pulse_5.8s_ease-in-out_infinite]"><span aria-hidden="true">\u2197</span> +3.2% </p></section><section class="col-span-6 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_10px_22px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:col-span-4"><p class="text-[12px] font-medium text-slate-500">\u0417\u0430\u044F\u0432\u043A\u0438</p><p class="mt-2 text-[24px] font-bold tracking-[-0.02em] text-slate-900">${ssrInterpolate(frame.leads)}</p><p class="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 animate-[pulse_6.1s_ease-in-out_infinite]"><span aria-hidden="true">\u2197</span> +12% </p></section></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroConversionDemo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Hero",
  __ssrInlineRender: true,
  props: {
    hero: {
      type: Object,
      required: true
    },
    trust: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeroConversionDemo = _sfc_main$3;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative z-10 mx-auto mt-8 w-full max-w-[1280px] lg:mt-9" }, _attrs))}><div class="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-8"><div class="order-1 px-1 sm:px-2"><h1 class="max-w-[560px] text-[39px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#1f273a] sm:text-[49px] lg:text-[62px]"><!--[-->`);
      ssrRenderList(__props.hero.titleLines, (line) => {
        _push(`<span class="block">${ssrInterpolate(line)}</span>`);
      });
      _push(`<!--]--></h1><p class="mt-6 max-w-[560px] text-[18px] leading-[1.5] text-[#4c566d] sm:text-[19px]">${ssrInterpolate(__props.hero.description)}</p><div class="mt-8 flex flex-wrap gap-3"><a${ssrRenderAttr("href", __props.hero.primaryCta.href)} class="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-gradient-to-r from-[#4aa3ff] via-[#3882ff] to-[#2552f4] px-6 text-[18px] font-semibold text-white shadow-[0_12px_22px_rgba(47,107,255,0.35)] transition hover:brightness-105">${ssrInterpolate(__props.hero.primaryCta.label)}</a><a${ssrRenderAttr("href", __props.hero.secondaryCta.href)} class="inline-flex min-h-12 items-center justify-center gap-2 rounded-[12px] border border-[#d5ddeb] bg-white/95 px-6 text-[18px] font-semibold text-[#374056] shadow-[0_8px_18px_rgba(34,50,86,0.08)] transition hover:border-[#c5d0e4]">${ssrInterpolate(__props.hero.secondaryCta.label)} <svg viewBox="0 0 16 16" class="h-4 w-4" fill="none" aria-hidden="true"><path d="M5 3L10 8L5 13" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path></svg></a></div></div><div class="order-2 lg:pl-1"><div class="relative mx-auto w-full max-w-[900px]"><div class="pointer-events-none absolute -left-14 -right-8 -top-7 bottom-2 rounded-[46px] bg-[radial-gradient(circle_at_78%_36%,rgba(158,207,255,0.55)_0%,rgba(158,207,255,0)_62%),radial-gradient(circle_at_14%_72%,rgba(189,214,255,0.46)_0%,rgba(189,214,255,0)_58%)] blur-[36px]"></div>`);
      _push(ssrRenderComponent(_component_HeroConversionDemo, null, null, _parent));
      _push(`<div class="mx-auto mt-2 h-[9px] w-[90%] rounded-b-[18px] bg-gradient-to-b from-[#dbe4f3] to-[#b8c7df] shadow-[0_10px_20px_rgba(41,61,98,0.25)]"></div></div></div></div><div class="mt-12 rounded-[20px] border border-[#e0e5ef] bg-white/72 px-5 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm sm:px-8"><p class="text-center text-[20px] font-medium text-[#364055]">${ssrInterpolate(__props.trust.title)}</p><ul class="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[17px] text-[#444d61]"><!--[-->`);
      ssrRenderList(__props.trust.items, (item, index) => {
        _push(`<li class="inline-flex items-center gap-2.5"><span class="inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#d4dbea]"><span class="h-1.5 w-1.5 rounded-full bg-[#9ba7bf]"></span></span><span>${ssrInterpolate(item)}</span></li>`);
      });
      _push(`<!--]--></ul></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const homepageData = {
  brand: { name: "TrackNode" },
  nav: [
    { label: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438", href: "#features" },
    { label: "\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442", href: "#how" },
    { label: "\u0422\u0430\u0440\u0438\u0444\u044B", href: "#pricing" },
    { label: "\u041E\u0442\u0437\u044B\u0432\u044B", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B", href: "#contacts" }
  ],
  headerCta: { label: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435", href: "#contacts" },
  hero: {
    titleLines: [
      "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0441\u0430\u0439\u0442\u0430,",
      "\u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u0437\u0430\u044F\u0432\u043A\u0430\u0445",
      "\u0432 Telegram \u0438 SEO-\u0430\u0443\u0434\u0438\u0442 \u2014",
      "\u0432 \u043E\u0434\u043D\u043E\u043C \u0441\u0435\u0440\u0432\u0438\u0441\u0435"
    ],
    description: "TrackNode \u0444\u0438\u043A\u0441\u0438\u0440\u0443\u0435\u0442 \u043D\u043E\u0432\u044B\u0435 \u0437\u0430\u044F\u0432\u043A\u0438 \u0438 \u043B\u0438\u0434\u044B \u0441 \u0441\u0430\u0439\u0442\u0430 \u0438 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0432 Telegram. \u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0443 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439 \u0438 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u0442\u0440\u0430\u0444\u0438\u043A\u0430 \u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C SEO \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438.",
    primaryCta: { label: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435", href: "#contacts" },
    secondaryCta: { label: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0441\u0430\u0439\u0442", href: "#how" }
  },
  trust: {
    title: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442 \u0434\u043B\u044F \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0437\u0430\u044F\u0432\u043E\u043A \u0438 \u0440\u043E\u0441\u0442\u0430 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0438",
    items: ["Company", "Brand", "Studio", "Agency", "Startup", "Business", "Business"]
  }
};
const siteData = {
  capabilities: {
    title: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 TrackNode",
    subtitle: "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0439\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0438, \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F, \u043F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435, SEO \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430.",
    items: [
      {
        id: "tg-leads",
        title: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u0437\u0430\u044F\u0432\u043A\u0430\u0445 \u0432 Telegram",
        description: "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E \u043D\u043E\u0432\u044B\u0445 \u0437\u0430\u044F\u0432\u043A\u0430\u0445 \u043F\u0440\u044F\u043C\u043E \u0432 Telegram, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u0441\u0442\u0440\u043E \u0440\u0435\u0430\u0433\u0438\u0440\u043E\u0432\u0430\u0442\u044C.",
        icon: "telegram"
      },
      {
        id: "traffic-analytics",
        title: "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0439 \u0438 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u0442\u0440\u0430\u0444\u0438\u043A\u0430",
        description: "\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F, \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u043A\u0430\u043D\u0430\u043B\u044B, \u0437\u0430\u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0442\u0440\u0430\u0444\u0438\u043A\u0430.",
        icon: "analytics"
      },
      {
        id: "user-behavior",
        title: "\u041F\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        description: "\u0417\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0439\u0442\u0435 \u043A\u043B\u0438\u043A\u0438, \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044B, \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0438 \u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u043A\u0430\u0440\u0442\u044B \u043A\u043B\u0438\u043A\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0435\u0441\u044C \u043F\u0443\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u0430.",
        icon: "cursor"
      },
      {
        id: "funnels",
        title: "\u0412\u043E\u0440\u043E\u043D\u043A\u0438 \u0438 \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u044F",
        description: "\u0421\u043E\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0432\u043E\u0440\u043E\u043D\u043A\u0438 \u043F\u0440\u043E\u0434\u0430\u0436, \u0440\u0430\u0437\u0431\u0438\u0432\u0430\u0439\u0442\u0435 \u0438\u0445 \u043D\u0430 \u044D\u0442\u0430\u043F\u044B, \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435, \u0433\u0434\u0435 \u0442\u0435\u0440\u044F\u044E\u0442\u0441\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0438 \u0437\u0430\u044F\u0432\u043A\u0438.",
        icon: "funnel"
      },
      {
        id: "seo-audit",
        title: "SEO-\u0430\u0443\u0434\u0438\u0442 \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0448\u0438\u0431\u043A\u0438",
        description: "\u041D\u0430\u0445\u043E\u0434\u0438\u0442\u0435 \u043E\u0448\u0438\u0431\u043A\u0438, \u0432\u043B\u0438\u044F\u044E\u0449\u0438\u0435 \u043D\u0430 \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430, \u0443\u043B\u0443\u0447\u0448\u0430\u0439\u0442\u0435 SEO-\u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438 \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0441\u043E\u0432\u0435\u0442\u044B \u043F\u043E \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044E.",
        icon: "seo"
      },
      {
        id: "reports",
        title: "\u041E\u0442\u0447\u0451\u0442\u044B \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442",
        description: "\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043E\u0442\u0447\u0451\u0442 \u0432 PDF \u043F\u043E \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u043C \u043C\u0435\u0442\u0440\u0438\u043A\u0430\u043C \u0438 \u044D\u043A\u0441\u043F\u043E\u0440\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u043C \u0444\u043E\u0440\u043C\u0430\u0442\u0435.",
        icon: "report"
      }
    ]
  }
};
const _sfc_main$1 = {
  __name: "CapabilitiesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const capabilities = siteData.capabilities;
    const iconMap = {
      telegram: () => h(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        },
        [
          h("path", {
            d: "M21 4.65L17.93 19.11C17.73 20.06 17.2 20.28 16.38 19.82L11.92 16.53L9.76 18.61C9.53 18.85 9.35 19.03 8.9 19.03L9.22 14.5L17.47 7.04C17.83 6.72 17.39 6.54 16.92 6.86L6.72 13.3L2.32 11.93C1.36 11.62 1.34 10.96 2.52 10.5L19.55 3.93C20.34 3.63 21.03 4.12 21 4.65Z",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linejoin": "round"
          })
        ]
      ),
      analytics: () => h(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        },
        [
          h("path", {
            d: "M3 17.5H21",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round"
          }),
          h("path", {
            d: "M5 14.8L9 11.2L12.2 13.8L16 8.9L19 10.7",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }),
          h("path", {
            d: "M5.2 20.5V16.6M9 20.5V14.2M12.9 20.5V15.9M16.8 20.5V12.7",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round"
          })
        ]
      ),
      cursor: () => h(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        },
        [
          h("path", {
            d: "M4.5 3.8L17.4 10.2L11.6 12.1L9.7 17.9L4.5 3.8Z",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linejoin": "round"
          }),
          h("path", {
            d: "M15.9 4.4L16.9 2.8M19.6 8.1L21.2 7.1M16.2 8L18 8.2",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round"
          })
        ]
      ),
      funnel: () => h(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        },
        [
          h("path", {
            d: "M4 5.4H20L15.4 10.6H8.6L4 5.4Z",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linejoin": "round"
          }),
          h("path", {
            d: "M8.6 10.6H15.4L13.4 14.7H10.6L8.6 10.6Z",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linejoin": "round"
          }),
          h("path", {
            d: "M10.6 14.7H13.4L12.6 18.6H11.4L10.6 14.7Z",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linejoin": "round"
          })
        ]
      ),
      seo: () => h(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        },
        [
          h("path", {
            d: "M10.8 17.6C14.3346 17.6 17.2 14.7346 17.2 11.2C17.2 7.66538 14.3346 4.8 10.8 4.8C7.26538 4.8 4.4 7.66538 4.4 11.2C4.4 14.7346 7.26538 17.6 10.8 17.6Z",
            stroke: "currentColor",
            "stroke-width": "1.6"
          }),
          h("path", {
            d: "M15.5 15.8L20 20.2",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round"
          }),
          h("path", {
            d: "M8.1 11.6L10.1 13.6L13.8 9.7",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ]
      ),
      report: () => h(
        "svg",
        {
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        },
        [
          h("path", {
            d: "M7.2 3.8H14.5L18.8 8.1V18.9C18.8 19.8 18.1 20.5 17.2 20.5H7.2C6.3 20.5 5.6 19.8 5.6 18.9V5.4C5.6 4.5 6.3 3.8 7.2 3.8Z",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linejoin": "round"
          }),
          h("path", {
            d: "M14.5 3.8V8.1H18.8",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linejoin": "round"
          }),
          h("path", {
            d: "M9 11.2H14.6M9 14.1H14.6",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round"
          }),
          h("path", {
            d: "M16.9 16.5V12.8M16.9 16.5L15.3 14.9M16.9 16.5L18.5 14.9",
            stroke: "currentColor",
            "stroke-width": "1.6",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          })
        ]
      )
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "capabilities",
        class: "relative overflow-hidden py-16 sm:py-20 lg:py-24"
      }, _attrs))}><div id="features" class="pointer-events-none absolute top-0 h-0 w-0" aria-hidden="true"></div><div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f8fafe] via-[#edf3fd] to-[#e9eef9]"></div><div class="pointer-events-none absolute -left-28 top-6 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(154,198,255,0.38)_0%,rgba(154,198,255,0)_68%)] blur-3xl"></div><div class="pointer-events-none absolute right-[-96px] top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(185,213,255,0.44)_0%,rgba(185,213,255,0)_70%)] blur-3xl"></div><div class="pointer-events-none absolute bottom-[-130px] left-1/2 h-80 w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(206,224,255,0.34)_0%,rgba(206,224,255,0)_72%)] blur-3xl"></div><div class="relative mx-auto w-full max-w-[1260px] px-4 sm:px-6 lg:px-8"><header class="mx-auto max-w-[800px] text-center"><h2 class="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px] lg:text-[44px]">${ssrInterpolate(unref(capabilities).title)}</h2><p class="mx-auto mt-4 max-w-[760px] text-[20px] leading-[1.45] text-slate-600 sm:text-[22px] lg:text-[35px]">${ssrInterpolate(unref(capabilities).subtitle)}</p></header><div class="mt-9 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6"><!--[-->`);
      ssrRenderList(unref(capabilities).items, (item) => {
        _push(`<article class="flex h-full flex-col rounded-[20px] border border-white/55 bg-white/55 p-5 shadow-[0_16px_38px_rgba(35,55,92,0.12)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5"><div class="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#d2def2] bg-gradient-to-b from-white/90 to-[#ecf3ff] text-[#4c86d8] shadow-[0_6px_16px_rgba(63,118,201,0.14)]">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(iconMap[item.icon]), {
          class: "h-6 w-6",
          "aria-hidden": "true"
        }, null), _parent);
        _push(`</div><h3 class="mt-5 text-[28px] font-semibold leading-[1.28] tracking-[-0.01em] text-slate-900">${ssrInterpolate(item.title)}</h3><p class="mt-3 text-[14px] leading-[1.55] text-slate-600 sm:text-[15px]">${ssrInterpolate(item.description)}</p></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CapabilitiesSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const anchorIds = ["how", "pricing", "reviews", "faq", "contacts"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UpHeader = _sfc_main$4;
      const _component_Hero = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-[#eef1f8] px-3 py-5 sm:px-6 sm:py-8 lg:px-8" }, _attrs))}><div class="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[30px] border border-white/70 bg-[#f7f9fe] px-4 pb-10 pt-4 shadow-[0_26px_60px_rgba(36,52,87,0.12)] sm:px-6 lg:px-9 lg:pb-14 lg:pt-6"><div class="pointer-events-none absolute -left-[14%] bottom-[-14%] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(203,218,255,0.5)_0%,rgba(203,218,255,0)_70%)] blur-2xl"></div><div class="pointer-events-none absolute -right-[12%] top-[10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(146,195,255,0.56)_0%,rgba(146,195,255,0)_72%)] blur-2xl"></div>`);
      _push(ssrRenderComponent(_component_UpHeader, {
        brand: unref(homepageData).brand,
        nav: unref(homepageData).nav,
        "header-cta": unref(homepageData).headerCta
      }, null, _parent));
      _push(ssrRenderComponent(_component_Hero, {
        hero: unref(homepageData).hero,
        trust: unref(homepageData).trust
      }, null, _parent));
      _push(`</div><div class="mx-auto mt-5 w-full max-w-[1400px] overflow-hidden rounded-[30px] border border-white/70 bg-[#f4f7fd] shadow-[0_22px_52px_rgba(36,52,87,0.1)]">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="mx-auto mt-5 w-full max-w-[1400px] space-y-3 pb-10"><!--[-->`);
      ssrRenderList(anchorIds, (id) => {
        _push(`<div${ssrRenderAttr("id", id)} class="h-24" aria-hidden="true"></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/index-6CPEXmwl');
//# sourceMappingURL=index-6CPEXmwl.mjs.map
