import Link from "next/link"
import { Bell, FileText } from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatDate, meetings } from "@/content/home"

import { container, focusRing, sectionHeading, textLink } from "./styles"

export function UpcomingMeetings() {
  return (
    <section aria-labelledby="meetings-heading" className="bg-white">
      <div className={`${container} py-14 sm:py-16`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="meetings-heading" className={sectionHeading}>
              Upcoming meetings
            </h2>
            <p className="mt-1.5 text-sm text-slate-600 sm:text-base">
              All meetings are open to the public. Agendas are posted at least
              18 hours in advance.
            </p>
          </div>
          <Link
            href="#"
            className={`${focusRing} inline-flex h-10 items-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-medium text-slate-900 transition-colors hover:border-(--lk-blue) hover:bg-(--lk-blue-tint) hover:text-(--lk-blue-text)`}
          >
            <Bell className="size-4" aria-hidden="true" />
            Subscribe to agendas
          </Link>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <Table className="text-sm text-slate-900">
            <TableHeader className="bg-(--lk-surface)">
              <TableRow className="border-slate-200 hover:bg-transparent">
                <TableHead className="h-11 px-5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                  Date
                </TableHead>
                <TableHead className="h-11 px-5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                  Meeting
                </TableHead>
                <TableHead className="h-11 px-5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                  Time
                </TableHead>
                <TableHead className="h-11 px-5 text-xs font-medium tracking-wide text-slate-600 uppercase">
                  Location
                </TableHead>
                <TableHead className="h-11 px-5 text-right text-xs font-medium tracking-wide text-slate-600 uppercase">
                  <span className="sr-only">Agenda</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {meetings.map((meeting) => (
                <TableRow
                  key={`${meeting.title}-${meeting.date}`}
                  className="border-slate-200 hover:bg-slate-50"
                >
                  <TableCell className="px-5 py-4 whitespace-nowrap text-slate-700">
                    <time dateTime={meeting.date}>
                      {formatDate(meeting.date)}
                    </time>
                  </TableCell>
                  <TableCell className="px-5 py-4 font-medium whitespace-normal text-slate-900">
                    {meeting.title}
                  </TableCell>
                  <TableCell className="px-5 py-4 whitespace-nowrap text-slate-700">
                    {meeting.time}
                  </TableCell>
                  <TableCell className="px-5 py-4 whitespace-normal text-slate-700">
                    {meeting.location}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-right whitespace-nowrap">
                    <Link
                      href="#"
                      className={textLink}
                      aria-label={`Agenda for ${meeting.title} on ${formatDate(meeting.date)}`}
                    >
                      <FileText className="size-4" aria-hidden="true" />
                      Agenda
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-4 text-sm text-slate-600">
          Need an accommodation to attend? Contact the City Clerk at least 48
          hours before the meeting.{" "}
          <Link href="#" className={textLink}>
            Full meeting calendar
          </Link>
        </p>
      </div>
    </section>
  )
}
