/** `tel:` link for a US phone number written like "(269) 857-2603". */
export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`
}

/** Clears the sticky 40px design switcher with room to spare. */
export const departmentAnchor = "scroll-mt-20"

export const textLink =
  "rounded font-medium text-(--navy) underline decoration-(--gold) decoration-2 underline-offset-4 hover:text-(--navy-dark) focus-visible:ring-2 focus-visible:ring-(--navy) focus-visible:outline-none"
