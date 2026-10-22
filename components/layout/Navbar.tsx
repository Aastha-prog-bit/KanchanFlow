"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/#industries" },
  { label: "FAQ", href: "/#faq" },
];

const linkStyles =
  "text-sm font-medium text-white/80 transition-colors hover:text-gold " +
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite-soft bg-graphite text-white">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-wide focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Kanchan<span className="text-gold">Flow</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkStyles}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href="/pricing">Start free trial</Button>
        </div>

        <button
          type="button"
          className="p-2 focus-visible:outline-2 focus-visible:outline-gold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-graphite-soft px-4 pb-6 pt-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${linkStyles} block py-1 text-base`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6" onClick={() => setOpen(false)}>
            <Button href="/pricing" className="w-full">
              Start free trial
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}