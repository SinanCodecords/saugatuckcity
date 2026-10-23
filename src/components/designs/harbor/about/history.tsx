import Image from "next/image"
import { History as HistoryIcon } from "lucide-react"

import { aboutImages, history } from "@/content/about"

export function History() {
  return (
    <section
      aria-labelledby="harbor-history-heading"
      className="bg-white py-14 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--navy) uppercase">
            <HistoryIcon aria-hidden="true" className="size-4 text-(--gold)" />
            Since {history[0].year}
          </p>
          <h2
            id="harbor-history-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-(--navy) sm:text-3xl"
          >
            Our history
          </h2>
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg bg-slate-100 shadow-sm lg:aspect-[4/5]">
            <Image
              src={aboutImages.history}
              alt="Autumn trees reflected in still water"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <ol className="relative">
          {history.map((entry, index) => {
            const isLast = index === history.length - 1
            return (
              <li key={entry.year} className="relative pb-10 pl-10 last:pb-0">
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute top-5 bottom-0 left-[9px] w-0.5 bg-slate-200"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="absolute top-1 left-0 flex size-5 items-center justify-center rounded-full bg-(--gold) ring-4 ring-(--gold)/20"
                >
                  <span className="size-2 rounded-full bg-(--navy-dark)" />
                </span>
                <p>
                  <time
                    dateTime={entry.year}
                    className="inline-flex rounded bg-(--navy) px-2.5 py-0.5 text-xs font-bold tracking-wider text-white"
                  >
                    {entry.year}
                  </time>
                </p>
                <h3 className="mt-2 text-lg leading-snug font-semibold text-slate-900">
                  {entry.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600">
                  {entry.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
