"use client"

import { useId, useState } from "react"
import { ChevronDown, Landmark, LockKeyhole, Star } from "lucide-react"

import { cn } from "@/lib/utils"

import { Container, focusRing } from "./shared"

/** USWDS "banner": the thin official-website strip with "Here's how you know". */
export function OfficialBanner() {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <section
      aria-label="Official website of the City of Saugatuck"
      className="bg-(--gray-5) text-[13px] leading-snug text-(--ink)"
    >
      <Container>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-1.5">
          <span
            aria-hidden="true"
            className="flex size-4 shrink-0 items-center justify-center bg-(--primary-dark)"
          >
            <Star className="size-2.5 fill-white text-white" strokeWidth={1} />
          </span>
          <p className="m-0">
            An official website of the City of Saugatuck, Michigan
          </p>
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex items-center gap-0.5 rounded-[2px] text-(--primary) underline underline-offset-[3px] hover:text-(--primary-dark)",
              focusRing
            )}
          >
            Here&rsquo;s how you know
            <ChevronDown
              aria-hidden="true"
              className={cn(
                "size-4 transition-transform",
                open && "rotate-180"
              )}
            />
          </button>
        </div>

        <div id={panelId} hidden={!open} className="pt-3 pb-6">
          <div className="grid gap-6 text-[15px] leading-relaxed sm:grid-cols-2 sm:gap-10">
            <div className="flex gap-3">
              <Landmark
                aria-hidden="true"
                className="mt-0.5 size-10 shrink-0 text-(--primary-dark)"
                strokeWidth={1.5}
              />
              <p className="m-0 max-w-[32ch]">
                <strong className="font-bold">
                  Official websites use .gov
                </strong>
                <br />A <strong className="font-bold">.gov</strong> website
                belongs to an official government organization in the United
                States.
              </p>
            </div>
            <div className="flex gap-3">
              <LockKeyhole
                aria-hidden="true"
                className="mt-0.5 size-10 shrink-0 text-(--primary-dark)"
                strokeWidth={1.5}
              />
              <p className="m-0 max-w-[32ch]">
                <strong className="font-bold">
                  Secure .gov websites use HTTPS
                </strong>
                <br />A <strong className="font-bold">lock</strong> or{" "}
                <strong className="font-bold">https://</strong> means you have
                safely connected to the .gov website. Share sensitive
                information only on official, secure websites.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
