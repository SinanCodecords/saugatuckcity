import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { boardsImages, boardsIntro } from "@/content/boards"
import { pageHref } from "@/content/home"

export function BoardsPageHeader() {
  return (
    <section
      aria-labelledby="harbor-boards-page-heading"
      className="relative isolate overflow-hidden bg-(--navy-dark) text-white"
    >
      <Image
        src={boardsImages.banner}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[rgba(5,20,42,0.94)] via-[rgba(5,20,42,0.82)] to-[rgba(5,20,42,0.5)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[rgba(5,20,42,0.85)] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-28 sm:px-6 sm:pt-12 sm:pb-32 lg:px-8 lg:pt-14 lg:pb-36">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-200">
            <li className="flex items-center gap-1.5">
              <a
                href={pageHref("harbor", "home")}
                className="inline-block rounded py-0.5 underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-(--gold) focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:outline-none"
              >
                Home
              </a>
              <ChevronRight
                aria-hidden="true"
                className="size-4 text-slate-400"
              />
            </li>
            <li>
              <span aria-current="page" className="font-medium text-white">
                {boardsIntro.title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-8 max-w-2xl lg:mt-10">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-(--gold) uppercase">
            City of Saugatuck, Michigan
          </p>
          <h1
            id="harbor-boards-page-heading"
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {boardsIntro.title}
          </h1>
          <p className="mt-4 max-w-xl text-base text-pretty text-slate-100 sm:text-lg">
            {boardsIntro.lead}
          </p>
          <p className="mt-4 max-w-xl border-l-2 border-(--gold) pl-4 text-sm leading-relaxed text-pretty text-slate-200 sm:text-base">
            {boardsIntro.body}
          </p>
        </div>
      </div>
    </section>
  )
}
