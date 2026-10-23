import { ChevronDown, ChevronRight, MessageCircleQuestion } from "lucide-react"

import { departmentDirectory } from "@/content/departments"

import { departmentIcons, fallbackDepartmentIcon } from "./icons"
import { groupedDepartments, tasksId } from "./utils"

export const linkClass =
  "group flex items-start gap-3 px-5 py-2.5 text-sm leading-snug font-medium text-(--ink) transition-colors hover:bg-(--blue-pale) hover:text-(--blue-text) focus-visible:bg-(--blue-pale) focus-visible:text-(--blue-text) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset"

export function Chevron() {
  return (
    <ChevronRight
      aria-hidden="true"
      className="mt-0.5 size-4 shrink-0 text-(--muted) transition-colors group-hover:text-(--blue-text)"
    />
  )
}

/** The jump list, grouped the same way as the main column. `idPrefix` keeps ids unique per copy. */
function JumpLinks({ idPrefix }: { idPrefix: string }) {
  return (
    <ul>
      <li className="border-b border-(--rule)">
        <a href={`#${tasksId}`} className={linkClass}>
          <MessageCircleQuestion
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue)"
          />
          <span className="min-w-0 flex-1">Who do I contact?</span>
          <Chevron />
        </a>
      </li>
      {groupedDepartments.map((group) => {
        const labelId = `${idPrefix}-${group.id}`
        return (
          <li key={group.id} className="border-b border-(--rule) last:border-0">
            <p
              id={labelId}
              className="px-5 pt-3.5 pb-1 text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase"
            >
              {group.title}
            </p>
            <ul aria-labelledby={labelId} className="pb-1.5">
              {group.departments.map((department) => {
                const Icon =
                  departmentIcons[department.icon] ?? fallbackDepartmentIcon
                return (
                  <li key={department.id}>
                    <a href={`#${department.id}`} className={linkClass}>
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-(--blue)"
                      />
                      <span className="min-w-0 flex-1">{department.name}</span>
                      <Chevron />
                    </a>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

/** Desktop sidebar version: always open, styled like the home page widgets. */
export function JumpNav() {
  return (
    <nav
      aria-labelledby="classic-departments-jump-nav"
      className="overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <h2
        id="classic-departments-jump-nav"
        className="border-b border-(--rule) bg-(--band) px-5 py-3 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase"
      >
        On this page
      </h2>
      <JumpLinks idPrefix="classic-departments-jump" />
    </nav>
  )
}

/** Mobile version: the same links in a disclosure so they don't push content down. */
export function JumpNavDisclosure() {
  return (
    <details className="group overflow-hidden rounded-md border border-(--rule) bg-white">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 bg-(--band) px-5 py-3.5 text-[11px] font-semibold tracking-[0.25em] text-(--ink) uppercase group-open:border-b group-open:border-(--rule) focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none focus-visible:ring-inset [&::-webkit-details-marker]:hidden">
        <span>
          On this page
          <span className="ml-2 font-medium tracking-normal text-(--muted) normal-case">
            ({departmentDirectory.length} departments)
          </span>
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-4 shrink-0 text-(--blue-text) transition-transform group-open:rotate-180"
        />
      </summary>
      <nav aria-label="On this page">
        <JumpLinks idPrefix="classic-departments-jump-mobile" />
      </nav>
    </details>
  )
}
