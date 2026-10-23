import { Hash, Phone, UserRound, Users, Video } from "lucide-react"

import { getInvolved, publicMeetings } from "@/content/boards"

import { telHref, textLink } from "../departments/shared"

function PhoneLink({ phone, label }: { phone: string; label: string }) {
  return (
    <a
      href={telHref(phone)}
      aria-label={label}
      className={`inline-flex items-center gap-1.5 text-sm whitespace-nowrap ${textLink}`}
    >
      <Phone aria-hidden="true" className="size-3.5 text-(--navy)" />
      {phone}
    </a>
  )
}

function JoinByZoom() {
  const { title, body, zoom } = publicMeetings

  return (
    <section
      aria-labelledby="harbor-zoom-heading"
      className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b-2 border-(--gold) bg-(--navy) px-5 py-4 text-white sm:px-6">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--gold) uppercase">
          <Video aria-hidden="true" className="size-4" />
          Join by Zoom
        </p>
        <h2
          id="harbor-zoom-heading"
          className="mt-1.5 text-lg font-semibold tracking-tight sm:text-xl"
        >
          {title}
        </h2>
      </div>

      <p className="px-5 py-4 text-sm leading-relaxed text-slate-700 sm:px-6">
        {body}
      </p>

      <ul className="flex-1 divide-y divide-slate-200 border-t border-slate-200">
        <li className="flex gap-4 px-5 py-4 sm:px-6">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-(--navy) shadow-sm"
          >
            <Hash className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm leading-snug font-semibold text-slate-900">
              Zoom meeting ID
            </p>
            <p className="mt-1 font-mono text-base font-semibold tracking-wider text-(--navy)">
              {zoom.meetingId}
            </p>
          </div>
        </li>
        <li className="flex gap-4 bg-slate-50 px-5 py-4 sm:px-6">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-(--navy) shadow-sm"
          >
            <Phone className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm leading-snug font-semibold text-slate-900">
              Dial in by phone
            </p>
            <ul className="mt-1.5 flex flex-wrap gap-x-5 gap-y-1.5">
              {zoom.phone.map((number) => (
                <li key={number}>
                  <PhoneLink
                    phone={number}
                    label={`Dial in to Zoom meetings at ${number}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </section>
  )
}

function ServeOnABoard() {
  const { title, body, contact } = getInvolved

  return (
    <section
      aria-labelledby="harbor-serve-heading"
      className="flex flex-col overflow-hidden rounded-lg border border-t-3 border-slate-200 border-t-(--gold) bg-white shadow-sm"
    >
      <div className="flex flex-1 items-start gap-4 p-5 sm:p-6">
        <span
          aria-hidden="true"
          className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
        >
          <Users className="size-5" />
        </span>
        <div className="min-w-0">
          <h2
            id="harbor-serve-heading"
            className="text-xl font-semibold tracking-tight text-(--navy) sm:text-2xl"
          >
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">
            {body}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-(--navy) ring-1 ring-slate-200"
          >
            <UserRound className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900">
              {contact.name}
            </p>
            <p className="text-xs text-slate-600">{contact.title}</p>
          </div>
        </div>
        <PhoneLink
          phone={contact.phone}
          label={`Call ${contact.name}, ${contact.title}, at ${contact.phone}`}
        />
      </div>
    </section>
  )
}

export function AttendAndServe() {
  return (
    <div className="border-t border-slate-200 bg-slate-50 py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <JoinByZoom />
        <ServeOnABoard />
      </div>
    </div>
  )
}
