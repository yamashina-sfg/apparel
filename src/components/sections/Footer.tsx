import { brand, navItems } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-24 pt-12 text-paper md:px-8 md:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-t border-paper/15 pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-6xl leading-none">{brand.name}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-paper/40">{brand.tagline}</p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-xs uppercase tracking-[0.18em] text-paper/60 hover:text-paper">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-3 text-xs text-paper/40 md:flex-row md:justify-between">
          <p>© 2026 HAKURO. Fictional brand proposal for Japan.</p>
          <p>Privacy / Terms / Accessibility</p>
        </div>
      </div>
    </footer>
  );
}
