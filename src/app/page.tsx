import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"

import { designs } from "./designs/designs"

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-16">
      <p className="text-sm font-medium text-muted-foreground">
        {siteConfig.name}
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">
        Homepage design options
      </h1>
      <p className="mt-2 text-muted-foreground">
        {designs.length} directions for the new homepage, each a working page
        with the same sample content. Open one, then use the bar at the top to
        switch between them.
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
