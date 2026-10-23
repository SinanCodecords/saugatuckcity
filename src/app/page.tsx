import { siteConfig } from "@/config/site"

import { DesignList } from "./designs/design-list"
import { designs } from "./designs/designs"

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-16">
      <p className="text-sm font-medium text-muted-foreground">
        {siteConfig.name}
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">
        Website design options
      </h1>
      <p className="mt-2 text-muted-foreground">
        {designs.length} directions for the new website, each with the same
        pages and sample content. Open one, then use the bar at the top to
        switch designs on the page you are viewing.
      </p>
      <DesignList />
    </main>
  )
}
