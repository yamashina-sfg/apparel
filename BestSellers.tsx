import { bestSellers } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BestSellers() {
  return (
    <section className="bg-mist px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Best Sellers"
          title="理由のある、定番。"
          copy="売れている理由を感覚だけで終わらせず、素材、構造、日常での使いやすさとして伝えます。"
        />
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {bestSellers.map((item) => (
            <article key={item.rank} className="grid gap-5 py-7 md:grid-cols-[0.18fr_0.42fr_0.6fr] md:items-center md:py-9">
              <p className="font-serif text-5xl text-clay">{item.rank}</p>
              <h3 className="font-serif text-3xl leading-none text-ink md:text-5xl">{item.name}</h3>
              <p className="text-sm leading-7 text-soot/70 md:text-base">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
