import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { departments, quickLinks } from "@/content/home"

const footerLink =
  "inline-block rounded py-0.5 text-sm text-slate-200 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--gold)"

const connectLinks = [
  "Sign up for city notices",
  "Facebook",
  "Watch meetings on YouTube",
  "Contact City Hall",
  "Employment",
]

const legalLinks = [
  "Accessibility",
  "Privacy policy",
  "Site map",
  "Freedom of Information (FOIA)",
]

export function SiteFooter() {
  return (
    <footer className="bg-(--navy) text-slate-200">
      <div aria-hidden="true" className="h-1 bg-(--gold)" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Contact */}
          <div>
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-10 items-center justify-center rounded-full border-2 border-(--gold) bg-(--navy-dark) text-base font-bold text-white"
              >
                S
              </span>
              <p className="leading-tight">
                <span className="block text-base font-semibold text-white">
                  City of Saugatuck
                </span>
                <span className="block text-[11px] font-medium tracking-[0.18em] text-(--gold) uppercase">
                  Michigan
                </span>
              </p>
            </div>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <p className="flex gap-2.5">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--gold)"
                />
                <span>{siteConfig.contact.address}</span>
              </p>
              <p className="flex gap-2.5">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--gold)"
                />
                <a href="#" className={footerLink}>
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex gap-2.5">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--gold)"
                />
                <a href="#" className={footerLink}>
                  Email City Hall
                </a>
              </p>
              <p className="flex gap-2.5">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--gold)"
                />
                <span>{siteConfig.contact.hours}</span>
              </p>
            </address>
          </div>

          {/* Departments */}
          <nav aria-labelledby="harbor-footer-departments">
            <h2
              id="harbor-footer-departments"
              className="text-sm font-semibold tracking-[0.14em] text-white uppercase"
            >
              Departments
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-1.5">
              {departments.map((department) => (
                <li key={department}>
                  <a href="#" className={footerLink}>
                    {department}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Popular links */}
          <nav aria-labelledby="harbor-footer-popular">
            <h2
              id="harbor-footer-popular"
              className="text-sm font-semibold tracking-[0.14em] text-white uppercase"
            >
              Popular links
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-1.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href="#" className={footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className={footerLink}>
                  Boards &amp; Committees
                </a>
              </li>
              <li>
                <a href="#" className={footerLink}>
                  Forms &amp; Applications
                </a>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <nav aria-labelledby="harbor-footer-connect">
            <h2
              id="harbor-footer-connect"
              className="text-sm font-semibold tracking-[0.14em] text-white uppercase"
            >
              Connect
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-1.5">
              {connectLinks.map((label) => (
                <li key={label}>
                  <a href="#" className={footerLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <p className="max-w-4xl text-sm leading-relaxed text-slate-300">
            <strong className="font-semibold text-white">Accessibility:</strong>{" "}
            The City of Saugatuck is committed to providing a website that is
            accessible to the widest possible audience in accordance with the
            Americans with Disabilities Act and WCAG 2.1 AA. If you have
            difficulty accessing any content on this site, or need information
            in an alternate format, please call {siteConfig.contact.phone} or{" "}
            <a
              href="#"
              className="rounded text-white underline underline-offset-2 hover:decoration-(--gold) focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:outline-none"
            >
              contact the City Clerk
            </a>
            .
          </p>
          <div className="mt-6 flex flex-col gap-3 text-xs text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 City of Saugatuck, Michigan. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {legalLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="rounded text-slate-300 hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:outline-none"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
