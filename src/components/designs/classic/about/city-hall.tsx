import { ArrowRight, Clock, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"

import { inlineLink, textLink, Widget } from "./ui"

const { address, phone, hours } = siteConfig.contact

export function CityHallWidget({ id }: { id: string }) {
  return (
    <Widget id={id} title="Visit City Hall">
      <address className="space-y-3 text-sm text-(--body) not-italic">
        <p className="flex gap-3">
          <MapPin
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue)"
          />
          <span>{address}</span>
        </p>
        <p className="flex gap-3">
          <Phone
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue)"
          />
          <a href={`tel:+1${phone.replace(/\D/g, "")}`} className={inlineLink}>
            {phone}
          </a>
        </p>
        <p className="flex gap-3">
          <Clock
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue)"
          />
          <span>{hours}</span>
        </p>
      </address>
      <a href="#" className={`${textLink} mt-4`}>
        Get directions
        <ArrowRight aria-hidden="true" className="size-4" />
      </a>
    </Widget>
  )
}
