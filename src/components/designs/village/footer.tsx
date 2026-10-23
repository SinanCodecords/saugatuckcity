import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { departments, mainNav, navHref, news } from "@/content/home"
import { cn } from "@/lib/utils"

import { Seal } from "./header"
import { Container, focusRing, heading } from "./shared"

const footerLink = cn(
  focusRing,
  "inline-block rounded-md text-[0.95rem] text-white/80 transition-colors hover:text-white hover:underline focus-visible:ring-offset-(--v-primary)"
)

/** Link lists: the `py-1` on each link keeps rows at a comfortable touch height. */
const linkList = "mt-3 flex flex-col gap-0.5"
const listLink = cn(footerLink, "py-1 leading-snug")

/** Derived from content rather than `new Date()` so the page stays fully static. */
const copyrightYear = news[0].date.slice(0, 4)

const residentLinks = [
  "Pay a utility bill",
  "Trash & recycling schedule",
  "Agendas & minutes",
  "Permits & applications",
  "Report a problem",
  "Freedom of Information requests",
]

export function VillageFooter() {
  return (
    <footer className="mt-8 bg-(--v-primary) text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:gap-x-10 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 md:col-span-1 lg:col-span-4">
            <a
              href="#"
              className={cn(
                focusRing,
                "inline-flex items-center gap-3 rounded-full focus-visible:ring-offset-(--v-primary)"
              )}
            >
              <Seal className="ring-white/20" />
              <span className="flex flex-col leading-tight">
                <span className={cn(heading, "text-lg font-extrabold")}>
                  {siteConfig.name}
                </span>
                <span className="text-xs font-medium text-white/70">
                  Michigan, est. 1868
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-white/80">
              A small lakeside town on the Kalamazoo River harbor, home to about
              nine hundred year-round neighbors and a great many summer friends.
            </p>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h2
              className={cn(
                heading,
                "text-sm font-bold tracking-wide uppercase"
              )}
            >
              Visit or call
            </h2>
            <address className="mt-4 flex flex-col gap-3 text-[0.95rem] text-white/80 not-italic">
              <span className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.address}</span>
              </span>
              <span className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className={footerLink}
                >
                  {siteConfig.contact.phone}
                </a>
              </span>
              <span className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{siteConfig.contact.hours}</span>
              </span>
              <span className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a href="#" className={footerLink}>
                  Send City Hall a message
                </a>
              </span>
            </address>
          </div>

          <nav aria-label="Footer" className="min-w-0 lg:col-span-2">
            <h2
              className={cn(
                heading,
                "text-sm font-bold tracking-wide uppercase"
              )}
            >
              Explore
            </h2>
            <ul className={linkList}>
              {mainNav
                .filter((item) => item.label !== "Home")
                .map((item) => (
                  <li key={item.label}>
                    <a href={navHref("village", item)} className={listLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-3">
            <h2
              className={cn(
                heading,
                "text-sm font-bold tracking-wide uppercase"
              )}
            >
              For residents
            </h2>
            <ul className={linkList}>
              {residentLinks.map((label) => (
                <li key={label}>
                  <a href="#" className={listLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-white/10 p-5 sm:p-6">
          <h2 className={cn(heading, "text-base font-extrabold")}>
            Accessibility
          </h2>
          <p className="mt-2 max-w-3xl text-[0.95rem] leading-relaxed text-white/85">
            The City of Saugatuck is committed to making this website usable by
            everyone, including people who rely on assistive technology. We aim
            to meet WCAG 2.1 Level AA. If you have trouble using any part of
            this site or need a document in another format, call{" "}
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
              className={cn(footerLink, "font-semibold text-white underline")}
            >
              {siteConfig.contact.phone}
            </a>{" "}
            or{" "}
            <a
              href="#"
              className={cn(footerLink, "font-semibold text-white underline")}
            >
              send us a note
            </a>
            . We will do our best to help within two business days.
          </p>
          <p className="mt-3 text-sm text-white/70">
            Departments: {departments.join(", ")}.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {copyrightYear} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="-my-1 flex flex-wrap gap-x-5 gap-y-1">
            <li>
              <a href="#" className={listLink}>
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className={listLink}>
                Site map
              </a>
            </li>
            <li>
              <a href="#" className={listLink}>
                Staff login
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
