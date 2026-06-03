import { reviews } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Reviews() {
  return (
    <section className="bg-ink px-5 py-24 text-paper md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Reviews"
          title="購入後の静かな満足。"
          copy="国内顧客がECで気にする、サイズ、品質、梱包、ケアの不安をレビューで補完します。"
        />
        <div className="grid gap-px bg-paper/15 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="bg-ink p-6 md:p-8">
              <p className="font-serif text-4xl leading-none text-clay">“</p>
              <blockquote className="mt-4 text-sm leading-8 text-paper/80">{review.quote}</blockquote>
              <p className="mt-8 text-[0.68rem] uppercase tracking-[0.18em] text-paper/50">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
