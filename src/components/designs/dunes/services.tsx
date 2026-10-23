import Link from "next/link"
import {
  AlertTriangle,
  ArrowUpRight,
  Briefcase,
  ClipboardCheck,
  CreditCard,
  FileText,
  ParkingSquare,
  type LucideIcon,
} from "lucide-react"

import { quickLinks } from "@/content/home"

const icons: Record<(typeof quickLinks)[number]["icon"], LucideIcon> = {
  CreditCard,
  FileText,
  ClipboardCheck,
  AlertTriangle,
  Briefcase,
  ParkingSquare,
}

export function DunesServices() {
  return (
    <section
      aria-labelledby="services-heading"
      className="border-t border-(--dn-rule)"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-(--dn-teal) uppercase">
              Services
            </p>
            <h2
              id="services-heading"
              className="mt-3 font-(family-name:--font-dunes-serif) text-3xl leading-tight font-light tracking-[-0.01em] sm:text-4xl"
            >
              The things people come here to do.
            </h2>
          </div>
          <Link
            href="#"
            className="group inline-flex items-center gap-1.5 self-start rounded-sm text-sm font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal) sm:self-auto"
          >
            All services
            <ArrowUpRight
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </Link>
        </div>

        <ol className="mt-10 grid grid-cols-1 border-t border-(--dn-rule) sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link, index) => {
            const Icon = icons[link.icon]
            const number = String(index + 1).padStart(2, "0")
            return (
              <li
                key={link.label}
                className="border-b border-(--dn-rule) lg:[&:not(:nth-child(3n))]:border-r sm:max-lg:[&:nth-child(odd)]:border-r"
              >
                <Link
                  href="#"
                  className="group flex h-full flex-col gap-6 px-1 py-7 transition-colors hover:bg-(--dn-bg-deep)/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-(--dn-teal) sm:px-6 sm:py-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-(family-name:--font-dunes-serif) text-sm text-(--dn-ink-soft) tabular-nums">
                      {number}
                    </span>
                    <Icon
                      className="size-[18px] text-(--dn-teal)"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <span className="font-(family-name:--font-dunes-serif) text-2xl leading-snug text-(--dn-ink) transition-colors group-hover:text-(--dn-teal)">
                      {link.label}
                    </span>
                    <span className="mt-2 text-[15px] leading-relaxed text-(--dn-ink-soft)">
                      {link.description}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-(--dn-ink) opacity-70 transition-opacity group-hover:opacity-100">
                    Go
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
