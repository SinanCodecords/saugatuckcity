import { ArrowUp, Star } from "lucide-react"

import { siteConfig } from "@/config/site"
import { departments, mainNav, quickLinks } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, focusRing } from "./shared"

const footerLink = cn(
  "inline-block py-1 text-[16px] leading-snug text-white underline-offset-[3px] hover:underline",
  focusRing
)

const identifierLink = cn(
  "inline-block text-[15px] leading-snug text-[#dfe1e2] underline underline-offset-[3px] hover:text-white",
  focusRing
)

const governmentLinks = mainNav.filter((item) => item.label !== "Home")

/** USWDS "big footer" with the "identifier" section beneath it. */
export function SiteFooter() {
  return (
    <footer className="text-white">
      <div className="bg-(--primary-dark)">
        <Container>
          <div className="flex justify-end border-b border-white/20 py-3">
            <a
              href="#federal-top"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-[2px] text-[16px] font-semibold text-white underline-offset-[3px] hover:underline",
                focusRing
              )}
            >
              <ArrowUp aria-hidden="true" className="size-4" />
              Return to top
            </a>
          </div>

          <div className="grid gap-8 py-10 sm:grid-cols-3">
            <nav aria-labelledby="federal-footer-government">
              <h2
                id="federal-footer-government"
                className="mb-3 text-[18px] font-bold"
              >
                Government
              </h2>
              <ul className="m-0 list-none p-0">
                {governmentLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={footerLink}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="federal-footer-services">
              <h2
                id="federal-footer-services"
                className="mb-3 text-[18px] font-bold"
              >
                Services
              </h2>
              <ul className="m-0 list-none p-0">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href="#" className={footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-labelledby="federal-footer-departments">
              <h2
                id="federal-footer-departments"
                className="mb-3 text-[18px] font-bold"
              >
                Departments
              </h2>
              <ul className="m-0 list-none p-0">
                {departments.map((department) => (
                  <li key={department}>
                    <a href="#" className={footerLink}>
                      {department}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>

      <div className="bg-(--primary-darker)">
        <Container className="py-6">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-0.5 flex size-10 shrink-0 items-center justify-center bg-(--primary)"
            >
              <Star className="size-5 fill-white text-white" strokeWidth={1} />
            </span>
            <div className="text-[15px] leading-relaxed text-[#dfe1e2]">
              <p className="m-0 font-bold text-white">
                An official website of the City of Saugatuck, Michigan
              </p>
              <p className="m-0">
                {siteConfig.contact.address} &middot;{" "}
                <a href="#" className={identifierLink}>
                  {siteConfig.contact.phone}
                </a>
              </p>
            </div>
          </div>

          <nav
            aria-label="Important links"
            className="mt-5 border-t border-white/20 pt-5"
          >
            <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-2 p-0">
              <li>
                <a href="#" className={identifierLink}>
                  Accessibility statement
                </a>
              </li>
              <li>
                <a href="#" className={identifierLink}>
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className={identifierLink}>
                  Freedom of Information Act (FOIA)
                </a>
              </li>
              <li>
                <a href="#" className={identifierLink}>
                  Site map
                </a>
              </li>
            </ul>
          </nav>

          <p className="mt-5 mb-0 text-[15px] text-[#dfe1e2]">
            &copy; 2026 City of Saugatuck, Michigan. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}
