import { pageHref } from "@/content/home"
import { cn } from "@/lib/utils"

type LogoProps = {
  size?: "lg" | "sm"
  className?: string
}

/**
 * Placeholder that mimics the shape of the City's current logo: a sky-blue
 * oval with a white winding river, with the wordmark beneath. Replace the
 * SVG with the real artwork once supplied.
 */
export function ClassicLogo({ size = "lg", className }: LogoProps) {
  const large = size === "lg"

  return (
    <a
      href={pageHref("classic", "home")}
      aria-label="City of Saugatuck, Michigan — home"
      className={cn(
        "group inline-flex flex-col items-center rounded-md text-center focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none",
        className
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 220 120"
        className={cn(
          "block drop-shadow-sm",
          large ? "h-[120px] w-[220px]" : "h-[60px] w-[110px]"
        )}
      >
        <ellipse cx="110" cy="60" rx="108" ry="58" fill="var(--blue)" />
        <ellipse
          cx="110"
          cy="60"
          rx="100"
          ry="50"
          fill="none"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.5"
        />
        <path
          d="M 8 52 C 42 20, 70 86, 104 60 S 160 22, 212 72"
          fill="none"
          stroke="#ffffff"
          strokeWidth="11"
          strokeLinecap="round"
        />
        <path
          d="M 8 52 C 42 20, 70 86, 104 60 S 160 22, 212 72"
          fill="none"
          stroke="var(--blue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="3 9"
          opacity="0.6"
        />
      </svg>

      <span
        className={cn(
          "font-semibold tracking-[0.3em] text-(--muted) uppercase",
          large ? "mt-3 text-xs" : "mt-2 text-[11px]"
        )}
      >
        City of
      </span>
      <span
        className={cn(
          "font-(family-name:--font-script) leading-none text-(--blue-text) transition-colors group-hover:text-(--blue)",
          large ? "mt-1 text-5xl" : "text-2xl"
        )}
      >
        Saugatuck
      </span>
      <span
        className={cn(
          "font-medium tracking-[0.25em] text-(--muted) uppercase",
          large ? "mt-2 text-xs" : "mt-1 text-[11px]"
        )}
      >
        <span aria-hidden="true">&#9733; </span>
        Est. 1868
      </span>
    </a>
  )
}
