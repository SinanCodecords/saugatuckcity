import Image from "next/image"

import { formatDate, news } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, SectionHeading, textLink } from "./shared"

/** USWDS "collection": a list of items with a small thumbnail and meta line. */
export function NewsCollection() {
  return (
    <section aria-labelledby="federal-news-heading" className="bg-white">
      <Container className="pb-10 sm:pb-12">
        <SectionHeading
          id="federal-news-heading"
          title="News"
          linkLabel="All news"
        />
        <ul className="m-0 list-none divide-y divide-(--gray-10) p-0">
          {news.map((item) => (
            <li key={item.title} className="flex gap-4 py-5 sm:gap-6">
              <div className="relative hidden h-[107px] w-[160px] shrink-0 overflow-hidden rounded-[2px] bg-(--gray-5) sm:block">
                <Image
                  src={item.image}
                  alt=""
                  width={160}
                  height={107}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-[20px] leading-snug font-bold">
                  <a href="#" className={cn(textLink, "text-(--ink)")}>
                    {item.title}
                  </a>
                </h3>
                <p className="mt-2 mb-0 text-[16px] leading-relaxed">
                  {item.excerpt}
                </p>
                <p className="mt-2 mb-0 text-[15px] text-(--gray-60)">
                  <span>{item.category}</span>
                  <span aria-hidden="true"> &middot; </span>
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
