import { Clock, MapPin, UserRound } from "lucide-react"

import { government } from "@/content/about"

import { SectionHeading, textLink, Widget } from "./ui"

export function AboutGovernment() {
  const { summary, meetings, where, manager, council } = government

  return (
    <section aria-labelledby="classic-about-government">
      <SectionHeading id="classic-about-government">Government</SectionHeading>

      <p className="mt-5 max-w-3xl leading-relaxed text-(--body)">{summary}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Widget id="classic-about-meetings" title="Meeting schedule" level={3}>
          <dl className="divide-y divide-(--rule)">
            {meetings.map((meeting) => (
              <div key={meeting.label} className="py-3 first:pt-0">
                <dt className="text-sm font-semibold text-(--ink)">
                  {meeting.label}
                </dt>
                <dd className="mt-1 flex gap-2 text-sm text-(--body)">
                  <Clock
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-(--blue)"
                  />
                  {meeting.when}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-1 flex gap-2 border-t border-(--rule) pt-3 text-sm text-(--body)">
            <MapPin
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-(--blue)"
            />
            {where}
          </p>
          <a href="#" className={`${textLink} mt-4`}>
            Agendas &amp; minutes
          </a>
        </Widget>

        <Widget id="classic-about-manager" title={manager.title} level={3}>
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-(--band) text-(--blue-text)">
              <UserRound aria-hidden="true" className="size-6" />
            </span>
            <div>
              <p className="text-lg leading-snug font-semibold text-(--ink)">
                {manager.name}
              </p>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-(--blue-text) uppercase">
                {manager.title}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-(--body)">
            {manager.summary}
          </p>
        </Widget>
      </div>

      <h3 className="mt-10 text-lg font-semibold text-(--ink)">City Council</h3>
      <div className="mt-4 overflow-hidden rounded-md border border-(--rule)">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">
            City Council members, their roles and when their terms end
          </caption>
          <thead className="bg-(--band) text-[11px] font-semibold tracking-[0.2em] text-(--ink) uppercase">
            <tr>
              <th scope="col" className="px-4 py-3 sm:px-5">
                Name
              </th>
              {/* Below sm the role sits under each name, so the table never squeezes into three cramped columns */}
              <th
                scope="col"
                className="hidden px-3 py-3 sm:table-cell sm:px-5"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-right whitespace-nowrap sm:px-5"
              >
                Term ends
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-(--rule) border-t border-(--rule)">
            {council.map((member) => {
              const isOfficer = member.role !== "Council Member"
              const role = (
                <span
                  className={
                    isOfficer
                      ? "inline-block rounded-sm bg-(--blue-pale) px-2 py-0.5 text-xs font-semibold whitespace-nowrap text-(--blue-text)"
                      : "text-(--body)"
                  }
                >
                  {member.role}
                </span>
              )
              return (
                <tr key={member.name}>
                  <th
                    scope="row"
                    className="px-4 py-3 font-semibold text-(--ink) sm:px-5"
                  >
                    {member.name}
                    <span className="mt-1 block font-normal sm:hidden">
                      <span className="sr-only">, </span>
                      {role}
                    </span>
                  </th>
                  <td className="hidden px-3 py-3 sm:table-cell sm:px-5">
                    {role}
                  </td>
                  <td className="px-4 py-3 text-right align-top whitespace-nowrap text-(--body) tabular-nums sm:px-5 sm:align-middle">
                    {member.termEnds}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
