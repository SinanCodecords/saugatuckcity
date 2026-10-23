/**
 * Shared content for the Parks & Recreation page in each design variant.
 * Taken from the Parks & Recreation page and each park's page on
 * saugatuckcity.com (Oct 2026), including the City's General Park Rules.
 */

export const parksIntro = {
  title: "Parks & Recreation",
  lead: "Beaches, dunes, riverfront parks and quiet nature preserves, all within a few minutes of downtown.",
  body: "The City looks after more than a dozen parks and natural areas, from Oval Beach and Mt. Baldhead to small riverside greens where the summer concerts and art fairs happen.",
} as const

export const parksFacts = [
  { value: "15", label: "Parks, preserves and landmarks" },
  { value: "450+", label: "Acres of dunes, woods and wetlands" },
  { value: "303", label: "Steps to the top of Mt. Baldhead" },
  { value: "Top 25", label: "Oval Beach, one of the world's best shorelines" },
] as const

export const ovalBeach = {
  name: "Oval Beach",
  summary:
    "Historic Oval Beach sits among towering dunes where the Kalamazoo River meets Lake Michigan. Condé Nast Traveler rated it one of the 25 best shorelines in the world.",
  address: "690 Perryman Street",
  season: "Memorial Day weekend through Labor Day weekend",
  hours: "8:00 am – 10:00 pm",
  passes: [
    { label: "Day pass", price: "$15", note: "Sold at the beach only" },
    {
      label: "City taxpayer season pass",
      price: "$20",
      note: "Sold at City Hall only",
    },
    {
      label: "Season pass",
      price: "$75",
      note: "Sold at City Hall and the beach",
    },
  ],
  parkingNote:
    "Lots can fill on peak summer days. Buy a season pass at City Hall, or call with a credit card to have it mailed.",
} as const

export const chainFerry = {
  name: "Chain Ferry",
  summary:
    "Diane, running since 1857, is the only hand-cranked chain ferry of its kind left in the United States. It crosses the Kalamazoo River every 10–15 minutes.",
  address: "528 Water Street",
  fares: [
    { label: "Ages 11 and up", price: "$3" },
    { label: "Ages 3 – 10", price: "$1" },
    { label: "Under 3, dogs, bikes and strollers", price: "Free" },
  ],
  note: "Managed by the Star of Saugatuck. No motorized vehicles. Tips for the operators are appreciated.",
  phone: "(269) 857-4261",
} as const

export const gettingToTheBeach = {
  title: "Getting to the beach without a car",
  options: [
    {
      label: "Ferry and dune climb",
      body: "Ride the Chain Ferry across the river, climb the 303 steps up Mt. Baldhead, then follow the paths down to the beach.",
    },
    {
      label: "John A. Woollam Trail",
      body: "A wooded walking trail from the Chain Ferry landing to Oval Beach, away from busy Perryman Street.",
    },
    {
      label: "Interurban bus",
      body: "On-demand pickup and drop-off. $1 for ages 12 and up; 50¢ for seniors 62+, children under 12 and riders with disabilities.",
      phone: "(269) 857-1418",
    },
  ],
} as const

export type Park = {
  /** Used as the anchor id on the page, e.g. #wicks-park. */
  readonly id: string
  readonly name: string
  /** lucide-react icon name. */
  readonly icon: string
  readonly area: "beach-dunes" | "river" | "downtown" | "nature" | "other"
  readonly summary: string
  /** Street address or nearest intersection. */
  readonly location?: string
  /** Size or frontage, e.g. "2.5 acres". */
  readonly size?: string
  /** Short amenity tags, e.g. "Playground". */
  readonly features: readonly string[]
  /** Rules specific to this park, from the City's General Park Rules. */
  readonly rules?: readonly string[]
  readonly phone?: string
}

export const parkAreas = [
  {
    id: "beach-dunes",
    title: "Beach & dunes",
    description: "Lake Michigan shoreline and the dunes above it.",
  },
  {
    id: "river",
    title: "On the river",
    description: "Small parks and the Chain Ferry along the Kalamazoo River.",
  },
  {
    id: "downtown",
    title: "Downtown",
    description: "Green spaces a short walk from Butler Street.",
  },
  {
    id: "nature",
    title: "Nature preserves",
    description:
      "Quiet trails, wetlands and woods for walking and birdwatching.",
  },
  {
    id: "other",
    title: "Also managed with partners",
    description: "Run with Saugatuck Township.",
  },
] as const

export const parks: readonly Park[] = [
  {
    id: "oval-beach",
    name: "Oval Beach",
    icon: "Sun",
    area: "beach-dunes",
    summary:
      "Saugatuck's famous Lake Michigan beach, set among towering dunes. Open year-round, with a summer season of paid parking.",
    location: "690 Perryman Street",
    features: ["Lake Michigan", "Paid parking", "Season passes"],
    rules: [
      "Open 8:00 am – 10:00 pm",
      "No dogs",
      "Memorial Day weekend – Sept 30: no fires, grilling, smoking or nudity",
      "Stay off the dune grass and on the trails",
    ],
  },
  {
    id: "mt-baldhead",
    name: "Mt. Baldhead Park",
    icon: "Mountain",
    area: "beach-dunes",
    summary:
      "303 wooden steps climb 250 feet to an observation deck with views over the river valley and Lake Michigan.",
    location: "Park Street",
    size: "100 acres",
    features: [
      "Observation deck",
      "Restrooms",
      "Picnic pavilion",
      "Fishing dock",
    ],
    rules: ["Closes at 10:00 pm", "Stay on stairs and trails", "No dogs"],
  },
  {
    id: "harbor-natural-area",
    name: "Saugatuck Harbor Natural Area",
    icon: "Bird",
    area: "beach-dunes",
    summary:
      "Protected duneland north of Oval Beach, at the original mouth of the Kalamazoo River, with rare interdunal wetlands.",
    location: "Oval Drive, from the Oval Beach lot",
    size: "173 acres",
    features: ["Dune trails", "Wetlands", "Rare habitat"],
    rules: [
      "Open 8:00 am – 10:00 pm",
      "No dogs",
      "Stay off the dune grass and on the trails",
    ],
  },
  {
    id: "woollam-trail",
    name: "John A. Woollam Trail",
    icon: "Footprints",
    area: "beach-dunes",
    summary:
      "A wooded walking trail between the Chain Ferry landing and Oval Beach, off winding Perryman Street.",
    location: "Park Street & Bliss Street",
    features: ["Walking trail", "Woods"],
  },
  {
    id: "chain-ferry",
    name: "Chain Ferry",
    icon: "Ship",
    area: "river",
    summary:
      "The last hand-cranked chain ferry of its kind in the U.S., carrying walkers and bikes across the river since 1857.",
    location: "528 Water Street",
    features: ["Hand-cranked", "Bikes and dogs ride free"],
    phone: "(269) 857-4261",
  },
  {
    id: "wicks-park",
    name: "Wicks Park",
    icon: "Music",
    area: "river",
    summary:
      "Riverside lawn and gazebo, home of the summer Music in the Park series. The restroom wears a Seurat mural.",
    location: "502 Water Street",
    size: "0.5 acres",
    features: ["Music in the Park", "Gazebo", "Restrooms", "Picnic tables"],
  },
  {
    id: "coghlin-park",
    name: "Coghlin Park",
    icon: "Tent",
    area: "river",
    summary:
      "Open riverfront lawn used for weddings and festivals, with a gazebo and picnic tables.",
    location: "60 Griffith Street",
    size: "0.5 acres · 200 ft of river frontage",
    features: ["Event space", "Gazebo", "Picnic tables"],
  },
  {
    id: "cook-park",
    name: "Cook Park",
    icon: "Palette",
    area: "river",
    summary:
      "Green space above the river, home of the Waterfront Invitational Art Fair and a favorite spot for fireworks.",
    location: "40 Water Street",
    size: "1 acre",
    features: ["Art fair", "Picnics", "Fireworks views"],
  },
  {
    id: "willow-park",
    name: "Willow Park",
    icon: "Fish",
    area: "river",
    summary:
      "An elevated wooden boardwalk with benches for fishing and river views.",
    size: "132 ft of river frontage",
    features: ["Boardwalk", "Fishing", "Benches"],
  },
  {
    id: "village-square",
    name: "Village Square Park",
    icon: "Baby",
    area: "downtown",
    summary:
      "The town's central park, with a new playground (2024) and the Memorial Day and Veterans Day ceremonies.",
    location: "Butler Street & Main Street",
    size: "2.5 acres",
    features: ["Playground", "Art fair", "Ceremonies"],
    rules: ["Playground closes at 10:00 pm"],
  },
  {
    id: "jones-park",
    name: "Jones Park",
    icon: "Info",
    area: "downtown",
    summary:
      "Downtown pocket park with the visitor information booth, named for Lyle A. Jones, City police chief for 33 years.",
    location: "528 Water Street",
    size: "0.5 acres",
    features: ["Visitor information", "Benches"],
  },
  {
    id: "rose-garden",
    name: "Rose Garden",
    icon: "Flower2",
    area: "downtown",
    summary:
      "An accessible path winding through roses and planted gardens in the heart of downtown.",
    location: "Butler Street & Mason Street",
    features: ["Gardens", "Accessible path"],
  },
  {
    id: "saugatuck-wilds",
    name: "Saugatuck Wilds Nature Preserve",
    icon: "Trees",
    area: "nature",
    summary:
      "Forest, floodplain woods, wetlands and vernal pools along the Kalamazoo River greenway, with an overlook deck.",
    location: "63rd Street & 134th Avenue",
    size: "169 acres",
    features: ["Hiking", "Overlook deck", "Birdwatching", "Leashed dogs"],
    rules: [
      "Stay on trails",
      "No horses, bicycles or motorized vehicles",
      "Leave plants and wildlife undisturbed",
    ],
  },
  {
    id: "peterson-preserve",
    name: "Mildred A. Peterson Nature Preserve",
    icon: "Leaf",
    area: "nature",
    summary:
      "A quiet preserve and stretch of the Interurban Trail beside Goshorn Creek, for walks and birdwatching in every season.",
    location: "Mill Street & Simonson Drive",
    size: "16+ acres",
    features: ["Walking path", "Birdwatching", "Benches"],
  },
  {
    id: "riverside-cemetery",
    name: "Riverside Cemetery",
    icon: "Landmark",
    area: "other",
    summary: "Managed by Saugatuck Township under an agreement with the City.",
    location: "Blue Star Highway & Clearbrook Drive",
    features: [],
    phone: "(269) 857-7721",
  },
]

/** City-wide rules from the General Park Rules policy. */
export const parkRules = {
  general: [
    "No overnight sleeping or camping in any park, natural area, beach or park parking lot.",
    "The City Manager may close a park or part of one for maintenance, habitat protection, construction or safety.",
  ],
  note: "Other rules, such as alcohol, fireworks, skateboarding and Oval Beach parking passes, are set in the City Code of Ordinances.",
} as const

export const parkEvents = [
  { name: "Music in the Park", where: "Wicks Park", parkId: "wicks-park" },
  {
    name: "Waterfront Invitational Art Fair",
    where: "Cook Park",
    parkId: "cook-park",
  },
  {
    name: "Village Square Art Fair",
    where: "Village Square",
    parkId: "village-square",
  },
  {
    name: "Memorial Day & Veterans Day ceremonies",
    where: "Village Square",
    parkId: "village-square",
  },
] as const

export const reservePark = {
  title: "Host an event in a park",
  body: "Weddings, festivals and other private events in City parks need a Private Event Use Permit from City Hall.",
} as const

export const masterPlan = {
  title: "Parks & Recreation Master Plan",
  body: "The Tri-Community Five-Year Parks & Recreation Master Plan guides future park projects and keeps the City eligible for Michigan DNR recreation grants.",
} as const

/** Placeholder photography until the City supplies its own. */
export const parksImages = {
  /** Sunset over the lake, for the page header and Oval Beach. */
  beach:
    "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=2400&q=80",
  /** Sailboat on open water. */
  water:
    "https://images.unsplash.com/photo-1540946485063-a40da27545f8?auto=format&fit=crop&w=1600&q=80",
  /** Autumn woods reflected in still water, for the nature preserves. */
  woods:
    "https://images.unsplash.com/photo-1507371341162-763b5e419408?auto=format&fit=crop&w=1600&q=80",
} as const
