import { Box, MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  href: string;
};

const quickLinks: FooterLink[] = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Suppliers", href: "#suppliers" },
  { label: "Sign In", href: "#signin" },
  { label: "Register", href: "#register" },
];

const categoryLinks: FooterLink[] = [
  { label: "Electronics", href: "#" },
  { label: "Agriculture", href: "#" },
  { label: "Construction", href: "#" },
  { label: "Fashion", href: "#" },
  { label: "Furniture", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "X (Twitter)", href: "#", icon: FaXTwitter },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "Instagram", href: "#", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F1B2E] text-gray-200 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand + social */}
          <div className="lg:col-span-2">
            <div className="logo flex items-center gap-2 text-2xl font-bold">
              <div className="bg-[#0F1B2E] rounded-md p-1">
                <Box className="text-[#D97B3F]" />
              </div>
              <h1 className="text-white">
                Trade<span className="text-[#D97B3F]">Bridge</span>
              </h1>
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              The trusted middleman between verified suppliers and serious
              buyers. We manage every quote, negotiation, and order so business
              stays simple.
            </p>

            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  to={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-ink-800 hover:bg-[#D97B3F] hover:text-ink-900 flex items-center justify-center transition-colors duration-300"
                >
                  {<Icon className="w-4 h-4" />}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-paper mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="hover:text-[#D97B3F] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-semibold text-paper mb-4 text-sm tracking-wide uppercase">
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm">
              {categoryLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-[#D97B3F] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-paper mb-4 text-sm tracking-wide uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-[#D97B3F] shrink-0" />4
                Harbor Trade Plaza, Suite 220
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97B3F] shrink-0" />
                +1 (555) 010-2026
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D97B3F] shrink-0" />
                hello@tradebridge.io
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} TradeBridge Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
