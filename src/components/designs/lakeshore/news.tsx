import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { formatDate, news } from "@/content/home"

import { container, focusRing, sectionHeading, textLink } from "./styles"

export function LatestNews() {
  const [first, second, third, fourth] = news
  const featured = [first, second, third]

  return (
    <section
      aria-labelledby="news-heading"
      className="border-y border-slate-200 bg-(--lk-surface)"
    >
      <div className={`${container} py-14 sm:py-16`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="news-heading" className={sectionHeading}>
            Latest news
          </h2>
          <Link href="#" className={textLink}>
            All news
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((item) => (
            <li key={item.title}>
              <article className="group h-full">
                <Link
                  href="#"
                  className={`${focusRing} flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-px hover:border-slate-300 hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)]`}
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="font-medium text-(--lk-blue-text)">
                        {item.category}
                      </span>
                      <span aria-hidden="true">&middot;</span>
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </div>
                    <h3 className="mt-2.5 text-lg leading-snug font-semibold tracking-tight text-slate-900 group-hover:text-(--lk-blue-text)">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white">
          <Link
            href="#"
            className={`${focusRing} group flex flex-col gap-1 rounded-2xl px-5 py-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:gap-4`}
          >
            <span className="flex items-center gap-2 text-xs text-slate-600 sm:w-56 sm:shrink-0">
              <span className="font-medium text-(--lk-blue-text)">
                {fourth.category}
              </span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={fourth.date}>{formatDate(fourth.date)}</time>
            </span>
            <span className="flex-1 text-sm font-medium text-slate-900 group-hover:text-(--lk-blue-text) sm:text-[15px]">
              {fourth.title}
            </span>
            <ArrowRight
              className="hidden size-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-(--lk-blue-text) sm:block"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
