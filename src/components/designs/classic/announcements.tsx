import type { ReactNode } from "react"
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { formatDate, meetings, news } from "@/content/home"

import { keepTimes } from "./about/ui"

const textLink =
  "inline-flex items-center gap-1 py-0.5 text-sm font-semibold text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"

function Widget({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section
      aria-labelledby={id}
      className="overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <h2
        id={id}
        className="border-b border-(--rule) bg-(--band) px-5 py-3 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase"
      >
        {title}
      </h2>
      <div className="px-5 py-4">{children}</div>
    </section>
  )
}

export function Announcements() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
        {/* Announcements */}
        <section aria-labelledby="classic-news" className="lg:col-span-2">
          <div className="flex items-end justify-between gap-4 border-b-2 border-(--ink) pb-3">
            <h2
              id="classic-news"
              className="text-2xl font-semibold tracking-tight text-(--ink)"
            >
              Announcements
            </h2>
            <a href="#" className={textLink}>
              All news
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <ul className="divide-y divide-(--rule)">
            {news.map((item) => (
              <li key={item.title} className="py-6">
                <article>
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-(--muted)">
                    <time
                      dateTime={item.date}
                      className="font-semibold tracking-[0.12em] text-(--body) uppercase"
                    >
                      {formatDate(item.date)}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{item.category}</span>
                  </p>
                  <h3 className="mt-2 text-lg leading-snug font-semibold text-(--ink)">
                    <a
                      href="#"
                      className="hover:text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-(--body)">
                    {item.excerpt}
                  </p>
                  <a href="#" className={`${textLink} mt-3`}>
                    Read more
                    <span className="sr-only">: {item.title}</span>
                    <ChevronRight aria-hidden="true" className="size-4" />
                  </a>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* Sidebar */}
        <aside
          aria-label="Meetings and City Hall"
          className="space-y-8 md:grid md:grid-cols-2 md:items-start md:gap-6 md:space-y-0 lg:block lg:space-y-8"
        >
          <Widget id="classic-meetings" title="Upcoming Meetings">
            <ul className="divide-y divide-(--rule)">
              {meetings.map((meeting) => (
                <li key={`${meeting.date}-${meeting.title}`} className="py-3">
                  <a
                    href="#"
                    className="group flex gap-4 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
                  >
                    <time
                      dateTime={meeting.date}
                      className="flex w-12 shrink-0 flex-col items-center self-start rounded-md border border-(--rule) bg-(--band) py-1.5 text-center leading-tight"
                    >
                      <span className="text-[11px] font-semibold tracking-wider text-(--blue-text) uppercase">
                        {formatDate(meeting.date).slice(0, 3)}
                      </span>
                      <span className="text-lg font-semibold text-(--ink)">
                        {Number(meeting.date.slice(8, 10))}
                      </span>
                    </time>
                    <span className="min-w-0">
                      <span className="block text-sm leading-snug font-semibold text-(--ink) group-hover:text-(--blue-text) group-hover:underline">
                        {meeting.title}
                      </span>
                      {/* Time and place on their own lines so neither wraps mid-phrase in the narrow sidebar */}
                      <span className="mt-1 flex items-center gap-1.5 text-xs whitespace-nowrap text-(--muted)">
                        <Clock
                          aria-hidden="true"
                          className="size-3.5 shrink-0"
                        />
                        {meeting.time}
                      </span>
                      <span className="mt-0.5 flex gap-1.5 text-xs text-(--muted)">
                        <MapPin
                          aria-hidden="true"
                          className="mt-px size-3.5 shrink-0"
                        />
                        <span className="sr-only">, </span>
                        {meeting.location}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className={`${textLink} mt-3`}>
              <CalendarDays aria-hidden="true" className="size-4" />
              Full calendar
            </a>
          </Widget>

          <Widget id="classic-city-hall" title="City Hall">
            <address className="space-y-3 text-sm text-(--body) not-italic">
              <p className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--blue)"
                />
                <span>{siteConfig.contact.address}</span>
              </p>
              <p className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--blue)"
                />
                <a
                  href="#"
                  className="hover:text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0 text-(--blue)"
                />
                <span>{keepTimes(siteConfig.contact.hours)}</span>
              </p>
            </address>
            <a href="#" className={`${textLink} mt-4`}>
              Get directions
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </Widget>
        </aside>
      </div>
    </div>
  )
}
