<template>
  <header class="relative z-10 mx-auto flex w-full max-w-[1280px] items-center justify-between gap-2 rounded-[18px] border border-[#dee5f2] bg-white/95 px-3 py-2.5 shadow-[0_12px_36px_rgba(34,51,90,0.08)] backdrop-blur sm:px-4">
    <a href="#" class="flex min-w-fit items-center gap-2.5 pr-2">
      <img src="/brand/logo.svg" alt="TrackNode" class="h-8 w-8" />
      <span class="text-[22px] font-semibold tracking-[-0.02em] text-[#1f2738]">{{ brand.name }}</span>
    </a>

    <nav class="hidden items-center gap-8 lg:flex">
      <a
        v-for="item in nav"
        :key="item.href"
        :href="item.href"
        class="inline-flex items-center gap-1.5 text-[16px] font-medium text-[#2a3244] transition-colors hover:text-[#1d5fff]"
      >
        {{ item.label }}
      </a>
    </nav>

    <div class="flex items-center gap-2 sm:gap-2.5">
      <a
        :href="headerCta.href"
        class="inline-flex min-h-10 items-center justify-center rounded-[11px] bg-gradient-to-r from-[#49a2ff] via-[#347cff] to-[#244cf3] px-4 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(47,106,255,0.35)] transition hover:brightness-105 sm:px-6 sm:text-[16px]"
      >
        {{ headerCta.label }}
      </a>

      <button
        type="button"
        aria-label="Profile"
        class="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#d7dfee] bg-white text-[#2a3246] shadow-[0_3px_10px_rgba(25,33,56,0.07)]"
      >
        <svg viewBox="0 0 20 20" class="h-[17px] w-[17px]" fill="none" aria-hidden="true">
          <path
            d="M10 10.6C11.9882 10.6 13.6 8.98823 13.6 7C13.6 5.01177 11.9882 3.4 10 3.4C8.01177 3.4 6.4 5.01177 6.4 7C6.4 8.98823 8.01177 10.6 10 10.6Z"
            stroke="currentColor"
            stroke-width="1.4"
          />
          <path d="M3.9 16.6C4.7 14.45 6.98 13 10 13C13.02 13 15.3 14.45 16.1 16.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Menu"
        class="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#d7dfee] bg-white text-[#2a3246] lg:hidden"
      >
        <svg viewBox="0 0 20 20" class="h-[16px] w-[16px]" fill="none" aria-hidden="true">
          <path d="M4 6H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          <path d="M4 10H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
          <path d="M4 14H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
defineProps({
  brand: {
    type: Object,
    required: true,
  },
  nav: {
    type: Array,
    required: true,
  },
  headerCta: {
    type: Object,
    required: true,
  },
});
</script>