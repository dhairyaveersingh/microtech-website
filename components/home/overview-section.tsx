import Image from "next/image"
import { CircuitDivider } from "@/components/circuit-divider"

export function OverviewSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What is MEMS?
            </h2>
            
            <CircuitDivider className="py-4" />
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-foreground">Micro Electro-Mechanical Systems (MEMS)</strong> are tiny integrated devices that combine mechanical and electrical components at the microscale. These devices range from a few micrometers to millimeters in size and are found everywhere in modern technology.
              </p>
              <p className="leading-relaxed">
                From the accelerometer in your smartphone that detects motion, to pressure sensors in cars, to the tiny mirrors that power digital projectors—MEMS technology is revolutionizing industries from healthcare to aerospace.
              </p>
              <p className="leading-relaxed">
                At Illinois MicroTech, we bring this fascinating field to undergraduates through hands-on workshops, cleanroom tours, and our own fabrication projects through HackerFab.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-lg border border-border bg-card p-4 text-center">
                <div className="font-serif text-2xl font-bold text-primary">3+</div>
                <div className="mt-1 text-xs text-muted-foreground">Years Active</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center">
                <div className="font-serif text-2xl font-bold text-primary">50+</div>
                <div className="mt-1 text-xs text-muted-foreground">Members</div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 text-center">
                <div className="font-serif text-2xl font-bold text-primary">4</div>
                <div className="mt-1 text-xs text-muted-foreground">EOH Projects</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary/20">
              <Image
                src="/images/exec-placeholder.png"
                alt="Illinois MicroTech team members"
                width={600}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative circuit corner */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-2xl border-b-2 border-r-2 border-primary/30" />
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-secondary/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
