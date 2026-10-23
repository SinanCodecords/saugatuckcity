import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { mainNav, pageHref } from "@/content/home"

import { designs } from "./designs"

/** Pages built in every design, in menu order. */
const pages = mainNav.flatMap((item) =>
  item.page ? [{ label: item.label, page: item.page }] : []
)

/** Numbered list of the shortlisted designs, each with links to its pages. */
export function DesignList() {
  return (
    <ol className="mt-10 divide-y divide-border rounded-xl border border-border">
      {designs.map((design, index) => (
        <li key={design.slug} className="p-5">
          <Link
            href={pageHref(design.slug, "home")}
            className="group flex items-center gap-4 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground">
              {index + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-medium group-hover:underline">
                {design.name}
              </span>
              <span className="block text-sm text-muted-foreground">
                {design.tagline}
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <ul
            aria-label={`${design.name} pages`}
            className="mt-3 -ml-2 flex flex-wrap gap-1 text-sm sm:ml-11"
          >
            {pages.map(({ label, page }) => (
              <li key={page}>
                <Link
                  href={pageHref(design.slug, page)}
                  className="inline-flex min-h-8 items-center rounded-md px-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
