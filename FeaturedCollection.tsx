import Image from "next/image";
import { collections } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedCollection() {
  return (
    <section id="collection" className="bg-ink px-5 py-24 text-paper md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Collection"
          title="Rainline / Still Linen"
          copy="2026年春夏は、天候と体温の変化に応える二つのラインを展開。視覚は静かに、着心地は明確に。"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {collections.map((collection) => (
            <article key={collection.title} className="group relative min-h-[560px] overflow-hidden bg-soot">
              <Image
                src={collection.image}
                alt={`${collection.title} collection image`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-ink/10 to-ink/75" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-paper/60">{collection.season}</p>
                <h3 className="mt-3 font-serif text-5xl leading-none text-paper md:text-6xl">{collection.title}</h3>
                <p className="mt-5 max-w-md text-sm leading-7 text-paper/80">{collection.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="#shop" variant="light">
            全コレクションを見る
          </Button>
        </div>
      </div>
    </section>
  );
}
