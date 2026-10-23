import { siteConfig } from "@/config/site"

import { container, focusRing, Phrases, SectionHeading, serif } from "./shared"

const { address, phone, hours } = siteConfig.contact

const detailLabel =
  "text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"

export function DunesAboutVisit() {
  return (
    <section
      id="visit"
      aria-labelledby="dn-about-visit"
      className="scroll-mt-56 border-y border-(--dn-rule)"
    >
      <div className={`${container} py-14 sm:py-16 lg:py-20`}>
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              id="dn-about-visit"
              label="In person"
              title="Visit City Hall"
            />
          </div>

          {/*
           * Stacked on phones; on tablets the address takes a full row above
           * phone and hours; three columns from desktop up.
           */}
          <dl className="grid grid-cols-1 border-t border-(--dn-ink) sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <div className="border-b border-(--dn-rule) py-5 sm:col-span-2 sm:py-6 lg:col-span-1 lg:border-r lg:border-b-0 lg:pr-6">
              <dt className={detailLabel}>Address</dt>
              <dd
                className={`mt-2 ${serif} text-lg leading-snug text-(--dn-ink)`}
              >
                <address className="not-italic">
                  <Phrases text={address} />
                </address>
              </dd>
            </div>
            <div className="border-b border-(--dn-rule) py-5 sm:border-r sm:border-b-0 sm:py-6 sm:pr-6 lg:px-6">
              <dt className={detailLabel}>Phone</dt>
              <dd className={`mt-2 ${serif} text-lg leading-snug`}>
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className={`rounded-sm text-(--dn-teal) underline decoration-(--dn-teal)/40 underline-offset-4 transition-colors hover:text-(--dn-teal-deep) hover:decoration-(--dn-teal-deep) ${focusRing}`}
                >
                  {phone}
                </a>
              </dd>
            </div>
            <div className="py-5 sm:py-6 sm:pl-6">
              <dt className={detailLabel}>Hours</dt>
              <dd
                className={`mt-2 ${serif} text-lg leading-snug text-(--dn-ink)`}
              >
                <Phrases text={hours} />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
