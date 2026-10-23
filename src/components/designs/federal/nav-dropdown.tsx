"use client"

import { useEffect, useId, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

import { focusRing } from "./shared"

type NavDropdownProps = {
  label: string
  items: readonly string[]
}

/**
 * USWDS primary-nav dropdown: a button that toggles a list of links.
 * Closes on Escape, on outside click, and when focus leaves the menu.
 */
export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLLIElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  return (
    <li
      ref={rootRef}
      className="relative"
      onBlur={(event) => {
        if (!rootRef.current?.contains(event.relatedTarget as Node | null)) {
          setOpen(false)
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-14 items-center gap-1 px-4 text-[17px] leading-none font-bold text-(--ink) hover:bg-(--gray-5)",
          "border-b-4 border-transparent hover:border-(--primary)",
          open &&
            "bg-(--primary) text-white hover:border-(--primary) hover:bg-(--primary)",
          focusRing,
          "focus-visible:-outline-offset-4"
        )}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cn("size-5 transition-transform", open && "rotate-180")}
        />
      </button>
      <ul
        id={menuId}
        hidden={!open}
        className="absolute top-full left-0 z-40 m-0 w-64 list-none bg-(--primary) p-0 py-2 text-white shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
      >
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className={cn(
                "block px-4 py-2.5 text-[16px] leading-snug text-white hover:underline hover:underline-offset-[3px]",
                focusRing,
                "focus-visible:-outline-offset-4"
              )}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}
