import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "dark" | "light" | "ghost";
};

export function Button({ children, variant = "dark", className = "", ...props }: ButtonProps) {
  const variants = {
    dark: "bg-ink text-paper hover:bg-soot",
    light: "bg-paper text-ink hover:bg-white",
    ghost: "border border-ink/15 text-ink hover:border-ink/40"
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center px-6 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
