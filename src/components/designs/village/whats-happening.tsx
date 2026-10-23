import Image from "next/image"
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react"

import { formatDate, meetings, news } from "@/content/home"
import { cn } from "@/lib/utils"

import {
  Container,
  PillLink,
  SectionHeading,
  focusRing,
  heading,
} from "./shared"

function meetingDay(iso: string) {
  const date = new Date(`${iso}T12:00:00`)
  return {
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
  }
}

export function VillageHappening() {
  const [lead, ...rest] = news

  return (
    <section
      aria-labelledby="village-happening-title"
      className="py-12 sm:py-16"
    >
      <Container>
        <SectionHeading
          id="village-happening-title"
          eyebrow="What's happening"
          title="News from around town"
          description="Updates from City Hall, Public Works and the boards that keep Saugatuck running."
          action={
            <PillLink href="#" tone="secondary">
              All news
              <ArrowRight className="size-4" aria-hidden="true" />
            </PillLink>
          }
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-5 lg:col-span-2">
            <article className="group relative overflow-hidden rounded-3xl border border-(--v-line) bg-(--v-card) shadow-[0_14px_32px_-22px_rgba(29,92,74,0.4)] transition-shadow hover:shadow-[0_22px_40px_-22px_rgba(29,92,74,0.5)] sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-72">
                <Image
                  src={lead.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span
                    className={cn(
                      heading,
                      "rounded-full bg-(--v-mint) px-3 py-1 text-xs font-bold text-(--v-primary)"
                    )}
                  >
                    {lead.category}
                  </span>
                  <time dateTime={lead.date} className="text-(--v-muted)">
                    {formatDate(lead.date)}
                  </time>
                </div>
                <h3
                  className={cn(
                    heading,
                    "mt-4 text-2xl leading-snug font-extrabold text-(--v-text)"
                  )}
                >
                  <a
                    href="#"
                    className={cn(
                      focusRing,
                      "rounded-md after:absolute after:inset-0 after:rounded-3xl hover:text-(--v-primary)"
                    )}
                  >
                    {lead.title}
                  </a>
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-(--v-muted)">
                  {lead.excerpt}
                </p>
                <span
                  className={cn(
                    heading,
                    "mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-(--v-primary)"
                  )}
                >
                  Read more
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </article>

            <ul className="grid gap-5 sm:grid-cols-3">
              {rest.map((item) => (
                <li key={item.title}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-(--v-line) bg-(--v-card) shadow-[0_14px_32px_-22px_rgba(29,92,74,0.4)] transition-shadow hover:shadow-[0_22px_40px_-22px_rgba(29,92,74,0.5)]">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 22vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
                        <span
                          className={cn(
                            heading,
                            "font-bold text-(--v-primary)"
                          )}
                        >
                          {item.category}
                        </span>
                        <span aria-hidden="true" className="text-(--v-muted)">
                          &middot;
                        </span>
                        <time dateTime={item.date} className="text-(--v-muted)">
                          {formatDate(item.date)}
                        </time>
                      </div>
                      <h3
                        className={cn(
                          heading,
                          "mt-2 text-base leading-snug font-extrabold text-(--v-text)"
                        )}
                      >
                        <a
                          href="#"
                          className={cn(
                            focusRing,
                            "rounded-md after:absolute after:inset-0 after:rounded-3xl hover:text-(--v-primary)"
                          )}
                        >
                          {item.title}
                        </a>
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-(--v-muted)">
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>

          <aside
            aria-labelledby="village-meetings-title"
            className="flex flex-col rounded-3xl border border-(--v-line) bg-(--v-card) p-6 shadow-[0_14px_32px_-22px_rgba(29,92,74,0.4)]"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-(--v-sky) text-[#1f4f6b]">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p
                  className={cn(
                    heading,
                    "text-xs font-bold tracking-wide text-(--v-primary) uppercase"
                  )}
                >
                  Meetings
                </p>
                <h3
                  id="village-meetings-title"
                  className={cn(
                    heading,
                    "text-xl font-extrabold text-(--v-text)"
                  )}
                >
                  This month at City Hall
                </h3>
              </div>
            </div>

            <ul className="mt-6 flex flex-col divide-y divide-(--v-line)">
              {meetings.map((meeting) => {
                const when = meetingDay(meeting.date)
                return (
                  <li key={`${meeting.title}-${meeting.date}`}>
                    <a
                      href="#"
                      className={cn(
                        focusRing,
                        "group -mx-2 flex items-start gap-4 rounded-2xl px-2 py-4 transition-colors hover:bg-(--v-mint)"
                      )}
                    >
                      <time
                        dateTime={meeting.date}
                        className={cn(
                          heading,
                          "flex size-14 shrink-0 flex-col items-center justify-center rounded-full bg-(--v-primary) leading-none text-white"
                        )}
                      >
                        <span className="mb-0.5 text-xs font-bold tracking-wide uppercase">
                          {when.month}
                        </span>
                        <span className="text-xl font-extrabold">
                          {when.day}
                        </span>
                      </time>
                      <span className="min-w-0 flex-1">
                        <span
                          className={cn(
                            heading,
                            "block text-[0.95rem] leading-snug font-bold text-(--v-text) group-hover:text-(--v-primary)"
                          )}
                        >
                          {meeting.title}
                        </span>
                        <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-(--v-muted)">
                          <span className="inline-flex items-center gap-1">
                            <Clock className="size-3.5" aria-hidden="true" />
                            {when.weekday}, {meeting.time}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="size-3.5" aria-hidden="true" />
                            {meeting.location.replace("City Hall, ", "")}
                          </span>
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <PillLink href="#" className="mt-6 w-full">
              See full calendar
              <ArrowRight className="size-4" aria-hidden="true" />
            </PillLink>
          </aside>
        </div>
      </Container>
    </section>
  )
}
