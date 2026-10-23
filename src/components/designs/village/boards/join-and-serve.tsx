import { HandHeart, Phone, Video } from "lucide-react"

import { getInvolved, publicMeetings } from "@/content/boards"
import { cn } from "@/lib/utils"

import { Container, focusRing, heading } from "../shared"
import { initials, sectionAnchor } from "../about/shared"
import { CallPill } from "../departments/call-pill"
import { telHref } from "../departments/shared"
import { joinAnchor, serveAnchor } from "./shared"

const eyebrow = cn(heading, "text-sm font-bold tracking-wide uppercase")
const cardTitle = cn(
  heading,
  "mt-1 text-2xl font-extrabold tracking-tight text-(--v-text) sm:text-3xl"
)

/** A mint "Join from home" card beside a peach "Serve on a board" card. */
export function VillageJoinAndServe() {
  const { zoom } = publicMeetings
  const { contact } = getInvolved

  return (
    <div className="py-10 sm:py-14">
      <Container className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <section
          id={joinAnchor}
          aria-labelledby={`${joinAnchor}-title`}
          className={cn(
            sectionAnchor,
            "rounded-[2rem] border border-(--v-mint-dark) bg-(--v-mint) p-6 sm:p-8"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-(--v-primary)">
              <Video className="size-5" aria-hidden="true" />
            </span>
            <p className={cn(eyebrow, "text-(--v-primary)")}>Join from home</p>
          </div>
          <h2 id={`${joinAnchor}-title`} className={cn(cardTitle, "mt-4")}>
            {publicMeetings.title}
          </h2>
          <p className="mt-2 max-w-xl text-base leading-relaxed text-(--v-text)">
            {publicMeetings.body}
          </p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="rounded-3xl bg-white p-5">
              <dt
                className={cn(
                  heading,
                  "text-xs font-bold tracking-wide text-(--v-muted) uppercase"
                )}
              >
                Zoom meeting ID
              </dt>
              <dd
                className={cn(
                  heading,
                  "mt-1 text-3xl font-extrabold tracking-tight text-(--v-primary) tabular-nums sm:text-4xl"
                )}
              >
                {zoom.meetingId}
              </dd>
            </div>
            <div className="rounded-3xl bg-white p-5">
              <dt
                className={cn(
                  heading,
                  "text-xs font-bold tracking-wide text-(--v-muted) uppercase"
                )}
              >
                Or dial in by phone
              </dt>
              <dd className="mt-2">
                <ul className="flex flex-col gap-1.5">
                  {zoom.phone.map((number) => (
                    <li key={number}>
                      <a
                        href={telHref(number)}
                        aria-label={`Dial in to Zoom at ${number}`}
                        className={cn(
                          heading,
                          focusRing,
                          "inline-flex items-center gap-2 rounded-full text-base font-bold whitespace-nowrap text-(--v-primary) underline decoration-(--v-primary)/30 underline-offset-4 hover:decoration-(--v-primary) focus-visible:ring-offset-white"
                        )}
                      >
                        <Phone className="size-4 shrink-0" aria-hidden="true" />
                        {number}
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </section>

        <section
          id={serveAnchor}
          aria-labelledby={`${serveAnchor}-title`}
          className={cn(
            sectionAnchor,
            "flex flex-col rounded-[2rem] border border-[#f6cfb2] bg-(--v-peach) p-6 sm:p-8"
          )}
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#8a4b12]">
              <HandHeart className="size-5" aria-hidden="true" />
            </span>
            <p className={cn(eyebrow, "text-[#8a4b12]")}>Get involved</p>
          </div>
          <h2 id={`${serveAnchor}-title`} className={cn(cardTitle, "mt-4")}>
            {getInvolved.title}
          </h2>
          <p className="mt-2 text-base leading-relaxed text-(--v-text)">
            {getInvolved.body}
          </p>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap items-center gap-3 rounded-3xl bg-white p-4">
              <span
                aria-hidden="true"
                className={cn(
                  heading,
                  "inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-(--v-peach) text-sm font-extrabold text-[#8a4b12]"
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
                <p className="mt-0.5 text-sm font-semibold text-(--v-text)">
                  {contact.phone}
                </p>
              </div>
              <CallPill
                phone={contact.phone}
                who={`${contact.name}, ${contact.title}`}
                className="focus-visible:ring-offset-white"
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}
