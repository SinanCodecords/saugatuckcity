import type { ReactNode } from "react"
import {
  Check,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react"

import type { Department } from "@/content/departments"

import { inlineLink, keepTimes, textLink } from "../about/ui"
import { departmentIcons, fallbackDepartmentIcon } from "./icons"
import { telHref } from "./utils"

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase">
      {children}
    </h4>
  )
}

export function PhoneLink({ phone, who }: { phone: string; who: string }) {
  return (
    <a
      href={telHref(phone)}
      aria-label={`Call ${who} at ${phone}`}
      className={`${inlineLink} inline-flex items-center gap-1.5 py-0.5 text-(--blue-text) tabular-nums`}
    >
      <Phone aria-hidden="true" className="size-3.5 shrink-0" />
      {phone}
    </a>
  )
}

export function websiteLabel(url: string) {
  return new URL(url).hostname.replace(/^www\./, "")
}

/** One department as a bordered panel with a grey title band, like the home page widgets. */
export function DepartmentPanel({ department }: { department: Department }) {
  const { id, name, summary, services, contacts, location, note, website } =
    department
  const Icon = departmentIcons[department.icon] ?? fallbackDepartmentIcon
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-38 overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <div className="flex items-center gap-3 border-b border-(--rule) bg-(--band) px-5 py-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-(--rule) bg-white text-(--blue-text)">
          <Icon aria-hidden="true" className="size-[18px]" />
        </span>
        <h3
          id={titleId}
          className="min-w-0 text-base leading-snug font-semibold text-balance text-(--ink) sm:text-lg"
        >
          {name}
        </h3>
      </div>

      <div className="grid divide-y divide-(--rule) md:grid-cols-2 md:divide-x md:divide-y-0">
        {/* Left: what the office does */}
        <div className="space-y-5 px-5 py-5">
          <p className="text-sm leading-relaxed text-(--body)">{summary}</p>
          <div>
            <SubHeading>Services</SubHeading>
            <ul className="mt-2.5 space-y-2 text-sm text-(--body)">
              {services.map((service) => (
                <li key={service} className="flex gap-2.5">
                  <Check
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-(--blue)"
                  />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: who to reach and where */}
        <div className="space-y-5 px-5 py-5">
          {contacts.length > 0 ? (
            <div>
              <SubHeading>
                {contacts.length > 1 ? "Contacts" : "Contact"}
              </SubHeading>
              <ul className="mt-2.5 space-y-3.5">
                {contacts.map((contact) => (
                  <li key={contact.name} className="flex gap-3">
                    <UserRound
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-(--blue)"
                    />
                    <div className="min-w-0 text-sm">
                      <p className="font-semibold text-(--ink)">
                        {contact.name}
                      </p>
                      <p className="text-(--body)">{contact.title}</p>
                      {contact.phone ? (
                        <p className="mt-1">
                          <PhoneLink phone={contact.phone} who={contact.name} />
                        </p>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {location ? (
            <div>
              <SubHeading>Location</SubHeading>
              <address className="mt-2.5 space-y-2 text-sm text-(--body) not-italic">
                <p className="flex gap-3">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 size-4 shrink-0 text-(--blue)"
                  />
                  <span>
                    <span className="block font-semibold text-(--ink)">
                      {location.name}
                    </span>
                    {location.address}
                  </span>
                </p>
                {location.hours ? (
                  <p className="flex gap-3">
                    <Clock
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-(--blue)"
                    />
                    <span>{keepTimes(location.hours)}</span>
                  </p>
                ) : null}
                {location.phone ? (
                  <p className="pl-7">
                    <PhoneLink phone={location.phone} who={location.name} />
                  </p>
                ) : null}
              </address>
            </div>
          ) : null}

          {note ? (
            <p className="flex gap-2.5 rounded-sm border-l-2 border-(--blue) bg-(--blue-pale) px-3 py-2.5 text-sm text-(--ink)">
              <Info
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--blue-text)"
              />
              <span>{note}</span>
            </p>
          ) : null}

          {website ? (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className={textLink}
            >
              Visit {websiteLabel(website)}
              <ExternalLink aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
