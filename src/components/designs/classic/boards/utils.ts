import { boardGroups, boards } from "@/content/boards"

/** Boards split into the four page groups, in content order. */
export const groupedBoards = boardGroups.map((group) => ({
  ...group,
  boards: boards.filter((board) => board.group === group.id),
}))

/** Boards with a regular meeting time, for the schedule table. */
export const scheduledBoards = boards.filter((board) => board.meets)

export const scheduleId = "classic-boards-schedule"
export const getInvolvedId = "classic-boards-get-involved"
export const pastSectionId = "classic-boards-past"

export function groupHeadingId(groupId: string) {
  return `classic-boards-group-${groupId}`
}

/** "1 board", "6 boards" */
export function countLabel(count: number, singular: string, plural: string) {
  return `${count} ${count === 1 ? singular : plural}`
}
