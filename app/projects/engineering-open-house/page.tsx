import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"
import Link from "next/link"

const eohProjects = [
  {
    year: 2024,
    title: "Shunt Occlusions + Large Scale MEMS",
    description: "Our debut EOH project explored medical applications of MEMS through shunt occlusion demonstrations, alongside large-scale models of microelectromechanical systems to help visitors visualize the microscale world.",
  },
  {
    year: 2025,
    title: "HackerFab Tool Debut",
    description: "First public presentation of our HackerFab fabrication tool, showcasing open-source micro/nanofabrication capabilities developed by our team.",
  },
  {
    year: 2026,
    title: "Le Louvre Heist",
    description: "An interactive exhibit combining microtechnology with an engaging heist narrative, demonstrating practical applications of MEMS sensors and microsystems in security applications.",
  },
]

const teamMembers = [
  {
    name: "Medansh garg",
    role: "EOH Lead",
    image: "/images/medhansh exec.jpg",
  },
  {
    name: "Ben Swinehart",
    role: "EOH Lead",
    image: "/images/ben exec.jpg",
  },
  {
    name: "Team Member",
    role: "Technical Lead",
    image: null,
  },
  {
    name: "Team Member",
    role: "Design Lead",
    image: null,
  },
]

export default function EngineeringOpenHousePage() {
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
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Engineering Open House
              </h1>
            </div>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Showcasing the fascinating world of microtechnology through interactive exhibits and demonstrations
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
                  About EOH
                </h2>
                <CircuitDivider className="py-6" />
                <p className="text-muted-foreground leading-relaxed">
                  Engineering Open House (EOH) is UIUC&apos;s largest student-run event, showcasing cutting-edge engineering projects to the public. Illinois MicroTech proudly participates each year, demonstrating the fascinating world of microtechnology through interactive exhibits and demonstrations.
                </p>

                <h3 className="mt-10 font-serif text-xl font-semibold text-foreground">
                  Our Projects Through the Years
                </h3>

                <div className="mt-6 space-y-6">
                  {eohProjects.map((project, index) => (
                    <div
                      key={project.year}
                      className="relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50"
                    >
                      {/* Year badge */}
                      <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
                        {project.year}
                      </div>

                      <h4 className="mt-2 font-serif text-lg font-semibold text-foreground">
                        {project.title}
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Connecting line */}
                      {index < eohProjects.length - 1 && (
                        <div className="absolute -bottom-6 left-10 h-6 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Team & Photos */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  EOH Team
                </h2>
                <CircuitDivider className="py-6" />

                <div className="grid gap-4 sm:grid-cols-2">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50"
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
                  Photo Gallery
                </h3>
                <CircuitDivider className="py-6" />

                <div className="grid gap-4 grid-cols-2">
                  {[1, 2, 3, 4].map((index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted/30 transition-all hover:border-primary/50"
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
                  Photos from past EOH events coming soon
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
