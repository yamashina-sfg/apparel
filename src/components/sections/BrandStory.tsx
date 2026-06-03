import Image from "next/image";
import { brand } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BrandStory() {
  return (
    <section id="story" className="bg-paper px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Brand Story" title="湿度のある都市に、静かな輪郭を。" copy={brand.concept} />
        <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-end">
          <div className="relative aspect-[4/5] overflow-hidden bg-mist">
            <Image
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1100&q=85"
              alt="Quiet tailoring detail for HAKURO"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-t border-ink/15 pt-6">
              <p className="font-serif text-3xl text-ink">Material</p>
              <p className="mt-4 text-sm leading-7 text-soot/70">
                和紙混、リネン、ウールギャバジンなど、日本の気候に適した素材を選定。見た目の静けさと、肌離れや復元性といった実用を同時に設計します。
              </p>
            </div>
            <div className="border-t border-ink/15 pt-6">
              <p className="font-serif text-3xl text-ink">Trace</p>
              <p className="mt-4 text-sm leading-7 text-soot/70">
                国内の縫製背景、素材混率、ケア方法を商品単位で明記。高級感は曖昧さではなく、顧客が納得できる透明性から生まれると考えます。
              </p>
            </div>
            <div className="border-t border-ink/15 pt-6 md:col-span-2">
              <p className="text-sm leading-8 text-soot/75">{brand.audience}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
