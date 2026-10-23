type PriceRow = {
  readonly label: string
  readonly price: string
  readonly note?: string
}

const columnHeading =
  "px-3 py-2.5 text-left text-xs font-semibold tracking-wide text-(--navy) uppercase first:pl-4 last:pr-4 last:text-right"

const cell = "px-3 py-3 align-top text-sm first:pl-4 last:pr-4"

/** Small price list as a real table: item, optional note, navy price. */
export function PriceTable({
  caption,
  itemHeading,
  noteHeading,
  rows,
}: {
  caption: string
  itemHeading: string
  /** Column heading for `note`; shown from `sm` up, folded under the item below that. */
  noteHeading?: string
  rows: readonly PriceRow[]
}) {
  const hasNotes = Boolean(noteHeading) && rows.some((row) => row.note)

  return (
    <div className="overflow-hidden rounded-md border border-slate-200">
      <table className="w-full border-collapse">
        <caption className="border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-left text-sm font-semibold text-slate-900">
          {caption}
        </caption>
        <thead>
          <tr className="border-b-2 border-(--navy)">
            <th scope="col" className={columnHeading}>
              {itemHeading}
            </th>
            {hasNotes ? (
              <th
                scope="col"
                className={`hidden sm:table-cell ${columnHeading}`}
              >
                {noteHeading}
              </th>
            ) : null}
            <th scope="col" className={columnHeading}>
              Price
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {rows.map((row) => (
            <tr key={row.label}>
              <th
                scope="row"
                className={`${cell} text-left font-semibold text-slate-900`}
              >
                {row.label}
                {hasNotes && row.note ? (
                  <span className="mt-0.5 block text-xs font-normal text-slate-600 sm:hidden">
                    {row.note}
                  </span>
                ) : null}
              </th>
              {hasNotes ? (
                <td className={`${cell} hidden text-slate-600 sm:table-cell`}>
                  {row.note}
                </td>
              ) : null}
              <td
                className={`${cell} text-right text-lg leading-tight font-bold whitespace-nowrap text-(--navy) tabular-nums`}
              >
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
