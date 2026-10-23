import { aboutFacts } from "@/content/about"

export function AboutFacts() {
  return (
    <section aria-labelledby="classic-about-facts">
      <h2
        id="classic-about-facts"
        className="text-[11px] font-semibold tracking-[0.3em] text-(--muted) uppercase"
      >
        At a glance
      </h2>
      {/* 1px gaps over a rule-colored background give thin dividers in any grid shape */}
      <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-(--rule) bg-(--rule) md:grid-cols-4">
        {aboutFacts.map((fact) => (
          <div
            key={fact.label}
            className="flex flex-col-reverse justify-end gap-1.5 bg-white px-4 py-5 sm:px-5"
          >
            <dt className="text-sm leading-snug text-(--body)">{fact.label}</dt>
            <dd className="text-2xl font-semibold tracking-tight text-(--ink) lg:text-3xl">
              <span
                aria-hidden="true"
                className="mb-2 block h-0.5 w-6 bg-(--blue)"
              />
              {fact.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
