/** Pastel tiles shared across the About page; text tones pass AA on each tint. */
export const tints = [
  "bg-(--v-mint) text-(--v-primary)",
  "bg-(--v-sky) text-[#1f4f6b]",
  "bg-(--v-peach) text-[#8a4b12]",
  "bg-(--v-rose) text-[#8a2e3c]",
  "bg-(--v-lavender) text-[#4a3a8a]",
  "bg-(--v-butter) text-[#6b5410]",
]

export function tint(index: number) {
  return tints[index % tints.length]
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
}

/** Clears the sticky floating header when jumping to an in-page anchor. */
export const sectionAnchor = "scroll-mt-36"

export const cardShadow = "shadow-[0_14px_32px_-22px_rgba(29,92,74,0.4)]"
