import { TriangleAlert } from "lucide-react"

import { alert } from "@/content/home"
import { cn } from "@/lib/utils"

import { Container, textLink } from "./shared"

/** USWDS "site alert" (warning): yellow left border, pale yellow background. */
export function SiteAlert() {
  return (
    <section
      aria-label="Site alert"
      className="border-l-8 border-(--warning) bg-(--warning-light) text-(--ink)"
    >
      <Container className="py-4">
        <div className="flex gap-3">
          <TriangleAlert
            aria-hidden="true"
            className="mt-0.5 size-7 shrink-0"
            strokeWidth={2}
          />
          <div className="text-[17px] leading-relaxed">
            <p className="m-0 font-bold">{alert.title}</p>
            <p className="m-0">
              {alert.body}{" "}
              <a href="#" className={cn(textLink, "whitespace-nowrap")}>
                Project updates
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
