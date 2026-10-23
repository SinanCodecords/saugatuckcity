import Link from "next/link"
import { Accessibility } from "lucide-react"

import { siteConfig } from "@/config/site"
import { departments, mainNav } from "@/content/home"

import { container, focusRing } from "./styles"

const resources = [
  "Agendas & Minutes",
  "Forms & Applications",
  "Ordinances",
  "Employment",
  "Public Notices",
  "FOIA Requests",
] as const

const footerLink = `${focusRing} rounded-sm text-sm text-slate-600 transition-colors hover:text-slate-900 hover:underline`

export function SiteFooter() {
  // Static so the page prerenders fully under Cache Components (no Date.now()).
  const year = 2026
  const government = mainNav.filter((item) => item.label !== "Home")

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className={`${container} py-12 sm:py-16`}>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">
              Saugatuck
            </p>
            <p className="text-xs font-medium tracking-wide text-slate-500">
              City of &middot; Michigan
            </p>
            <address className="mt-4 text-sm leading-6 text-slate-600 not-italic">
              {siteConfig.contact.address}
              <br />
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^\d]/g, "")}`}
                className={`${focusRing} rounded-sm text-slate-900 hover:underline`}
              >
                {siteConfig.contact.phone}
              </a>
              <br />
              {siteConfig.contact.hours}
            </address>
          </div>

          <nav aria-labelledby="footer-government">
            <h2
              id="footer-government"
              className="text-xs font-semibold tracking-wide text-slate-900 uppercase"
            >
              Government
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {government.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-departments">
            <h2
              id="footer-departments"
              className="text-xs font-semibold tracking-wide text-slate-900 uppercase"
            >
              Departments
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {departments.slice(0, 7).map((name) => (
                <li key={name}>
                  <Link href="#" className={footerLink}>
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className={`${footerLink} font-medium text-(--lk-blue-text) hover:text-(--lk-blue-text)`}
                >
                  All departments
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-labelledby="footer-resources">
            <h2
              id="footer-resources"
              className="text-xs font-semibold tracking-wide text-slate-900 uppercase"
            >
              Resources
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {resources.map((name) => (
                <li key={name}>
                  <Link href="#" className={footerLink}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 lg:flex-row lg:items-start lg:justify-between">
          <p className="flex max-w-2xl gap-2 leading-6">
            <Accessibility
              className="mt-1 size-4 shrink-0 text-(--lk-blue-text)"
              aria-hidden="true"
            />
            <span>
              The City of Saugatuck is committed to making this website
              accessible to everyone, in line with WCAG 2.1 AA. If you have
              trouble using any part of this site or need information in another
              format,{" "}
              <Link
                href="#"
                className={`${focusRing} rounded-sm font-medium text-slate-900 underline underline-offset-4`}
              >
                tell us
              </Link>{" "}
              and we will help.
            </span>
          </p>
          <div className="flex flex-col gap-2 text-xs text-slate-500 lg:items-end">
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              <li>
                <Link
                  href="#"
                  className={`${focusRing} rounded-sm hover:underline`}
                >
                  Accessibility statement
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${focusRing} rounded-sm hover:underline`}
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${focusRing} rounded-sm hover:underline`}
                >
                  Site map
                </Link>
              </li>
            </ul>
            <p>
              &copy; {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
