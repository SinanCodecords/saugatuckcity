import { HandHeart, UserRound } from "lucide-react"

import { getInvolved } from "@/content/boards"

import { PhoneLink } from "../departments/department-panel"
import { getInvolvedId } from "./utils"

const titleId = `${getInvolvedId}-title`
const { contact } = getInvolved

/** "Serve on a board": a blue-pale callout with the City Clerk's contact. */
export function GetInvolved() {
  return (
    <section
      id={getInvolvedId}
      aria-labelledby={titleId}
      className="scroll-mt-38 rounded-md border border-l-4 border-(--rule) border-l-(--blue) bg-(--blue-pale) px-5 py-6 sm:px-7"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="max-w-xl">
          <h2
            id={titleId}
            className="flex items-center gap-2.5 text-xl font-semibold tracking-tight text-(--ink)"
          >
            <HandHeart
              aria-hidden="true"
              className="size-5 shrink-0 text-(--blue-text)"
            />
            {getInvolved.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-(--body)">
            {getInvolved.body}
          </p>
        </div>

        <div className="flex shrink-0 gap-3 rounded-md border border-(--rule) bg-white px-4 py-3.5 md:min-w-60">
          <UserRound
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-(--blue)"
          />
          <div className="min-w-0 text-sm">
            <p className="font-semibold text-(--ink)">{contact.name}</p>
            <p className="text-(--body)">{contact.title}</p>
            <p className="mt-1">
              <PhoneLink
                phone={contact.phone}
                who={`${contact.name}, ${contact.title},`}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
