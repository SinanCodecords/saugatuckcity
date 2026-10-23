import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

import {
  departmentGroups,
  departmentsImages,
  departmentsIntro,
} from "@/content/departments"
import { pageHref } from "@/content/home"

import { container, focusRing, kicker, serif } from "../about/shared"

const inThisDirectory = [
  { label: "Who do I contact?", href: "#who-to-contact" },
  ...departmentGroups.map((group) => ({
    label: group.title,
    href: `#${group.id}`,
  })),
  { label: "Visit City Hall", href: "#visit" },
]

export function DunesDepartmentsHeader() {
  return (
    <header className="pt-8 pb-12 lg:pt-12 lg:pb-16">
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
                {departmentsIntro.title}
              </span>
            </li>
          </ol>
        </nav>

        <p className={`mt-10 lg:mt-14 ${kicker}`}>The City · A directory</p>
        <h1
          className={`mt-4 ${serif} text-5xl leading-[0.98] font-light tracking-[-0.03em] text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]`}
        >
          {departmentsIntro.title}
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t border-(--dn-rule) pt-8 lg:mt-10 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p
              className={`${serif} text-xl leading-snug font-light text-pretty text-(--dn-ink) sm:text-2xl lg:text-[1.75rem] lg:leading-[1.35]`}
            >
              {departmentsIntro.lead}
            </p>
            <p className="mt-5 max-w-[38rem] text-[17px] leading-[1.7] text-pretty text-(--dn-ink-soft) lg:text-lg">
              {departmentsIntro.body}
            </p>
          </div>

          <nav
            aria-labelledby="dn-departments-contents"
            className="lg:col-span-3 lg:col-start-10"
          >
            <p
              id="dn-departments-contents"
              className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"
            >
              In this directory
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 lg:flex-col">
              {inThisDirectory.map((item) => (
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

      {/* A slim strip rather than the About feature's wide photograph: this is a reference page. */}
      <figure className="mx-auto mt-10 w-full max-w-[96rem] sm:px-8 lg:mt-14">
        <div className="relative aspect-5/2 overflow-hidden bg-(--dn-bg-deep) sm:aspect-3/1 sm:rounded-sm lg:aspect-4/1">
          <Image
            src={departmentsImages.banner}
            alt="Sunset over Lake Michigan"
            fill
            preload
            sizes="(min-width: 1536px) 96rem, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 px-5 text-[11px] tracking-[0.14em] text-(--dn-ink-soft) uppercase sm:px-0">
          Evening on the lake
        </figcaption>
      </figure>
    </header>
  )
}
