/** Every design variant built so far. Each stays routable at /designs/<slug>. */
export const allDesigns = [
  {
    slug: "harbor",
    name: "Harbor",
    tagline: "Modern civic. Navy and white, services first.",
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
  {
    slug: "civic",
    name: "Civic",
    tagline:
      "The standard US city-site pattern. I Want To… menu, News Flash, Calendar.",
  },
  {
    slug: "federal",
    name: "Federal",
    tagline: "US Web Design System style. Plain, official, very readable.",
  },
  {
    slug: "classic",
    name: "Classic",
    tagline:
      "The current site's layout, modernized. Centered logo and nav, familiar.",
  },
] as const

export type DesignSlug = (typeof allDesigns)[number]["slug"]

/** The shortlist shown to the client, in presentation order. */
const shortlist: DesignSlug[] = ["classic", "harbor", "village", "dunes"]

/** Designs listed on the index pages and in the switcher bar. */
export const designs = shortlist.flatMap((slug) =>
  allDesigns.filter((design) => design.slug === slug)
)
