import Image from "next/image"
import {
  CalendarDays,
  ChevronRight,
  ClipboardCheck,
  CreditCard,
  MessageSquareWarning,
  Tent,
} from "lucide-react"

import { heroImages, pageHref } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, focusRing, heading } from "./shared"

const tasks = [
  { label: "Pay my water bill", icon: CreditCard, tint: "bg-(--v-mint)" },
  { label: "Find a meeting agenda", icon: CalendarDays, tint: "bg-(--v-sky)" },
  { label: "Apply for a permit", icon: ClipboardCheck, tint: "bg-(--v-peach)" },
  {
    label: "Report a problem",
    icon: MessageSquareWarning,
    tint: "bg-(--v-rose)",
  },
  {
    label: "Reserve a park pavilion",
    icon: Tent,
    tint: "bg-(--v-lavender)",
    href: `${pageHref("village", "parks")}#village-parks-reserve`,
  },
]

export function VillageHero() {
  return (
    <section
      aria-labelledby="village-hero-title"
      className="pt-10 pb-6 sm:pt-14"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p
              className={cn(
                heading,
                "mb-3 text-sm font-bold tracking-wide text-(--v-primary) uppercase"
              )}
            >
              Saugatuck, Michigan
            </p>
            <h1
              id="village-hero-title"
              className={cn(
                heading,
                "text-5xl leading-[1.02] font-extrabold tracking-tight text-(--v-text) sm:text-6xl"
              )}
            >
              Hello, neighbor.
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-(--v-muted) sm:text-xl">
              Welcome to Saugatuck, a small town on the big lake. Here is the
              easiest way to take care of city business, find what is happening,
              and get in touch.
            </p>

            <div className="mt-8 rounded-3xl border border-(--v-line) bg-(--v-card) p-3 shadow-[0_20px_45px_-24px_rgba(29,92,74,0.35)] sm:p-4">
              <h2
                id="village-tasks-title"
                className={cn(
                  heading,
                  "px-3 pt-2 pb-3 text-lg font-extrabold text-(--v-text)"
                )}
              >
                I want to&hellip;
              </h2>
              <ul
                aria-labelledby="village-tasks-title"
                className="flex flex-col gap-1.5"
              >
                {tasks.map((task) => {
                  const Icon = task.icon
                  return (
                    <li key={task.label}>
                      <a
                        href={"href" in task ? task.href : "#"}
                        className={cn(
                          focusRing,
                          "group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-(--v-text) transition-colors hover:bg-(--v-mint)"
                        )}
                      >
                        <span
                          className={cn(
                            "inline-flex size-10 shrink-0 items-center justify-center rounded-full text-(--v-primary)",
                            task.tint
                          )}
                        >
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span
                          className={cn(
                            heading,
                            "flex-1 text-base font-bold sm:text-[1.05rem]"
                          )}
                        >
                          {task.label}
                        </span>
                        <ChevronRight
                          className="size-5 text-(--v-muted) transition-transform group-hover:translate-x-0.5 group-hover:text-(--v-primary)"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative grid aspect-[5/5.2] grid-cols-6 grid-rows-6">
              <div className="relative col-span-4 col-start-1 row-span-4 row-start-1 overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-24px_rgba(29,92,74,0.5)]">
                <Image
                  src={heroImages.downtown}
                  alt="Shops and trees along Butler Street in downtown Saugatuck"
                  fill
                  preload
                  sizes="(max-width: 1024px) 70vw, 32vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 col-start-4 row-span-3 row-start-3 overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-24px_rgba(29,92,74,0.5)] ring-6 ring-(--v-bg)">
                <Image
                  src={heroImages.lake}
                  alt="Waves rolling onto the Lake Michigan shoreline at sunset"
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-3 col-start-1 row-span-2 row-start-5 overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-24px_rgba(29,92,74,0.5)] ring-6 ring-(--v-bg)">
                <Image
                  src={heroImages.marina}
                  alt="Sailboats docked at the marina on the Kalamazoo River"
                  fill
                  sizes="(max-width: 1024px) 50vw, 24vw"
                  className="object-cover"
                />
              </div>

              <div
                className={cn(
                  heading,
                  "absolute -top-3 right-2 flex size-24 rotate-12 flex-col items-center justify-center rounded-full bg-(--v-primary) text-center text-white shadow-[0_14px_30px_-12px_rgba(29,92,74,0.7)] ring-4 ring-white sm:size-28"
                )}
              >
                <span className="mb-1 text-xs leading-none font-bold tracking-[0.18em] uppercase">
                  Est.
                </span>
                <span className="text-2xl leading-none font-extrabold sm:text-3xl">
                  1868
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
