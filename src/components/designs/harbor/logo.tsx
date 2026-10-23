import Image from "next/image"

import { cn } from "@/lib/utils"

/**
 * The City's own logo (oval, river and wordmark), from saugatuckcity.com.
 * The artwork has a white background, so it sits on a white plate with a
 * gold edge rather than straight on the navy.
 */
export function HarborLogo({
  className,
  imageClassName = "h-10",
  preload = false,
}: {
  className?: string
  imageClassName?: string
  preload?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 rounded-lg bg-white px-2 py-1 shadow-sm ring-1 ring-(--gold)/70",
        className
      )}
    >
      <Image
        src="/brand/saugatuck-logo.jpg"
        alt=""
        width={415}
        height={202}
        preload={preload}
        className={cn("block w-auto", imageClassName)}
      />
    </span>
  )
}
