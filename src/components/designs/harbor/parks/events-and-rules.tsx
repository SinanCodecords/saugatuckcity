import { ParkEvents } from "./events"
import { RulesAndPermits } from "./rules-and-permits"

export function EventsAndRules() {
  return (
    <div className="border-t border-slate-200 bg-slate-50 py-14 lg:py-16">
      <div className="mx-auto max-w-7xl space-y-6 px-4 sm:px-6 lg:space-y-8 lg:px-8">
        <ParkEvents />
        <RulesAndPermits />
      </div>
    </div>
  )
}
