import { Search } from "lucide-react"

import { departments, mainNav } from "@/content/home"
import { cn } from "@/lib/utils"

import { MobileNav } from "./mobile-nav"
import { NavDropdown } from "./nav-dropdown"
import { Container, focusRing } from "./shared"

export const boards = [
  "City Council",
  "Planning Commission",
  "Zoning Board of Appeals",
  "Downtown Development Authority",
  "Harbor Authority",
  "Parks & Public Works",
] as const

const navGroups: Record<string, readonly string[]> = {
  Departments: departments,
  "Boards & Committees": boards,
}

/** USWDS "extended header": logo + search on top, primary nav row beneath. */
export function SiteHeader() {
  return (
    <header className="border-b border-(--gray-10) bg-white">
      <Container>
        <div className="flex items-center justify-between gap-6 py-4 lg:py-6">
          <a
            href="#"
            className={cn("inline-block rounded-[2px] text-(--ink)", focusRing)}
            aria-label="City of Saugatuck, Michigan — home"
          >
            <span className="block text-[24px] leading-none font-bold sm:text-[28px]">
              City of Saugatuck
            </span>
            <span className="mt-1 block text-[15px] leading-none text-(--gray-60)">
              Michigan
            </span>
          </a>

          <form role="search" action="#" className="hidden items-end lg:flex">
            <div className="flex flex-col">
              <label
                htmlFor="federal-site-search"
                className="mb-1 text-[15px] leading-none font-bold"
              >
                Search
              </label>
              <input
                id="federal-site-search"
                type="search"
                name="q"
                className={cn(
                  "h-10 w-72 rounded-l-[4px] border border-(--gray-60) bg-white px-3 text-[16px] text-(--ink)",
                  focusRing,
                  "focus-visible:outline-offset-0"
                )}
              />
            </div>
            <button
              type="submit"
              className={cn(
                "inline-flex h-10 items-center justify-center gap-2 rounded-r-[4px] bg-(--primary) px-4 text-[16px] font-bold text-white hover:bg-(--primary-dark)",
                focusRing
              )}
            >
              <Search aria-hidden="true" className="size-5" />
              Search
            </button>
          </form>

          <MobileNav groups={navGroups} />
        </div>
      </Container>

      <nav
        aria-label="Primary"
        className="hidden border-t border-(--gray-10) lg:block"
      >
        <Container>
          <ul className="m-0 -ml-4 flex list-none flex-wrap items-stretch p-0">
            {mainNav.map((item) => {
              const children = navGroups[item.label]
              if (children) {
                return (
                  <NavDropdown
                    key={item.label}
                    label={item.label}
                    items={children}
                  />
                )
              }
              return (
                <li key={item.label}>
                  <a
                    href={item.href === "/" ? "#" : item.href}
                    className={cn(
                      "inline-flex h-14 items-center border-b-4 border-transparent px-4 text-[17px] leading-none font-bold text-(--ink) hover:border-(--primary) hover:bg-(--gray-5)",
                      focusRing,
                      "focus-visible:-outline-offset-4"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </Container>
      </nav>
    </header>
  )
}
