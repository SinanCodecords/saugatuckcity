/** Typography and layout shared by the Dunes About page sections. */
import { Fragment, type ReactNode } from "react"
import { ArrowDown } from "lucide-react"

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8"

export const serif = "font-(family-name:--font-dunes-serif)"

export const kicker =
  "text-[11px] font-semibold tracking-[0.22em] text-(--dn-teal) uppercase"

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal)"

/** Glues an unspaced en dash to its neighbours ("2026–27", "Council–Manager") so it never ends a line. */
export function keepDashes(text: string) {
  return text.replace(/(\S)–(\S)/g, "$1⁠–⁠$2")
}

/**
 * Keeps a trailing icon on the same line as the label's last word, so a
 * wrapped link never leaves its arrow stranded at the far edge.
 */
export function WithTrailingIcon({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  const cut = label.lastIndexOf(" ")
  return (
    <>
      {cut === -1 ? null : label.slice(0, cut + 1)}
      <span className="whitespace-nowrap">
        {cut === -1 ? label : label.slice(cut + 1)}
        {children}
      </span>
    </>
  )
}

/**
 * Splits text on a separator and lets each phrase wrap as a unit, so
 * "8:30 am – 5:00 pm" or "Saugatuck, MI 49453" never breaks mid-phrase.
 */
export function Phrases({
  text,
  separator = ", ",
}: {
  text: string
  separator?: string
}) {
  const parts = text.split(separator)
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${part}-${index}`}>
          <span className="inline-block">
            {part}
            {index < parts.length - 1 ? separator.trimEnd() : null}
          </span>
          {index < parts.length - 1 ? " " : null}
        </Fragment>
      ))}
    </>
  )
}

/** Small-caps label for a page's jump list ("In this feature", "In this guide"). */
export const jumpLabel =
  "text-[11px] font-semibold tracking-[0.22em] text-(--dn-ink-soft) uppercase"

/** A page's jump list: wraps inline on small screens, stacks in the sidebar on desktop. */
export function JumpNav({
  id,
  label,
  items,
}: {
  id: string
  label: string
  items: readonly { label: string; href: string }[]
}) {
  return (
    <nav aria-labelledby={id} className="lg:col-span-3 lg:col-start-10">
      <p id={id} className={jumpLabel}>
        {label}
      </p>
      <ul className="mt-2 flex flex-wrap gap-x-6 lg:flex-col">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`group inline-block rounded-sm py-1 text-[15px] leading-snug font-medium text-(--dn-ink) transition-colors hover:text-(--dn-teal) ${focusRing}`}
            >
              <WithTrailingIcon label={item.label}>
                <ArrowDown
                  className="ml-1.5 inline-block size-3.5 align-[-0.125em] text-(--dn-terra) transition-transform duration-200 group-hover:translate-y-0.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </WithTrailingIcon>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/** Breadcrumb "Home" link: padded so it is a comfortable tap target. */
export const breadcrumbLink = `inline-block rounded-sm py-1 underline decoration-(--dn-rule) underline-offset-4 transition-colors hover:text-(--dn-teal) hover:decoration-(--dn-teal) ${focusRing}`

/** Kicker plus serif H2, matching the section headers on the Dunes home page. */
export function SectionHeading({
  id,
  label,
  title,
}: {
  id: string
  label: string
  title: string
}) {
  return (
    <div>
      <p className={kicker}>{label}</p>
      <h2
        id={id}
        className={`mt-3 ${serif} text-3xl leading-tight font-light tracking-[-0.01em] text-balance sm:text-4xl lg:text-5xl`}
      >
        {title}
      </h2>
    </div>
  )
}
