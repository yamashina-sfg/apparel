import Image from "next/image";
import { lookbook } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Lookbook() {
  return (
    <section id="lookbook" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Lookbook"
          title="時間帯で見る、服の余白。"
          copy="商品単体ではなく、生活の光量や場所の空気で見せる編集型レイアウト。高級感のある写真体験を重視します。"
        />
        <div className="grid gap-5 md:grid-cols-3 md:items-start">
          {lookbook.map((item, index) => (
            <figure key={item.title} className={index === 1 ? "md:mt-20" : ""}>
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="font-serif text-2xl text-ink">{item.title}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-soot/40">Editorial</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
