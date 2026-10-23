import { Bell } from "lucide-react"

import { cn } from "@/lib/utils"

import { Container, focusRing, heading } from "./shared"

export function VillageSignup() {
  return (
    <section aria-labelledby="village-signup-title" className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-(--v-primary) px-6 py-10 text-white shadow-[0_30px_60px_-30px_rgba(29,92,74,0.8)] sm:px-10 sm:py-12 lg:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-(--v-secondary)/35 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-16 size-72 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                <Bell className="size-5" aria-hidden="true" />
              </span>
              <h2
                id="village-signup-title"
                className={cn(
                  heading,
                  "mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl"
                )}
              >
                Get city notices by email or text
              </h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                Meeting reminders, road closures, water advisories and the
                occasional good news. A few messages a month, never spam.
              </p>
            </div>

            <form
              aria-labelledby="village-signup-title"
              className="rounded-3xl bg-white p-5 text-(--v-text) shadow-[0_20px_45px_-24px_rgba(0,0,0,0.5)] sm:p-6"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="village-signup-email"
                    className={cn(heading, "block text-sm font-bold")}
                  >
                    Email address
                  </label>
                  <input
                    id="village-signup-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@example.com"
                    className={cn(
                      focusRing,
                      "mt-1.5 h-12 w-full rounded-full border border-(--v-line) bg-(--v-bg) px-5 text-base text-(--v-text) placeholder:text-(--v-muted) focus-visible:ring-offset-white"
                    )}
                  />
                </div>
                <div>
                  <label
                    htmlFor="village-signup-phone"
                    className={cn(heading, "block text-sm font-bold")}
                  >
                    Mobile number{" "}
                    <span className="font-normal text-(--v-muted)">
                      (optional, for texts)
                    </span>
                  </label>
                  <input
                    id="village-signup-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    placeholder="(269) 555-0100"
                    className={cn(
                      focusRing,
                      "mt-1.5 h-12 w-full rounded-full border border-(--v-line) bg-(--v-bg) px-5 text-base text-(--v-text) placeholder:text-(--v-muted) focus-visible:ring-offset-white"
                    )}
                  />
                </div>
                <button
                  type="submit"
                  className={cn(
                    heading,
                    focusRing,
                    "inline-flex h-12 w-full items-center justify-center rounded-full bg-(--v-primary) text-base font-bold text-white transition-colors hover:bg-(--v-primary-dark) focus-visible:ring-offset-white active:translate-y-px"
                  )}
                >
                  Sign me up
                </button>
                <p className="text-xs leading-relaxed text-(--v-muted)">
                  You can unsubscribe at any time. Message and data rates may
                  apply for text alerts.
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
