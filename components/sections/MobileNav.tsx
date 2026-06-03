import { navItems } from "@/lib/brand";

export function MobileNav() {
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-4 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 grid-cols-5 border border-ink/10 bg-paper/90 text-center shadow-hairline backdrop-blur-xl md:hidden"
    >
      {navItems.map((item) => (
        <a key={item.href} href={item.href} className="flex h-12 items-center justify-center text-[0.62rem] uppercase tracking-[0.12em] text-soot/75">
          {item.label}
        </a>
      ))}
    </nav>
  );
}
