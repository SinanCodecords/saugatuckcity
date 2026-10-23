import Image from "next/image"

import { pageHref } from "@/content/home"
import { cn } from "@/lib/utils"

type LogoProps = {
  /** "inline" sits beside the header menu; "stacked" is the larger footer mark. */
  layout?: "inline" | "stacked"
  className?: string
}

/** The City's own logo (oval, river and wordmark), from saugatuckcity.com. */
export function ClassicLogo({ layout = "stacked", className }: LogoProps) {
  const inline = layout === "inline"

  return (
    <a
      href={pageHref("classic", "home")}
      aria-label="City of Saugatuck, Michigan — home"
      className={cn(
        "inline-flex shrink-0 rounded-md focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:ring-offset-4 focus-visible:ring-offset-white focus-visible:outline-none",
        className
      )}
    >
      <Image
        src="/brand/saugatuck-logo.jpg"
        alt=""
        width={415}
        height={202}
        preload={inline}
        className={cn(
          "block w-auto",
          inline ? "h-[52px] sm:h-[62px]" : "h-[78px]"
        )}
      />
    </a>
  )
}
