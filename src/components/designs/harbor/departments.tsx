import { ArrowRight, Building2 } from "lucide-react"

import { departments, pageHref } from "@/content/home"

const departmentsHref = pageHref("harbor", "departments")

export function Departments() {
  return (
    <section
      aria-labelledby="harbor-departments-heading"
      className="border-y border-slate-200 bg-slate-50 py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <div className="lg:w-64 lg:shrink-0">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--navy) uppercase">
              <Building2 aria-hidden="true" className="size-4 text-(--gold)" />
              City Hall
            </p>
            <h2
              id="harbor-departments-heading"
              className="mt-2 text-2xl font-semibold tracking-tight text-(--navy)"
            >
              Departments
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Find the office, staff and forms you need.
            </p>
            <a
              href={departmentsHref}
              className="mt-3 inline-flex items-center gap-1 rounded text-sm font-medium text-(--navy) underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
            >
              Staff directory
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <ul className="flex flex-wrap gap-2.5">
            {departments.map((department) => (
              <li key={department}>
                <a
                  href={departmentsHref}
                  className="inline-flex h-10 items-center rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:border-(--navy) hover:bg-(--navy) hover:text-white focus-visible:border-(--navy) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {department}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
