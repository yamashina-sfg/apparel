import { faqs } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="bg-paper px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="購入前の不安を、曖昧にしない。" />
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-medium text-ink">
                {faq.question}
                <span className="grid size-8 shrink-0 place-items-center border border-ink/15 text-lg leading-none transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-soot/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
