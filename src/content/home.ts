/**
 * Shared sample content for the homepage design variants.
 * Text here is placeholder copy modelled on saugatuckcity.com and will be
 * replaced by real content once a design is chosen.
 */

/** Pages built so far in the shortlisted design variants. */
export type SitePage = "home" | "about" | "departments"

type NavItem = {
  readonly label: string
  readonly href: string
  readonly page?: SitePage
}

export const mainNav: readonly NavItem[] = [
  { label: "Home", href: "/", page: "home" },
  { label: "About", href: "#", page: "about" },
  { label: "Departments", href: "#", page: "departments" },
  { label: "Boards & Committees", href: "#" },
  { label: "Parks & Recreation", href: "#" },
  { label: "Forms", href: "#" },
  { label: "Links", href: "#" },
  { label: "Contact", href: "#" },
]

const pagePaths: Record<SitePage, string> = {
  home: "",
  about: "/about",
  departments: "/departments",
}

/** URL of a built page inside one design variant, e.g. /designs/dunes/about. */
export function pageHref(design: string, page: SitePage) {
  return `/designs/${design}${pagePaths[page]}`
}

/** Nav items with a built page link inside the variant; the rest stay placeholders. */
export function navHref(design: string, item: NavItem) {
  return item.page ? pageHref(design, item.page) : item.href
}

export const quickLinks = [
  {
    label: "Pay a Utility Bill",
    description: "Water, sewer and trash payments online.",
    icon: "CreditCard",
  },
  {
    label: "Agendas & Minutes",
    description: "City Council and board meeting documents.",
    icon: "FileText",
  },
  {
    label: "Permits & Zoning",
    description: "Building permits, zoning and land use.",
    icon: "ClipboardCheck",
  },
  {
    label: "Report an Issue",
    description: "Potholes, streetlights and other concerns.",
    icon: "AlertTriangle",
  },
  {
    label: "Employment",
    description: "Open positions with the City.",
    icon: "Briefcase",
  },
  {
    label: "Parking",
    description: "Downtown parking, permits and maps.",
    icon: "ParkingSquare",
  },
] as const

export const news = [
  {
    title: "City Council adopts 2026–27 fiscal year budget",
    date: "2026-10-14",
    category: "City Council",
    excerpt:
      "The adopted budget holds the millage rate steady while funding harbor dredging and the Butler Street streetscape project.",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Fall leaf pickup begins the week of October 27",
    date: "2026-10-10",
    category: "Public Works",
    excerpt:
      "Rake leaves to the curb edge, not into the street. Crews will make three passes through each neighborhood before Thanksgiving.",
    image:
      "https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Water main flushing scheduled for the north side",
    date: "2026-10-06",
    category: "Water & Sewer",
    excerpt:
      "Residents may notice temporary discoloration. Run cold water for a few minutes if it does not clear on its own.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Kalamazoo Harbor Authority seeks public comment",
    date: "2026-09-30",
    category: "Boards & Committees",
    excerpt:
      "A draft of the five-year harbor management plan is available for review through November 15.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
] as const

export const meetings = [
  {
    title: "City Council Regular Meeting",
    date: "2026-10-27",
    time: "7:00 PM",
    location: "City Hall, Council Chambers",
  },
  {
    title: "Planning Commission",
    date: "2026-11-03",
    time: "7:00 PM",
    location: "City Hall, Council Chambers",
  },
  {
    title: "Downtown Development Authority",
    date: "2026-11-05",
    time: "8:30 AM",
    location: "City Hall, Conference Room",
  },
  {
    title: "Parks & Public Works Committee",
    date: "2026-11-10",
    time: "4:00 PM",
    location: "City Hall, Conference Room",
  },
] as const

/** Short department names for home sections and footers; full details are in content/departments.ts. */
export const departments = [
  "City Manager",
  "City Clerk",
  "Treasurer",
  "Assessing",
  "Planning & Zoning",
  "Public Works",
  "Building",
  "Law Enforcement",
  "Fire Department",
] as const

export const heroImages = {
  harbor:
    "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=2400&q=80",
  dunes:
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=2400&q=80",
  downtown:
    "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=2400&q=80",
  lake: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2400&q=80",
  marina:
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80",
} as const

export const alert = {
  title: "Butler Street construction",
  body: "Expect lane closures between Culver and Mason Streets through November 7. Follow posted detours.",
} as const

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
