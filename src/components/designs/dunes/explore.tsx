import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { heroImages, pageHref } from "@/content/home"

const places = [
  {
    title: "Oval Beach",
    href: `${pageHref("dunes", "parks")}#beach`,
    note: "Ranked among the best freshwater beaches in the country.",
    image: heroImages.lake,
    alt: "Beachgoers on the Lake Michigan shore below grassy dunes",
  },
  {
    title: "Downtown",
    href: "#",
    note: "Galleries, shops and restaurants along Butler Street.",
    image: heroImages.downtown,
    alt: "Ice cream shop sign on a clapboard wall in Saugatuck",
  },
  {
    title: "Harbor",
    href: `${pageHref("dunes", "parks")}#chain-ferry`,
    note: "The Kalamazoo River, the chain ferry and the marina.",
    image: heroImages.marina,
    alt: "The Saugatuck harbor and marina seen through the trees",
  },
] as const

export function DunesExplore() {
  return (
    <section
      aria-labelledby="explore-heading"
      className="border-b border-(--dn-rule)"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-teal) uppercase">
              Explore Saugatuck
            </p>
            <h2
              id="explore-heading"
              className="mt-3 font-(family-name:--font-dunes-serif) text-3xl leading-tight font-light tracking-[-0.01em] sm:text-4xl"
            >
              Three places to start.
            </h2>
          </div>
          <Link
            href={pageHref("dunes", "parks")}
            className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-sm py-1 text-sm font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal) sm:self-auto"
          >
            Parks &amp; Recreation
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-10 sm:mt-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          {places.map((place, index) => (
            <li key={place.title}>
              <Link
                href={place.href}
                className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal)"
              >
                <figure>
                  <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-(--dn-bg-deep) sm:aspect-16/9 md:aspect-4/3">
                    <Image
                      src={place.image}
                      alt={place.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-4 flex items-start justify-between gap-4 border-t border-(--dn-rule) pt-3">
                    <div>
                      <span className="block text-[11px] tracking-[0.18em] text-(--dn-ink-soft) uppercase tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block font-(family-name:--font-dunes-serif) text-2xl leading-tight text-(--dn-ink) transition-colors group-hover:text-(--dn-teal)">
                        {place.title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-(--dn-ink-soft)">
                        {place.note}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="mt-1 size-4 shrink-0 text-(--dn-ink-soft) transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--dn-teal)"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
