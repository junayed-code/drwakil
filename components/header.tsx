import Link from "next/link";
import { NavLink } from "@components/nav-link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Publications", href: "#" },
  { label: "Photo Gallery", href: "#" },
  { label: "Contact", href: "#" },
] as const;

export function Header() {
  return (
    <header>
      <div className="container px-6 h-18 flex items-center">
        <div>
          <Link href="/" className="flex flex-col justify-center select-none">
            <span className="text-xl font-bold uppercase">Dr. Wakil Ahmed</span>
            <span className="text-[calc(var(--text-xs)-2px)] uppercase leading-none tracking-[0.14em]">
              Best Hip and Knee Surgeon
            </span>
          </Link>
        </div>
        <nav className="flex-1 flex justify-end">
          <ul className="inline-flex items-center justify-center gap-3">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
