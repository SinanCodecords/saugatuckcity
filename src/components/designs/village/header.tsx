import { Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { mainNav, navHref, pageHref, type SitePage } from "@/content/home"
import { cn } from "@/lib/utils"

import { MobileNav } from "./mobile-nav"
import { Container, PillLink, focusRing, heading } from "./shared"

export function Seal({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-(--v-primary) text-white ring-4 ring-(--v-mint)",
        className
      )}
    >
      <span className="absolute inset-1 rounded-full border border-dashed border-white/50" />
      <span className={cn(heading, "text-sm font-extrabold tracking-tight")}>
        S
      </span>
    </span>
  )
}

export function VillageHeader({ current }: { current: SitePage }) {
  const nav = mainNav.map((item) => ({
    label: item.label,
    href: navHref("village", item),
    current: item.page === current,
  }))
  // The seal links home, so the desktop bar skips the redundant "Home" item.
  const desktopNav = nav.filter((item) => item.label !== "Home")

  return (
    <header className="sticky top-10 z-50 pt-4">
      <Container className="max-w-7xl">
        <div className="relative flex h-18 items-center justify-between gap-4 rounded-full border border-(--v-line) bg-white/95 pr-3 pl-4 shadow-[0_12px_32px_-18px_rgba(29,92,74,0.45)] backdrop-blur supports-backdrop-filter:bg-white/85 sm:pr-4 sm:pl-5">
          <a
            href={pageHref("village", "home")}
            className={cn(
              focusRing,
              "flex shrink-0 items-center gap-3 rounded-full py-1 pr-2"
            )}
          >
            <Seal />
            <span className="flex flex-col leading-tight whitespace-nowrap">
              <span
                className={cn(
                  heading,
                  "text-base font-extrabold text-(--v-text) sm:text-lg"
                )}
              >
                {siteConfig.name}
              </span>
              <span className="text-xs font-medium text-(--v-muted)">
                Michigan
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {desktopNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={cn(
                      heading,
                      focusRing,
                      "inline-flex h-10 items-center rounded-full px-2.5 text-sm font-bold whitespace-nowrap text-(--v-text) transition-colors hover:bg-(--v-mint) hover:text-(--v-primary) aria-[current=page]:bg-(--v-mint) aria-[current=page]:text-(--v-primary)"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <PillLink href="#" className="hidden sm:inline-flex">
              <Phone className="size-4" aria-hidden="true" />
              Contact City Hall
            </PillLink>
            <MobileNav items={nav} />
          </div>
        </div>
      </Container>
    </header>
  )
}
