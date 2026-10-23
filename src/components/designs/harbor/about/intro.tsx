import Image from "next/image"

import { aboutImages, aboutIntro } from "@/content/about"

export function AboutIntro() {
  return (
    <section
      aria-labelledby="harbor-intro-heading"
      className="bg-white py-14 lg:py-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_440px] lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-(--navy) uppercase">
            Welcome
          </p>
          <h2
            id="harbor-intro-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-(--navy) sm:text-3xl"
          >
            Our community
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-slate-700 sm:text-lg">
            {aboutIntro.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100 shadow-sm lg:aspect-[4/3]">
          <Image
            src={aboutImages.sunset}
            alt="Sunset over Lake Michigan"
            fill
            sizes="(min-width: 1024px) 440px, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1 bg-(--gold)"
          />
        </div>
      </div>
    </section>
  )
}
