import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CircuitBackground } from "@/components/circuit-divider"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <CircuitBackground />
      
      {/* Animated circuit traces overlay */}
      <div className="pointer-events-none absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* Horizontal traces */}
          <path
            d="M0 150 H200 V200 H400 V180 H600"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/20"
            strokeDasharray="10 5"
          />
          <path
            d="M600 180 H800 V220 H1000 V200 H1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary/30"
            strokeDasharray="10 5"
          />
          <path
            d="M0 400 H150 V350 H350 V380 H550 V360 H750"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/15"
            strokeDasharray="8 4"
          />
          <path
            d="M750 360 H950 V400 H1200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-secondary/20"
            strokeDasharray="8 4"
          />
          
          {/* Circuit nodes */}
          <circle cx="200" cy="200" r="4" className="fill-primary/30" />
          <circle cx="400" cy="180" r="4" className="fill-secondary/40" />
          <circle cx="800" cy="220" r="4" className="fill-primary/30" />
          <circle cx="350" cy="380" r="4" className="fill-secondary/40" />
          <circle cx="750" cy="360" r="4" className="fill-primary/30" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Chip icon */}
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="6" y="6" width="12" height="12" rx="1" />
              <path d="M6 9h-3M6 12h-3M6 15h-3M18 9h3M18 12h3M18 15h3M9 6v-3M12 6v-3M15 6v-3M9 18v3M12 18v3M15 18v3" />
            </svg>
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">Welcome to</span>
            <br />
            <span className="text-primary">Illinois MicroTech</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            Bringing experiences in MEMS and microtechnology to the undergraduate student population at the University of Illinois Urbana-Champaign!
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="https://discord.com/invite/cY7bGFFz9q" target="_blank" rel="noopener noreferrer">
                Join our Discord
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/projects">
                Explore Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
