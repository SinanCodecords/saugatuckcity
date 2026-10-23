export const siteConfig = {
  name: "City of Saugatuck",
  description:
    "Official website of the City of Saugatuck, Michigan — city services, departments, meetings, and community news.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  contact: {
    address: "102 Butler St., PO Box 86, Saugatuck, MI 49453",
    phone: "(269) 857-2603",
    hours: "Monday – Friday, 8:30 am – 5:00 pm",
  },
} as const
