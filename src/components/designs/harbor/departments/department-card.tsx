import {
  Check,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  Phone,
  Siren,
  UserRound,
} from "lucide-react"

import type { Department } from "@/content/departments"

import { departmentIcons } from "./icons"
import { departmentAnchor, telHref, textLink } from "./shared"

const subheading =
  "text-xs font-semibold tracking-wide text-slate-600 uppercase"

function isEmergency(note: string) {
  return /\b911\b/.test(note)
}

function websiteLabel(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
}

function PhoneLink({ phone, who }: { phone: string; who: string }) {
  return (
    <a
      href={telHref(phone)}
      aria-label={`Call ${who} at ${phone}`}
      className={`inline-flex items-center gap-1.5 py-0.5 text-sm whitespace-nowrap ${textLink}`}
    >
      <Phone aria-hidden="true" className="size-3.5 text-(--navy)" />
      {phone}
    </a>
  )
}

export function DepartmentCard({ department }: { department: Department }) {
  const Icon = departmentIcons[department.icon]
  const headingId = `${department.id}-heading`
  const { location, note, website, contacts } = department
  const emergency = note ? isEmergency(note) : false

  return (
    <article
      id={department.id}
      aria-labelledby={headingId}
      className={`${departmentAnchor} flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm target:border-(--navy) target:ring-2 target:ring-(--gold) @4xl:flex-row`}
    >
      <div className="p-5 sm:p-6 @4xl:flex-1">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
          >
            {Icon ? <Icon className="size-6" /> : null}
          </span>
          <div className="min-w-0">
            <h3
              id={headingId}
              className="text-xl leading-snug font-semibold tracking-tight text-(--navy)"
            >
              {department.name}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {department.summary}
            </p>
          </div>
        </div>

        {note && emergency ? (
          <p className="mt-5 flex items-center gap-3 rounded-md border border-l-4 border-red-200 border-l-red-700 bg-red-50 px-4 py-3 text-sm font-semibold text-red-900">
            <Siren
              aria-hidden="true"
              className="size-5 shrink-0 text-red-700"
            />
            {note}
          </p>
        ) : null}

        <h4 className={`mt-5 ${subheading}`}>Services</h4>
        <ul className="mt-2.5 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {department.services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-2 text-sm leading-snug text-slate-800"
            >
              <Check
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--gold)"
              />
              {service}
            </li>
          ))}
        </ul>

        {note && !emergency ? (
          <p className="mt-5 flex items-start gap-3 rounded-md border border-l-4 border-slate-200 border-l-(--gold) bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
            <Info
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-(--navy)"
            />
            {note}
          </p>
        ) : null}
      </div>

      <div className="flex-1 space-y-5 border-t border-slate-200 bg-slate-50 p-5 sm:px-6 @4xl:w-96 @4xl:flex-none @4xl:border-t-0 @4xl:border-l @4xl:py-6">
        {location ? (
          <div className="flex gap-3">
            <span
              aria-hidden="true"
              className="flex size-9 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-(--navy) shadow-sm"
            >
              <MapPin className="size-4" />
            </span>
            <div className="min-w-0 space-y-1">
              <p className="text-sm font-semibold text-slate-900">
                {location.name}
              </p>
              <p className="text-sm text-slate-600">{location.address}</p>
              {location.hours ? (
                <p className="flex items-start gap-1.5 text-sm text-slate-600">
                  <Clock
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0"
                  />
                  <span>
                    <span className="sr-only">Hours: </span>
                    {location.hours}
                  </span>
                </p>
              ) : null}
              {location.phone ? (
                <p>
                  <PhoneLink phone={location.phone} who={location.name} />
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {contacts.length > 0 ? (
          <div>
            <h4 className={subheading}>
              {contacts.length === 1 ? "Contact" : "Contacts"}
            </h4>
            <ul className="mt-2.5 divide-y divide-slate-200">
              {contacts.map((contact) => (
                <li
                  key={contact.name}
                  className="flex flex-col items-start gap-1 py-2.5 first:pt-0 last:pb-0 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-1.5"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white text-(--navy) ring-1 ring-slate-200"
                    >
                      <UserRound className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">
                        {contact.name}
                      </p>
                      <p className="text-xs text-slate-600">{contact.title}</p>
                    </div>
                  </div>
                  {contact.phone ? (
                    <span className="pl-12 sm:pl-0">
                      <PhoneLink phone={contact.phone} who={contact.name} />
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {website ? (
          <p>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-sm ${textLink}`}
            >
              Visit {websiteLabel(website)}
              <ExternalLink aria-hidden="true" className="size-3.5" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </p>
        ) : null}
      </div>
    </article>
  )
}
