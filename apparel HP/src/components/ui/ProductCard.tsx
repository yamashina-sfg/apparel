import Image from "next/image";

type ProductCardProps = {
  name: string;
  category: string;
  price: string;
  tag: string;
  image: string;
};

export function ProductCard({ name, category, price, tag, image }: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-mist">
        <Image
          src={image}
          alt={`${name} product photography`}
          fill
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 bg-paper/90 px-3 py-2 text-[0.63rem] font-medium uppercase tracking-[0.18em] text-ink">
          {tag}
        </span>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-soot/40">{category}</p>
          <h3 className="mt-1 text-sm font-medium text-ink md:text-base">{name}</h3>
        </div>
        <p className="shrink-0 text-sm text-soot/70">{price}</p>
      </div>
    </article>
  );
}
