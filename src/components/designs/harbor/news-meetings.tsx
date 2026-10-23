import Image from "next/image"
import {
  ArrowRight,
  CalendarDays,
  Clock,
  FileText,
  MapPin,
  Video,
} from "lucide-react"

import { formatDate, meetings, news } from "@/content/home"

function MeetingDate({ iso }: { iso: string }) {
  const date = new Date(`${iso}T12:00:00`)
  const month = date.toLocaleDateString("en-US", { month: "short" })
  const day = date.toLocaleDateString("en-US", { day: "numeric" })
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" })
  return (
    <time
      dateTime={iso}
      className="flex w-14 shrink-0 flex-col items-center justify-center rounded-md border border-slate-200 bg-white py-1.5 text-center leading-none shadow-sm"
    >
      <span className="text-[10px] font-bold tracking-wider text-(--navy) uppercase">
        {month}
      </span>
      <span className="mt-0.5 text-2xl font-semibold text-slate-900">
        {day}
      </span>
      <span className="mt-0.5 text-[10px] font-medium text-slate-500 uppercase">
        {weekday}
      </span>
    </time>
  )
}

export function NewsAndMeetings() {
  return (
    <section
      aria-labelledby="harbor-news-heading"
      className="bg-white py-14 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:gap-12 lg:px-8">
        {/* News */}
        <div>
          <div className="flex items-end justify-between gap-4 border-b-2 border-(--navy) pb-3">
            <h2
              id="harbor-news-heading"
              className="text-2xl font-semibold tracking-tight text-(--navy)"
            >
              City News
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded text-sm font-medium text-(--navy) underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
            >
              All news
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <ul className="divide-y divide-slate-200">
            {news.map((item, index) => (
              <li key={item.title}>
                <article className="group grid gap-4 py-6 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <a
                    href="#"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block aspect-[16/10] overflow-hidden rounded-md bg-slate-100 sm:aspect-[4/3]"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 200px, 100vw"
                      priority={index === 0}
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </a>
                  <div className="flex flex-col">
                    <p className="flex flex-wrap items-center gap-x-2 text-xs text-slate-600">
                      <span className="font-semibold tracking-wide text-(--navy) uppercase">
                        {item.category}
                      </span>
                      <span aria-hidden="true">•</span>
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </p>
                    <h3 className="mt-2 text-lg leading-snug font-semibold text-slate-900">
                      <a
                        href="#"
                        className="rounded decoration-(--gold) decoration-2 underline-offset-4 group-hover:underline focus-visible:underline focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        {/* Meetings sidebar */}
        <aside aria-labelledby="harbor-meetings-heading">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
            <div className="flex items-center gap-2 border-b-2 border-(--gold) bg-(--navy) px-5 py-4 text-white">
              <CalendarDays
                aria-hidden="true"
                className="size-5 text-(--gold)"
              />
              <h2
                id="harbor-meetings-heading"
                className="text-lg font-semibold tracking-tight"
              >
                Upcoming Meetings
              </h2>
            </div>

            <ul className="divide-y divide-slate-200">
              {meetings.map((meeting) => (
                <li key={`${meeting.title}-${meeting.date}`}>
                  <a
                    href="#"
                    className="group flex gap-4 px-5 py-4 transition-colors hover:bg-white focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none focus-visible:ring-inset"
                  >
                    <MeetingDate iso={meeting.date} />
                    <div className="min-w-0">
                      <h3 className="text-sm leading-snug font-semibold text-slate-900 group-hover:text-(--navy)">
                        {meeting.title}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-600">
                        <Clock
                          aria-hidden="true"
                          className="size-3.5 shrink-0"
                        />
                        {meeting.time}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-600">
                        <MapPin
                          aria-hidden="true"
                          className="size-3.5 shrink-0"
                        />
                        <span className="truncate">{meeting.location}</span>
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="grid gap-2 border-t border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-1">
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-(--navy) px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-(--navy-dark) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Video aria-hidden="true" className="size-4" />
                Watch meetings
              </a>
              <a
                href="#"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-(--navy) bg-white px-4 text-sm font-semibold text-(--navy) transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <FileText aria-hidden="true" className="size-4" />
                Agendas &amp; minutes
              </a>
            </div>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            All meetings are open to the public. Need an accommodation to
            participate? Contact the City Clerk at least 48 hours in advance.
          </p>
        </aside>
      </div>
    </section>
  )
}
