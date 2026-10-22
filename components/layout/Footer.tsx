import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Industries", href: "/#industries" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About KanchanFlow", href: "/" },
      { label: "Contact sales", href: "/pricing" },
      { label: "Careers", href: "/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help centre", href: "/" },
      { label: "Privacy policy", href: "/" },
      { label: "Terms of service", href: "/" },
    ],
  },
];

const socials = [
  { label: "KanchanFlow on LinkedIn", href: "#", Icon: Linkedin },
  { label: "KanchanFlow on X", href: "#", Icon: Twitter },
  { label: "KanchanFlow on YouTube", href: "#", Icon: Youtube },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

export default function Footer() {
  return (
    <footer className="mt-auto bg-graphite text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <Link
            href="/"
            className={`font-heading text-2xl font-bold tracking-wide ${focusRing}`}
          >
            Kanchan<span className="text-gold">Flow</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            The CRM built for manufacturers. Quotes, work orders and your
            shop-floor sales pipeline in one place.
          </p>
          <ul className="mt-6 flex gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className={`text-white/70 transition-colors hover:text-gold ${focusRing}`}
                >
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerLinks.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h2 className="font-heading text-lg font-semibold tracking-wide text-gold">
              {column.heading}
            </h2>
            <ul className="mt-4 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`text-sm text-white/70 transition-colors hover:text-white ${focusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-graphite-soft">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/60 sm:px-6">
          © {new Date().getFullYear()} KanchanFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}