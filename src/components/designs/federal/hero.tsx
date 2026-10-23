import Image from "next/image"

import { heroImages } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, focusRing } from "./shared"

/**
 * USWDS "hero" pattern: a callout box beside a photograph. The photo stacks
 * above the callout on small screens.
 */
export function Hero() {
  return (
    <section aria-labelledby="federal-hero-heading" className="bg-(--gray-5)">
      <Container className="py-8 sm:py-10 lg:py-12">
        <div className="grid overflow-hidden rounded-[4px] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
          <div className="relative order-1 aspect-[16/9] min-h-[220px] lg:order-2 lg:aspect-auto lg:min-h-[380px]">
            <Image
              src={heroImages.harbor}
              alt="Boats moored at the Saugatuck harbor on the Kalamazoo River with trees along the far shore."
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
          <div className="order-2 flex flex-col justify-center bg-(--primary-dark) px-6 py-8 text-white sm:px-8 sm:py-10 lg:order-1 lg:px-10">
            <p className="m-0 text-[15px] font-bold tracking-[0.08em] text-[#dfe1e2] uppercase">
              City Hall
            </p>
            <h1
              id="federal-hero-heading"
              className="mt-2 text-[34px] leading-[1.15] font-bold text-balance sm:text-[40px] lg:text-[44px]"
            >
              City services, meetings, and news &mdash; all in one place.
            </h1>
            <p className="mt-4 max-w-[48ch] text-[17px] leading-relaxed text-[#dfe1e2] sm:text-[18px]">
              Pay a bill, pull a permit, find a meeting agenda, or report a
              problem. If you cannot find what you need, call City Hall and we
              will point you to the right person.
            </p>
            <div className="mt-6">
              <a
                href="#federal-most-requested"
                className={cn(
                  "inline-flex min-h-12 items-center justify-center rounded-[4px] bg-white px-6 py-3 text-[17px] leading-none font-bold text-(--primary-dark) hover:bg-[#dfe1e2]",
                  focusRing
                )}
              >
                Find a service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
