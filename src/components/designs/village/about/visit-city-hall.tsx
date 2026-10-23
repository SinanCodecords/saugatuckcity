import { Clock, MapPin, Navigation, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Container, PillLink, focusRing, heading } from "../shared"
import { sectionAnchor } from "./shared"

export function VillageAboutVisit() {
  const { address, phone, hours } = siteConfig.contact
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  const details = [
    { label: "Address", value: address, icon: MapPin },
    {
      label: "Phone",
      value: phone,
      icon: Phone,
      href: `tel:${phone.replace(/[^\d]/g, "")}`,
    },
    { label: "Hours", value: hours, icon: Clock },
  ]

  return (
    <section
      id="village-visit"
      aria-labelledby="village-visit-title"
      className={cn(sectionAnchor, "py-12 sm:py-16")}
    >
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-(--v-primary) px-6 py-10 text-white shadow-[0_30px_60px_-30px_rgba(29,92,74,0.8)] sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-(--v-secondary)/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-16 size-72 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12">
            <div>
              <p
                className={cn(
                  heading,
                  "text-sm font-bold tracking-wide text-white/80 uppercase"
                )}
              >
                Visit us
              </p>
              <h2
                id="village-visit-title"
                className={cn(
                  heading,
                  "mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl"
                )}
              >
                Come say hello
              </h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                Stop by City Hall or give us a call. We are happy to help.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PillLink
                  href={directions}
                  tone="inverse"
                  size="lg"
                  className="focus-visible:ring-offset-(--v-primary)"
                >
                  <Navigation className="size-4" aria-hidden="true" />
                  Get directions
                </PillLink>
              </div>
            </div>

            <dl className="flex flex-col divide-y divide-(--v-line) rounded-3xl bg-white px-4 py-1 text-(--v-text) shadow-[0_20px_45px_-24px_rgba(0,0,0,0.5)] sm:px-6">
              {details.map((detail, index) => {
                const Icon = detail.icon
                return (
                  <div
                    key={detail.label}
                    className="flex items-start gap-3.5 py-4 sm:gap-4"
                  >
                    <span
                      className={cn(
                        "inline-flex size-11 shrink-0 items-center justify-center rounded-full",
                        index === 0 && "bg-(--v-mint) text-(--v-primary)",
                        index === 1 && "bg-(--v-sky) text-[#1f4f6b]",
                        index === 2 && "bg-(--v-peach) text-[#8a4b12]"
                      )}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt
                        className={cn(
                          heading,
                          "text-xs font-bold tracking-wide text-(--v-muted) uppercase"
                        )}
                      >
                        {detail.label}
                      </dt>
                      <dd
                        className={cn(
                          heading,
                          "mt-0.5 text-base font-bold sm:text-lg"
                        )}
                      >
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className={cn(
                              focusRing,
                              "rounded-md text-(--v-primary) underline decoration-(--v-primary)/30 underline-offset-4 hover:decoration-(--v-primary) focus-visible:ring-offset-white"
                            )}
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}
