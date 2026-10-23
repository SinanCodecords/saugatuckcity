"use client"

import { useEffect, useId, useRef, useState } from "react"
import { ChevronDown, Menu, Search, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { mainNav } from "@/content/home"
import { cn } from "@/lib/utils"

import { focusRing } from "./shared"

type MobileNavProps = {
  groups: Record<string, readonly string[]>
}

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * USWDS mobile menu: a "Menu" button that opens a full-height panel with the
 * search form, the primary nav (with expandable groups), and contact details.
 * Built without a portal so it inherits the variant's font and palette.
 */
export function MobileNav({ groups }: MobileNavProps) {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const searchId = useId()

  useEffect(() => {
    if (!open) return

    const trigger = triggerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== "Tab" || !panelRef.current) return
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null)
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = previousOverflow
      trigger?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-12 items-center gap-2 rounded-[4px] bg-(--primary) px-4 text-[16px] font-bold text-white hover:bg-(--primary-dark) lg:hidden",
          focusRing
        )}
      >
        <Menu aria-hidden="true" className="size-5" />
        Menu
      </button>

      {open ? (
        <div
          className="fixed inset-x-0 top-10 bottom-0 z-[90] flex justify-end bg-black/50 lg:hidden"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="flex h-full w-full max-w-[22rem] flex-col overflow-y-auto bg-white text-(--ink) shadow-[-6px_0_16px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-(--gray-10) px-4 py-3">
              <p id={titleId} className="m-0 text-[17px] font-bold">
                Menu
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-[4px] text-(--ink) hover:bg-(--gray-5)",
                  focusRing
                )}
              >
                <X aria-hidden="true" className="size-6" />
                <span className="sr-only">Close menu</span>
              </button>
            </div>

            <form
              role="search"
              action="#"
              className="border-b border-(--gray-10) px-4 py-4"
            >
              <label
                htmlFor={searchId}
                className="mb-1 block text-[15px] font-bold"
              >
                Search
              </label>
              <div className="flex">
                <input
                  id={searchId}
                  type="search"
                  name="q"
                  className={cn(
                    "h-11 min-w-0 flex-1 rounded-l-[4px] border border-(--gray-60) bg-white px-3 text-[16px] text-(--ink)",
                    focusRing,
                    "focus-visible:outline-offset-0"
                  )}
                />
                <button
                  type="submit"
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-r-[4px] bg-(--primary) px-4 text-white hover:bg-(--primary-dark)",
                    focusRing
                  )}
                >
                  <Search aria-hidden="true" className="size-5" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>

            <nav aria-label="Primary (mobile)" className="flex-1">
              <ul className="m-0 list-none divide-y divide-(--gray-10) p-0">
                {mainNav.map((item) => {
                  const children = groups[item.label]
                  if (!children) {
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href === "/" ? "#" : item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "block px-4 py-3.5 text-[17px] font-semibold text-(--ink) hover:bg-(--gray-5) hover:text-(--primary) hover:underline",
                            focusRing,
                            "focus-visible:-outline-offset-4"
                          )}
                        >
                          {item.label}
                        </a>
                      </li>
                    )
                  }
                  const isExpanded = expanded === item.label
                  const listId = `${titleId}-${item.label.replace(/\W+/g, "-")}`
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={listId}
                        onClick={() =>
                          setExpanded(isExpanded ? null : item.label)
                        }
                        className={cn(
                          "flex w-full items-center justify-between px-4 py-3.5 text-left text-[17px] font-semibold text-(--ink) hover:bg-(--gray-5)",
                          isExpanded && "bg-(--gray-5)",
                          focusRing,
                          "focus-visible:-outline-offset-4"
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className={cn(
                            "size-5 transition-transform",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>
                      <ul
                        id={listId}
                        hidden={!isExpanded}
                        className="m-0 list-none bg-(--gray-5) p-0 pb-2"
                      >
                        {children.map((child) => (
                          <li key={child}>
                            <a
                              href="#"
                              onClick={() => setOpen(false)}
                              className={cn(
                                "block py-2.5 pr-4 pl-8 text-[16px] text-(--ink) hover:text-(--primary) hover:underline",
                                focusRing,
                                "focus-visible:-outline-offset-4"
                              )}
                            >
                              {child}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )
                })}
              </ul>
            </nav>

            <div className="border-t border-(--gray-10) bg-(--gray-5) px-4 py-4 text-[15px] leading-relaxed">
              <p className="m-0 font-bold">City Hall</p>
              <p className="m-0">{siteConfig.contact.address}</p>
              <p className="m-0">
                <a
                  href="#"
                  className={cn(
                    "text-(--primary) underline underline-offset-[3px]",
                    focusRing
                  )}
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="m-0">{siteConfig.contact.hours}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
