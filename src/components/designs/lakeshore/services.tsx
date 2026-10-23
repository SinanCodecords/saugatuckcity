import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, LayoutGrid } from "lucide-react"

import { heroImages, quickLinks } from "@/content/home"

import { quickLinkIcons } from "./icons"
import { container, focusRing, sectionHeading } from "./styles"

/** Column spans for the six quick-link cards on a 12-column grid. */
const spans = [
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
] as const

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="bg-white">
      <div className={`${container} py-14 sm:py-16`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="services-heading" className={sectionHeading}>
              Popular services
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
              The things residents and visitors ask for most.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
          <li className="md:col-span-6 lg:col-span-5 lg:row-span-2">
            <Link
              href="#"
              className={`${focusRing} group relative flex h-full min-h-72 flex-col justify-end overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white`}
            >
              <Image
                src={heroImages.marina}
                alt="Boats moored at the Saugatuck marina on the Kalamazoo River"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/30 to-transparent"
                aria-hidden="true"
              />
              <div className="relative p-6 sm:p-7">
                <span className="text-xs font-medium tracking-wide text-white/75 uppercase">
                  Harbor &amp; Marina
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                  Slips, launches and harbor services
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">
                  Seasonal and transient dockage, boat launch passes, and the
                  harbor management plan.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                  Explore the harbor
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </li>

          {quickLinks.map((link, index) => {
            const Icon = quickLinkIcons[link.icon]
            return (
              <li key={link.label} className={`md:col-span-3 ${spans[index]}`}>
                <Link
                  href="#"
                  className={`${focusRing} group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-px hover:border-slate-300 hover:shadow-[0_10px_30px_-18px_rgba(15,23,42,0.35)]`}
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-(--lk-blue-tint) text-(--lk-blue-text)">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <ArrowUpRight
                      className="size-4 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-(--lk-blue-text)"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-900">
                    {link.label}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {link.description}
                  </p>
                </Link>
              </li>
            )
          })}

          <li className="md:col-span-6 lg:col-span-4">
            <Link
              href="#"
              className={`${focusRing} group flex h-full flex-col justify-between rounded-2xl border border-dashed border-slate-300 bg-(--lk-surface) p-5 transition-colors hover:border-(--lk-blue) hover:bg-(--lk-blue-tint)`}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white text-slate-700 ring-1 ring-slate-200">
                <LayoutGrid className="size-5" aria-hidden="true" />
              </span>
              <div className="mt-5">
                <h3 className="text-base font-semibold tracking-tight text-slate-900">
                  All city services
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Browse every department, form and online service in one place.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-(--lk-blue-text)">
                  Open the directory
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}
