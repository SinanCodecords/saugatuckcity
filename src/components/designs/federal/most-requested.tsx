import { ArrowRight } from "lucide-react"

import { quickLinks } from "@/content/home"
import { cn } from "@/lib/utils"

import { quickLinkIcons } from "./icons"
import { Container, SectionHeading, focusRing, textLink } from "./shared"

/** USWDS "card group": hairline-bordered cards, three across on desktop. */
export function MostRequested() {
  return (
    <section
      id="federal-most-requested"
      aria-labelledby="federal-most-requested-heading"
      className="scroll-mt-14 bg-white"
    >
      <Container className="py-10 sm:py-12">
        <SectionHeading
          id="federal-most-requested-heading"
          title="Most requested"
          linkLabel="Browse all services"
        />
        <ul className="m-0 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => {
            const Icon = quickLinkIcons[link.icon]
            return (
              <li
                key={link.label}
                className="flex flex-col rounded-[4px] border border-(--gray-30) bg-white"
              >
                <div className="flex flex-1 flex-col p-5">
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="size-8 text-(--primary)"
                      strokeWidth={1.75}
                    />
                  ) : null}
                  <h3 className="mt-3 text-[20px] leading-snug font-bold">
                    {link.label}
                  </h3>
                  <p className="mt-2 mb-0 text-[16px] leading-relaxed text-(--gray-60)">
                    {link.description}
                  </p>
                </div>
                <div className="border-t border-(--gray-10) px-5 py-3">
                  <a
                    href="#"
                    className={cn(
                      textLink,
                      "inline-flex items-center gap-1 text-[16px] font-semibold",
                      focusRing
                    )}
                  >
                    Go to {link.label}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
