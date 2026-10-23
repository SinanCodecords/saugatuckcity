import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { aboutImages, aboutIntro } from "@/content/about"
import { pageHref } from "@/content/home"

export function AboutPageHeader() {
  return (
    <div>
      {/* Short photo banner */}
      <div className="relative h-36 w-full sm:h-48 lg:h-56">
        <Image
          src={aboutImages.banner}
          alt="A sailboat on open water"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5"
        />
      </div>

      {/* Page-title band */}
      <div className="border-b border-(--rule) bg-(--band)">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-[0.18em] uppercase">
              <li className="flex items-center gap-2">
                <Link
                  href={pageHref("classic", "home")}
                  className="text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
                >
                  Home
                </Link>
                <ChevronRight
                  aria-hidden="true"
                  className="size-3.5 text-(--muted)"
                />
              </li>
              <li>
                <span aria-current="page" className="text-(--muted)">
                  About
                </span>
              </li>
            </ol>
          </nav>

          <h1
            id="classic-about-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--ink) sm:text-4xl"
          >
            {aboutIntro.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-(--body)">
            {aboutIntro.lead}
          </p>
        </div>
      </div>
    </div>
  )
}
