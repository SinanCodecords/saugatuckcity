import { pageHref } from "@/content/home"
import { cn } from "@/lib/utils"

type LogoProps = {
  /** "inline" sits beside the header menu; "stacked" is the centered footer mark. */
  layout?: "inline" | "stacked"
  className?: string
}

/** Sky-blue oval with a white winding river. */
function Mark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 120"
      className={cn("block shrink-0 drop-shadow-sm", className)}
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
  )
}

/**
 * Placeholder that mimics the shape of the City's current logo: the oval mark
 * with the "City of / Saugatuck / Est. 1868" wordmark. Replace the SVG with the
 * real artwork once supplied.
 */
export function ClassicLogo({ layout = "stacked", className }: LogoProps) {
  const inline = layout === "inline"

  return (
    <a
      href={pageHref("classic", "home")}
      aria-label="City of Saugatuck, Michigan — home"
      className={cn(
        "group inline-flex rounded-md focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none",
        inline
          ? "items-center gap-3"
          : "flex-col items-center gap-2 text-center",
        className
      )}
    >
      <Mark
        className={
          inline ? "h-10 w-[74px] sm:h-11 sm:w-[81px]" : "h-[60px] w-[110px]"
        }
      />

      <span
        className={cn(
          "flex flex-col leading-none",
          inline ? "items-start" : "items-center"
        )}
      >
        <span className="text-[11px] font-semibold tracking-[0.3em] text-(--muted) uppercase">
          City of
        </span>
        <span
          className={cn(
            "font-(family-name:--font-script) text-(--blue-text) transition-colors group-hover:text-(--blue)",
            inline ? "mt-0.5 text-[28px] sm:text-[32px]" : "mt-1 text-2xl"
          )}
        >
          Saugatuck
        </span>
        <span
          className={cn(
            "font-medium tracking-[0.25em] text-(--muted) uppercase",
            inline ? "mt-1 hidden text-[11px] sm:block" : "mt-1 text-[11px]"
          )}
        >
          <span aria-hidden="true">&#9733; </span>
          Est. 1868
        </span>
      </span>
    </a>
  )
}
