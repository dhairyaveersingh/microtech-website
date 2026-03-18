import { CircuitDivider } from "@/components/circuit-divider"

const activities = [
  {
    title: "Grad + Industry Panels",
    description: "Connect with graduate students and industry professionals working in MEMS and microfabrication. Learn about career paths and research opportunities.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Cleanroom Tours",
    description: "Experience the Micro and Nanotechnology Laboratory (MNMS) cleanroom facilities. See cutting-edge fabrication equipment in action.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" y1="12" x2="3" y2="12" />
      </svg>
    ),
  },
  {
    title: "Educational Workshops",
    description: "Hands-on workshops covering topics from KLayout design to microfabrication processes. Build practical skills in MEMS design and manufacturing.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Social Events",
    description: "Build community with fellow microtechnology enthusiasts. From study sessions to social gatherings, there's always something happening.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
]

export function ActivitiesSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Core Activities
          </h2>
          <p className="mt-4 text-muted-foreground">
            Discover the many ways to get involved with Illinois MicroTech
          </p>
        </div>

        <CircuitDivider className="mx-auto max-w-md" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              {/* Circuit node indicator */}
              <div className="absolute -top-2 left-6 h-4 w-4">
                <div className="absolute h-full w-full rounded-full bg-secondary/50 group-hover:bg-primary/50 transition-colors" />
                <div className="absolute left-1/2 top-full h-2 w-px bg-border group-hover:bg-primary/50 transition-colors" />
              </div>

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {activity.icon}
              </div>
              
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {activity.title}
              </h3>
              
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
