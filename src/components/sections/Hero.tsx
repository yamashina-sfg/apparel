import Image from "next/image";
import { brand, values } from "@/lib/brand";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92svh] overflow-hidden pt-16">
      <Image
        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1800&q=88"
        alt="HAKURO editorial campaign with refined neutral apparel"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/15 to-ink/60" />
      <div className="relative z-10 mx-auto flex min-h-[calc(92svh-4rem)] max-w-7xl flex-col justify-end px-5 pb-20 text-paper md:px-8 md:pb-12">
        <div className="max-w-4xl">
          <p className="mb-5 text-[0.72rem] font-medium uppercase tracking-[0.26em] text-paper/80">{brand.japaneseName} / Tokyo, Japan</p>
          <h1 className="font-serif text-[18vw] leading-[0.78] tracking-normal md:text-[8.5rem] lg:text-[10.5rem]">{brand.name}</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-paper/90 md:text-lg">{brand.statement}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#shop" variant="light">
              新作を見る
            </Button>
            <Button href="#story" variant="ghost" className="border-paper/40 text-paper hover:border-paper">
              ブランドを知る
            </Button>
          </div>
        </div>
        <div className="mt-14 grid gap-px border border-paper/20 bg-paper/20 text-paper/80 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="bg-ink/20 p-4 text-xs uppercase tracking-[0.12em] backdrop-blur-sm">
              {value}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
