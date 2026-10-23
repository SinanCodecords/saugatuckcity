import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { aboutImages, aboutIntro } from "@/content/about"
import { pageHref } from "@/content/home"

import { container, focusRing, kicker, serif } from "./shared"

const inThisFeature = [
  { label: "Government", href: "#government" },
  { label: "History", href: "#history" },
  { label: "Visit City Hall", href: "#visit" },
] as const

export function DunesAboutHeader() {
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
                About
              </span>
            </li>
          </ol>
        </nav>

        <p className={`mt-12 lg:mt-16 ${kicker}`}>The City · A feature</p>
        <h1
          id="dn-about-heading"
          className={`mt-5 ${serif} text-[3.25rem] leading-[0.98] font-light tracking-[-0.03em] text-balance sm:text-7xl lg:text-8xl xl:text-[8.5rem]`}
        >
          {aboutIntro.title}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-(--dn-rule) pt-8 lg:mt-12 lg:grid-cols-12 lg:gap-10">
          <p
            className={`${serif} text-xl leading-snug font-light text-pretty text-(--dn-ink) sm:text-2xl lg:col-span-8 lg:text-[1.75rem] lg:leading-[1.35]`}
          >
            {aboutIntro.lead}
          </p>

          <nav
            aria-labelledby="dn-about-contents"
            className="lg:col-span-3 lg:col-start-10"
          >
            <p
              id="dn-about-contents"
              className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"
            >
              In this feature
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 lg:flex-col">
              {inThisFeature.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`group inline-flex items-center gap-1.5 rounded-sm text-[15px] font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) ${focusRing}`}
                  >
                    {item.label}
                    <ArrowDown
                      className="size-3.5 text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5"
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

      {/* Wide photograph */}
      <figure className="mx-auto mt-12 w-full max-w-[96rem] sm:px-8 lg:mt-16">
        <div className="relative aspect-4/3 overflow-hidden bg-(--dn-bg-deep) sm:aspect-2/1 sm:rounded-sm lg:aspect-21/9">
          <Image
            src={aboutImages.banner}
            alt="A white-sailed boat on calm open water under a pale sky"
            fill
            preload
            sizes="(min-width: 1536px) 96rem, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 flex flex-col gap-1 px-5 text-[11px] tracking-[0.14em] text-(--dn-ink-soft) uppercase sm:flex-row sm:items-baseline sm:justify-between sm:px-0">
          <span>Under sail off the Saugatuck shore</span>
          <span>Lake Michigan</span>
        </figcaption>
      </figure>
    </header>
  )
}
