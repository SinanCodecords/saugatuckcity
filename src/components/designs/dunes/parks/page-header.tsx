import Image from "next/image"
import Link from "next/link"

import { pageHref } from "@/content/home"
import { parksImages, parksIntro, reservePark } from "@/content/parks"

import {
  breadcrumbLink,
  container,
  JumpNav,
  kicker,
  serif,
} from "../about/shared"

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
    <header className="pt-7 pb-14 lg:pt-11 lg:pb-20">
      <div className={container}>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.18em] text-(--dn-ink-soft) uppercase">
            <li className="flex items-center gap-2">
              <Link href={pageHref("dunes", "home")} className={breadcrumbLink}>
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

        <p className={`mt-10 sm:mt-12 lg:mt-16 ${kicker}`}>
          The outdoors · A guide
        </p>
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

          <JumpNav
            id="dn-parks-contents"
            label="In this guide"
            items={inThisGuide}
          />
        </div>
      </div>

      {/* The About feature's wide photograph: this page is a travel feature too. */}
      <figure className="mx-auto mt-10 w-full max-w-[96rem] sm:mt-12 sm:px-8 lg:mt-16">
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
