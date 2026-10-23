import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { formatDate, news } from "@/content/home"

export function BeaconNews() {
  return (
    <section
      aria-labelledby="beacon-news-heading"
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--beacon-amber-deep)] uppercase">
              News &amp; notices
            </p>
            <h2
              id="beacon-news-heading"
              className="mt-2 font-[family-name:var(--font-beacon-display)] text-3xl font-bold tracking-[-0.03em] sm:text-4xl"
            >
              The latest from City Hall
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold underline decoration-[var(--beacon-amber)] decoration-2 underline-offset-4 hover:text-[var(--beacon-muted)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-ink)] focus-visible:outline-none"
          >
            All news
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-10 grid gap-8 md:grid-cols-2 lg:gap-10">
          {news.map((item, index) => (
            <li key={item.title}>
              <article className="group flex h-full flex-col">
                <a
                  href="#"
                  className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--beacon-surface)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-ink)] focus-visible:ring-offset-2 focus-visible:outline-none"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </a>
                <div className="mt-5 flex items-center gap-3 text-xs font-bold tracking-[0.16em] uppercase">
                  <span className="text-[var(--beacon-amber-deep)]">
                    {item.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-[var(--beacon-line)]"
                  />
                  <time
                    dateTime={item.date}
                    className="font-semibold tracking-normal text-[var(--beacon-muted)] normal-case"
                  >
                    {formatDate(item.date)}
                  </time>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-beacon-display)] text-2xl leading-tight font-bold tracking-[-0.03em] sm:text-3xl">
                  <a
                    href="#"
                    className="rounded decoration-[var(--beacon-amber)] decoration-[3px] underline-offset-4 group-hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:ring-[var(--beacon-ink)] focus-visible:outline-none"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--beacon-muted)]">
                  {item.excerpt}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
