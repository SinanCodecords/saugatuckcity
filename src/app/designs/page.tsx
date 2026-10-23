import { DesignList } from "./design-list"
import { designs } from "./designs"

export default function DesignsIndexPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Website design options
      </h1>
      <p className="mt-2 text-muted-foreground">
        {designs.length} directions for the City of Saugatuck website. Each one
        has the same pages and sample content, so the layouts can be compared
        directly. Open one, then use the bar at the top to switch designs on the
        page you are viewing.
      </p>
      <DesignList />
    </main>
  )
}
