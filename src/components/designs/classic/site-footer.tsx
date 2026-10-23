import { siteConfig } from "@/config/site"
import { mainNav, navHref } from "@/content/home"

import { ClassicLogo } from "./logo"

/* lucide-react v1 no longer ships brand icons, so these two glyphs are inline. */
function FacebookGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.3H7.4V14h2.8v8h3.3Z" />
    </svg>
  )
}

function YoutubeGlyph({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  )
}

const footerLink =
  "rounded text-(--body) hover:text-(--blue-text) hover:underline focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:outline-none"

export function SiteFooter() {
  return (
    <footer className="border-t border-(--rule) bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-12 text-center sm:px-6 lg:px-8">
        <ClassicLogo size="sm" />

        {/* Tablets get an even four-by-two grid instead of a six-and-two wrap */}
        <nav aria-label="Footer" className="mt-6 w-full">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 md:grid md:grid-cols-[repeat(4,auto)] md:gap-x-10 lg:flex lg:gap-x-5">
            {mainNav.map((item) => (
              <li key={item.label}>
                <a
                  href={navHref("classic", item)}
                  className={`${footerLink} inline-block py-2 text-[11px] font-semibold tracking-[0.18em] uppercase`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-6 flex flex-col items-center gap-0.5 text-sm text-(--body) sm:block">
          <span className="font-semibold text-(--ink)">{siteConfig.name}</span>
          <span
            aria-hidden="true"
            className="mx-2 hidden text-(--muted) sm:inline"
          >
            &middot;
          </span>
          <span className="text-balance">{siteConfig.contact.address}</span>
          <span
            aria-hidden="true"
            className="mx-2 hidden text-(--muted) sm:inline"
          >
            &middot;
          </span>
          <a href="#" className={`${footerLink} inline-block py-0.5`}>
            {siteConfig.contact.phone}
          </a>
        </p>
        <p className="mt-1 text-sm text-(--muted)">
          {siteConfig.contact.hours}
        </p>

        <ul className="mt-6 flex items-center gap-3">
          <li>
            <a
              href="#"
              aria-label="City of Saugatuck on Facebook"
              className="flex size-10 items-center justify-center rounded-full border border-(--rule) text-(--body) transition-colors hover:border-(--blue) hover:bg-(--blue) hover:text-white focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
            >
              <FacebookGlyph className="size-4" />
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="City of Saugatuck on YouTube"
              className="flex size-10 items-center justify-center rounded-full border border-(--rule) text-(--body) transition-colors hover:border-(--blue) hover:bg-(--blue) hover:text-white focus-visible:ring-2 focus-visible:ring-(--blue) focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:outline-none"
            >
              <YoutubeGlyph className="size-4" />
            </a>
          </li>
        </ul>

        <div className="mt-10 w-full border-t border-(--rule) pt-6 text-xs text-(--muted)">
          <p className="mx-auto max-w-2xl leading-relaxed">
            The City of Saugatuck is committed to providing a website that is
            accessible to everyone. If you have difficulty using any part of
            this site, please{" "}
            <a
              href="#"
              className={`${footerLink} underline underline-offset-2`}
            >
              contact City Hall
            </a>{" "}
            or review our{" "}
            <a
              href="#"
              className={`${footerLink} underline underline-offset-2`}
            >
              accessibility statement
            </a>
            .
          </p>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-x-4">
            <span className="basis-full py-1 sm:basis-auto">
              &copy; 2026 City of Saugatuck, Michigan
            </span>
            <a href="#" className={`${footerLink} py-1`}>
              Privacy
            </a>
            <a href="#" className={`${footerLink} py-1`}>
              Site map
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
