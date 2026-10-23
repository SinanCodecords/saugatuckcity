import { parksFacts } from "@/content/parks"

export function ParksFacts() {
  return (
    <section
      aria-labelledby="harbor-parks-facts-heading"
      className="relative z-10 bg-white"
    >
      <h2 id="harbor-parks-facts-heading" className="sr-only">
        Parks at a glance
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="-mt-16 grid grid-cols-2 gap-3 sm:-mt-20 sm:gap-4 lg:-mt-24 lg:grid-cols-4">
          {parksFacts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col-reverse justify-end rounded-lg border border-t-3 border-slate-200 border-t-(--gold) bg-white p-4 shadow-[0_12px_40px_-12px_rgba(11,37,69,0.35)] sm:p-6"
            >
              <dt className="mt-1.5 text-xs leading-snug text-slate-600 sm:text-sm">
                {fact.label}
              </dt>
              <dd className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
