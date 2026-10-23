/**
 * Card grids that never leave a hole in the last row.
 *
 * The grid is two columns from `two` up and three from `three` up (built on a
 * six-track grid so a short last row can be stretched). When the last row is
 * short, its cards widen to fill it: a lone card spans the full row and a pair
 * splits it in half. Each cell is also a container, so a card that ends up wide
 * can switch to a side-by-side layout with `@2xl:` / `@4xl:` variants.
 *
 * Class names are spelled out in full so Tailwind can see them.
 */

type TwoUp = "sm" | "md" | "lg"
type ThreeUp = "lg" | "xl" | "none"

const twoUp = {
  sm: { grid: "sm:grid-cols-2", full: "sm:col-span-2" },
  md: { grid: "md:grid-cols-2", full: "md:col-span-2" },
  lg: { grid: "lg:grid-cols-2", full: "lg:col-span-2" },
} as const

const threeUp = {
  lg: {
    grid: "lg:grid-cols-6",
    third: "lg:col-span-2",
    half: "lg:col-span-3",
    full: "lg:col-span-6",
  },
  xl: {
    grid: "xl:grid-cols-6",
    third: "xl:col-span-2",
    half: "xl:col-span-3",
    full: "xl:col-span-6",
  },
} as const

export function balancedGrid(two: TwoUp, three: ThreeUp) {
  return three === "none"
    ? `grid ${twoUp[two].grid}`
    : `grid ${twoUp[two].grid} ${threeUp[three].grid}`
}

export function balancedCell(
  index: number,
  count: number,
  two: TwoUp,
  three: ThreeUp
) {
  const classes = ["@container"]
  const isLast = index === count - 1

  if (count % 2 === 1 && isLast) classes.push(twoUp[two].full)

  if (three !== "none") {
    const spans = threeUp[three]
    const remainder = count % 3
    if (remainder === 1 && isLast) classes.push(spans.full)
    else if (remainder === 2 && index >= count - 2) classes.push(spans.half)
    else classes.push(spans.third)
  }

  return classes.join(" ")
}
