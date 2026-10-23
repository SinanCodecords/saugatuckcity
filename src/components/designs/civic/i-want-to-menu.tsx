"use client"

import { ChevronDown } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { iWantToGroups } from "./i-want-to-data"

export function IWantToMenu() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        className="group flex h-12 items-center gap-1.5 bg-(--civic-blue-dark) px-4 text-[15px] font-semibold whitespace-nowrap text-white transition-colors hover:bg-(--civic-blue-darker) focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none focus-visible:ring-inset aria-expanded:bg-(--civic-blue-darker)"
        aria-label="I Want To… menu of common tasks"
      >
        I Want To…
        <ChevronDown
          aria-hidden="true"
          className="size-4 transition-transform group-aria-expanded:rotate-180"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        sideOffset={0}
        className="w-auto max-w-[calc(100vw-2rem)] rounded-t-none rounded-b-lg border border-slate-200 bg-white p-0 text-slate-900 shadow-xl ring-0 sm:min-w-[640px]"
      >
        <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {iWantToGroups.map((group) => (
            <DropdownMenuGroup key={group.heading} className="p-4">
              <DropdownMenuLabel className="mb-1 px-2 text-xs font-bold tracking-wider text-(--civic-blue) uppercase">
                {group.heading}
              </DropdownMenuLabel>
              {group.items.map((item) => (
                <DropdownMenuItem
                  key={item}
                  asChild
                  className="cursor-pointer rounded-md px-2 py-2 text-[15px] text-slate-800 focus:bg-(--civic-gray) focus:text-(--civic-blue) focus:underline data-highlighted:bg-(--civic-gray) data-highlighted:text-(--civic-blue)"
                >
                  <a href="#">{item}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
