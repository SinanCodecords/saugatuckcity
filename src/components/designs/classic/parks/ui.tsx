import type { ReactNode } from "react"
import { Info, type LucideIcon } from "lucide-react"

/** Small uppercase label, like the Departments `SubHeading` but at h3 for panels titled with an h2. */
export function PanelLabel({
  children,
  id,
}: {
  children: ReactNode
  id?: string
}) {
  return (
    <h3
      id={id}
      className="text-[11px] font-semibold tracking-[0.2em] text-(--muted) uppercase"
    >
      {children}
    </h3>
  )
}

/** Bordered panel with a grey title band and icon, the page-level version of the Departments panel. */
export function FeaturePanel({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string
  title: string
  icon: LucideIcon
  children: ReactNode
}) {
  const titleId = `${id}-title`
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="scroll-mt-38 overflow-hidden rounded-md border border-(--rule) bg-white"
    >
      <div className="flex items-center gap-3 border-b border-(--rule) bg-(--band) px-5 py-3.5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-(--rule) bg-white text-(--blue-text)">
          <Icon aria-hidden="true" className="size-[18px]" />
        </span>
        <h2
          id={titleId}
          className="min-w-0 text-xl font-semibold tracking-tight text-(--ink)"
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

/** A short label / price table in the style of the About page's council table. */
export function PriceTable({
  caption,
  itemHeading,
  priceHeading,
  rows,
}: {
  caption: string
  itemHeading: string
  priceHeading: string
  rows: readonly { label: string; price: string; note?: string }[]
}) {
  return (
    <div className="overflow-hidden rounded-md border border-(--rule)">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-(--band) text-[11px] font-semibold tracking-[0.2em] text-(--ink) uppercase">
          <tr>
            <th scope="col" className="px-4 py-2.5">
              {itemHeading}
            </th>
            <th scope="col" className="px-4 py-2.5 text-right">
              {priceHeading}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-(--rule) border-t border-(--rule)">
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="px-4 py-3 align-top font-normal">
                <span className="block font-semibold text-(--ink)">
                  {row.label}
                </span>
                {row.note ? (
                  <span className="mt-0.5 block text-xs text-(--muted)">
                    {row.note}
                  </span>
                ) : null}
              </th>
              <td className="px-4 py-3 text-right align-top text-base font-semibold whitespace-nowrap text-(--blue-text) tabular-nums">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Blue-ruled note, as used for department notes. */
export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="flex gap-2.5 rounded-sm border-l-2 border-(--blue) bg-(--blue-pale) px-3 py-2.5 text-sm text-(--ink)">
      <Info
        aria-hidden="true"
        className="mt-0.5 size-4 shrink-0 text-(--blue-text)"
      />
      <span className="text-pretty">{children}</span>
    </p>
  )
}

/** One icon + text row inside a `<dl>`. The icon stands in for the term, which screen readers still hear. */
export function DetailItem({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon
  label: string
  children: ReactNode
}) {
  return (
    <div className="flex gap-3">
      <dt className="shrink-0">
        <Icon aria-hidden="true" className="mt-0.5 size-4 text-(--blue)" />
        <span className="sr-only">{label}</span>
      </dt>
      <dd className="min-w-0 text-(--body)">{children}</dd>
    </div>
  )
}
