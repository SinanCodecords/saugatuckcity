import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { siteConfig } from "@/config/site"
import { formatDate, meetings } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, SectionHeading, textLink } from "./shared"

const cellBase =
  "px-3 py-3 text-[16px] leading-snug whitespace-normal align-top"

/** USWDS "table" (striped): upcoming public meetings with agenda links. */
export function MeetingsTable() {
  return (
    <section aria-labelledby="federal-meetings-heading" className="bg-white">
      <Container className="pb-10 sm:pb-12">
        <SectionHeading
          id="federal-meetings-heading"
          title="Upcoming public meetings"
          linkLabel="Full meeting calendar"
        />
        <Table className="border-collapse text-(--ink) [&_tr]:border-(--gray-10)">
          <TableHeader className="bg-(--gray-5)">
            <TableRow className="border-b-2 border-(--gray-30) hover:bg-(--gray-5)">
              <TableHead
                scope="col"
                className={cn(cellBase, "h-auto font-bold text-(--ink)")}
              >
                Date
              </TableHead>
              <TableHead
                scope="col"
                className={cn(cellBase, "h-auto font-bold text-(--ink)")}
              >
                Meeting
              </TableHead>
              <TableHead
                scope="col"
                className={cn(cellBase, "h-auto font-bold text-(--ink)")}
              >
                Time
              </TableHead>
              <TableHead
                scope="col"
                className={cn(
                  cellBase,
                  "hidden h-auto font-bold text-(--ink) md:table-cell"
                )}
              >
                Location
              </TableHead>
              <TableHead
                scope="col"
                className={cn(cellBase, "h-auto font-bold text-(--ink)")}
              >
                Agenda
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {meetings.map((meeting) => (
              <TableRow
                key={`${meeting.title}-${meeting.date}`}
                className="border-b border-(--gray-10) odd:bg-white even:bg-(--gray-5) hover:bg-(--primary-light)"
              >
                <TableCell className={cellBase}>
                  <time dateTime={meeting.date} className="whitespace-nowrap">
                    {formatDate(meeting.date)}
                  </time>
                </TableCell>
                <TableCell className={cn(cellBase, "font-semibold")}>
                  {meeting.title}
                  <span className="mt-1 block text-[15px] font-normal text-(--gray-60) md:hidden">
                    {meeting.location}
                  </span>
                </TableCell>
                <TableCell className={cn(cellBase, "whitespace-nowrap")}>
                  {meeting.time}
                </TableCell>
                <TableCell className={cn(cellBase, "hidden md:table-cell")}>
                  {meeting.location}
                </TableCell>
                <TableCell className={cellBase}>
                  <a href="#" className={cn(textLink, "whitespace-nowrap")}>
                    Agenda
                    <span className="sr-only">
                      {" "}
                      for {meeting.title} on {formatDate(meeting.date)}
                    </span>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <p className="mt-5 mb-0 max-w-[72ch] text-[16px] leading-relaxed text-(--gray-60)">
          All meetings are open to the public. If you need an accommodation to
          participate, contact the City Clerk at{" "}
          <a href="#" className={textLink}>
            {siteConfig.contact.phone}
          </a>{" "}
          at least 48 hours before the meeting.
        </p>
      </Container>
    </section>
  )
}
