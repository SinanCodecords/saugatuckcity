export const designs = [
  {
    slug: "harbor",
    name: "Harbor",
    tagline: "Classic civic. Navy and white, services first.",
  },
  {
    slug: "dunes",
    name: "Dunes",
    tagline: "Warm editorial. Big photography, serif headlines.",
  },
  {
    slug: "lakeshore",
    name: "Lakeshore",
    tagline: "Modern minimal. Search-led, lots of air.",
  },
  {
    slug: "beacon",
    name: "Beacon",
    tagline: "Bold and high-contrast. Dark hero, bright accent.",
  },
  {
    slug: "village",
    name: "Village",
    tagline: "Friendly community feel. Soft colors, rounded cards.",
  },
] as const

export type DesignSlug = (typeof designs)[number]["slug"]
