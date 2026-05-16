import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
};

const variants = {
  primary: "bg-[#b8935f] text-white shadow-lg shadow-[#b8935f]/25 hover:bg-[#a6804f]",
  secondary: "bg-[#1f2528] text-white shadow-lg shadow-black/15 hover:bg-[#30393d]",
  light: "bg-white text-[#1f2528] shadow-lg shadow-black/10 hover:bg-[#f5efe6]",
  ghost: "border border-[#b8935f]/45 text-[#1f2528] hover:border-[#b8935f] hover:bg-[#f5efe6]",
};

export function CTAButton({ href, children, variant = "primary", className = "", ...props }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b8935f] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
