import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"
import Image from "next/image"

const tablingEvents = [
  {
    name: "Engineering Open House",
    description: "Our EOH teams showcase their work at the Engineering Open House.",
    image: "/SP25_EOH_3.JPG",
  },
  {
    name: "Quad Day",
    description: "UIUC's largest RSO fair where thousands of students explore hundreds of organizations. We showcase our projects and recruit new members.",
    image: "/images/exec-placeholder.png",
  },
  {
    name: "Spring Involvement Fair",
    description: "Mid-year opportunity for students to discover new RSOs. Perfect for those who missed Quad Day or want to get more involved in spring semester.",
    image: "/images/exec-placeholder.png",
  },
]

const collaborations = [
  {
    name: "IEEE Fabublox",
    partners: ["IEEE"],
    description: "Collaboration with IEEE to explore the intersection of electronics and microfabrication, introducing students to integrated circuit design concepts.",
  },
  {
    name: "Women in MicroTech",
    partners: ["WIM", "WECE"],
    description: "Joint initiative with Women in MechSE (WIM) and Women in Electrical and Computer Engineering (WECE) to promote diversity in microtechnology fields.",
  },
]

export default function PromoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Promotional Events
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Where we connect with the UIUC community and beyond
              </p>
            </div>
          </div>
        </section>

        {/* Tabling Events */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Tabling Events
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join us at these campus-wide events throughout the year
            </p>

            <CircuitDivider />

            <div className="grid gap-8 md:grid-cols-3">
              {tablingEvents.map((event) => (
                <div
                  key={event.name}
                  className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden bg-secondary/20">
                    <Image
                      src={event.image}
                      alt={event.name}
                      width={400}
                      height={225}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {event.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RSO Collaborations */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              RSO Collaborations
            </h2>
            <p className="mt-2 text-muted-foreground">
              Working together with other student organizations
            </p>

            <CircuitDivider />

            <div className="grid gap-8 md:grid-cols-2">
              {collaborations.map((collab) => (
                <div
                  key={collab.name}
                  className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {collab.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {collab.partners.map((partner) => (
                          <span
                            key={partner}
                            className="inline-flex items-center rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {collab.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery Placeholder */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Event Gallery
            </h2>
            <p className="mt-2 text-muted-foreground">
              Highlights from our promotional activities
            </p>

            <CircuitDivider />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-xl bg-secondary/20"
                >
                  <Image
                    src="/images/exec-placeholder.png"
                    alt={`Event photo ${i}`}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
