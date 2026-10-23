import { parkAreas, parks } from "@/content/parks"
import { cn } from "@/lib/utils"

import {
  Container,
  PillLink,
  SectionHeading,
  jumpItem,
  jumpList,
  jumpPill,
} from "../shared"
import { sectionAnchor } from "../about/shared"
import { areaAnchor, findAnchor, parksInArea } from "./shared"

/** Intro to the park directory, with a jump pill for each area. */
export function VillageFindAPark() {
  return (
    <section
      id={findAnchor}
      aria-labelledby={`${findAnchor}-title`}
      className={cn(sectionAnchor, "pt-10 sm:pt-14")}
    >
      <Container>
        <div className="rounded-[2rem] border border-(--v-line) bg-(--v-card) p-6 shadow-[0_20px_45px_-24px_rgba(29,92,74,0.35)] sm:p-8">
          <SectionHeading
            id={`${findAnchor}-title`}
            eyebrow={`All ${parks.length} places`}
            title="Find a park"
            description="Pick a part of town to jump straight to its parks."
          />
          <ul aria-label="Park areas" className={cn(jumpList, "mt-6")}>
            {parkAreas.map((area, index) => {
              const count = parksInArea(area.id).length
              return (
                <li key={area.id} className={jumpItem(index, parkAreas.length)}>
                  <PillLink
                    href={`#${areaAnchor(area.id)}`}
                    tone={index === 0 ? "primary" : "secondary"}
                    className={cn(
                      jumpPill,
                      "focus-visible:ring-offset-(--v-card)"
                    )}
                  >
                    {area.title}
                    <span className="sr-only">, </span>
                    <span
                      className={cn(
                        "inline-flex min-w-6 items-center justify-center rounded-full px-1.5 text-xs leading-6",
                        index === 0
                          ? "bg-white/20 text-white"
                          : "bg-white text-(--v-primary)"
                      )}
                    >
                      {count}
                      <span className="sr-only">
                        {count === 1 ? " place" : " places"}
                      </span>
                    </span>
                  </PillLink>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
