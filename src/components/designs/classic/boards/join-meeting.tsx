import { Video } from "lucide-react"

import { publicMeetings } from "@/content/boards"

import { Widget } from "../about/ui"
import { PhoneLink } from "../departments/department-panel"

const { zoom } = publicMeetings

/** "Join a meeting": the open-meetings note plus Zoom meeting ID and dial-in numbers. */
export function JoinMeetingWidget({ id }: { id: string }) {
  return (
    <Widget id={id} title="Join a meeting">
      <p className="text-sm leading-snug font-semibold text-(--ink)">
        {publicMeetings.title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-(--body)">
        {publicMeetings.body}
      </p>

      <dl className="mt-4 space-y-3 border-t border-(--rule) pt-4 text-sm">
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase">
            Zoom meeting ID
          </dt>
          <dd className="mt-1 inline-flex items-center gap-1.5 font-semibold text-(--ink) tabular-nums">
            <Video
              aria-hidden="true"
              className="size-3.5 shrink-0 text-(--blue)"
            />
            {zoom.meetingId}
          </dd>
        </div>
        <div>
          <dt className="text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase">
            Dial in by phone
          </dt>
          {zoom.phone.map((number) => (
            <dd key={number} className="mt-1">
              <PhoneLink phone={number} who="the Zoom dial-in line" />
            </dd>
          ))}
        </div>
      </dl>
    </Widget>
  )
}
