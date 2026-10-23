import { ChevronRight } from "lucide-react"

import { departments } from "@/content/home"

export function Departments() {
  return (
    <section
      aria-labelledby="civic-departments-heading"
      className="bg-(--civic-gray) py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-[3px] border-(--civic-blue) pb-3">
          <h2
            id="civic-departments-heading"
            className="text-2xl font-bold text-slate-900"
          >
            City Departments
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-[15px] font-semibold text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none"
          >
            Staff directory
            <ChevronRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
          {departments.map((dept) => (
            <li key={dept} className="border-b border-slate-300">
              <a
                href="#"
                className="group flex items-center justify-between gap-3 py-3.5 text-[17px] font-semibold text-(--civic-blue) hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-(--civic-blue) focus-visible:outline-none focus-visible:ring-inset"
              >
                {dept}
                <ChevronRight
                  aria-hidden="true"
                  className="size-5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-(--civic-blue)"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
