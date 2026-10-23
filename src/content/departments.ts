/**
 * Shared content for the Departments page in each design variant.
 * Names, roles, office lines and duties are taken from the department pages
 * on saugatuckcity.com (Oct 2026). The live Departments page itself is empty,
 * so this page is a new directory that brings them together.
 */

export const departmentsIntro = {
  title: "Departments",
  lead: "Who to contact at the City, and what each office takes care of.",
  body: "Most City offices are at City Hall, 102 Butler Street, open Monday to Friday, 8:30 am to 5:00 pm. Public Works, building inspections, police and fire services work from their own locations, so check the listing before you visit.",
} as const

type Contact = {
  readonly name: string
  readonly title: string
  readonly phone?: string
}

type Location = {
  readonly name: string
  readonly address: string
  readonly hours?: string
  readonly phone?: string
}

export type Department = {
  /** Used as the anchor id on the page, e.g. #public-works. */
  readonly id: string
  readonly name: string
  /** lucide-react icon name. */
  readonly icon: string
  readonly group: "city-hall" | "elsewhere"
  readonly summary: string
  readonly services: readonly string[]
  readonly contacts: readonly Contact[]
  /** Only set when the office is not at City Hall. */
  readonly location?: Location
  readonly note?: string
  /** Set when the service has its own website. */
  readonly website?: string
}

export const departmentGroups = [
  {
    id: "city-hall",
    title: "At City Hall",
    description: "102 Butler Street · Monday – Friday, 8:30 am – 5:00 pm",
  },
  {
    id: "elsewhere",
    title: "Other locations and partner agencies",
    description:
      "Services the City runs from elsewhere or provides through partners.",
  },
] as const

export const departmentDirectory: readonly Department[] = [
  {
    id: "city-manager",
    name: "City Manager",
    icon: "Landmark",
    group: "city-hall",
    summary:
      "Runs the City day to day, carries out City Council policy and prepares the annual budget.",
    services: [
      "City budget and finances",
      "Council reports and agendas",
      "Grants, contracts and purchasing",
      "Oversight of all City departments",
    ],
    contacts: [
      { name: "Ryan Cummins", title: "City Manager", phone: "(269) 224-9443" },
    ],
  },
  {
    id: "clerk",
    name: "Clerk – Elections & FOIA",
    icon: "Vote",
    group: "city-hall",
    summary:
      "Secretary to City Council. Runs voter registration and elections, keeps the City's official records and handles public records requests.",
    services: [
      "Voter registration and elections",
      "Freedom of Information Act (FOIA) requests",
      "Council minutes and official records",
      "Free notary service for residents",
    ],
    contacts: [
      {
        name: "Jamie Wolters",
        title: "City Clerk & FOIA Coordinator",
        phone: "(269) 558-9495",
      },
      {
        name: "Sara Williams",
        title: "Deputy Clerk",
        phone: "(269) 224-9507",
      },
    ],
    note: "Notary service is free for City residents. Bring a photo ID.",
  },
  {
    id: "treasurer",
    name: "Treasurer",
    icon: "Wallet",
    group: "city-hall",
    summary:
      "Manages the City's treasury, accounting, investments and financial reporting, and collects tax payments.",
    services: [
      "Property tax payments",
      "Automatic (ACH) tax payments",
      "Annual budgets and audits",
      "Financial reports",
    ],
    contacts: [
      {
        name: "Nicole Bredeweg",
        title: "City Treasurer",
        phone: "(269) 224-9503",
      },
    ],
  },
  {
    id: "assessing",
    name: "Assessing",
    icon: "Calculator",
    group: "city-hall",
    summary:
      "Appraises and assesses real and personal property under Michigan property tax law.",
    services: [
      "Property assessments",
      "Land values",
      "Tax parcel records",
      "Assessment questions",
    ],
    contacts: [
      { name: "Anthony Meyaard, MMAO", title: "Assessor" },
      { name: "Don Jollay, MAAO", title: "Assessor" },
    ],
    location: {
      name: "City Hall",
      address: "102 Butler Street",
      hours: "2nd and 4th Thursday of each month, 8:30 am – 5:00 pm",
      phone: "(269) 224-9505",
    },
    note: "Replies usually within 48 hours, and never longer than 7 days.",
  },
  {
    id: "planning-zoning",
    name: "Planning, Zoning & Historic District",
    icon: "Map",
    group: "city-hall",
    summary:
      "Runs zoning, planning and Historic District Commission reviews, investigates complaints and enforces the zoning ordinance.",
    services: [
      "Zoning questions and permits",
      "Historic District Commission reviews",
      "Short-term rental licenses",
      "Master plan and zoning map",
    ],
    contacts: [
      {
        name: "Grayson Moore",
        title: "Director of Planning & Zoning",
        phone: "(269) 237-1823",
      },
    ],
  },
  {
    id: "public-works",
    name: "Public Works",
    icon: "Truck",
    group: "elsewhere",
    summary:
      "Looks after streets, sidewalks, parking, parks, the waterfront, utilities and the City fleet, plus seasonal work like brush pickup and snow plowing.",
    services: [
      "Street, sidewalk and sign repairs",
      "Brush, leaf and snow plow schedules",
      "Parks and waterfront upkeep",
      "Capital improvement projects",
    ],
    contacts: [
      {
        name: "Mark Ondersma",
        title: "Director of Public Works",
        phone: "(269) 857-4137",
      },
      {
        name: "Michelle Gibson",
        title: "Admin & Project Coordinator",
        phone: "(269) 224-9504",
      },
    ],
    location: {
      name: "Public Works Building",
      address: "3338 Blue Star Highway, Saugatuck, MI 49453",
      phone: "(269) 857-2638",
    },
  },
  {
    id: "building",
    name: "Building",
    icon: "HardHat",
    group: "elsewhere",
    summary:
      "Building, electrical, plumbing and mechanical permits and inspections, provided for the City by Michigan Township Services.",
    services: [
      "Building permits",
      "Electrical, plumbing and mechanical permits",
      "Inspections",
      "Water and sewer connections",
    ],
    contacts: [{ name: "Daniel J. Poll", title: "Building Official" }],
    location: {
      name: "Michigan Township Services",
      address: "111 Grand Street, Allegan, MI 49010",
      hours: "Monday – Friday, 8 am – 12 pm and 1 – 5 pm",
      phone: "(269) 673-3239",
    },
  },
  {
    id: "law-enforcement",
    name: "Law Enforcement",
    icon: "ShieldCheck",
    group: "elsewhere",
    summary:
      "Dedicated officers from the Allegan County Sheriff's Office serve the City.",
    services: ["Non-emergency reports", "Property inspection requests"],
    contacts: [],
    location: {
      name: "Allegan County Sheriff's Office",
      address: "640 River Street, Allegan, MI 49010",
      phone: "(269) 673-3899",
    },
    note: "In an emergency, call 911.",
  },
  {
    id: "fire",
    name: "Fire Department",
    icon: "Flame",
    group: "elsewhere",
    summary:
      "Fire protection, rescue and fire safety programs from the Saugatuck Township Fire District.",
    services: [
      "Free smoke and carbon monoxide alarms",
      "Burn permits",
      "Free address signs",
      "CPR classes",
    ],
    contacts: [],
    note: "In an emergency, call 911.",
    website: "https://www.saugatuckfire.org",
  },
]

/** "Who do I contact?" shortcuts from a common task to a department id. */
export const commonTasks = [
  { task: "Pay my property taxes", department: "treasurer" },
  { task: "Register to vote", department: "clerk" },
  { task: "Request public records (FOIA)", department: "clerk" },
  { task: "Get a building permit", department: "building" },
  {
    task: "Ask about zoning or a short-term rental",
    department: "planning-zoning",
  },
  { task: "Report a pothole or downed sign", department: "public-works" },
  { task: "Question my property assessment", department: "assessing" },
  {
    task: "Report a non-emergency police matter",
    department: "law-enforcement",
  },
] as const

/** Placeholder photography until the City supplies its own. */
export const departmentsImages = {
  /** Sunset over the lake, for the page header. */
  banner:
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=2400&q=80",
} as const
