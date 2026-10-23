import Link from "next/link"
import { ArrowRight, Clock, MapPin } from "lucide-react"

import { meetings } from "@/content/home"

function parts(iso: string) {
  const date = new Date(`${iso}T12:00:00`)
  return {
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    weekday: date.toLocaleDateString("en-US", { weekday: "long" }),
  }
}

export function DunesMeetings() {
  return (
    <section
      aria-labelledby="meetings-heading"
      className="bg-(--dn-ink) text-(--dn-cream-on-dark)"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-muted-on-dark) uppercase">
              Meetings &amp; Notices
            </p>
            <h2
              id="meetings-heading"
              className="mt-3 font-(family-name:--font-dunes-serif) text-3xl leading-tight font-light tracking-[-0.01em] sm:text-4xl"
            >
              Public business, in public.
            </h2>
          </div>
          <Link
            href="#"
            className="group inline-flex shrink-0 items-center gap-1.5 self-start rounded-sm py-1 text-sm font-medium text-(--dn-cream-on-dark) transition-colors hover:text-(--dn-muted-on-dark) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-cream-on-dark) sm:self-auto"
          >
            Full calendar
            <ArrowRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </Link>
        </div>

        <ol className="mt-8 grid grid-cols-1 gap-x-8 border-t border-white/15 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {meetings.map((meeting) => {
            const { day, month, weekday } = parts(meeting.date)
            return (
              <li
                key={`${meeting.title}-${meeting.date}`}
                className="border-b border-white/15 lg:border-b-0"
              >
                <Link
                  href="#"
                  className="group flex h-full flex-col rounded-sm py-7 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--dn-cream-on-dark) sm:py-8 lg:pt-10 lg:pb-4"
                >
                  <time
                    dateTime={meeting.date}
                    className="flex items-baseline gap-3"
                  >
                    <span className="font-(family-name:--font-dunes-serif) text-6xl leading-none font-light tracking-[-0.03em] tabular-nums sm:text-8xl">
                      {day}
                    </span>
                    <span className="flex flex-col text-[11px] tracking-[0.18em] text-(--dn-muted-on-dark) uppercase">
                      <span className="text-(--dn-cream-on-dark)">{month}</span>
                      <span>{weekday}</span>
                    </span>
                  </time>

                  <h3 className="mt-5 font-(family-name:--font-dunes-serif) text-[22px] leading-snug text-(--dn-cream-on-dark) transition-colors group-hover:text-(--dn-muted-on-dark) sm:mt-7">
                    {meeting.title}
                  </h3>

                  <dl className="mt-4 flex flex-col gap-1.5 text-sm text-(--dn-muted-on-dark)">
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Time</dt>
                      <Clock
                        className="size-3.5 shrink-0"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <dd>{meeting.time}</dd>
                    </div>
                    <div className="flex items-center gap-2">
                      <dt className="sr-only">Location</dt>
                      <MapPin
                        className="size-3.5 shrink-0"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <dd>{meeting.location}</dd>
                    </div>
                  </dl>

                  {/* Pinned to the bottom so the links line up across the row. */}
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium text-(--dn-cream-on-dark) opacity-70 transition-opacity group-hover:opacity-100">
                    Agenda &amp; packet
                    <ArrowRight
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>

        {/* Below lg every card already closes with a rule, so the note needs none of its own. */}
        <div className="pt-7 sm:pt-8 lg:mt-10 lg:border-t lg:border-white/15 lg:pt-6">
          <p className="max-w-3xl text-sm leading-relaxed text-(--dn-muted-on-dark)">
            All meetings are open to the public and held at City Hall, 102
            Butler Street. Agendas are posted at least 18 hours in advance. If
            you need an accommodation to participate, contact the City Clerk at
            least two business days before the meeting.
          </p>
        </div>
      </div>
    </section>
  )
}
