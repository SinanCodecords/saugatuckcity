import Link from "next/link"

import { siteConfig } from "@/config/site"
import { departments, mainNav } from "@/content/home"

// Fixed so the fully static prerender never touches a request-time clock.
const copyrightYear = 2026

const utilityLinks = [
  "Accessibility",
  "Privacy",
  "Freedom of Information",
  "Site map",
] as const

export function DunesFooter() {
  return (
    <footer className="bg-(--dn-bg)">
      <div className="mx-auto w-full max-w-7xl px-5 pt-16 pb-10 sm:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Wordmark + contact */}
          <div className="lg:col-span-5">
            <p className="font-(family-name:--font-dunes-serif) text-4xl leading-none font-light tracking-[-0.02em] sm:text-5xl">
              City of
              <br />
              Saugatuck
            </p>
            <p className="mt-3 text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase">
              Michigan · Allegan County
            </p>

            <address className="mt-8 text-[15px] leading-relaxed text-(--dn-ink-soft) not-italic">
              <p className="text-(--dn-ink)">{siteConfig.contact.address}</p>
              <p className="mt-2">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="rounded-sm text-(--dn-ink) underline decoration-(--dn-rule) underline-offset-[3px] transition-colors hover:text-(--dn-teal) hover:decoration-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal)"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>{siteConfig.contact.hours}</p>
            </address>
          </div>

          {/* Site */}
          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink) uppercase">
              Site
            </h2>
            <ul className="mt-5 flex flex-col gap-2.5">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-[15px] text-(--dn-ink-soft) transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Departments */}
          <nav aria-label="Departments" className="lg:col-span-4">
            <h2 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink) uppercase">
              Departments
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
              {departments.map((department) => (
                <li key={department}>
                  <Link
                    href="#"
                    className="rounded-sm text-[15px] text-(--dn-ink-soft) transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal)"
                  >
                    {department}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Accessibility statement */}
        <div className="mt-14 border-t border-(--dn-rule) pt-8">
          <h2 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink) uppercase">
            Accessibility
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-(--dn-ink-soft)">
            The City of Saugatuck is committed to making its website usable by
            everyone, including people with disabilities, and works toward
            conformance with WCAG 2.1 Level AA. If you have difficulty using any
            part of this site or need information in an alternate format, call{" "}
            {siteConfig.contact.phone} or{" "}
            <Link
              href="#"
              className="rounded-sm text-(--dn-ink) underline decoration-(--dn-rule) underline-offset-[3px] transition-colors hover:text-(--dn-teal) hover:decoration-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal)"
            >
              contact the City Clerk
            </Link>
            . We will work with you to provide the information you need.
          </p>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-4 border-t border-(--dn-rule) pt-6 text-[13px] text-(--dn-ink-soft) sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {utilityLinks.map((label) => (
              <li key={label}>
                <Link
                  href="#"
                  className="rounded-sm transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--dn-teal)"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
