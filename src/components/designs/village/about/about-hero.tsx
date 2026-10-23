import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { aboutImages, aboutIntro, history } from "@/content/about"
import { pageHref } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, PillLink, focusRing, heading } from "../shared"

const jumps = [
  { label: "How the City is run", href: "#village-government" },
  { label: "Our story", href: "#village-history" },
  { label: "Visit City Hall", href: "#village-visit" },
]

export function VillageAboutHero() {
  return (
    <section
      aria-labelledby="village-about-title"
      className="pt-10 pb-6 sm:pt-14"
    >
      <Container>
        <nav aria-label="Breadcrumb">
          <ol
            className={cn(
              heading,
              "flex flex-wrap items-center gap-1 text-sm font-bold text-(--v-muted)"
            )}
          >
            <li className="flex items-center gap-1">
              <a
                href={pageHref("village", "home")}
                className={cn(
                  focusRing,
                  "rounded-full px-2 py-1 transition-colors hover:bg-(--v-mint) hover:text-(--v-primary)"
                )}
              >
                Home
              </a>
              <ChevronRight className="size-4" aria-hidden="true" />
            </li>
            <li>
              <span
                aria-current="page"
                className="rounded-full bg-(--v-mint) px-3 py-1 text-(--v-primary)"
              >
                About
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p
              className={cn(
                heading,
                "mb-3 text-sm font-bold tracking-wide text-(--v-primary) uppercase"
              )}
            >
              Get to know us
            </p>
            <h1
              id="village-about-title"
              className={cn(
                heading,
                "text-5xl leading-[1.02] font-extrabold tracking-tight text-(--v-text) sm:text-6xl"
              )}
            >
              {aboutIntro.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-(--v-text) sm:text-xl">
              {aboutIntro.lead}
            </p>
            {aboutIntro.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 max-w-xl text-base leading-relaxed text-(--v-muted) sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <ul
              aria-label="Jump to"
              className="mt-8 flex flex-wrap gap-2.5 sm:gap-3"
            >
              {jumps.map((jump, index) => (
                <li key={jump.href}>
                  <PillLink
                    href={jump.href}
                    tone={index === 0 ? "primary" : "secondary"}
                  >
                    {jump.label}
                  </PillLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md pb-8 lg:max-w-none">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-24px_rgba(29,92,74,0.5)] sm:aspect-[5/5]">
              <Image
                src={aboutImages.banner}
                alt="A sailboat out on the open water of Lake Michigan"
                fill
                preload
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-2 aspect-square w-[42%] overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-24px_rgba(29,92,74,0.5)] ring-6 ring-(--v-bg) sm:-left-6">
              <Image
                src={aboutImages.sunset}
                alt="The sun setting over the lake"
                fill
                sizes="(max-width: 1024px) 40vw, 18vw"
                className="object-cover"
              />
            </div>

            <div
              className={cn(
                heading,
                "absolute -top-3 right-2 flex size-24 rotate-12 flex-col items-center justify-center rounded-full bg-(--v-primary) text-center text-white shadow-[0_14px_30px_-12px_rgba(29,92,74,0.7)] ring-4 ring-white sm:-right-3 sm:size-28"
              )}
            >
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase">
                Since
              </span>
              <span className="text-2xl leading-none font-extrabold sm:text-3xl">
                {history[0].year}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
