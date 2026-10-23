import { ArrowRight, Clock, MapPin } from "lucide-react"

import { formatDate, meetings, news, quickLinks } from "@/content/home"

const viewAllLink =
  "inline-flex items-center gap-1.5 text-[15px] font-semibold text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"

const extraQuickLinks = ["Staff Directory", "FAQs", "Bids & RFPs"]

function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <h2
      id={id}
      className="border-b-[3px] border-(--civic-blue) pb-2 text-xl font-bold text-slate-900"
    >
      {children}
    </h2>
  )
}

function monthDay(iso: string) {
  const d = new Date(`${iso}T12:00:00`)
  return {
    month: d.toLocaleDateString("en-US", { month: "short" }),
    day: d.toLocaleDateString("en-US", { day: "numeric" }),
  }
}

export function NewsCalendarLinks() {
  return (
    <section
      aria-label="News, calendar and quick links"
      className="bg-(--civic-gray) py-14 sm:py-16"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr_0.8fr] lg:gap-12 lg:px-8">
        {/* News Flash */}
        <div aria-labelledby="civic-news-heading" role="region">
          <SectionHeading id="civic-news-heading">News Flash</SectionHeading>
          <ul className="mt-4 divide-y divide-slate-200">
            {news.map((item) => (
              <li key={item.title} className="py-4 first:pt-2">
                <p className="text-sm font-semibold text-slate-600">
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                  <span aria-hidden="true"> · </span>
                  {item.category}
                </p>
                <h3 className="mt-1 text-[17px] leading-snug font-bold">
                  <a
                    href="#"
                    className="text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
                  >
                    {item.title}
                  </a>
                </h3>
                <p className="mt-1.5 line-clamp-1 text-base leading-relaxed text-slate-700">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-1.5 inline-flex items-center gap-1 text-sm font-semibold text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
                  aria-label={`Read on: ${item.title}`}
                >
                  Read on…
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className={`${viewAllLink} mt-3`}>
            View all news
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        {/* Calendar */}
        <div aria-labelledby="civic-calendar-heading" role="region">
          <SectionHeading id="civic-calendar-heading">Calendar</SectionHeading>
          <ul className="mt-4 divide-y divide-slate-200">
            {meetings.map((m) => {
              const { month, day } = monthDay(m.date)
              return (
                <li
                  key={`${m.title}-${m.date}`}
                  className="flex gap-4 py-4 first:pt-2"
                >
                  <time
                    dateTime={m.date}
                    className="flex size-16 shrink-0 flex-col items-center justify-center rounded-md border border-slate-200 bg-white text-center shadow-sm"
                  >
                    <span className="text-[11px] font-bold tracking-wider text-(--civic-blue) uppercase">
                      {month}
                    </span>
                    <span className="text-2xl leading-none font-bold text-slate-900">
                      {day}
                    </span>
                  </time>
                  <div className="min-w-0">
                    <h3 className="text-[17px] leading-snug font-bold">
                      <a
                        href="#"
                        className="text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
                      >
                        {m.title}
                      </a>
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-sm text-slate-700">
                      <span className="inline-flex items-center gap-1">
                        <Clock
                          aria-hidden="true"
                          className="size-3.5 text-slate-500"
                        />
                        {m.time}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin
                          aria-hidden="true"
                          className="size-3.5 text-slate-500"
                        />
                        {m.location}
                      </span>
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
          <a href="#" className={`${viewAllLink} mt-3`}>
            View full calendar
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </div>

        {/* Quick Links */}
        <nav aria-labelledby="civic-quicklinks-heading">
          <SectionHeading id="civic-quicklinks-heading">
            Quick Links
          </SectionHeading>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-base marker:text-(--civic-blue)">
            {[...quickLinks.map((q) => q.label), ...extraQuickLinks].map(
              (label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-(--civic-blue) underline-offset-2 hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
                  >
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </section>
  )
}
