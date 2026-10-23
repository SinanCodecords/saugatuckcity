import Link from "next/link"
import { Clock, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { departments, mainNav, quickLinks } from "@/content/home"

import { BeaconWordmark } from "./wordmark"

const columns = [
  {
    heading: "Navigate",
    links: mainNav
      .filter((item) => item.label !== "Home")
      .map((item) => item.label),
  },
  {
    heading: "Services",
    links: quickLinks.map((link) => link.label),
  },
  {
    heading: "Departments",
    links: departments.slice(0, 6),
  },
] as const

const footerLinkClass =
  "rounded text-sm text-[var(--beacon-muted-dark)] transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)]"

export function BeaconFooter() {
  const year = 2026

  return (
    <footer className="bg-[var(--beacon-ink)] text-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="#"
              className="inline-block rounded-md focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--beacon-ink)] focus-visible:outline-none"
              aria-label="City of Saugatuck, Michigan — home"
            >
              <BeaconWordmark size="lg" />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--beacon-muted-dark)]">
              A small lakeside city on the Kalamazoo River harbor and the shore
              of Lake Michigan. Home to about a thousand year-round residents
              and a great many more friends.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-4">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="text-xs font-bold tracking-[0.18em] text-[var(--beacon-amber)] uppercase">
                  {column.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((label) => (
                    <li key={label}>
                      <a href="#" className={footerLinkClass}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="text-xs font-bold tracking-[0.18em] text-[var(--beacon-amber)] uppercase">
                City Hall
              </h2>
              <address className="mt-4 space-y-3 text-sm text-[var(--beacon-muted-dark)] not-italic">
                <p className="flex gap-2.5">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.contact.address}</span>
                </p>
                <p className="flex gap-2.5">
                  <Phone
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <a
                    href={`tel:+1${siteConfig.contact.phone.replace(/\D/g, "")}`}
                    className="rounded transition-colors hover:text-white focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:outline-none"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p className="flex gap-2.5">
                  <Clock
                    className="mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{siteConfig.contact.hours}</span>
                </p>
              </address>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-[var(--beacon-ink-line)] pt-8">
          <p className="max-w-3xl text-sm leading-relaxed text-[var(--beacon-muted-dark)]">
            <strong className="font-semibold text-white">Accessibility.</strong>{" "}
            The City of Saugatuck is committed to making this website usable by
            everyone, including people who rely on assistive technology. If you
            have trouble accessing any page or document, call{" "}
            {siteConfig.contact.phone} or{" "}
            <a
              href="#"
              className="rounded font-medium text-white underline decoration-[var(--beacon-amber)] decoration-2 underline-offset-4 hover:text-[var(--beacon-amber)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:outline-none"
            >
              request an accessible format
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-4 text-xs text-[var(--beacon-muted-dark)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {siteConfig.name}, Michigan. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Privacy",
                "Accessibility statement",
                "Site map",
                "Staff login",
              ].map((label) => (
                <li key={label}>
                  <a href="#" className={`${footerLinkClass} text-xs`}>
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
