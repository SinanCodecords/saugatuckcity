import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { heroImages } from "@/content/home"

const ctas = [
  { label: "Find a city service", href: "#" },
  { label: "Attend a council meeting", href: "#" },
] as const

export function DunesHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto w-full max-w-7xl px-5 pt-12 pb-16 sm:px-8 lg:pt-20 lg:pb-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-7">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-teal) uppercase">
            Welcome
          </p>
          <h1
            id="hero-heading"
            className="mt-5 font-(family-name:--font-dunes-serif) text-[2.75rem] leading-[1.02] font-light tracking-[-0.02em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            A small city on the big lake.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-(--dn-ink-soft) sm:text-xl">
            Saugatuck sits where the Kalamazoo River meets Lake Michigan, with
            dunes to the north, galleries on Butler Street and a working harbor
            in between. City Hall is here to help you pay a bill, pull a permit
            or have your say.
          </p>

          <ul className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-9">
            {ctas.map((cta) => (
              <li key={cta.label}>
                <Link
                  href={cta.href}
                  className="group inline-flex items-center gap-2 rounded-sm border-b border-(--dn-ink) pb-1 text-[15px] font-medium text-(--dn-ink) transition-colors hover:border-(--dn-teal) hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal)"
                >
                  {cta.label}
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait photo with offset frame */}
        <div className="lg:col-span-5">
          <figure className="relative mx-auto max-w-md lg:ml-auto lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-3 h-full w-full rounded-sm border border-(--dn-terra) sm:-top-4 sm:-right-4"
            />
            <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-(--dn-bg-deep)">
              <Image
                src={heroImages.dunes}
                alt="Grass-topped sand dunes above Lake Michigan near Saugatuck under a soft sky"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between text-[11px] tracking-[0.14em] text-(--dn-ink-soft) uppercase">
              <span>Mount Baldhead dunes</span>
              <span>Autumn, 2026</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
