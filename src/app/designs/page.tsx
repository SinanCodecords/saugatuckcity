import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { designs } from "./designs"

export default function DesignsIndexPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Homepage design options
      </h1>
      <p className="mt-2 text-muted-foreground">
        Five directions for the City of Saugatuck homepage. Each one is a
        working page with the same sample content so the layouts can be compared
        directly. Open one, then use the bar at the top to switch.
      </p>
      <ol className="mt-10 divide-y divide-border rounded-xl border border-border">
        {designs.map((design, index) => (
          <li key={design.slug}>
            <Link
              href={`/designs/${design.slug}`}
              className="group flex items-center gap-4 p-5 transition-colors hover:bg-muted/50"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm text-primary-foreground">
                {index + 1}
              </span>
              <span className="flex-1">
                <span className="block font-medium">{design.name}</span>
                <span className="block text-sm text-muted-foreground">
                  {design.tagline}
                </span>
              </span>
              <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        ))}
      </ol>
    </main>
  )
}
