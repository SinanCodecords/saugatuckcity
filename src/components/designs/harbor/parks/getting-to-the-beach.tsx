import { Footprints, Phone } from "lucide-react"

import { gettingToTheBeach } from "@/content/parks"

import { telHref } from "../departments/shared"

export function GettingToTheBeach() {
  const { title, options } = gettingToTheBeach

  return (
    <section
      aria-labelledby="harbor-car-free-heading"
      className="relative isolate overflow-hidden bg-(--navy) py-14 text-white lg:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-(--gold)"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--gold) uppercase">
          <Footprints aria-hidden="true" className="size-4" />
          Leave the car behind
        </p>
        <h2
          id="harbor-car-free-heading"
          className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
        >
          {title}
        </h2>

        <ol className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {options.map((option, index) => (
            <li
              key={option.label}
              className="flex gap-4 rounded-lg border border-white/15 bg-white/5 p-5 sm:p-6 md:flex-col"
            >
              <span
                aria-hidden="true"
                className="flex size-11 shrink-0 items-center justify-center rounded-full bg-(--gold) text-lg font-bold text-(--navy-dark) shadow-sm"
              >
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg leading-snug font-semibold">
                  {option.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                  {option.body}
                </p>
                {"phone" in option && option.phone ? (
                  <p className="mt-3">
                    <a
                      href={telHref(option.phone)}
                      aria-label={`Call the ${option.label} at ${option.phone}`}
                      className="inline-flex items-center gap-1.5 rounded text-sm font-semibold whitespace-nowrap text-white underline decoration-(--gold) decoration-2 underline-offset-4 hover:text-(--gold-light) focus-visible:ring-2 focus-visible:ring-(--gold) focus-visible:ring-offset-2 focus-visible:ring-offset-(--navy) focus-visible:outline-none"
                    >
                      <Phone
                        aria-hidden="true"
                        className="size-3.5 text-(--gold)"
                      />
                      {option.phone}
                    </a>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
