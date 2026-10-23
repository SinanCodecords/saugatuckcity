import Image from "next/image"
import {
  Bell,
  CreditCard,
  FileText,
  MessageSquareWarning,
  type LucideIcon,
} from "lucide-react"

import { heroImages } from "@/content/home"

const featureButtons: {
  label: string
  description: string
  icon: LucideIcon
}[] = [
  {
    label: "Pay Online",
    description: "Utility bills, taxes and tickets",
    icon: CreditCard,
  },
  {
    label: "Agendas & Minutes",
    description: "Council and board meetings",
    icon: FileText,
  },
  {
    label: "Report a Concern",
    description: "Potholes, lights and more",
    icon: MessageSquareWarning,
  },
  {
    label: "Notify Me",
    description: "Alerts and news by email or text",
    icon: Bell,
  },
]

export function Hero() {
  return (
    <section aria-labelledby="civic-hero-heading" className="bg-white">
      <div className="relative isolate h-[320px] overflow-hidden bg-(--civic-blue-dark) text-white sm:h-[380px] lg:h-[420px]">
        <Image
          src={heroImages.marina}
          alt="Sailboats docked at the Saugatuck marina on the Kalamazoo River on a clear day"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-[rgba(10,30,60,0.85)] via-[rgba(10,30,60,0.35)] to-[rgba(10,30,60,0.15)]"
        />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
          <h1
            id="civic-hero-heading"
            className="text-3xl font-bold tracking-tight text-balance drop-shadow-sm sm:text-4xl lg:text-5xl"
          >
            Welcome to the City of Saugatuck
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-100 sm:text-lg">
            City services, meetings, permits and news for residents, businesses
            and visitors to our harbor town on Lake Michigan.
          </p>
        </div>
      </div>

      {/* Feature buttons overlapping the hero's bottom edge */}
      <div className="mx-auto -mt-16 max-w-7xl px-4 sm:-mt-20 sm:px-6 lg:px-8">
        <nav aria-label="Popular tasks">
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {featureButtons.map(({ label, description, icon: Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  className="group flex h-full flex-col items-center rounded-lg border border-slate-200 bg-white px-4 py-6 text-center shadow-md transition-all hover:-translate-y-0.5 hover:border-(--civic-blue) hover:shadow-lg focus-visible:ring-4 focus-visible:ring-(--civic-blue) focus-visible:ring-offset-2 focus-visible:outline-none sm:py-7"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-14 items-center justify-center rounded-full bg-(--civic-blue-tint) text-(--civic-blue) transition-colors group-hover:bg-(--civic-blue) group-hover:text-white sm:size-16"
                  >
                    <Icon className="size-7 sm:size-8" strokeWidth={1.75} />
                  </span>
                  <span className="mt-4 text-base font-bold text-slate-900 group-hover:text-(--civic-blue) sm:text-lg">
                    {label}
                  </span>
                  <span className="mt-1 hidden text-sm text-slate-600 sm:block">
                    {description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
