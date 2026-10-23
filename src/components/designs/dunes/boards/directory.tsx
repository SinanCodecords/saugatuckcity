import { container, SectionHeading } from "../about/shared"
import { DunesBoardEntry, DunesPastCommitteeEntry } from "./entry"
import { groupedBoards } from "./shared"

const partLabels = ["Part one", "Part two", "Part three", "Part four"]

const nouns: Record<string, [string, string]> = {
  "task-force": ["task force", "task forces"],
  past: ["committee", "committees"],
}

function countLabel(groupId: string, count: number) {
  const [one, many] = nouns[groupId] ?? ["board", "boards"]
  return `${count} ${count === 1 ? one : many}`
}

export function DunesBoardsDirectory() {
  return (
    <>
      {groupedBoards.map((group, groupIndex) => {
        const headingId = `dn-boards-${group.id}`
        const isPast = group.id === "past"
        return (
          <section
            key={group.id}
            id={group.id}
            aria-labelledby={headingId}
            className="scroll-mt-56 border-t border-(--dn-rule)"
          >
            <div className={`${container} py-14 lg:py-20`}>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-end lg:gap-10">
                <div className="lg:col-span-7">
                  <SectionHeading
                    id={headingId}
                    label={`${partLabels[groupIndex] ?? `Part ${groupIndex + 1}`} · ${countLabel(group.id, group.boards.length)}`}
                    title={group.title}
                  />
                </div>
                <p className="max-w-md text-[15px] leading-relaxed text-(--dn-ink-soft) lg:col-span-4 lg:col-start-9">
                  {group.description}
                </p>
              </div>

              {isPast ? (
                /* Reads down the first column, then the second, so an odd count never strands one card on the right. */
                <ul
                  className="mt-8 grid grid-cols-1 border-t border-(--dn-ink) sm:grid-flow-col sm:grid-cols-2 sm:gap-x-12 lg:mt-12"
                  style={{
                    gridTemplateRows: `repeat(${Math.ceil(group.boards.length / 2)}, auto)`,
                  }}
                >
                  {group.boards.map((board) => (
                    <li key={board.id} className="border-b border-(--dn-rule)">
                      <DunesPastCommitteeEntry board={board} />
                    </li>
                  ))}
                </ul>
              ) : (
                /* The next section's top rule closes the last entry. */
                <ul className="mt-8 border-t border-(--dn-ink) lg:mt-12 [&>li:last-child>article]:border-b-0 [&>li:last-child>article]:pb-0">
                  {group.boards.map((board) => (
                    <li key={board.id}>
                      <DunesBoardEntry board={board} />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}
