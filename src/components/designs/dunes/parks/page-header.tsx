import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { pageHref } from "@/content/home"
import { parksImages, parksIntro, reservePark } from "@/content/parks"

import { container, focusRing, kicker, serif } from "../about/shared"

const inThisGuide = [
  { label: "The beach", href: "#beach" },
  { label: "The ferry", href: "#ferry" },
  { label: "Without a car", href: "#getting-there" },
  { label: "The gazetteer", href: "#gazetteer" },
  { label: "Events", href: "#events" },
  { label: "Park rules", href: "#rules" },
  { label: reservePark.title, href: "#host-an-event" },
  { label: "Visit City Hall", href: "#visit" },
]

export function DunesParksHeader() {
  return (
    <header className="pt-8 pb-14 lg:pt-12 lg:pb-20">
      <div className={container}>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.18em] text-(--dn-ink-soft) uppercase">
            <li className="flex items-center gap-2">
              <Link
                href={pageHref("dunes", "home")}
                className={`rounded-sm underline decoration-(--dn-rule) underline-offset-4 transition-colors hover:text-(--dn-teal) hover:decoration-(--dn-teal) ${focusRing}`}
              >
                Home
              </Link>
              <span aria-hidden="true" className="text-(--dn-terra)">
                /
              </span>
            </li>
            <li>
              <span aria-current="page" className="text-(--dn-ink)">
                {parksIntro.title}
              </span>
            </li>
          </ol>
        </nav>

        <p className={`mt-12 lg:mt-16 ${kicker}`}>The outdoors · A guide</p>
        <h1
          className={`mt-5 ${serif} text-[2.75rem] leading-[0.98] font-light tracking-[-0.03em] text-balance sm:text-7xl lg:text-8xl xl:text-[8rem]`}
        >
          {parksIntro.title}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-(--dn-rule) pt-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <p
            className={`${serif} text-xl leading-snug font-light text-pretty text-(--dn-ink) sm:text-2xl lg:col-span-8 lg:text-[1.75rem] lg:leading-[1.35]`}
          >
            {parksIntro.lead}
          </p>

          <nav
            aria-labelledby="dn-parks-contents"
            className="lg:col-span-3 lg:col-start-10"
          >
            <p
              id="dn-parks-contents"
              className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"
            >
              In this guide
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 lg:flex-col">
              {inThisGuide.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group inline-flex items-center gap-1.5 rounded-sm text-[15px] font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) ${focusRing}`}
                  >
                    {item.label}
                    <ArrowDown
                      className="size-3.5 shrink-0 text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* The About feature's wide photograph: this page is a travel feature too. */}
      <figure className="mx-auto mt-12 w-full max-w-[96rem] sm:px-8 lg:mt-16">
        <div className="relative aspect-4/3 overflow-hidden bg-(--dn-bg-deep) sm:aspect-2/1 sm:rounded-sm lg:aspect-21/9">
          <Image
            src={parksImages.beach}
            alt="The sun setting over Lake Michigan, seen from the shore"
            fill
            preload
            sizes="(min-width: 1536px) 96rem, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 flex flex-col gap-1 px-5 text-[11px] tracking-[0.14em] text-(--dn-ink-soft) uppercase sm:flex-row sm:items-baseline sm:justify-between sm:px-0">
          <span>Sundown on the big lake</span>
          <span>Lake Michigan</span>
        </figcaption>
      </figure>
    </header>
  )
}
