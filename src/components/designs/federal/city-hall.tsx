import { siteConfig } from "@/config/site"

import { Container, outlineButton, primaryButton } from "./shared"

/** Gray summary band with City Hall address, phone, and hours. */
export function CityHall() {
  return (
    <section
      aria-labelledby="federal-city-hall-heading"
      className="bg-(--gray-5)"
    >
      <Container className="py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start">
          <div>
            <h2
              id="federal-city-hall-heading"
              className="text-[28px] leading-tight font-bold sm:text-[32px]"
            >
              City Hall
            </h2>
            <dl className="mt-5 grid gap-x-8 gap-y-4 text-[17px] leading-relaxed sm:grid-cols-[auto_1fr]">
              <dt className="font-bold">Address</dt>
              <dd className="m-0">{siteConfig.contact.address}</dd>
              <dt className="font-bold">Phone</dt>
              <dd className="m-0">
                <a
                  href="#"
                  className="text-(--primary) underline underline-offset-[3px] outline-none hover:text-(--primary-dark) focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-(--focus)"
                >
                  {siteConfig.contact.phone}
                </a>
              </dd>
              <dt className="font-bold">Hours</dt>
              <dd className="m-0">{siteConfig.contact.hours}</dd>
            </dl>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:pt-2">
            <a href="#" className={primaryButton}>
              Get directions
            </a>
            <a href="#" className={outlineButton}>
              Contact us
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
