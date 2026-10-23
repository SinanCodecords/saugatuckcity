import { Check, Clock, ExternalLink, Info, MapPin, Siren } from "lucide-react"

import type { Department } from "@/content/departments"
import { cn } from "@/lib/utils"

import { PillLink, heading } from "../shared"
import { cardShadow, initials, sectionAnchor, tint } from "../about/shared"
import { CallPill } from "./call-pill"
import {
  DepartmentIcon,
  departmentTint,
  displayHost,
  isEmergencyNote,
} from "./shared"

const label = cn(
  heading,
  "text-xs font-bold tracking-wide text-(--v-muted) uppercase"
)

export function VillageDepartmentCard({
  department,
}: {
  department: Department
}) {
  const { id, name, summary, services, contacts, location, note, website } =
    department
  const titleId = `${id}-title`

  return (
    <article
      id={id}
      aria-labelledby={titleId}
      className={cn(
        sectionAnchor,
        cardShadow,
        "flex h-full flex-col rounded-3xl border border-(--v-line) bg-(--v-card) p-5 sm:p-7 md:p-6 lg:p-7"
      )}
    >
      <div className="flex items-center gap-4">
        <span
          className={cn(
            "inline-flex size-14 shrink-0 items-center justify-center rounded-2xl",
            departmentTint(department)
          )}
        >
          <DepartmentIcon department={department} className="size-6" />
        </span>
        <h3
          id={titleId}
          className={cn(
            heading,
            "min-w-0 text-xl leading-tight font-extrabold tracking-tight text-(--v-text) sm:text-2xl md:text-xl lg:text-2xl"
          )}
        >
          {name}
        </h3>
      </div>

      <p className="mt-4 text-[0.95rem] leading-relaxed text-(--v-muted) sm:text-base">
        {summary}
      </p>

      <h4 id={`${id}-services`} className={cn(label, "mt-6")}>
        What we help with
      </h4>
      <ul
        aria-labelledby={`${id}-services`}
        className="mt-3 flex flex-col gap-2"
      >
        {services.map((service) => (
          <li
            key={service}
            className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-(--v-text)"
          >
            <span className="mt-px inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-(--v-mint) text-(--v-primary)">
              <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
            </span>
            {service}
          </li>
        ))}
      </ul>

      {contacts.length > 0 ? (
        <>
          <h4 id={`${id}-contacts`} className={cn(label, "mt-6")}>
            Who to talk to
          </h4>
          <ul
            aria-labelledby={`${id}-contacts`}
            className="mt-3 flex flex-col gap-2"
          >
            {contacts.map((contact, index) => (
              <li
                key={contact.name}
                className="flex items-center gap-3 rounded-2xl bg-(--v-bg) p-3"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    heading,
                    "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-extrabold",
                    tint(index + 1)
                  )}
                >
                  {initials(contact.name)}
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      heading,
                      "leading-snug font-extrabold text-(--v-text)"
                    )}
                  >
                    {contact.name}
                  </p>
                  <p className="text-sm leading-snug text-(--v-muted)">
                    {contact.title}
                  </p>
                  {contact.phone ? (
                    <p className="mt-0.5 text-sm font-semibold text-(--v-text)">
                      {contact.phone}
                    </p>
                  ) : null}
                </div>
                {contact.phone ? (
                  <CallPill phone={contact.phone} who={contact.name} />
                ) : null}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {location || note || website ? (
        <div className="mt-6 flex flex-col gap-3">
          {location ? (
            <div className="flex items-start gap-3 rounded-2xl border border-[#c4e0ef] bg-(--v-sky)/70 p-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-[#1f4f6b]">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className={cn(label, "text-[#1f4f6b]")}>Where to find us</p>
                <address className="mt-1 text-[0.95rem] leading-snug text-(--v-text) not-italic">
                  <span className={cn(heading, "block font-extrabold")}>
                    {location.name}
                  </span>
                  <span className="block break-words">{location.address}</span>
                </address>
                {location.hours ? (
                  <p className="mt-2 flex items-start gap-1.5 text-sm leading-snug text-(--v-text)">
                    <Clock
                      className="mt-0.5 size-3.5 shrink-0 text-[#1f4f6b]"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="sr-only">Hours: </span>
                      {location.hours}
                    </span>
                  </p>
                ) : null}
                {location.phone ? (
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <CallPill
                      phone={location.phone}
                      who={
                        location.name === "City Hall"
                          ? `the ${name} office`
                          : location.name
                      }
                      className="focus-visible:ring-offset-(--v-sky)"
                    />
                    <span className="text-sm font-semibold text-(--v-text)">
                      {location.phone}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}

          {note ? <Note note={note} /> : null}

          {website ? (
            <div>
              <PillLink
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                tone="secondary"
                className="focus-visible:ring-offset-(--v-card)"
              >
                Visit {displayHost(website)}
                <ExternalLink className="size-4" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </PillLink>
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  )
}

function Note({ note }: { note: string }) {
  const emergency = isEmergencyNote(note)
  const NoteIcon = emergency ? Siren : Info

  return (
    <p
      className={cn(
        "flex items-start gap-3 rounded-2xl border p-4 text-[0.95rem] leading-snug",
        emergency
          ? "border-[#f3c3cb] bg-(--v-rose) font-bold text-[#8a2e3c]"
          : "border-[#f1dfa6] bg-(--v-butter) text-(--v-text)"
      )}
    >
      <span
        className={cn(
          "inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white",
          emergency ? "text-[#8a2e3c]" : "text-[#6b5410]"
        )}
      >
        <NoteIcon className="size-4" aria-hidden="true" />
      </span>
      <span className="self-center">{note}</span>
    </p>
  )
}
