import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"
import Link from "next/link"

const hackerfabProgress = [
  {
    semester: "Spring 2025",
    achievements: [
      "Project initiation and equipment setup",
      "First UV light projection of block 'I' onto wafer",
      "Established foundational processes",
    ],
  },
  {
    semester: "Fall 2025",
    achievements: [
      "Accepted first 4 student teams",
      "Expanded fabrication capabilities",
      "Conducted KLayout design workshops",
    ],
  },
  {
    semester: "Spring 2026",
    achievements: [
      "Received Placid grant funding",
      "BIOE course integration",
      "Continued process development",
    ],
  },
]

const teamMembers = [
  {
    name: "Mudit Mehta",
    role: "HackerFab Lead",
    image: null,
  },
  {
    name: "Team Member",
    role: "Process Engineer",
    image: null,
  },
  {
    name: "Team Member",
    role: "Equipment Manager",
    image: null,
  },
  {
    name: "Team Member",
    role: "Workshop Coordinator",
    image: null,
  },
]

export default function HackerFabPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/30 text-secondary-foreground">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                </svg>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                HackerFab
              </h1>
            </div>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Open-source micro/nanofabrication initiative democratizing access to semiconductor fabrication
            </p>
          </div>
        </section>

        {/* Two Column Content */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Left Column - Project Information */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  About HackerFab
                </h2>
                <CircuitDivider className="py-6" />
                <p className="text-muted-foreground leading-relaxed">
                  HackerFab is an open-source micro/nanofabrication initiative that aims to democratize access to semiconductor fabrication tools and knowledge. Illinois MicroTech is proud to be an active contributor and host to this groundbreaking project.
                </p>

                <div className="mt-6 rounded-xl border border-secondary/50 bg-secondary/10 p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our club hosts HackerFab equipment and provides undergraduate students with hands-on experience in microfabrication. We&apos;ve successfully projected UV light patterns onto wafers and continue to expand our capabilities each semester.
                  </p>
                </div>

                <h3 className="mt-10 font-serif text-xl font-semibold text-foreground">
                  Progress by Semester
                </h3>

                <div className="mt-6 space-y-4">
                  {hackerfabProgress.map((semester) => (
                    <div key={semester.semester} className="rounded-lg border border-border bg-card p-4">
                      <h4 className="font-semibold text-primary">{semester.semester}</h4>
                      <ul className="mt-2 space-y-1">
                        {semester.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Resources & Acknowledgments */}
                <div className="mt-10 space-y-4">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Resources
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/hackerfab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/50"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      HackerFab GitHub
                    </a>
                    <a
                      href="https://hackerfab.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:border-primary/50"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Documentation
                    </a>
                  </div>

                  <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
                    Acknowledgments
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <strong>Placid</strong> - Generous $1k grant supporting our fabrication efforts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <strong>BIOE 199/299 Course Integration</strong> - Academic partnership bringing HackerFab to the classroom
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Team & Photos */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  HackerFab Team
                </h2>
                <CircuitDivider className="py-6" />

                <div className="grid gap-4 sm:grid-cols-2">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-secondary/50"
                    >
                      <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted/50 mb-4">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center">
                            <svg viewBox="0 0 24 24" className="h-16 w-16 text-muted-foreground/30" fill="none" stroke="currentColor" strokeWidth="1">
                              <circle cx="12" cy="8" r="4" />
                              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <h4 className="font-semibold text-foreground">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </div>

                <h3 className="mt-10 font-serif text-xl font-semibold text-foreground">
                  Lab Photos
                </h3>
                <CircuitDivider className="py-6" />

                <div className="grid gap-4 grid-cols-2">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted/30 transition-all hover:border-secondary/50"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <svg viewBox="0 0 24 24" className="h-10 w-10 text-muted-foreground/30" fill="none" stroke="currentColor" strokeWidth="1">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Photos from HackerFab lab sessions coming soon
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
