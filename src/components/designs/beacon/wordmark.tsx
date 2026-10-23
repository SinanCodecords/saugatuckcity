import { cn } from "@/lib/utils"

export function BeaconWordmark({
  size = "sm",
  className,
}: {
  size?: "sm" | "lg"
  className?: string
}) {
  return (
    <span className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-[family-name:var(--font-beacon-display)] font-extrabold tracking-[-0.04em] text-white uppercase",
          size === "sm"
            ? "text-xl sm:text-2xl"
            : "text-5xl sm:text-6xl lg:text-7xl"
        )}
      >
        Saugatuck
      </span>
      <span
        className={cn(
          "font-semibold tracking-[0.18em] text-[var(--beacon-amber)] uppercase",
          size === "sm" ? "mt-1 text-[10px]" : "mt-3 text-xs sm:text-sm"
        )}
      >
        City of, Michigan
      </span>
    </span>
  )
}
