/**
 * Shared content for the Boards & Committees page in each design variant.
 * Purpose, membership and meeting details are taken from each board's page
 * on saugatuckcity.com (Oct 2026). The live Boards & Committees page has no
 * text of its own, so this page is a new directory that brings them together.
 */

export const boardsIntro = {
  title: "Boards & Committees",
  lead: "The residents and partners who help shape Saugatuck, and when you can hear from them.",
  body: "City boards and commissions advise City Council and make decisions on planning, zoning, historic preservation and property assessments. Saugatuck also shares several authorities with Douglas and Saugatuck Township for the harbor, water and sewer, transit, fire and the library.",
} as const

export const publicMeetings = {
  title: "Every meeting is open to the public",
  body: "Meetings are posted under Michigan's Open Meetings Act. City meetings are held in person at City Hall and on Zoom, so you can attend either way.",
  zoom: {
    meetingId: "269 857 2603",
    phone: ["(312) 626-6799", "(646) 518-9805"],
  },
} as const

export const getInvolved = {
  title: "Serve on a board",
  body: "Most City boards are made up of residents appointed by the Mayor with City Council approval. To ask about openings, contact the City Clerk at City Hall.",
  contact: {
    name: "Jamie Wolters",
    title: "City Clerk",
    phone: "(269) 558-9495",
  },
} as const

export type Board = {
  /** Used as the anchor id on the page, e.g. #planning-commission. */
  readonly id: string
  readonly name: string
  /** lucide-react icon name. */
  readonly icon: string
  readonly group: "city" | "task-force" | "shared" | "past"
  readonly summary: string
  /** When it meets, e.g. "3rd Thursday of each month, 6:30 pm". */
  readonly meets?: string
  readonly where?: string
  /** Size and term length, e.g. "7 members · 3-year terms". */
  readonly members?: string
  /** For past committees: when they wrapped up. */
  readonly concluded?: string
  /** Set when the board keeps its own website. */
  readonly website?: string
}

export const boardGroups = [
  {
    id: "city",
    title: "City boards & commissions",
    description:
      "Appointed by the City to advise Council and decide local matters.",
  },
  {
    id: "task-force",
    title: "Task forces",
    description:
      "Short-term groups studying one issue and reporting back to Council.",
  },
  {
    id: "shared",
    title: "Shared & regional authorities",
    description:
      "Run jointly with the City of Douglas and Saugatuck Township. The City appoints members to each.",
  },
  {
    id: "past",
    title: "Past committees",
    description:
      "Finished their work. Their reports and records are still available.",
  },
] as const

export const boards: readonly Board[] = [
  {
    id: "city-council",
    name: "City Council",
    icon: "Landmark",
    group: "city",
    summary:
      "Adopts the City's laws, sets its policies and approves the annual budget. Directs the City Manager.",
    meets: "2nd and 4th Mondays, 6:30 pm",
    where: "City Hall",
    members: "7 members · 2-year terms",
  },
  {
    id: "planning-commission",
    name: "Planning Commission",
    icon: "Map",
    group: "city",
    summary:
      "Reviews site plans and development applications and works on the City's master plan.",
    meets: "3rd Thursday of each month, 6:30 pm",
    where: "City Hall",
    members: "7 members",
  },
  {
    id: "zoning-board-of-appeals",
    name: "Zoning Board of Appeals",
    icon: "Scale",
    group: "city",
    summary:
      "Decides requests for variances and hears appeals of how the zoning ordinance has been applied.",
    meets: "2nd Thursday of each month, 6:30 pm",
    where: "City Hall",
    members: "5 members and 2 alternates",
  },
  {
    id: "historic-district-commission",
    name: "Historic District Commission",
    icon: "Building",
    group: "city",
    summary:
      "Reviews changes to buildings in Saugatuck's historic district to protect its character. Established in 1981.",
    meets: "1st Thursday of each month, 6:00 pm",
    where: "City Hall",
    members: "7 members · 3-year terms",
  },
  {
    id: "board-of-review",
    name: "Board of Review",
    icon: "ClipboardCheck",
    group: "city",
    summary:
      "Hears property owners' appeals of their assessments. Hearings are by appointment; written appeals are also accepted.",
    meets: "March, July and December sessions",
    where: "City Hall, by appointment",
    members: "3 resident members · 3-year terms",
  },
  {
    id: "parks-public-works",
    name: "Parks & Public Works Committee",
    icon: "Trees",
    group: "city",
    summary:
      "Advises City Council on parks, streets, utilities and other public works.",
    meets: "4th Tuesday of each month, 10:00 am",
    where: "City Hall",
    members: "6 members · 2-year terms",
  },
  {
    id: "parking-task-force",
    name: "Parking Improvements Task Force",
    icon: "SquareParking",
    group: "task-force",
    summary:
      "Studying parking use, enforcement, signage and seasonal demand downtown, and recommending improvements to Council.",
    meets: "Dates posted on the City calendar",
    where: "City Hall",
  },
  {
    id: "harbor-authority",
    name: "Kalamazoo Lake Harbor Authority",
    icon: "Anchor",
    group: "shared",
    summary:
      "Plans and manages the harbor and lake access for Saugatuck, Douglas and Saugatuck Township.",
    meets: "3rd Tuesday of each month",
    where: "City Hall",
  },
  {
    id: "sewer-water-authority",
    name: "Kalamazoo Lake Sewer & Water Authority",
    icon: "Droplets",
    group: "shared",
    summary:
      "Operates the public water and sanitary sewer systems, and locates mains and pipes before construction.",
    members: "3-year terms",
  },
  {
    id: "interurban",
    name: "Interurban Transit Authority",
    icon: "Bus",
    group: "shared",
    summary: "Oversees the Interurban, the area's public bus service.",
    meets: "3rd Tuesday of each month",
    where:
      "Saugatuck-Douglas District Library or the Interurban office, Douglas",
    members: "6 members · 4-year terms",
  },
  {
    id: "fire-district-board",
    name: "Fire District Board",
    icon: "Flame",
    group: "shared",
    summary: "Governs the Saugatuck Township Fire District.",
    members: "7 members · 6-year terms",
    website: "https://www.saugatuckfire.org",
  },
  {
    id: "library-board",
    name: "District Library Board of Trustees",
    icon: "BookOpen",
    group: "shared",
    summary:
      "Governs the Saugatuck-Douglas District Library. Public comment opens each meeting.",
    meets: "3rd Wednesday of each month, 7:00 pm",
    where: "Saugatuck-Douglas District Library",
    members: "6 members · 4-year terms",
    website: "https://www.sdlibrary.org",
  },
  {
    id: "short-term-rental-task-force",
    name: "Short-Term Rental Task Force",
    icon: "House",
    group: "past",
    summary:
      "Gathered concerns and ideas about short-term rentals and published an action report for Council.",
    concluded: "Final meeting September 2023",
  },
  {
    id: "tri-community-wildlife",
    name: "Tri-Community Wildlife Committee",
    icon: "PawPrint",
    group: "past",
    summary:
      "Recommended ways to keep deer and other wildlife populations in healthy balance.",
    concluded: "No scheduled meetings since December 2025",
  },
  {
    id: "tri-community-recycling",
    name: "Tri-Community Recycling Committee",
    icon: "Recycle",
    group: "past",
    summary:
      "Educated residents and businesses about recycling and ran a community recycling survey.",
    concluded: "Final meeting December 2022",
  },
  {
    id: "non-motorized-trail",
    name: "Non-Motorized Trail Study Committee",
    icon: "Bike",
    group: "past",
    summary:
      "Studied a non-motorized trail for Saugatuck, Douglas and Saugatuck Township.",
    concluded: "Met 2020 – 2021",
  },
  {
    id: "water-milfoil",
    name: "Eurasian Water Milfoil Study Group",
    icon: "Waves",
    group: "past",
    summary:
      "Studied how to treat invasive Eurasian water milfoil along local shorelines.",
    concluded: "Ended June 2021",
  },
]

/** Placeholder photography until the City supplies its own. */
export const boardsImages = {
  /** Autumn trees reflected in still water, for the page header. */
  banner:
    "https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=2400&q=80",
} as const
