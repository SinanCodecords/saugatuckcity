import Image from "next/image"
import { CalendarRange, Clock, MapPin, Ship, Sun } from "lucide-react"

import {
  chainFerry,
  gettingToTheBeach,
  ovalBeach,
  parksImages,
} from "@/content/parks"

import { Widget } from "../about/ui"
import { PhoneLink } from "../departments/department-panel"
import { gettingThereIcons } from "./icons"
import { DetailItem, FeaturePanel, Note, PanelLabel, PriceTable } from "./ui"
import { chainFerryId, gettingThereId, ovalBeachId } from "./utils"

const columns =
  "grid divide-y divide-(--rule) md:grid-cols-2 md:divide-x md:divide-y-0"

export function OvalBeachPanel() {
  return (
    <FeaturePanel id={ovalBeachId} title={ovalBeach.name} icon={Sun}>
      <div className="relative aspect-[21/9] border-b border-(--rule) bg-(--band)">
        <Image
          src={parksImages.beach}
          alt="Sunset over Lake Michigan from the beach"
          fill
          sizes="(min-width: 1152px) 784px, (min-width: 1024px) 66vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className={columns}>
        {/* Left: about the beach and when it's open */}
        <div className="space-y-5 px-5 py-5">
          <p className="text-sm leading-relaxed text-(--body)">
            {ovalBeach.summary}
          </p>
          <dl className="space-y-2.5 text-sm">
            <DetailItem icon={MapPin} label="Address">
              {ovalBeach.address}
            </DetailItem>
            <DetailItem icon={CalendarRange} label="Season">
              {ovalBeach.season}
            </DetailItem>
            <DetailItem icon={Clock} label="Hours">
              {ovalBeach.hours}
            </DetailItem>
          </dl>
        </div>

        {/* Right: passes and parking */}
        <div className="space-y-4 px-5 py-5">
          <PanelLabel>Parking passes</PanelLabel>
          <PriceTable
            caption="Oval Beach parking passes, where to buy them and their prices"
            itemHeading="Pass"
            priceHeading="Price"
            rows={ovalBeach.passes}
          />
          <Note>{ovalBeach.parkingNote}</Note>
        </div>
      </div>
    </FeaturePanel>
  )
}

export function ChainFerryPanel() {
  return (
    <FeaturePanel id={chainFerryId} title={chainFerry.name} icon={Ship}>
      <div className={columns}>
        {/* Left: about the ferry */}
        <div className="space-y-5 px-5 py-5">
          <p className="text-sm leading-relaxed text-(--body)">
            {chainFerry.summary}
          </p>
          <dl className="space-y-2.5 text-sm">
            <DetailItem icon={MapPin} label="Address">
              {chainFerry.address}
            </DetailItem>
          </dl>
          <p className="text-sm">
            <PhoneLink phone={chainFerry.phone} who="the Chain Ferry" />
          </p>
        </div>

        {/* Right: fares */}
        <div className="space-y-4 px-5 py-5">
          <PanelLabel>Fares</PanelLabel>
          <PriceTable
            caption="Chain Ferry fares by rider"
            itemHeading="Rider"
            priceHeading="Fare"
            rows={chainFerry.fares}
          />
          <Note>{chainFerry.note}</Note>
        </div>
      </div>
    </FeaturePanel>
  )
}

/** Three car-free routes to Oval Beach, side by side on wider screens. */
export function GettingToTheBeach() {
  return (
    <div id={gettingThereId} className="scroll-mt-32">
      <Widget
        id={`${gettingThereId}-title`}
        title={gettingToTheBeach.title}
        bodyClassName="p-0"
      >
        {/* 1px gaps over a rule-colored background give thin dividers in any grid shape */}
        <ul className="grid gap-px bg-(--rule) md:grid-cols-3">
          {gettingToTheBeach.options.map((option) => {
            const Icon = gettingThereIcons[option.label] ?? Sun
            return (
              <li key={option.label} className="bg-white px-5 py-4">
                <h3 className="flex items-start gap-2.5 text-sm leading-snug font-semibold text-(--ink)">
                  <Icon
                    aria-hidden="true"
                    className="mt-px size-4 shrink-0 text-(--blue)"
                  />
                  {option.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--body)">
                  {option.body}
                </p>
                {"phone" in option ? (
                  <p className="mt-2.5 text-sm">
                    <PhoneLink
                      phone={option.phone}
                      who={`the ${option.label} for a pickup`}
                    />
                  </p>
                ) : null}
              </li>
            )
          })}
        </ul>
      </Widget>
    </div>
  )
}
