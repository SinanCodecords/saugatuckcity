import { ovalBeach, parkAreas, parks } from "@/content/parks"

/** Parks split into the five page areas, in content order. */
export const groupedParks = parkAreas.map((area) => ({
  ...area,
  parks: parks.filter((park) => park.area === area.id),
}))

/* The park cards already use "oval-beach" and "chain-ferry", so the feature panels get prefixed ids. */
export const ovalBeachId = "classic-parks-oval-beach"
export const chainFerryId = "classic-parks-chain-ferry"
export const gettingThereId = "classic-parks-getting-there"
export const eventsId = "classic-parks-events"
export const rulesId = "classic-parks-rules"

export function areaId(area: string) {
  return `classic-parks-area-${area}`
}

/** Park cards that have a fuller feature panel higher up the page. */
export const featureLinks: Record<string, { href: string; label: string }> = {
  "oval-beach": { href: `#${ovalBeachId}`, label: "Hours, passes and parking" },
  "chain-ferry": {
    href: `#${chainFerryId}`,
    label: "Fares and crossing times",
  },
}

export const dayPass =
  ovalBeach.passes.find((pass) => pass.label === "Day pass") ??
  ovalBeach.passes[0]
