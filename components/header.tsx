import Link from "next/link";
import { NavLink } from "@components/nav-link";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

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
      <div className="h-(--header-height)" />
      <div className="fixed top-0 inset-x-0 z-50 h-(--header-height)">
        <div className="backdrop-blur-xl absolute inset-0" />
        <div className="h-(--header-height) backdrop-opacity-100">
          <nav className="container mx-auto px-6 lg:px-8 flex items-center h-full text-primary-foreground">
            <div className="flex-1">
              <Link
                href="/"
                className="inline-flex flex-col justify-center select-none"
              >
                <span className="text-xl font-bold uppercase">
                  Dr. Wakil Ahmed
                </span>
                <span className="text-[calc(var(--text-xs)-2px)] uppercase leading-none tracking-[0.14em]">
                  Best Hip and Knee Surgeon
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <ul className="inline-flex items-center justify-center gap-3">
                {NAV_LINKS.map((link) => (
                  <NavLink key={link.label} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
              </ul>

              <Button
                asChild
                size="sm"
                variant="outline"
                className="bg-transparent border-transparent shadow-[inset_0_0_2px_rgba(255,255,255,0.6)]"
              >
                <Link href="tel:+8809610009630">
                  <Phone className="h-4 w-4" />
                  <span>(880) 9610-009630</span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
