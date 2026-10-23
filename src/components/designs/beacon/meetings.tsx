import { ArrowRight, ChevronRight, Clock, MapPin } from "lucide-react"

import { meetings } from "@/content/home"

function dateParts(iso: string) {
  const date = new Date(`${iso}T12:00:00`)
  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
  }
}

export function BeaconMeetings() {
  return (
    <section
      aria-labelledby="beacon-meetings-heading"
      className="bg-[var(--beacon-ink)] py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--beacon-amber)] uppercase">
              Public meetings
            </p>
            <h2
              id="beacon-meetings-heading"
              className="mt-2 font-[family-name:var(--font-beacon-display)] text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl"
            >
              Show up.
              <br />
              Speak up.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-[var(--beacon-muted-dark)]">
              Every City Council, commission and committee meeting is open to
              the public. Agendas are posted at least 18 hours in advance;
              packets and minutes follow.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border-2 border-[var(--beacon-ink-line)] px-5 py-3 text-sm font-bold text-white transition-colors hover:border-[var(--beacon-amber)] hover:text-[var(--beacon-amber)] focus-visible:border-[var(--beacon-amber)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--beacon-ink)] focus-visible:outline-none"
            >
              View all agendas
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <ol className="divide-y divide-[var(--beacon-ink-line)] border-y border-[var(--beacon-ink-line)] lg:col-span-8">
            {meetings.map((meeting) => {
              const { day, month, weekday } = dateParts(meeting.date)
              return (
                <li key={`${meeting.title}-${meeting.date}`}>
                  <a
                    href="#"
                    className="group flex items-center gap-5 py-6 transition-colors hover:bg-[var(--beacon-ink-soft)] focus-visible:bg-[var(--beacon-ink-soft)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:outline-none focus-visible:ring-inset sm:gap-8 sm:px-4"
                  >
                    <time
                      dateTime={meeting.date}
                      className="flex w-20 shrink-0 flex-col items-start leading-none sm:w-24"
                    >
                      <span className="font-[family-name:var(--font-beacon-display)] text-5xl font-extrabold tracking-[-0.05em] text-[var(--beacon-amber)] sm:text-6xl">
                        {day}
                      </span>
                      <span className="mt-2 text-xs font-bold tracking-[0.16em] text-[var(--beacon-muted-dark)] uppercase">
                        {weekday} · {month}
                      </span>
                    </time>
                    <span className="min-w-0 flex-1">
                      <span className="block font-[family-name:var(--font-beacon-display)] text-xl leading-tight font-bold tracking-[-0.02em] sm:text-2xl">
                        {meeting.title}
                      </span>
                      <span className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[var(--beacon-muted-dark)]">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="size-4" aria-hidden="true" />
                          {meeting.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="size-4" aria-hidden="true" />
                          {meeting.location}
                        </span>
                      </span>
                    </span>
                    <ChevronRight
                      aria-hidden="true"
                      className="size-6 shrink-0 text-[var(--beacon-muted-dark)] transition-all group-hover:translate-x-1 group-hover:text-[var(--beacon-amber)]"
                    />
                  </a>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
