import { parksFacts } from "@/content/parks"
import { cn } from "@/lib/utils"

import { Container, heading } from "../shared"
import { tint } from "../about/shared"

export function VillageParksFacts() {
  return (
    <section
      aria-labelledby="village-parks-facts-title"
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="rounded-[2rem] border border-(--v-line) bg-(--v-card) p-5 shadow-[0_20px_45px_-24px_rgba(29,92,74,0.35)] sm:p-8">
          <h2
            id="village-parks-facts-title"
            className={cn(
              heading,
              "px-1 text-lg font-extrabold text-(--v-text) sm:text-xl"
            )}
          >
            Our parks at a glance
          </h2>
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {parksFacts.map((fact, index) => (
              <div
                key={fact.label}
                className={cn(
                  "flex flex-col-reverse justify-end gap-1.5 rounded-3xl p-5 sm:p-6",
                  tint(index)
                )}
              >
                <dt className="text-sm leading-snug font-semibold text-(--v-text) sm:text-[0.95rem]">
                  {fact.label}
                </dt>
                <dd
                  className={cn(
                    heading,
                    "text-3xl leading-none font-extrabold tracking-tight sm:text-4xl"
                  )}
                >
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}
