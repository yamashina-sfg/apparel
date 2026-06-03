type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
      <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.24em] text-clay">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-[0.95] text-ink md:text-6xl">{title}</h2>
      {copy ? <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-soot/70 md:text-base">{copy}</p> : null}
    </div>
  );
}
