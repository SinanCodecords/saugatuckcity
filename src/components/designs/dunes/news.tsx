import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { formatDate, news } from "@/content/home"

export function DunesNews() {
  const [feature, ...rest] = news

  return (
    <section
      aria-labelledby="news-heading"
      className="border-t border-(--dn-rule) bg-(--dn-bg-deep)/40"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-teal) uppercase">
              News
            </p>
            <h2
              id="news-heading"
              className="mt-3 font-(family-name:--font-dunes-serif) text-3xl leading-tight font-light tracking-[-0.01em] sm:text-4xl"
            >
              From City Hall
            </h2>
          </div>
          <Link
            href="#"
            className="group inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal) sm:self-auto"
          >
            All news
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Feature story */}
          <article className="lg:col-span-7">
            <Link
              href="#"
              className="group block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal)"
            >
              <div className="relative aspect-3/2 overflow-hidden rounded-sm bg-(--dn-bg-deep)">
                <Image
                  src={feature.image}
                  alt="Sailboats moored along the Kalamazoo River harbor in Saugatuck"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6 flex items-baseline gap-3 text-[11px] tracking-[0.16em] uppercase">
                <span className="font-semibold text-(--dn-terra)">
                  {feature.category}
                </span>
                <span aria-hidden="true" className="text-(--dn-rule)">
                  |
                </span>
                <time dateTime={feature.date} className="text-(--dn-ink-soft)">
                  {formatDate(feature.date)}
                </time>
              </div>
              <h3 className="mt-3 font-(family-name:--font-dunes-serif) text-3xl leading-[1.15] text-balance text-(--dn-ink) transition-colors group-hover:text-(--dn-teal) sm:text-4xl">
                {feature.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-(--dn-ink-soft)">
                {feature.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--dn-ink) transition-colors group-hover:text-(--dn-teal)">
                Read the story
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </article>

          {/* Vertical list */}
          <div className="lg:col-span-5">
            <h3 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase">
              More headlines
            </h3>
            <ul className="mt-4 border-t border-(--dn-rule)">
              {rest.map((item) => (
                <li key={item.title} className="border-b border-(--dn-rule)">
                  <article>
                    <Link
                      href="#"
                      className="group block rounded-sm py-6 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--dn-teal)"
                    >
                      <div className="flex items-baseline gap-3 text-[11px] tracking-[0.16em] uppercase">
                        <time
                          dateTime={item.date}
                          className="text-(--dn-ink-soft) tabular-nums"
                        >
                          {formatDate(item.date)}
                        </time>
                        <span aria-hidden="true" className="text-(--dn-rule)">
                          |
                        </span>
                        <span className="font-semibold text-(--dn-teal)">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="mt-2.5 font-(family-name:--font-dunes-serif) text-[22px] leading-snug text-(--dn-ink) transition-colors group-hover:text-(--dn-teal)">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-(--dn-ink-soft)">
                        {item.excerpt}
                      </p>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
