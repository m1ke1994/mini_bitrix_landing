import { mergeProps, useSSRContext, ref, reactive, computed, unref, createVNode, resolveDynamicComponent, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderComponent, ssrRenderVNode } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "C:/Users/Alex/Desktop/work/mini_bitrix_landing/node_modules/ofetch/dist/node.mjs";
import "C:/Users/Alex/Desktop/work/mini_bitrix_landing/node_modules/hookable/dist/index.mjs";
import "C:/Users/Alex/Desktop/work/mini_bitrix_landing/node_modules/unctx/dist/index.mjs";
import "C:/Users/Alex/Desktop/work/mini_bitrix_landing/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Alex/Desktop/work/mini_bitrix_landing/node_modules/defu/dist/defu.mjs";
import "C:/Users/Alex/Desktop/work/mini_bitrix_landing/node_modules/ufo/dist/index.mjs";
const _imports_0$1 = publicAssetsURL("/brand/logo.svg");
const _sfc_main$8 = {
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
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "relative z-10 mx-auto flex w-full max-w-[1280px] items-center justify-between gap-2 rounded-[18px] border border-[#dee5f2] bg-white/95 px-3 py-2.5 shadow-[0_12px_36px_rgba(34,51,90,0.08)] backdrop-blur sm:px-4" }, _attrs))}><a href="#" class="flex min-w-fit items-center gap-2.5 pr-2"><img${ssrRenderAttr("src", _imports_0$1)} alt="TrackNode" class="h-8 w-8"><span class="text-[22px] font-semibold tracking-[-0.02em] text-[#1f2738]">${ssrInterpolate(__props.brand.name)}</span></a><nav class="hidden items-center gap-8 lg:flex"><!--[-->`);
      ssrRenderList(__props.nav, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="inline-flex items-center gap-1.5 text-[16px] font-medium text-[#2a3244] transition-colors hover:text-[#1d5fff]">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></nav><div class="flex items-center gap-2 sm:gap-2.5"><a${ssrRenderAttr("href", __props.headerCta.href)}${ssrRenderAttr("target", __props.headerCta.target || null)}${ssrRenderAttr("rel", __props.headerCta.rel || null)} class="inline-flex min-h-10 items-center justify-center rounded-[11px] bg-gradient-to-r from-[#49a2ff] via-[#347cff] to-[#244cf3] px-4 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(47,106,255,0.35)] transition hover:brightness-105 sm:px-6 sm:text-[16px]">${ssrInterpolate(__props.headerCta.label)}</a><button type="button" aria-label="Profile" class="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#d7dfee] bg-white text-[#2a3246] shadow-[0_3px_10px_rgba(25,33,56,0.07)]"><svg viewBox="0 0 20 20" class="h-[17px] w-[17px]" fill="none" aria-hidden="true"><path d="M10 10.6C11.9882 10.6 13.6 8.98823 13.6 7C13.6 5.01177 11.9882 3.4 10 3.4C8.01177 3.4 6.4 5.01177 6.4 7C6.4 8.98823 8.01177 10.6 10 10.6Z" stroke="currentColor" stroke-width="1.4"></path><path d="M3.9 16.6C4.7 14.45 6.98 13 10 13C13.02 13 15.3 14.45 16.1 16.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path></svg></button><button type="button" aria-label="Menu" class="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#d7dfee] bg-white text-[#2a3246] lg:hidden"><svg viewBox="0 0 20 20" class="h-[16px] w-[16px]" fill="none" aria-hidden="true"><path d="M4 6H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><path d="M4 10H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path><path d="M4 14H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg></button></div></header>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UpHeader.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const START_CONVERSION = 8;
const CHART_LINE_PATH = "M20 122 C58 118 89 109 118 98 C148 86 177 76 205 61 C229 49 251 38 280 24";
const CHART_AREA_PATH = "M20 122 C58 118 89 109 118 98 C148 86 177 76 205 61 C229 49 251 38 280 24 L280 134 L20 134 Z";
const _sfc_main$7 = {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative aspect-[16/10] min-h-[320px] w-full overflow-hidden rounded-[30px] border border-white/70 bg-[#edf3ff] shadow-[0_30px_80px_rgba(2,6,23,0.16)] sm:min-h-[360px] lg:min-h-[420px]" }, _attrs))}><div class="absolute inset-[1px] overflow-hidden rounded-[28px] bg-gradient-to-b from-white/70 to-slate-50/60"><div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(191,219,254,0.55)_0%,rgba(191,219,254,0)_48%),radial-gradient(circle_at_12%_88%,rgba(186,230,253,0.4)_0%,rgba(186,230,253,0)_55%)]"></div><div class="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:34px_34px]"></div><div class="relative z-10 flex h-full flex-col gap-3 p-4 sm:p-5"><div class="flex items-center justify-between"><p class="text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-500">Dashboard preview</p><span class="rounded-full bg-white/75 px-3 py-1 text-[11px] font-medium text-slate-700 backdrop-blur">LIVE PREVIEW</span></div><div class="grid flex-1 auto-rows-[minmax(0,1fr)] grid-cols-12 gap-3"><section class="${ssrRenderClass([isAccented.value ? "ring-1 ring-emerald-300/80 shadow-[0_0_0_1px_rgba(134,239,172,0.55),0_18px_36px_rgba(21,128,61,0.18)]" : "", "col-span-12 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-[0_16px_30px_rgba(15,23,42,0.09)] backdrop-blur-sm transition-all duration-500 lg:col-span-8 lg:row-span-2"])}"><div class="flex items-start justify-between gap-3"><div><p class="text-[14px] font-semibold text-slate-700">Конверсия</p><p class="mt-1 text-[34px] font-bold tracking-[-0.02em] text-slate-900 sm:text-[38px]">${ssrInterpolate(frame.conversion.toFixed(2))}%</p><p class="mt-1 text-[12px] text-slate-500">за последние 7 дней</p></div><span class="rounded-full border border-emerald-200/90 bg-emerald-50/95 px-2.5 py-1 text-[12px] font-semibold text-emerald-700">+7.5%</span></div><div class="mt-3 h-[136px] sm:h-[150px]"><svg viewBox="0 0 300 140" class="h-full w-full"><defs><linearGradient id="conversion-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#22c55e" stop-opacity="0.42"></stop><stop offset="100%" stop-color="#22c55e" stop-opacity="0"></stop></linearGradient><linearGradient id="conversion-stroke" x1="20" y1="120" x2="280" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#16a34a" stop-opacity="0.7"></stop><stop offset="100%" stop-color="#22c55e" stop-opacity="1"></stop></linearGradient></defs><g opacity="0.25" stroke="rgba(148,163,184,0.5)" stroke-width="1"><line x1="20" y1="120" x2="280" y2="120"></line><line x1="20" y1="94" x2="280" y2="94"></line><line x1="20" y1="68" x2="280" y2="68"></line><line x1="20" y1="42" x2="280" y2="42"></line></g><path${ssrRenderAttr("d", CHART_AREA_PATH)} fill="url(#conversion-fill)"${ssrRenderAttr("opacity", areaOpacity.value)}></path><path${ssrRenderAttr("d", CHART_LINE_PATH)} fill="none" stroke="url(#conversion-stroke)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="${ssrRenderStyle(lineStyle.value)}"></path><circle${ssrRenderAttr("cx", frame.marker.x)}${ssrRenderAttr("cy", frame.marker.y)} r="4.8" fill="#22c55e"></circle><circle${ssrRenderAttr("cx", frame.marker.x)}${ssrRenderAttr("cy", frame.marker.y)} r="9" fill="none" stroke="rgba(34,197,94,0.35)" stroke-width="2" class="animate-[ping_2.4s_ease-out_infinite]"></circle></svg></div></section><section class="col-span-6 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_10px_22px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:col-span-4"><p class="text-[12px] font-medium text-slate-500">Визиты</p><p class="mt-2 text-[24px] font-bold tracking-[-0.02em] text-slate-900">${ssrInterpolate((frame.visits / 1e3).toFixed(1))}K</p><p class="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 animate-[pulse_5.8s_ease-in-out_infinite]"><span aria-hidden="true">↗</span> +3.2% </p></section><section class="col-span-6 rounded-2xl border border-white/80 bg-white/70 p-3 shadow-[0_10px_22px_rgba(15,23,42,0.08)] backdrop-blur-sm lg:col-span-4"><p class="text-[12px] font-medium text-slate-500">Заявки</p><p class="mt-2 text-[24px] font-bold tracking-[-0.02em] text-slate-900">${ssrInterpolate(frame.leads)}</p><p class="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 animate-[pulse_6.1s_ease-in-out_infinite]"><span aria-hidden="true">↗</span> +12% </p></section></div></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroConversionDemo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
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
      const _component_HeroConversionDemo = _sfc_main$7;
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const homepageData = {
  brand: { name: "TrackNode" },
  nav: [
    { label: "Возможности", href: "#features" },
    { label: "Как работает", href: "#how" },
    { label: "Тарифы", href: "#pricing" },
    { label: "Отзывы", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Контакты", href: "#contacts" }
  ],
  headerCta: { label: "Войти", href: "https://tracknode.ru", target: "_blank", rel: "noopener" },
  hero: {
    titleLines: [
      "Аналитика сайта,",
      "уведомления о заявках",
      "в Telegram и SEO-аудит —",
      "в одном сервисе"
    ],
    description: "TrackNode фиксирует новые заявки и лиды с сайта и мгновенно отправляет уведомления в Telegram. Дополнительно показывает аналитику посещений и источников трафика и помогает находить SEO и технические ошибки.",
    primaryCta: { label: "Зарегистрироваться", href: "#contacts" },
    secondaryCta: { label: "Подключить сайт", href: "#how" }
  },
  trust: {
    title: "Используют для контроля заявок и роста конверсии",
    items: ["Company", "Brand", "Studio", "Agency", "Startup", "Business", "Business"]
  }
};
const siteData = {
  capabilities: {
    title: "Возможности TrackNode",
    subtitle: "Контролируйте заявки, посещения, поведение, SEO и техническое состояние сайта.",
    items: [
      {
        id: "tg-leads",
        title: "Уведомления о заявках в Telegram",
        description: "Получайте мгновенные уведомления о новых заявках прямо в Telegram, чтобы быстро реагировать.",
        icon: "telegram"
      },
      {
        id: "traffic-analytics",
        title: "Аналитика посещений и источников трафика",
        description: "Отслеживайте посещения, страницы, каналы, заинтересованность пользователей и анализируйте источники трафика.",
        icon: "analytics"
      },
      {
        id: "user-behavior",
        title: "Поведение пользователя",
        description: "Записывайте клики, переходы, перемещения и стройте карты кликов, чтобы видеть весь путь клиента.",
        icon: "cursor"
      },
      {
        id: "funnels",
        title: "Воронки и конверсия",
        description: "Создавайте воронки продаж, разбивайте их на этапы, анализируйте, где теряются пользователи и заявки.",
        icon: "funnel"
      },
      {
        id: "seo-audit",
        title: "SEO-аудит и технические ошибки",
        description: "Находите ошибки, влияющие на продвижение сайта, улучшайте SEO-показатели и получайте советы по улучшению.",
        icon: "seo"
      },
      {
        id: "reports",
        title: "Отчёты и экспорт",
        description: "Получайте готовый отчёт в PDF по ключевым метрикам и экспортируйте данные в удобном формате.",
        icon: "report"
      }
    ]
  }
};
const _sfc_main$5 = {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CapabilitiesSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/how/step-1.png");
const _imports_1 = publicAssetsURL("/how/step-2.png");
const _imports_2 = publicAssetsURL("/how/step-3.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "how",
    class: "how-section"
  }, _attrs))} data-v-3c40e9fc><div class="how-bg how-bg--left" aria-hidden="true" data-v-3c40e9fc></div><div class="how-bg how-bg--right" aria-hidden="true" data-v-3c40e9fc></div><div class="how-bg how-bg--top" aria-hidden="true" data-v-3c40e9fc></div><div class="how-wave how-wave--one" aria-hidden="true" data-v-3c40e9fc></div><div class="how-wave how-wave--two" aria-hidden="true" data-v-3c40e9fc></div><div class="how-content" data-v-3c40e9fc><header class="how-header" data-v-3c40e9fc><h2 class="how-title" data-v-3c40e9fc>Как это работает</h2><p class="how-subtitle" data-v-3c40e9fc> Внесите сайт в два простых шага и получите аналитику и уведомления. </p></header><div class="how-grid" data-v-3c40e9fc><article class="how-card" data-v-3c40e9fc><span class="how-badge" data-v-3c40e9fc>1</span><div class="how-media" data-v-3c40e9fc><img${ssrRenderAttr("src", _imports_0)} alt="Добавление сайта" loading="lazy" decoding="async" data-v-3c40e9fc></div><h3 class="how-card-title" data-v-3c40e9fc>Добавляете сайт</h3><p class="how-card-description" data-v-3c40e9fc> Введите адрес сайта и создайте проект в TrackNode. </p></article><article class="how-card" data-v-3c40e9fc><span class="how-badge" data-v-3c40e9fc>2</span><div class="how-media" data-v-3c40e9fc><img${ssrRenderAttr("src", _imports_1)} alt="Установка кода отслеживания" loading="lazy" decoding="async" data-v-3c40e9fc></div><h3 class="how-card-title" data-v-3c40e9fc>Устанавливаете код</h3><p class="how-card-description" data-v-3c40e9fc> Установите линейный код отслеживания или интеграцию. </p></article><article class="how-card" data-v-3c40e9fc><span class="how-badge" data-v-3c40e9fc>3</span><div class="how-media" data-v-3c40e9fc><img${ssrRenderAttr("src", _imports_2)} alt="Просмотр аналитики" loading="lazy" decoding="async" data-v-3c40e9fc></div><h3 class="how-card-title" data-v-3c40e9fc>Смотрите аналитику</h3><p class="how-card-description" data-v-3c40e9fc> Отслеживайте посещения и уведомления о заявках. </p></article></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorksSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HowItWorksSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-3c40e9fc"]]);
const _sfc_main$3 = {
  __name: "PricingSection",
  __ssrInlineRender: true,
  setup(__props) {
    const plans = [
      {
        name: "Старт",
        price: "1 990 ₽/мес",
        description: "Для небольших проектов и быстрого старта.",
        features: [
          "Базовая аналитика посещений",
          "Telegram-уведомления о заявках",
          "Отчёты по источникам трафика",
          "SEO-аудит до 100 страниц"
        ]
      },
      {
        name: "Бизнес",
        price: "3 990 ₽/мес",
        description: "Оптимальный план для роста конверсии.",
        features: [
          "Расширенная аналитика и воронки",
          "Приоритетные Telegram-уведомления",
          "Поведенческие отчёты и сегменты",
          "SEO-аудит до 300 страниц",
          "Сравнение периодов и экспорт"
        ],
        featured: true
      },
      {
        name: "Профи",
        price: "6 990 ₽/мес",
        description: "Для команд с большим трафиком и сложной аналитикой.",
        features: [
          "Мультипроекты и командный доступ",
          "Гибкие события и кастомные цели",
          "Автоотчёты и расширенный экспорт",
          "SEO-аудит до 1000 страниц",
          "Персональная настройка мониторинга"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "pricing-section"
      }, _attrs))} data-v-d92662d6><div class="pricing-glow pricing-glow--left" aria-hidden="true" data-v-d92662d6></div><div class="pricing-glow pricing-glow--right" aria-hidden="true" data-v-d92662d6></div><div class="pricing-wave pricing-wave--one" aria-hidden="true" data-v-d92662d6></div><div class="pricing-content" data-v-d92662d6><header class="pricing-header" data-v-d92662d6><h2 class="pricing-title" data-v-d92662d6>Тарифы</h2><p class="pricing-subtitle" data-v-d92662d6> Выберите удобный план и подключайте аналитику, уведомления и SEO-контроль в одном интерфейсе. </p></header><div class="pricing-grid" data-v-d92662d6><!--[-->`);
      ssrRenderList(plans, (plan) => {
        _push(`<article class="${ssrRenderClass([{ "pricing-card--featured": plan.featured }, "pricing-card"])}" data-v-d92662d6>`);
        if (plan.featured) {
          _push(`<span class="pricing-badge" data-v-d92662d6>Рекомендуем</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="pricing-card-title" data-v-d92662d6>${ssrInterpolate(plan.name)}</h3><p class="pricing-card-price" data-v-d92662d6>${ssrInterpolate(plan.price)}</p><p class="pricing-card-description" data-v-d92662d6>${ssrInterpolate(plan.description)}</p><ul class="pricing-features" data-v-d92662d6><!--[-->`);
        ssrRenderList(plan.features, (feature) => {
          _push(`<li class="pricing-feature" data-v-d92662d6><span class="pricing-feature-icon" aria-hidden="true" data-v-d92662d6><svg viewBox="0 0 16 16" fill="none" data-v-d92662d6><path d="M3.4 8.3L6.5 11.3L12.6 5.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" data-v-d92662d6></path></svg></span><span data-v-d92662d6>${ssrInterpolate(feature)}</span></li>`);
        });
        _push(`<!--]--></ul><a href="#footer-contacts" class="pricing-cta" data-v-d92662d6>Связаться</a></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PricingSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d92662d6"]]);
const _sfc_main$2 = {
  __name: "ReviewsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const reviews = [
      {
        company: "AI-бизнес",
        role: "Проект AI-продаж",
        date: "14.02.2026",
        text: "Уведомления в Telegram спасают время: лиды не теряются, а по аналитике стало понятно, где проседает конверсия."
      },
      {
        company: "Новое Конаково",
        role: "Туристический проект",
        date: "03.02.2026",
        text: "Подключили за пару минут. Теперь видим источники трафика и действия пользователей, а обращения приходят сразу."
      },
      {
        company: "TechStore",
        role: "Интернет-магазин",
        date: "20.01.2026",
        text: "Наконец-то прозрачная картина по поведению: клики, страницы, отказы. Плюс уведомления — очень удобно."
      },
      {
        company: "FinBlog",
        role: "Медиа и финансы",
        date: "08.01.2026",
        text: "Отчёты и понятная аналитика помогают держать руку на пульсе. Telegram-уведомления — топ."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "reviews",
        class: "reviews-section"
      }, _attrs))} data-v-fd44138a><div class="reviews-glow reviews-glow--left" aria-hidden="true" data-v-fd44138a></div><div class="reviews-glow reviews-glow--right" aria-hidden="true" data-v-fd44138a></div><div class="reviews-wave reviews-wave--one" aria-hidden="true" data-v-fd44138a></div><div class="reviews-content" data-v-fd44138a><header class="reviews-header" data-v-fd44138a><h2 class="reviews-title" data-v-fd44138a>Отзывы</h2><p class="reviews-subtitle" data-v-fd44138a> Реальные проекты TrackNode: что изменилось после подключения аналитики и Telegram-уведомлений. </p></header><div class="reviews-grid" data-v-fd44138a><!--[-->`);
      ssrRenderList(reviews, (review) => {
        _push(`<article class="review-card" data-v-fd44138a><div class="review-stars" aria-label="Рейтинг 5 из 5" data-v-fd44138a><!--[-->`);
        ssrRenderList(5, (star) => {
          _push(`<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" data-v-fd44138a><path d="M8 1.3L9.73 4.84L13.6 5.4L10.8 8.12L11.46 12L8 10.18L4.54 12L5.2 8.12L2.4 5.4L6.27 4.84L8 1.3Z" fill="currentColor" data-v-fd44138a></path></svg>`);
        });
        _push(`<!--]--></div><div class="review-company" data-v-fd44138a><strong data-v-fd44138a>${ssrInterpolate(review.company)}</strong><span data-v-fd44138a>${ssrInterpolate(review.date)}</span></div><p class="review-role" data-v-fd44138a>${ssrInterpolate(review.role)}</p><p class="review-text" data-v-fd44138a>${ssrInterpolate(review.text)}</p><p class="review-date" data-v-fd44138a>Дата: ${ssrInterpolate(review.date)}</p><a href="#footer-contacts" class="review-cta" data-v-fd44138a>Связаться</a></article>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewsSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ReviewsSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fd44138a"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    id: "contacts",
    class: "site-footer"
  }, _attrs))} data-v-eb70e3d9><div class="footer-glow footer-glow--left" aria-hidden="true" data-v-eb70e3d9></div><div class="footer-glow footer-glow--right" aria-hidden="true" data-v-eb70e3d9></div><div class="footer-content" data-v-eb70e3d9><div id="footer-contacts" class="footer-anchor" aria-hidden="true" data-v-eb70e3d9></div><div class="footer-top" data-v-eb70e3d9><section class="footer-brand" data-v-eb70e3d9><a href="/" class="footer-logo" data-v-eb70e3d9><img${ssrRenderAttr("src", _imports_0$1)} alt="TrackNode" data-v-eb70e3d9><span data-v-eb70e3d9>TrackNode</span></a><p class="footer-copy" data-v-eb70e3d9>© 2026 TrackNode. Все права защищены.</p><p class="footer-legal" data-v-eb70e3d9><a href="#" data-v-eb70e3d9>Политика конфиденциальности</a><span data-v-eb70e3d9>|</span><a href="#" data-v-eb70e3d9>Условия пользования</a></p></section><section class="footer-menus" aria-label="Навигация футера" data-v-eb70e3d9><div class="footer-column" data-v-eb70e3d9><h3 data-v-eb70e3d9>Продукт</h3><ul data-v-eb70e3d9><li data-v-eb70e3d9><a href="#features" data-v-eb70e3d9>Возможности</a></li><li data-v-eb70e3d9><a href="#how" data-v-eb70e3d9>Как это работает</a></li><li data-v-eb70e3d9><a href="#pricing" data-v-eb70e3d9>Тарифы</a></li><li data-v-eb70e3d9><a href="https://tracknode.ru" target="_blank" rel="noopener" data-v-eb70e3d9> Открыть приложение </a></li></ul></div><div class="footer-column" data-v-eb70e3d9><h3 data-v-eb70e3d9>Ресурсы</h3><ul data-v-eb70e3d9><li data-v-eb70e3d9><a href="#reviews" data-v-eb70e3d9>Отзывы</a></li><li data-v-eb70e3d9><a href="#faq" data-v-eb70e3d9>FAQ</a></li><li data-v-eb70e3d9><a href="#footer-contacts" data-v-eb70e3d9>Поддержка</a></li><li data-v-eb70e3d9><a href="#footer-contacts" data-v-eb70e3d9>Документация</a></li></ul></div><div class="footer-column" data-v-eb70e3d9><h3 data-v-eb70e3d9>Компания</h3><ul data-v-eb70e3d9><li data-v-eb70e3d9><a href="#footer-contacts" data-v-eb70e3d9>Контакты</a></li><li data-v-eb70e3d9><a href="#footer-contacts" data-v-eb70e3d9>Партнёрам</a></li><li data-v-eb70e3d9><a href="#footer-contacts" data-v-eb70e3d9>Вакансии</a></li><li data-v-eb70e3d9><a href="#footer-contacts" data-v-eb70e3d9>О нас</a></li></ul></div></section><section class="footer-contacts" aria-label="Контакты" data-v-eb70e3d9><h3 data-v-eb70e3d9>Контакты</h3><ul data-v-eb70e3d9><li data-v-eb70e3d9><span class="footer-contact-label" data-v-eb70e3d9>Telegram</span><a href="https://t.me/M1ke994" target="_blank" rel="noopener" data-v-eb70e3d9>@M1ke994</a></li><li data-v-eb70e3d9><span class="footer-contact-label" data-v-eb70e3d9>Email</span><a href="mailto:contact@tracknode.ru" data-v-eb70e3d9>contact@tracknode.ru</a></li><li data-v-eb70e3d9><span class="footer-contact-label" data-v-eb70e3d9>Телефон</span><a href="tel:+74950000000" data-v-eb70e3d9>+7 495 000-00-00</a></li><li data-v-eb70e3d9><span class="footer-contact-label" data-v-eb70e3d9>Адрес</span><span data-v-eb70e3d9>Россия, Москва, ул. Ленинградская, 15</span></li></ul><div class="footer-socials" aria-label="Социальные сети" data-v-eb70e3d9><a href="https://example.com" target="_blank" rel="noopener" aria-label="Telegram" data-v-eb70e3d9><svg viewBox="0 0 20 20" fill="none" data-v-eb70e3d9><path d="M17.5 3.7L15.1 15.2C14.95 15.9 14.55 16.08 13.95 15.74L10.45 13.16L8.72 14.83C8.54 15.02 8.39 15.16 8.04 15.16L8.3 11.52L14.88 5.56C15.17 5.31 14.82 5.16 14.45 5.42L6.31 10.56L2.8 9.47C2.04 9.22 2.02 8.7 2.96 8.34L16.55 3.1C17.18 2.86 17.73 3.24 17.5 3.7Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round" data-v-eb70e3d9></path></svg></a><a href="https://example.com" target="_blank" rel="noopener" aria-label="VK" data-v-eb70e3d9><svg viewBox="0 0 20 20" fill="none" data-v-eb70e3d9><path d="M3.9 6.2H6.1C6.22 6.2 6.34 6.3 6.37 6.42C6.61 7.54 7.08 8.6 7.77 9.53C8.6 10.66 9.53 11.34 10.06 11.45C10.2 11.48 10.33 11.37 10.33 11.23V6.58C10.33 6.37 10.5 6.2 10.71 6.2H12.55C12.76 6.2 12.93 6.37 12.93 6.58V9.02C12.93 9.19 13.14 9.27 13.26 9.15C14.08 8.31 14.68 7.28 15 6.16C15.03 6.05 15.14 5.97 15.26 5.97H17.08C17.35 5.97 17.55 6.23 17.46 6.49C16.98 7.88 16.23 9.16 15.24 10.25C15.16 10.34 15.16 10.48 15.24 10.56C16.26 11.61 17.06 12.85 17.59 14.22C17.69 14.49 17.49 14.78 17.2 14.78H15.31C15.2 14.78 15.09 14.72 15.04 14.62C14.54 13.58 13.84 12.65 12.99 11.87C12.87 11.76 12.67 11.84 12.67 12V14.36C12.67 14.57 12.5 14.74 12.29 14.74H11.18C7.3 14.74 4.41 12.14 3.58 6.59C3.55 6.37 3.72 6.2 3.9 6.2Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" data-v-eb70e3d9></path></svg></a><a href="https://example.com" target="_blank" rel="noopener" aria-label="YouTube" data-v-eb70e3d9><svg viewBox="0 0 20 20" fill="none" data-v-eb70e3d9><rect x="2.7" y="5.4" width="14.6" height="9.2" rx="2.5" stroke="currentColor" stroke-width="1.3" data-v-eb70e3d9></rect><path d="M8.4 8.1L12.8 10L8.4 11.9V8.1Z" fill="currentColor" data-v-eb70e3d9></path></svg></a></div></section></div><div class="footer-bottom" data-v-eb70e3d9><p data-v-eb70e3d9>© 2026 TrackNode. Все права защищены.</p><p data-v-eb70e3d9><a href="#" data-v-eb70e3d9>Политика конфиденциальности</a><span data-v-eb70e3d9>|</span><a href="#" data-v-eb70e3d9>Условия пользования</a></p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SiteFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb70e3d9"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UpHeader = _sfc_main$8;
      const _component_Hero = _sfc_main$6;
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
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(HowItWorksSection, null, null, _parent));
      _push(ssrRenderComponent(PricingSection, null, null, _parent));
      _push(ssrRenderComponent(ReviewsSection, null, null, _parent));
      _push(`<div id="faq" class="h-0" aria-hidden="true"></div>`);
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DzqqIkn-.js.map
