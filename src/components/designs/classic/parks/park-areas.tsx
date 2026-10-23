import Image from "next/image"
import { ArrowUp, MapPin, Ruler, ShieldCheck } from "lucide-react"

import { parksImages, type Park } from "@/content/parks"

import { SectionHeading, textLink } from "../about/ui"
import { countLabel } from "../boards/utils"
import { PhoneLink, SubHeading } from "../departments/department-panel"
import { fallbackParkIcon, parkIcons } from "./icons"
import { DetailItem } from "./ui"
import { areaId, featureLinks, groupedParks } from "./utils"

/** Placeholder photos for the two areas the content has pictures for. */
const areaImages: Partial<Record<string, { src: string; alt: string }>> = {
  river: { src: parksImages.water, alt: "A sailboat on open water" },
  nature: {
    src: parksImages.woods,
    alt: "Autumn woods reflected in still water",
  },
}

/** One park as a compact bordered panel with a grey title band. */
function ParkCard({ park }: { park: Park }) {
  const Icon = parkIcons[park.icon] ?? fallbackParkIcon
  const titleId = `${park.id}-title`
  const feature = featureLinks[park.id]
  const hasDetails = park.location || park.size

  return (
    <section
      id={park.id}
      aria-labelledby={titleId}
      className="flex h-full scroll-mt-32 flex-col overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <div className="flex items-center gap-3 border-b border-(--rule) bg-(--band) px-4 py-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-(--rule) bg-white text-(--blue-text)">
          <Icon aria-hidden="true" className="size-4" />
        </span>
        <h3
          id={titleId}
          className="min-w-0 text-base leading-snug font-semibold text-(--ink)"
        >
          {park.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-4 py-4">
        <p className="text-sm leading-relaxed text-(--body)">{park.summary}</p>

        {hasDetails ? (
          <dl className="space-y-2 text-sm">
            {park.location ? (
              <DetailItem icon={MapPin} label="Location">
                {park.location}
              </DetailItem>
            ) : null}
            {park.size ? (
              <DetailItem icon={Ruler} label="Size">
                {park.size}
              </DetailItem>
            ) : null}
          </dl>
        ) : null}

        {park.features.length > 0 ? (
          <ul
            aria-label={`${park.name} features`}
            className="flex flex-wrap gap-1.5"
          >
            {park.features.map((feature) => (
              <li
                key={feature}
                className="rounded-sm border border-(--rule) bg-(--band) px-2 py-1 text-xs leading-none font-medium text-(--body)"
              >
                {feature}
              </li>
            ))}
          </ul>
        ) : null}

        {park.rules ? (
          <div className="border-t border-(--rule) pt-3.5">
            <SubHeading>Park rules</SubHeading>
            <ul className="mt-2 space-y-1.5 text-sm text-(--body)">
              {park.rules.map((rule) => (
                <li key={rule} className="flex gap-2">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 size-3.5 shrink-0 text-(--blue)"
                  />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {park.phone || feature ? (
          <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-(--rule) pt-3.5 text-sm">
            {park.phone ? (
              <PhoneLink phone={park.phone} who={park.name} />
            ) : null}
            {feature ? (
              <a href={feature.href} className={textLink}>
                {feature.label}
                <span className="sr-only"> for {park.name}</span>
                <ArrowUp aria-hidden="true" className="size-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}

/** Every park, one section per area in content order, cards two to a row. */
export function ParkAreas() {
  return (
    <>
      {groupedParks.map((area) => {
        const headingId = `${areaId(area.id)}-title`
        const image = areaImages[area.id]
        return (
          <section
            key={area.id}
            id={areaId(area.id)}
            aria-labelledby={headingId}
            className="scroll-mt-32"
          >
            <SectionHeading
              id={headingId}
              aside={countLabel(area.parks.length, "place", "places")}
            >
              {area.title}
            </SectionHeading>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-(--body)">
              {area.description}
            </p>

            {image ? (
              <div className="relative mt-6 aspect-[4/1] overflow-hidden rounded-md border border-(--rule) bg-(--band)">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1152px) 784px, (min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}

            <ul className="mt-6 grid gap-5 md:grid-cols-2">
              {area.parks.map((park) => (
                <li key={park.id}>
                  <ParkCard park={park} />
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </>
  )
}
