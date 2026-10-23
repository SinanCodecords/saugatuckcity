import Image from "next/image"
import {
  CalendarRange,
  Car,
  Clock,
  Info,
  MapPin,
  Navigation,
  Ship,
  Sun,
} from "lucide-react"

import { chainFerry, ovalBeach, parksImages } from "@/content/parks"

import { PhoneLink } from "../boards/attend-and-serve"
import { textLink } from "../departments/shared"
import { PriceTable } from "./price-table"

const eyebrow =
  "flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-(--navy) uppercase"

const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${ovalBeach.address}, Saugatuck, MI`
)}`

function InfoChip({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock
  label: string
  value: string
}) {
  return (
    <div className="flex min-w-0 items-start gap-2.5 rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
      <Icon
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-(--navy)"
      />
      <div className="min-w-0">
        <dt className="text-[0.6875rem] font-semibold tracking-wide text-slate-600 uppercase">
          {label}
        </dt>
        <dd className="text-sm leading-snug font-medium text-slate-900">
          {value}
        </dd>
      </div>
    </div>
  )
}

function OvalBeachFeature() {
  return (
    <section
      aria-labelledby="harbor-oval-beach-heading"
      className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_12px_40px_-12px_rgba(11,37,69,0.25)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <div className="relative aspect-[16/10] bg-slate-100 sm:aspect-[21/9] lg:aspect-auto">
        <Image
          src={parksImages.beach}
          alt="Sunset over Lake Michigan from the beach"
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover object-[30%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1 bg-(--gold) lg:inset-x-auto lg:inset-y-0 lg:right-0 lg:h-auto lg:w-1"
        />
      </div>

      <div className="min-w-0 p-5 sm:p-8 lg:p-10">
        <p className={eyebrow}>
          <Sun aria-hidden="true" className="size-4 text-(--gold)" />
          Featured park
        </p>
        <h2
          id="harbor-oval-beach-heading"
          className="mt-2 text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl"
        >
          {ovalBeach.name}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-700">
          {ovalBeach.summary}
        </p>

        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-1.5 font-medium text-slate-900">
            <MapPin aria-hidden="true" className="size-4 text-(--navy)" />
            <span className="sr-only">Address: </span>
            {ovalBeach.address}
          </span>
          <a
            href={directionsHref}
            className={`inline-flex items-center gap-1.5 ${textLink}`}
          >
            <Navigation aria-hidden="true" className="size-3.5" />
            Directions to {ovalBeach.name}
          </a>
        </p>

        <dl className="mt-5 grid gap-2 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <InfoChip
            icon={CalendarRange}
            label="Season"
            value={ovalBeach.season}
          />
          <InfoChip icon={Clock} label="Hours" value={ovalBeach.hours} />
        </dl>

        <div className="mt-6">
          <PriceTable
            caption="Parking passes"
            itemHeading="Pass"
            noteHeading="Where to buy"
            rows={ovalBeach.passes}
          />
        </div>

        <p className="mt-5 flex items-start gap-3 rounded-md border border-l-4 border-amber-200 border-l-amber-500 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
          <Car
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-amber-700"
          />
          <span>
            <span className="font-semibold">Parking: </span>
            {ovalBeach.parkingNote}
          </span>
        </p>
      </div>
    </section>
  )
}

function ChainFerryCard() {
  return (
    <section
      aria-labelledby="harbor-chain-ferry-heading"
      className="overflow-hidden rounded-lg border border-t-3 border-slate-200 border-t-(--gold) bg-white shadow-sm"
    >
      <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:gap-10 lg:p-10">
        <div className="min-w-0">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-md bg-(--navy) text-white shadow-sm"
            >
              <Ship className="size-6" />
            </span>
            <div className="min-w-0">
              <p className={eyebrow}>On the river</p>
              <h2
                id="harbor-chain-ferry-heading"
                className="mt-1 text-2xl font-semibold tracking-tight text-(--navy) sm:text-3xl"
              >
                {chainFerry.name}
              </h2>
            </div>
          </div>
          <div className="sm:pl-16">
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              {chainFerry.summary}
            </p>
            <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-900">
                <MapPin aria-hidden="true" className="size-4 text-(--navy)" />
                <span className="sr-only">Address: </span>
                {chainFerry.address}
              </span>
              <PhoneLink
                phone={chainFerry.phone}
                label={`Call the ${chainFerry.name} at ${chainFerry.phone}`}
              />
            </p>
            <p className="mt-5 flex items-start gap-3 rounded-md border border-l-4 border-slate-200 border-l-(--gold) bg-slate-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
              <Info
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-(--navy)"
              />
              {chainFerry.note}
            </p>
          </div>
        </div>

        <div className="min-w-0 lg:self-center">
          <PriceTable
            caption="Fares"
            itemHeading="Rider"
            rows={chainFerry.fares}
          />
        </div>
      </div>
    </section>
  )
}

export function BeachAndFerry() {
  return (
    <div className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:space-y-8 lg:px-8">
        <OvalBeachFeature />
        <ChainFerryCard />
      </div>
    </div>
  )
}
