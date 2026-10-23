import { Clock, MapPin, Phone } from "lucide-react"

import { siteConfig } from "@/config/site"
import { mainNav } from "@/content/home"

const resources = [
  "Agendas & Minutes",
  "Forms & Applications",
  "Pay Online",
  "Notify Me",
  "Trash & Recycling",
  "Bids & RFPs",
  "FAQs",
]

/* lucide-react 1.x no longer ships brand icons; two small inline glyphs instead. */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.5V21h3Z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
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
  "inline-block rounded text-[15px] text-blue-50 hover:text-white hover:underline focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"

export function SiteFooter() {
  return (
    <footer className="bg-(--civic-blue) text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        {/* Seal + contact */}
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-white/80 bg-(--civic-blue-dark) text-xl font-bold text-white"
            >
              S
            </span>
            <div className="leading-tight">
              <p className="text-lg font-bold">City of Saugatuck</p>
              <p className="text-sm text-blue-100">Michigan · Est. 1868</p>
            </div>
          </div>
          <address className="mt-6 space-y-3 text-[15px] text-blue-50 not-italic">
            <p className="flex items-start gap-2.5">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-blue-200"
              />
              {siteConfig.contact.address}
            </p>
            <p className="flex items-start gap-2.5">
              <Phone
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-blue-200"
              />
              <a
                href="#"
                className="hover:underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                {siteConfig.contact.phone}
              </a>
            </p>
            <p className="flex items-start gap-2.5">
              <Clock
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-blue-200"
              />
              <span>
                City Hall hours
                <br />
                {siteConfig.contact.hours}
              </span>
            </p>
          </address>
        </div>

        {/* Government */}
        <nav aria-labelledby="civic-footer-gov">
          <h2
            id="civic-footer-gov"
            className="text-sm font-bold tracking-wider text-blue-100 uppercase"
          >
            Government
          </h2>
          <ul className="mt-4 space-y-2.5">
            {mainNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href === "/" ? "#" : item.href}
                  className={footerLink}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resources */}
        <nav aria-labelledby="civic-footer-resources">
          <h2
            id="civic-footer-resources"
            className="text-sm font-bold tracking-wider text-blue-100 uppercase"
          >
            Resources
          </h2>
          <ul className="mt-4 space-y-2.5">
            {resources.map((label) => (
              <li key={label}>
                <a href="#" className={footerLink}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div>
          <h2 className="text-sm font-bold tracking-wider text-blue-100 uppercase">
            Connect
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-blue-50">
            Follow the City for meeting reminders, road closures and community
            news.
          </p>
          <ul className="mt-4 flex gap-3">
            <li>
              <a
                href="#"
                aria-label="City of Saugatuck on Facebook"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-(--civic-blue) focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-(--civic-blue) focus-visible:outline-none"
              >
                <FacebookIcon className="size-5" />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="City of Saugatuck on YouTube"
                className="flex size-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-(--civic-blue) focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-(--civic-blue) focus-visible:outline-none"
              >
                <YoutubeIcon className="size-5" />
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-md bg-white px-5 text-[15px] font-bold text-(--civic-blue) hover:bg-blue-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-(--civic-blue) focus-visible:outline-none"
          >
            Sign up for Notify Me
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15 bg-(--civic-blue-dark)">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-blue-100 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="max-w-3xl leading-relaxed">
            The City of Saugatuck is committed to providing a website that is
            accessible to everyone. If you have difficulty using this site,
            please{" "}
            <a
              href="#"
              className="text-white underline underline-offset-2 hover:no-underline focus-visible:rounded focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
            >
              contact City Hall
            </a>
            .
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <li>
              <a href="#" className={footerLink}>
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className={footerLink}>
                Site Map
              </a>
            </li>
            <li className="text-blue-100">
              © 2026 City of Saugatuck, Michigan
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
