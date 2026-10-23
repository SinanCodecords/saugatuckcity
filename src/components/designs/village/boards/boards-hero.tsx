import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { boardGroups, boardsImages, boardsIntro } from "@/content/boards"
import { pageHref } from "@/content/home"
import { cn } from "@/lib/utils"

import {
  Container,
  PillLink,
  focusRing,
  heading,
  jumpItem,
  jumpList,
  jumpPill,
} from "../shared"
import { boardsInGroup, groupAnchor } from "./shared"
import { VillageWhenTheyMeet } from "./when-they-meet"

export function VillageBoardsHero() {
  return (
    <section
      aria-labelledby="village-boards-title"
      className="pt-10 pb-6 sm:pt-14"
    >
      <Container>
        <nav aria-label="Breadcrumb">
          <ol
            className={cn(
              heading,
              "flex flex-wrap items-center gap-1 text-sm font-bold text-(--v-muted)"
            )}
          >
            <li className="flex items-center gap-1">
              <a
                href={pageHref("village", "home")}
                className={cn(
                  focusRing,
                  "rounded-full px-2 py-1 transition-colors hover:bg-(--v-mint) hover:text-(--v-primary)"
                )}
              >
                Home
              </a>
              <ChevronRight className="size-4" aria-hidden="true" />
            </li>
            <li>
              <span
                aria-current="page"
                className="rounded-full bg-(--v-mint) px-3 py-1 text-(--v-primary)"
              >
                {boardsIntro.title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <p
              className={cn(
                heading,
                "mb-3 text-sm font-bold tracking-wide text-(--v-primary) uppercase"
              )}
            >
              Have your say
            </p>
            <h1
              id="village-boards-title"
              className={cn(
                heading,
                "text-5xl leading-[1.02] font-extrabold tracking-tight text-(--v-text) sm:text-6xl"
              )}
            >
              {boardsIntro.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-(--v-text) sm:text-xl">
              {boardsIntro.lead}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-(--v-muted) sm:text-lg">
              {boardsIntro.body}
            </p>

            <ul aria-label="Jump to" className={cn(jumpList, "mt-8")}>
              {boardGroups.map((group, index) => {
                const count = boardsInGroup(group.id).length
                return (
                  <li
                    key={group.id}
                    className={jumpItem(index, boardGroups.length)}
                  >
                    <PillLink
                      href={`#${groupAnchor(group.id)}`}
                      tone={index === 0 ? "primary" : "secondary"}
                      className={jumpPill}
                    >
                      {group.title}
                      <span className="sr-only">, </span>
                      <span
                        className={cn(
                          "inline-flex min-w-6 items-center justify-center rounded-full px-1.5 text-xs leading-6",
                          index === 0
                            ? "bg-white/20 text-white"
                            : "bg-white text-(--v-primary)"
                        )}
                      >
                        {count}
                        <span className="sr-only">
                          {count === 1 ? " group" : " groups"}
                        </span>
                      </span>
                    </PillLink>
                  </li>
                )
              })}
            </ul>

            <div className="relative mt-10 hidden aspect-[5/2] overflow-hidden rounded-[2rem] shadow-[0_24px_50px_-24px_rgba(29,92,74,0.5)] sm:block lg:aspect-[16/9]">
              <Image
                src={boardsImages.banner}
                alt="Autumn trees reflected in still water"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>

          <VillageWhenTheyMeet />
        </div>
      </Container>
    </section>
  )
}
