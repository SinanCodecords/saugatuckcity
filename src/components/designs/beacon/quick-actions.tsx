import {
  ArrowUpRight,
  Briefcase,
  ClipboardCheck,
  CreditCard,
  FileText,
  SquareParking,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react"

import { quickLinks } from "@/content/home"

const icons: Record<(typeof quickLinks)[number]["icon"], LucideIcon> = {
  CreditCard,
  FileText,
  ClipboardCheck,
  AlertTriangle: TriangleAlert,
  Briefcase,
  ParkingSquare: SquareParking,
}

export function BeaconQuickActions() {
  return (
    <section
      aria-labelledby="beacon-quick-heading"
      className="bg-[var(--beacon-surface)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[var(--beacon-amber-deep)] uppercase">
              Quick actions
            </p>
            <h2
              id="beacon-quick-heading"
              className="mt-2 font-[family-name:var(--font-beacon-display)] text-3xl font-bold tracking-[-0.03em] sm:text-4xl"
            >
              What do you need to do today?
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--beacon-ink)] underline decoration-[var(--beacon-amber)] decoration-2 underline-offset-4 hover:text-[var(--beacon-muted)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-ink)] focus-visible:outline-none"
          >
            All online services
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {quickLinks.map((link) => {
            const Icon = icons[link.icon]
            return (
              <li key={link.label}>
                <a
                  href="#"
                  className="group flex aspect-square flex-col justify-between rounded-xl border border-b-4 border-[var(--beacon-line)] border-b-[var(--beacon-ink)] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-b-[var(--beacon-amber)] hover:shadow-[0_12px_30px_-12px_rgba(12,15,20,0.25)] focus-visible:border-b-[var(--beacon-amber)] focus-visible:ring-2 focus-visible:ring-[var(--beacon-ink)] focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  <span className="flex size-11 items-center justify-center rounded-lg bg-[var(--beacon-ink)] text-white transition-colors group-hover:bg-[var(--beacon-amber)] group-hover:text-[var(--beacon-ink)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-beacon-display)] text-base leading-tight font-bold tracking-[-0.02em] sm:text-lg">
                      {link.label}
                    </span>
                    <span className="mt-1.5 hidden text-xs leading-snug text-[var(--beacon-muted)] sm:block">
                      {link.description}
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
