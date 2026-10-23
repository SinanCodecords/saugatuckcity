import {
  CalendarDays,
  Clock,
  FileText,
  Landmark,
  MapPin,
  UserRound,
  Users,
  Video,
} from "lucide-react"

import { government } from "@/content/about"

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
}

const leadershipRoles = new Set<string>(["Mayor", "Mayor Pro-Tem"])

export function Government() {
  const { manager, council, meetings, where, summary } = government

  return (
    <section
      aria-labelledby="harbor-government-heading"
      className="border-y border-slate-200 bg-slate-50 py-14 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:gap-12 lg:px-8">
        {/* Summary, manager and council */}
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--navy) uppercase">
            <Landmark aria-hidden="true" className="size-4 text-(--gold)" />
            Government
          </p>
          <h2
            id="harbor-government-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-(--navy) sm:text-3xl"
          >
            How the City is run
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
            {summary}
          </p>

          {/* City Manager */}
          <div className="mt-8 flex gap-4 rounded-lg border border-l-4 border-slate-200 border-l-(--navy) bg-white p-5 shadow-sm">
            <span
              aria-hidden="true"
              className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
            >
              <UserRound className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-(--navy) uppercase">
                {manager.title}
              </p>
              <h3 className="mt-0.5 text-lg font-semibold text-slate-900">
                {manager.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                {manager.summary}
              </p>
            </div>
          </div>

          {/* City Council roster */}
          <div className="mt-10">
            <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1 border-b-2 border-(--navy) pb-3">
              <h3 className="flex items-center gap-2 text-lg font-semibold tracking-tight whitespace-nowrap text-(--navy)">
                <Users aria-hidden="true" className="size-5 text-(--gold)" />
                City Council
              </h3>
              <p className="text-xs text-slate-600">
                {council.length} members, elected at large
              </p>
            </div>
            <ul className="divide-y divide-slate-200 overflow-hidden rounded-b-lg border border-t-0 border-slate-200 bg-white shadow-sm">
              {council.map((member) => {
                const isLeader = leadershipRoles.has(member.role)
                return (
                  <li
                    key={member.name}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3.5 sm:px-5"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={
                          isLeader
                            ? "flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-(--gold) bg-(--navy) text-sm font-semibold text-white"
                            : "flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-(--navy)"
                        }
                      >
                        {initials(member.name)}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900">
                          {member.name}
                        </p>
                        <p
                          className={
                            isLeader
                              ? "text-xs font-semibold text-(--navy)"
                              : "text-xs text-slate-600"
                          }
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="pl-13 text-xs text-slate-600 sm:pl-0">
                      Term ends{" "}
                      <span className="font-medium text-slate-800">
                        {member.termEnds}
                      </span>
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Meetings panel */}
        <div>
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm lg:sticky lg:top-8">
            <div className="flex items-center gap-2 border-b-2 border-(--gold) bg-(--navy) px-5 py-4 text-white">
              <CalendarDays
                aria-hidden="true"
                className="size-5 text-(--gold)"
              />
              <h3 className="text-lg font-semibold tracking-tight">
                Public meetings
              </h3>
            </div>

            <ul className="divide-y divide-slate-200">
              {meetings.map((meeting) => (
                <li key={meeting.label} className="flex gap-4 px-5 py-4">
                  <span
                    aria-hidden="true"
                    className="flex size-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-(--navy) shadow-sm"
                  >
                    <Clock className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm leading-snug font-semibold text-slate-900">
                      {meeting.label}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {meeting.when}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 border-t border-slate-200 bg-slate-50 px-5 py-4">
              <span
                aria-hidden="true"
                className="flex size-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-(--navy) shadow-sm"
              >
                <MapPin className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm leading-snug font-semibold text-slate-900">
                  Where
                </p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {where}
                </p>
              </div>
            </div>

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
        </div>
      </div>
    </section>
  )
}
