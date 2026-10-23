import Image from "next/image"
import { ArrowRight, Building2, Trees, Users } from "lucide-react"

import { departments, heroImages, pageHref } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, SectionHeading, focusRing, heading } from "./shared"

const tiles = [
  {
    title: "Parks & Beaches",
    href: pageHref("village", "parks"),
    line: "Oval Beach, Mount Baldhead, the chain ferry and a dozen pocket parks.",
    image: heroImages.dunes,
    alt: "Grass-covered sand dunes above Lake Michigan",
    icon: Trees,
  },
  {
    title: "Boards & Committees",
    href: pageHref("village", "boards"),
    line: "Meet the volunteers who shape planning, the harbor and downtown.",
    image: heroImages.harbor,
    alt: "Boats on the calm water of Saugatuck harbor",
    icon: Users,
  },
  {
    title: "Departments",
    href: pageHref("village", "departments"),
    line: `${departments.length} departments, from the Clerk to Public Works, ready to help.`,
    image: heroImages.downtown,
    alt: "Storefronts along a tree-lined downtown street",
    icon: Building2,
  },
]

export function VillageExplore() {
  return (
    <section aria-labelledby="village-explore-title" className="py-12 sm:py-16">
      <Container>
        <SectionHeading
          id="village-explore-title"
          eyebrow="Get to know your city"
          title="Explore Saugatuck"
          description="Whether you have lived here fifty years or fifty minutes, there is always something new to find."
        />

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {tiles.map((tile) => {
            const Icon = tile.icon
            return (
              <li key={tile.title}>
                <a
                  href={tile.href}
                  className={cn(
                    focusRing,
                    "group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[2rem] text-white shadow-[0_24px_50px_-26px_rgba(29,92,74,0.6)] sm:aspect-[5/6]"
                  )}
                >
                  <Image
                    src={tile.image}
                    alt={tile.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#0f3a2e] via-[#0f3a2e]/55 to-transparent"
                  />
                  <div className="relative p-6 sm:p-7">
                    <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3
                      className={cn(
                        heading,
                        "mt-4 text-2xl font-extrabold tracking-tight"
                      )}
                    >
                      {tile.title}
                    </h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-white/85">
                      {tile.line}
                    </p>
                    <span
                      className={cn(
                        heading,
                        "mt-4 inline-flex items-center gap-1 text-sm font-bold"
                      )}
                    >
                      Take a look
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
