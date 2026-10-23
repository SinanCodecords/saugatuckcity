import { departmentDirectory, departmentGroups } from "@/content/departments"

/** "(269) 224-9443" → "tel:+12692249443" */
export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`
}

/** Departments split into the two page groups, in content order. */
export const groupedDepartments = departmentGroups.map((group) => ({
  ...group,
  departments: departmentDirectory.filter(
    (department) => department.group === group.id
  ),
}))

export const tasksId = "classic-departments-tasks"

export function groupHeadingId(groupId: string) {
  return `classic-departments-group-${groupId}`
}
