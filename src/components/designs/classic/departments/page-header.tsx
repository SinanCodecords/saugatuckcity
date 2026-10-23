import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { departmentsImages, departmentsIntro } from "@/content/departments"
import { pageHref } from "@/content/home"

export function DepartmentsPageHeader() {
  return (
    <div>
      {/* Short photo banner */}
      <div className="relative h-36 w-full sm:h-48 lg:h-56">
        <Image
          src={departmentsImages.banner}
          alt="Sunset over the lake"
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
                  className="inline-block py-1 text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
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
                  Departments
                </span>
              </li>
            </ol>
          </nav>

          <h1
            id="classic-departments-title"
            className="mt-4 text-3xl font-semibold tracking-tight text-(--ink) sm:text-4xl"
          >
            {departmentsIntro.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-pretty text-(--body)">
            {departmentsIntro.lead}
          </p>
        </div>
      </div>
    </div>
  )
}
