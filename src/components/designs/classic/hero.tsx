import Image from "next/image"
import { CreditCard, FileText, Phone, type LucideIcon } from "lucide-react"

import { heroImages } from "@/content/home"

const actions: { label: string; icon: LucideIcon }[] = [
  { label: "Pay a Bill", icon: CreditCard },
  { label: "Agendas & Minutes", icon: FileText },
  { label: "Contact City Hall", icon: Phone },
]

export function Hero() {
  return (
    <section aria-labelledby="classic-welcome" className="relative">
      {/* Photo banner */}
      <div className="relative h-[300px] w-full sm:h-[360px]">
        <Image
          src={heroImages.lake}
          alt="Beachgoers on the Lake Michigan shore below grassy dunes near Saugatuck"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5"
        />
      </div>

      {/* Welcome card overlapping the banner's bottom edge */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto -mt-20 max-w-3xl rounded-md border border-(--rule) bg-white px-6 py-8 text-center shadow-[0_8px_30px_-12px_rgba(24,24,27,0.25)] sm:-mt-24 sm:px-10 sm:py-10">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-(--blue-text) uppercase">
            Saugatuck, Michigan
          </p>
          <h1
            id="classic-welcome"
            className="mt-3 text-3xl font-semibold tracking-tight text-(--ink) sm:text-4xl"
          >
            Welcome to the City of Saugatuck
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-(--body)">
            A historic harbor town on the shore of Lake Michigan, serving
            residents, businesses and visitors since 1868.
          </p>

          <ul className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {actions.map(({ label, icon: Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-(--rule) bg-white px-5 text-sm font-semibold text-(--ink) transition-colors hover:border-(--blue) hover:bg-(--blue-pale) hover:text-(--blue-text) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none sm:w-auto"
                >
                  <Icon aria-hidden="true" className="size-4 text-(--blue)" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
