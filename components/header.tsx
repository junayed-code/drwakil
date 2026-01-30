"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Button } from "@components/ui/button";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="h-(--header-height)" />
      <div className="fixed top-0 inset-x-0 z-50 h-(--header-height)">
        <div className="backdrop-blur-xl absolute inset-0" />

        <nav aria-label="Main">
          <div className="container flex items-center h-(--header-height) backdrop-opacity-100 text-primary-foreground">
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

            <div className="hidden lg:flex items-center gap-4">
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

            {/* Mobile navbar toggle button */}
            <Button
              size="icon"
              variant="outline"
              aria-label="Toggle menu"
              className="lg:hidden bg-transparent border-transparent shadow-[inset_0_0_2px_rgba(255,255,255,0.6)]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile nav */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute w-full z-40 top-(--header-height) backdrop-blur-xl bg-card/55">
              <div className="container flex flex-col py-5 gap-2">
                {/* Mobile nav links */}
                <ul className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <NavLink
                      variant="mobile"
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </ul>

                {/* Mobile nav cta */}
                <div>
                  <div className="w-full border-t border-muted-foreground/50 mt-2 mb-5" />
                  <Button asChild size="sm" className="w-full">
                    <Link href="tel:+8809610009630">
                      <Phone />
                      <span>(880) 9610-009630</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
