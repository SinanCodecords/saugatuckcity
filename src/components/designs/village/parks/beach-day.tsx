import Image from "next/image"
import {
  ArrowDown,
  CalendarRange,
  Car,
  Clock,
  Info,
  MapPin,
  Ship,
  Sun,
  Tag,
} from "lucide-react"

import { chainFerry, ovalBeach, parksImages } from "@/content/parks"
import { cn } from "@/lib/utils"

import { Container, PillLink, SectionHeading, heading } from "../shared"
import { cardShadow, sectionAnchor } from "../about/shared"
import { CallPill } from "../departments/call-pill"
import { beachAnchor } from "./shared"

const label = cn(
  heading,
  "text-xs font-bold tracking-wide text-(--v-muted) uppercase"
)
const eyebrow = cn(heading, "text-sm font-bold tracking-wide uppercase")
const cardTitle = cn(
  heading,
  "text-2xl font-extrabold tracking-tight text-(--v-text) sm:text-3xl"
)

/** Oval Beach photo card, a mint passes card and a sky-blue Chain Ferry card. */
export function VillageBeachDay() {
  return (
    <section
      id={beachAnchor}
      aria-labelledby={`${beachAnchor}-title`}
      className={cn(sectionAnchor, "py-10 sm:py-14")}
    >
      <Container>
        <SectionHeading
          id={`${beachAnchor}-title`}
          eyebrow="Sun, sand and a ferry ride"
          title="Plan a beach day"
          description="Everything you need for a day at Oval Beach, from passes and parking to the hand-cranked ferry across the river."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <OvalBeachCard />
          <PassesCard />
          <ChainFerryCard />
        </div>
      </Container>
    </section>
  )
}

function OvalBeachCard() {
  return (
    <article
      aria-labelledby="village-parks-oval-title"
      className={cn(
        cardShadow,
        "flex flex-col overflow-hidden rounded-[2rem] border border-(--v-line) bg-(--v-card) lg:col-span-7 lg:row-span-2"
      )}
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-80 lg:flex-1">
        <Image
          src={parksImages.beach}
          alt="Sunset over the water at Oval Beach"
          fill
          sizes="(max-width: 1024px) 95vw, 55vw"
          className="object-cover"
        />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-(--v-butter) text-[#6b5410]">
            <Sun className="size-5" aria-hidden="true" />
          </span>
          <p className={cn(eyebrow, "text-(--v-primary)")}>On Lake Michigan</p>
        </div>
        <h3 id="village-parks-oval-title" className={cn(cardTitle, "mt-4")}>
          {ovalBeach.name}
        </h3>
        <p className="mt-2 max-w-2xl text-base leading-relaxed text-(--v-muted) sm:text-lg">
          {ovalBeach.summary}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <p className="inline-flex max-w-full items-start gap-1.5 rounded-2xl bg-(--v-sky) px-3 py-1.5 text-sm leading-snug font-semibold text-(--v-text)">
            <MapPin
              className="mt-0.5 size-3.5 shrink-0 text-[#1f4f6b]"
              aria-hidden="true"
            />
            <span>
              <span className="sr-only">Address: </span>
              {ovalBeach.address}
            </span>
          </p>
          <PillLink
            href="#oval-beach"
            tone="secondary"
            className="h-9 px-4 text-sm focus-visible:ring-offset-(--v-card)"
          >
            Beach rules
            <ArrowDown className="size-4" aria-hidden="true" />
          </PillLink>
        </div>
      </div>
    </article>
  )
}

function PassesCard() {
  return (
    <section
      aria-labelledby="village-parks-passes-title"
      className="rounded-[2rem] border border-(--v-mint-dark) bg-(--v-mint) p-6 sm:p-8 lg:col-span-5"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-(--v-primary)">
          <Tag className="size-5" aria-hidden="true" />
        </span>
        <p className={cn(eyebrow, "text-(--v-primary)")}>Before you go</p>
      </div>
      <h3 id="village-parks-passes-title" className={cn(cardTitle, "mt-4")}>
        Season, hours &amp; passes
      </h3>

      <dl className="mt-5 grid gap-2 rounded-3xl bg-white p-4 sm:grid-cols-2">
        <div className="flex items-start gap-2.5">
          <CalendarRange
            className="mt-0.5 size-4 shrink-0 text-(--v-primary)"
            aria-hidden="true"
          />
          <div>
            <dt className={label}>Season</dt>
            <dd className="mt-0.5 text-[0.95rem] leading-snug font-semibold text-(--v-text)">
              {ovalBeach.season}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Clock
            className="mt-0.5 size-4 shrink-0 text-(--v-primary)"
            aria-hidden="true"
          />
          <div>
            <dt className={label}>Hours</dt>
            <dd className="mt-0.5 text-[0.95rem] leading-snug font-semibold text-(--v-text)">
              {ovalBeach.hours}
            </dd>
          </div>
        </div>
      </dl>

      <h4 id="village-parks-passes-list" className={cn(label, "mt-6")}>
        Parking passes
      </h4>
      <ul
        aria-labelledby="village-parks-passes-list"
        className="mt-3 flex flex-col gap-2"
      >
        {ovalBeach.passes.map((pass) => (
          <li
            key={pass.label}
            className="flex items-center gap-3 rounded-2xl bg-white p-2.5 pr-4"
          >
            <span
              className={cn(
                heading,
                "relative inline-flex h-12 min-w-18 shrink-0 items-center justify-center rounded-xl bg-(--v-primary) pr-3 pl-5 text-xl font-extrabold text-white"
              )}
            >
              <span
                aria-hidden="true"
                className="absolute top-1/2 left-2 size-1.5 -translate-y-1/2 rounded-full bg-white"
              />
              {pass.price}
            </span>
            <span className="min-w-0">
              <span className="sr-only">: </span>
              <span
                className={cn(
                  heading,
                  "block leading-snug font-extrabold text-(--v-text)"
                )}
              >
                {pass.label}
              </span>
              <span className="sr-only">, </span>
              <span className="block text-sm leading-snug text-(--v-muted)">
                {pass.note}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex items-start gap-3 rounded-2xl border border-[#f1dfa6] bg-(--v-butter) p-4 text-[0.95rem] leading-snug text-(--v-text)">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#6b5410]">
          <Car className="size-4" aria-hidden="true" />
        </span>
        <span className="self-center">{ovalBeach.parkingNote}</span>
      </p>
    </section>
  )
}

function ChainFerryCard() {
  return (
    <section
      aria-labelledby="village-parks-ferry-title"
      className="rounded-[2rem] border border-[#c4e0ef] bg-(--v-sky) p-6 sm:p-8 lg:col-span-5"
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[#1f4f6b]">
          <Ship className="size-5" aria-hidden="true" />
        </span>
        <p className={cn(eyebrow, "text-[#1f4f6b]")}>Cross the river</p>
      </div>
      <h3 id="village-parks-ferry-title" className={cn(cardTitle, "mt-4")}>
        {chainFerry.name}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-(--v-text)">
        {chainFerry.summary}
      </p>
      <p className="mt-3 inline-flex max-w-full items-start gap-1.5 rounded-2xl bg-white/80 px-3 py-1.5 text-sm leading-snug font-semibold text-(--v-text)">
        <MapPin
          className="mt-0.5 size-3.5 shrink-0 text-[#1f4f6b]"
          aria-hidden="true"
        />
        <span>
          <span className="sr-only">Address: </span>
          {chainFerry.address}
        </span>
      </p>

      <h4
        id="village-parks-fares-list"
        className={cn(label, "mt-6 text-[#1f4f6b]")}
      >
        Fares
      </h4>
      <ul
        aria-labelledby="village-parks-fares-list"
        className="mt-3 flex flex-wrap gap-2"
      >
        {chainFerry.fares.map((fare) => (
          <li
            key={fare.label}
            className="inline-flex max-w-full items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 text-sm leading-snug font-semibold text-(--v-text)"
          >
            <span
              className={cn(
                heading,
                "inline-flex h-8 min-w-11 shrink-0 items-center justify-center rounded-full bg-[#1f4f6b] px-2.5 text-sm font-extrabold text-white"
              )}
            >
              {fare.price}
            </span>
            <span className="min-w-0">
              <span className="sr-only">: </span>
              {fare.label}
            </span>
          </li>
        ))}
      </ul>

      <p className="mt-4 flex items-start gap-3 rounded-2xl bg-white/70 p-4 text-[0.95rem] leading-snug text-(--v-text)">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[#1f4f6b]">
          <Info className="size-4" aria-hidden="true" />
        </span>
        <span className="self-center">{chainFerry.note}</span>
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <CallPill
          phone={chainFerry.phone}
          who={`the ${chainFerry.name}`}
          className="focus-visible:ring-offset-(--v-sky)"
        />
        <span className="text-sm font-semibold text-(--v-text)">
          {chainFerry.phone}
        </span>
      </div>
    </section>
  )
}
