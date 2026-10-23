import { MapPin } from "lucide-react"

import { government } from "@/content/about"

import { container, keepDashes, SectionHeading, serif } from "./shared"

/** The summary's first sentence states the Council–Manager idea; it becomes the pull-quote. */
const [principle, ...rest] = government.summary.split(/(?<=\.)\s+/)
const essay = rest.join(" ")

const leadership = new Set(["Mayor", "Mayor Pro-Tem"])

export function DunesAboutGovernment() {
  return (
    <section
      id="government"
      aria-labelledby="dn-about-government"
      className="scroll-mt-56 border-t border-(--dn-rule)"
    >
      <div className={`${container} py-14 sm:py-16 lg:py-24`}>
        <SectionHeading
          id="dn-about-government"
          label="Government"
          title="How the City is run."
        />

        <div className="mt-8 grid grid-cols-1 gap-12 sm:mt-10 sm:gap-14 lg:mt-14 lg:grid-cols-12 lg:gap-10">
          {/* Essay column */}
          <div className="lg:col-span-7">
            <p
              className={`border-l-2 border-(--dn-terra) pl-5 ${serif} text-[1.75rem] leading-[1.2] font-light tracking-[-0.01em] text-balance text-(--dn-ink) sm:pl-8 sm:text-4xl lg:text-[2.75rem]`}
            >
              {keepDashes(principle)}
            </p>

            <p className="mt-8 max-w-[38rem] text-lg leading-[1.75] text-pretty text-(--dn-ink) lg:text-[19px]">
              {essay}
            </p>

            <div className="mt-12 max-w-[38rem]">
              <h3 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase">
                When the Council meets
              </h3>
              <dl className="mt-4 border-t border-(--dn-rule)">
                {government.meetings.map((meeting) => (
                  <div
                    key={meeting.label}
                    className="grid grid-cols-1 gap-1 border-b border-(--dn-rule) py-5 sm:grid-cols-[11rem_1fr] sm:items-baseline sm:gap-6"
                  >
                    <dt className="text-[15px] text-(--dn-ink-soft)">
                      {meeting.label}
                    </dt>
                    <dd
                      className={`${serif} text-xl leading-snug text-pretty text-(--dn-ink) sm:text-[22px]`}
                    >
                      {meeting.when}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 flex items-start gap-2 text-[15px] leading-relaxed text-(--dn-ink-soft)">
                <MapPin
                  className="mt-1 size-3.5 shrink-0 text-(--dn-teal)"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {government.where}
              </p>
            </div>
          </div>

          {/* People column */}
          <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9">
            <div className="rounded-sm bg-(--dn-bg-deep) p-6 sm:p-8">
              <h3 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-terra) uppercase">
                {government.manager.title}
              </h3>
              <p
                className={`mt-3 ${serif} text-3xl leading-tight font-light tracking-[-0.01em] text-(--dn-ink)`}
              >
                {government.manager.name}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-(--dn-ink-soft)">
                {government.manager.summary}
              </p>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase">
                City Council
              </h3>
              <ul className="mt-4 border-t border-(--dn-ink)">
                {government.council.map((member) => (
                  <li
                    key={member.name}
                    className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-(--dn-rule) py-4"
                  >
                    <span className="min-w-0">
                      <span
                        className={`block ${serif} text-xl leading-snug text-(--dn-ink)`}
                      >
                        {member.name}
                      </span>
                      <span
                        className={
                          leadership.has(member.role)
                            ? "mt-0.5 block text-[11px] font-semibold tracking-[0.18em] text-(--dn-terra) uppercase"
                            : "mt-0.5 block text-[11px] tracking-[0.18em] text-(--dn-ink-soft) uppercase"
                        }
                      >
                        {member.role}
                      </span>
                    </span>
                    <span className="text-[13px] text-(--dn-ink-soft) tabular-nums">
                      Term ends {member.termEnds}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
