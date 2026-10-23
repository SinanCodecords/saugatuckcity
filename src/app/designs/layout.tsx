import type { Metadata } from "next"

import { DesignSwitcher } from "./design-switcher"

export const metadata: Metadata = {
  title: "Homepage designs",
  robots: { index: false, follow: false },
}

export default function DesignsLayout({ children }: LayoutProps<"/designs">) {
  return (
    <>
      <DesignSwitcher />
      <div className="flex-1">{children}</div>
    </>
  )
}
