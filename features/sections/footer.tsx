import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "(880) 9610-009630",
    href: "tel:+8809610009630",
  },
  {
    icon: Mail,
    label: "Email",
    value: "wakil_ortho@yahoo.com",
    href: "mailto:wakil_ortho@yahoo.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "IBN Sina Specialized Hospital, H.No, 68 Rd Number 15, Dhaka 1209",
    href: "https://maps.app.goo.gl/LPYcTmaLfMnRZ7Gu8",
  },
];

const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const QUICK_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Appointments", href: "#appointments" },
  { name: "Patient Resources", href: "#resources" },
];

const LEGAL_LINKS = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms of Service", href: "#terms" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 border-t border-slate-700">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and About Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
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
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Providing exceptional orthopedic care with cutting-edge
                techniques and personalized treatment plans for optimal
                recovery.
              </p>

              {/* Social Links */}
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-200 inline-flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-2"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
                Contact Information
              </h4>
              <div className="space-y-4">
                {CONTACT_INFO.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-start space-x-3 text-slate-400 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-blue-600/10 flex items-center justify-center transition-all duration-300">
                      <contact.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                        {contact.label}
                      </p>
                      <p className="text-sm leading-relaxed wrap-break-word">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-xs text-slate-400 text-center uppercase md:text-left">
              <span>© {currentYear} </span>
              <Link className="underline text-muted" href="/">
                Dr. Wakil Ahmed.
              </Link>
              <span> All rights reserved.</span>
              <span>
                {" "}
                Designed and developed by{" "}
                <a
                  className="underline text-muted"
                  href="https://junayedakbor.vercel.app"
                  target="_blank"
                >
                  Junayed Akbor
                </a>
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < LEGAL_LINKS.length - 1 && (
                    <span className="hidden md:inline text-slate-700">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
