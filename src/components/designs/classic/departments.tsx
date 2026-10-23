import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { departments, pageHref } from "@/content/home"

const departmentsHref = pageHref("classic", "departments")

export function Departments() {
  return (
    <section
      aria-labelledby="classic-departments"
      className="border-y border-(--rule) bg-(--band)"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2
            id="classic-departments"
            className="text-2xl font-semibold tracking-tight text-(--ink)"
          >
            Departments
          </h2>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <p className="text-sm text-(--body)">
              Find the office that handles your question.
            </p>
            <Link
              href={departmentsHref}
              className="inline-flex items-center gap-1 py-0.5 text-sm font-semibold text-(--blue-text) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"
            >
              All departments
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>

        {/* Three across from sm up, so the nine offices fill every row */}
        <ul className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-(--rule) bg-(--rule) sm:grid-cols-3">
          {departments.map((department) => (
            <li key={department} className="bg-white">
              <Link
                href={departmentsHref}
                className="group flex items-center justify-between gap-3 px-4 py-3.5 text-sm font-medium text-(--ink) transition-colors hover:bg-(--blue-pale) hover:text-(--blue-text) focus-visible:bg-(--blue-pale) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset"
              >
                {department}
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-(--muted) transition-colors group-hover:text-(--blue-text)"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
