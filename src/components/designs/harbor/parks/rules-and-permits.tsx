import { ClipboardList, Info, PartyPopper, ShieldCheck } from "lucide-react"

import { siteConfig } from "@/config/site"
import { masterPlan, parkRules, reservePark } from "@/content/parks"

import { PhoneLink } from "../boards/attend-and-serve"

function GeneralRules() {
  return (
    <section
      aria-labelledby="harbor-park-rules-heading"
      className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
          >
            <ShieldCheck className="size-5" />
          </span>
          <div className="min-w-0">
            <h2
              id="harbor-park-rules-heading"
              className="text-xl font-semibold tracking-tight text-(--navy) sm:text-2xl"
            >
              Park rules
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              These apply in every City park, beach and natural area.
            </p>
          </div>
        </div>
        <div className="sm:pl-15">
          <ul className="mt-4 space-y-3">
            {parkRules.general.map((rule) => (
              <li
                key={rule}
                className="flex items-start gap-3 text-sm leading-relaxed text-slate-800 sm:text-base"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-2 shrink-0 rounded-full bg-(--gold)"
                />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="flex flex-1 items-start gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-relaxed text-slate-700 sm:px-6">
        <Info
          aria-hidden="true"
          className="mt-0.5 size-4 shrink-0 text-(--navy)"
        />
        {parkRules.note}
      </p>
    </section>
  )
}

function HostAnEvent() {
  const { phone } = siteConfig.contact

  return (
    <section
      aria-labelledby="harbor-reserve-heading"
      className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b-2 border-(--gold) bg-(--navy) px-5 py-4 text-white sm:px-6">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--gold) uppercase">
          <PartyPopper aria-hidden="true" className="size-4" />
          Permits
        </p>
        <h2
          id="harbor-reserve-heading"
          className="mt-1.5 text-lg font-semibold tracking-tight sm:text-xl"
        >
          {reservePark.title}
        </h2>
      </div>
      <p className="px-5 py-4 text-sm leading-relaxed text-slate-700 sm:px-6 sm:text-base">
        {reservePark.body}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-slate-200 bg-slate-50 px-5 py-3.5 sm:px-6">
        <p className="text-sm font-semibold text-slate-900">City Hall</p>
        <PhoneLink
          phone={phone}
          label={`Call City Hall at ${phone} about a park event permit`}
        />
      </div>
    </section>
  )
}

function MasterPlan() {
  return (
    <section
      aria-labelledby="harbor-master-plan-heading"
      className="flex items-start gap-4 rounded-lg border border-t-3 border-slate-200 border-t-(--gold) bg-white p-5 shadow-sm sm:p-6"
    >
      <span
        aria-hidden="true"
        className="flex size-11 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-(--navy) shadow-sm"
      >
        <ClipboardList className="size-5" />
      </span>
      <div className="min-w-0">
        <h2
          id="harbor-master-plan-heading"
          className="text-lg font-semibold tracking-tight text-(--navy) sm:text-xl"
        >
          {masterPlan.title}
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
          {masterPlan.body}
        </p>
      </div>
    </section>
  )
}

export function RulesAndPermits() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <GeneralRules />
      <div className="grid content-start gap-6 lg:gap-8">
        <HostAnEvent />
        <MasterPlan />
      </div>
    </div>
  )
}
