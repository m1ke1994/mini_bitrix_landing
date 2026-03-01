import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { Hero } from "@/components/Hero";
import { UpHeader } from "@/components/UpHeader";
import { homepageData } from "@/data/homepage";

export default function Home() {
  const anchorIds = ["how", "pricing", "reviews", "faq", "contacts"];

  return (
    <main className="min-h-screen bg-[#eef1f8] px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-[30px] border border-white/70 bg-[#f7f9fe] px-4 pb-10 pt-4 shadow-[0_26px_60px_rgba(36,52,87,0.12)] sm:px-6 lg:px-9 lg:pb-14 lg:pt-6">
        <div className="pointer-events-none absolute -left-[14%] bottom-[-14%] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,rgba(203,218,255,0.5)_0%,rgba(203,218,255,0)_70%)] blur-2xl" />
        <div className="pointer-events-none absolute -right-[12%] top-[10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(146,195,255,0.56)_0%,rgba(146,195,255,0)_72%)] blur-2xl" />
        <UpHeader brand={homepageData.brand} nav={homepageData.nav} headerCta={homepageData.headerCta} />
        <Hero hero={homepageData.hero} trust={homepageData.trust} />
      </div>

      <div className="mx-auto mt-5 w-full max-w-[1400px] overflow-hidden rounded-[30px] border border-white/70 bg-[#f4f7fd] shadow-[0_22px_52px_rgba(36,52,87,0.1)]">
        <CapabilitiesSection />
      </div>

      <div className="mx-auto mt-5 w-full max-w-[1400px] space-y-3 pb-10">
        {anchorIds.map((id) => (
          <div key={id} id={id} className="h-24" aria-hidden="true" />
        ))}
      </div>
    </main>
  );
}
