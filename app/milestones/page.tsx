import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"

// Data from milestones.yaml
const generalMilestones = [
  {
    date: "Fall 2023",
    title: "Club Founded",
    description: "Illinois MicroTech was founded and officially accepted as a Registered Student Organization (RSO) at UIUC.",
  },
  {
    date: "Spring 2024",
    title: "First MEMS Meeting & EOH Debut",
    description: "Hosted our first 'Intro to MEMS' meeting and presented our first EOH project on Shunt Occlusions.",
  },
  {
    date: "Fall 2024",
    title: "Cleanroom Tours & Grad Panel",
    description: "Organized our first cleanroom tours at MNMS and hosted our inaugural invited Graduate Panel.",
  },
  {
    date: "Fall 2025",
    title: "KLayout Design Workshop",
    description: "Conducted KLayout Design Workshop and accepted the first 4 teams to HackerFab.",
  },
  {
    date: "Spring 2026",
    title: "Placid Grant & EOH 2026",
    description: "Received $1k grant from Placid. Presenting 'Le Louvre Heist' at Engineering Open House 2026.",
    current: true,
  },
]

const hackerfabMilestones = [
  {
    date: "Spring 2025",
    title: "HackerFab Initiative Launched",
    description: "Initiated the HackerFab project - first successful UV light projection of block 'I' onto a wafer.",
  },
  {
    date: "Fall 2025",
    title: "First Teams Accepted",
    description: "Accepted the first 4 teams to work on HackerFab projects. Expanded infrastructure and capabilities.",
  },
  {
    date: "Spring 2026",
    title: "BIOE Course Integration",
    description: "HackerFab integrated with BIOE 199/299 course. Continued development with support from donors like Placid.",
    current: true,
  },
]

export default function MilestonesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Our Milestones
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Tracking our journey from founding to present day
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* General Club Timeline */}
              <div>
                <div className="sticky top-24">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      General Club
                    </h2>
                  </div>

                  <CircuitDivider className="py-6" />

                  {/* Timeline */}
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

                    <div className="space-y-8">
                      {generalMilestones.map((milestone, index) => (
                        <div key={milestone.date} className="relative pl-12">
                          {/* Node */}
                          <div className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 ${milestone.current ? "border-primary bg-primary text-primary-foreground" : "border-primary/50 bg-background"}`}>
                            {milestone.current ? (
                              <span className="h-2 w-2 rounded-full bg-primary-foreground animate-pulse" />
                            ) : (
                              <span className="h-2 w-2 rounded-full bg-primary/50" />
                            )}
                          </div>

                          {/* Horizontal connector */}
                          <div className="absolute left-8 top-3.5 h-px w-4 bg-primary/30" />

                          {/* Content */}
                          <div className={`rounded-xl border p-4 transition-all ${milestone.current ? "border-primary/50 bg-primary/5" : "border-border bg-card hover:border-primary/30"}`}>
                            <div className="flex items-center gap-2">
                              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${milestone.current ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                                {milestone.date}
                              </span>
                              {milestone.current && (
                                <span className="text-xs font-medium text-primary">Current</span>
                              )}
                            </div>
                            <h3 className="mt-2 font-serif font-semibold text-foreground">
                              {milestone.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* HackerFab Timeline */}
              <div>
                <div className="sticky top-24">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/30 text-secondary-foreground">
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <rect x="9" y="9" width="6" height="6" />
                        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                      </svg>
                    </div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">
                      HackerFab
                    </h2>
                  </div>

                  <CircuitDivider className="py-6" />

                  {/* Timeline */}
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-secondary via-secondary/50 to-transparent" />

                    <div className="space-y-8">
                      {hackerfabMilestones.map((milestone, index) => (
                        <div key={milestone.date} className="relative pl-12">
                          {/* Node */}
                          <div className={`absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 ${milestone.current ? "border-secondary bg-secondary text-secondary-foreground" : "border-secondary/50 bg-background"}`}>
                            {milestone.current ? (
                              <span className="h-2 w-2 rounded-full bg-secondary-foreground animate-pulse" />
                            ) : (
                              <span className="h-2 w-2 rounded-full bg-secondary/50" />
                            )}
                          </div>

                          {/* Horizontal connector */}
                          <div className="absolute left-8 top-3.5 h-px w-4 bg-secondary/30" />

                          {/* Content */}
                          <div className={`rounded-xl border p-4 transition-all ${milestone.current ? "border-secondary/50 bg-secondary/5" : "border-border bg-card hover:border-secondary/30"}`}>
                            <div className="flex items-center gap-2">
                              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${milestone.current ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
                                {milestone.date}
                              </span>
                              {milestone.current && (
                                <span className="text-xs font-medium text-secondary-foreground">Current</span>
                              )}
                            </div>
                            <h3 className="mt-2 font-serif font-semibold text-foreground">
                              {milestone.title}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Info note */}
                  <div className="mt-8 rounded-xl border border-dashed border-secondary/50 bg-secondary/5 p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Note:</strong> HackerFab milestones track our open-source microfabrication initiative, launched in Spring 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="mt-16 rounded-xl border border-border bg-card p-6">
              <h3 className="font-serif font-semibold text-foreground">Reading the Timeline</h3>
              <div className="mt-4 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground">Current milestone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/50 bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
                  </div>
                  <span className="text-sm text-muted-foreground">Past milestone</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-6 w-px bg-gradient-to-b from-primary to-transparent" />
                  <span className="text-sm text-muted-foreground">Timeline progression</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
