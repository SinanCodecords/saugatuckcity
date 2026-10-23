/**
 * Shared content for the About page in each design variant.
 * Facts are taken from saugatuckcity.com (Home, City Council, City Manager
 * and History of City Hall pages). The live site has no About landing page,
 * only a dropdown, so this page gathers that section in one place.
 */

export const aboutIntro = {
  title: "About Saugatuck",
  lead: "For more than a century, Saugatuck has been one of the Midwest's favorite places for artists, beachgoers and nature lovers.",
  body: [
    "People come for the small-town charm, the arts and entertainment, the welcome it gives to everyone, and the beauty of the dunes and Lake Michigan. Many of them end up staying.",
    "Whether you live here or are just visiting, this section explains how the City is run, where it came from, and where to find its charter, ordinances and local rules.",
  ],
} as const

export const aboutFacts = [
  { value: "1868", label: "Incorporated as a village" },
  { value: "1984", label: "Became a city" },
  { value: "7", label: "City Council members" },
  { value: "Top 25", label: "Oval Beach, one of the world's best beaches" },
] as const

/** The pages that sit under "About" in the live site's menu. */
export const aboutSection = [
  {
    label: "City Charter",
    description: "The City's founding legal document and how it is governed.",
    icon: "Landmark",
  },
  {
    label: "Ordinances",
    description: "The Code of Ordinances plus newly adopted, unpublished ones.",
    icon: "Scale",
  },
  {
    label: "Employment",
    description: "Full-time and seasonal openings, and how to apply.",
    icon: "Briefcase",
  },
  {
    label: "Floodplain",
    description: "Flood maps, FEMA resources and common flooding questions.",
    icon: "Waves",
  },
  {
    label: "Harbor Management",
    description:
      "The harbor management plan, Harbor Authority agreement and studies.",
    icon: "Anchor",
  },
  {
    label: "History of City Hall",
    description: "The story of 102 Butler Street, in use since 1880.",
    icon: "Building2",
  },
  {
    label: "Invasive Species & Deer-Resistant Plantings",
    description: "Which plants to remove, and what to plant instead.",
    icon: "Sprout",
  },
  {
    label: "Short-Term Rentals",
    description: "Licensing, caps, renewals and the 24/7 complaint hotline.",
    icon: "House",
  },
  {
    label: "Social District",
    description:
      "The year-round district map, rules and participating businesses.",
    icon: "MapPinned",
  },
  {
    label: "Trash & Recycling",
    description: "Pickup calendars and brush and leaf collection schedules.",
    icon: "Recycle",
  },
] as const

export const government = {
  summary:
    "Saugatuck has a Council–Manager form of government. Seven City Council members, elected at large on a nonpartisan basis for two-year terms, adopt the City's laws, set its policies and approve the annual budget. The Council appoints a City Manager to run day-to-day operations and advise it on policy.",
  meetings: [
    {
      label: "City Council meetings",
      when: "2nd and 4th Mondays, 6:30 pm",
    },
    {
      label: "Council workshops",
      when: "The Wednesday before each Council meeting",
    },
  ],
  where:
    "Saugatuck City Hall, 102 Butler Street. Meetings are also streamed on Zoom.",
  manager: {
    name: "Ryan Cummins",
    title: "City Manager",
    summary:
      "Chief administrative officer. Carries out Council policy, prepares the budget and oversees City staff, utilities and services.",
  },
  council: [
    { name: "Holly Anderson", role: "Mayor", termEnds: "Nov 2027" },
    { name: "Joe Clark", role: "Mayor Pro-Tem", termEnds: "Nov 2027" },
    { name: "Russ Gardner", role: "Council Member", termEnds: "Nov 2027" },
    { name: "Lauren Stanton", role: "Council Member", termEnds: "Nov 2026" },
    { name: "Scott Dean", role: "Council Member", termEnds: "Nov 2026" },
    { name: "Gregory Muncey", role: "Council Member", termEnds: "Nov 2026" },
    { name: "Chris Peterson", role: "Council Member", termEnds: "Nov 2026" },
  ],
} as const

export const history = [
  {
    year: "1868",
    title: "A village is born",
    body: "Allegan County incorporates the Village of Saugatuck after a census counts 831 residents.",
  },
  {
    year: "1871",
    title: "Spared by the great fires",
    body: "The fire department is organized. Saugatuck escapes the fires that destroy Holland, Fennville and Chicago on the same October day.",
  },
  {
    year: "1880",
    title: "City Hall opens on Butler Street",
    body: "A new fire house, council chamber and lock-up is completed for $824.33. It is still City Hall today.",
  },
  {
    year: "1926",
    title: "An artist's entrance",
    body: "Local artist Carl Hoerman redesigns the building and adds the pillared entryway seen today.",
  },
  {
    year: "1931",
    title: "Art in the council chamber",
    body: "The Saugatuck Art Association opens a gallery in the chamber. Works by local artists still rotate there.",
  },
  {
    year: "1984",
    title: "Saugatuck becomes a city",
    body: "The village becomes the City of Saugatuck, with a mayor, council and city manager.",
  },
  {
    year: "1990",
    title: "A State historic site",
    body: "City Hall is listed on Michigan's State Register of Historic Sites after 110 years of continuous use.",
  },
] as const

/** Placeholder photography until the City supplies its own. */
export const aboutImages = {
  /** Sailboat on open water, for the page header. */
  banner:
    "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=2400&q=80",
  /** Sunset over the lake, an alternative header or feature image. */
  sunset:
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=2000&q=80",
  /** Autumn trees reflected in still water, beside the history section. */
  history:
    "https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=1600&q=80",
} as const
