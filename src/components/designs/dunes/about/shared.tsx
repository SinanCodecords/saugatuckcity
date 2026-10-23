/** Typography and layout shared by the Dunes About page sections. */

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8"

export const serif = "font-(family-name:--font-dunes-serif)"

export const kicker =
  "text-[11px] font-semibold tracking-[0.22em] text-(--dn-teal) uppercase"

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--dn-teal)"

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
