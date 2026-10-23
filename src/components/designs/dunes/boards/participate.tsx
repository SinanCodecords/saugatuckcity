import { getInvolved, publicMeetings } from "@/content/boards"

import { container, kicker, serif } from "../about/shared"
import { columnLabel, phoneLink, smallCaps, tel } from "../departments/entry"

const { zoom } = publicMeetings
const { contact } = getInvolved

/** Open meetings as a pull-quote with the Zoom details, then "Serve on a board". */
export function DunesBoardsParticipate() {
  return (
    <div className="border-t border-(--dn-rule)">
      <div
        className={`${container} grid grid-cols-1 gap-12 py-14 sm:gap-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-24`}
      >
        <section
          id="open-meetings"
          aria-labelledby="dn-boards-open-meetings"
          className="scroll-mt-56 lg:col-span-7"
        >
          <p className={kicker}>Open meetings</p>
          <h2
            id="dn-boards-open-meetings"
            className={`mt-4 border-l-2 border-(--dn-terra) pl-5 ${serif} text-[1.75rem] leading-[1.2] font-light tracking-[-0.01em] text-balance text-(--dn-ink) sm:pl-8 sm:text-4xl lg:text-[2.75rem]`}
          >
            {publicMeetings.title}
          </h2>
          <p className="mt-8 max-w-[38rem] text-lg leading-[1.75] text-pretty text-(--dn-ink) lg:text-[19px]">
            {publicMeetings.body}
          </p>

          <div className="mt-12 max-w-[38rem]">
            <h3 className={columnLabel}>Join on Zoom</h3>
            <dl className="mt-4 border-t border-(--dn-ink)">
              <div className="border-b border-(--dn-rule) py-6">
                <dt className={smallCaps}>Meeting ID</dt>
                <dd
                  className={`mt-2 ${serif} text-[2.5rem] leading-none font-light tracking-[-0.01em] text-(--dn-ink) tabular-nums sm:text-6xl lg:text-7xl`}
                >
                  {zoom.meetingId}
                </dd>
              </div>
              <div className="py-6">
                <dt className={smallCaps}>Dial in by phone</dt>
                <dd className="mt-2">
                  <ul className="flex flex-wrap gap-x-8 gap-y-2">
                    {zoom.phone.map((phone) => (
                      <li
                        key={phone}
                        className={`${serif} text-xl leading-snug tabular-nums sm:text-[22px]`}
                      >
                        <a
                          href={tel(phone)}
                          aria-label={`Dial in to Zoom at ${phone}`}
                          className={phoneLink}
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section
          id="serve"
          aria-labelledby="dn-boards-serve"
          className="scroll-mt-56 self-start rounded-sm bg-(--dn-bg-deep) p-6 sm:p-8 lg:col-span-4 lg:col-start-9"
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
            Get involved
          </p>
          <h2
            id="dn-boards-serve"
            className={`mt-3 ${serif} text-3xl leading-tight font-light tracking-[-0.01em] text-(--dn-ink)`}
          >
            {getInvolved.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-(--dn-ink-soft)">
            {getInvolved.body}
          </p>

          <div className="mt-6 border-t border-(--dn-rule) pt-5">
            <p className={`${serif} text-xl leading-snug text-(--dn-ink)`}>
              {contact.name}
            </p>
            <p className={`mt-0.5 ${smallCaps}`}>{contact.title}</p>
            <p className="mt-1.5 text-[15px] tabular-nums">
              <a
                href={tel(contact.phone)}
                aria-label={`Call ${contact.name}, ${contact.title}, at ${contact.phone}`}
                className={phoneLink}
              >
                {contact.phone}
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
