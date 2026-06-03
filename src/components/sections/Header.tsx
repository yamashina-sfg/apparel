import { brand, navItems } from "@/lib/brand";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="font-serif text-2xl leading-none tracking-[0.08em] text-ink">
          {brand.name}
        </a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs uppercase tracking-[0.18em] text-soot/60 transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#shop" className="text-xs font-medium uppercase tracking-[0.18em] text-ink">
          Shop
        </a>
      </div>
    </header>
  );
}
