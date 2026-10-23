import { ArrowUpRight } from "lucide-react"

import { departments } from "@/content/home"

export function BeaconDepartments() {
  return (
    <section
      aria-labelledby="beacon-departments-heading"
      className="border-b border-[var(--beacon-line)] bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--beacon-amber-deep)] uppercase">
              Departments
            </p>
            <h2
              id="beacon-departments-heading"
              className="mt-2 font-[family-name:var(--font-beacon-display)] text-3xl font-bold tracking-[-0.03em] sm:text-4xl"
            >
              Who does what at City Hall
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--beacon-muted)]">
            Ten departments, one front desk. Not sure who to ask? Start with the
            City Clerk and we will point you the right way.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-x-3 gap-y-4 sm:gap-x-4 sm:gap-y-5">
          {departments.map((department) => (
            <li key={department}>
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-[var(--beacon-ink)] px-5 py-3 font-[family-name:var(--font-beacon-display)] text-xl font-bold tracking-[-0.03em] transition-colors hover:bg-[var(--beacon-ink)] hover:text-white focus-visible:bg-[var(--beacon-ink)] focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[var(--beacon-amber)] focus-visible:ring-offset-2 focus-visible:outline-none sm:px-6 sm:py-3.5 sm:text-2xl lg:text-3xl"
              >
                {department}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-5 text-[var(--beacon-amber-deep)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--beacon-amber)] sm:size-6"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
