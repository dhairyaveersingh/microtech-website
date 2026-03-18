import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CircuitDivider } from "@/components/circuit-divider"

// This would typically be fetched from the markdown files
const latestNews = [
  {
    slug: "illinois-union-fundraiser",
    title: "Illinois Union Fundraiser",
    date: "February 15, 2026",
    excerpt: "Join us for our Illinois Union fundraiser event! Support Illinois MicroTech while enjoying great food and company.",
    tags: ["Social", "Fundraiser"],
    image: "/images/exec-placeholder.png",
  },
  {
    slug: "mnms-cleanroom-tours",
    title: "MNMS Cleanroom Tours",
    date: "January 20, 2026",
    excerpt: "Experience the cutting-edge cleanroom facilities at the Micro and Nanotechnology Laboratory with Illinois MicroTech.",
    tags: ["Tour", "Workshop"],
    image: "/images/exec-placeholder.png",
  },
]

export function NewsSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Latest News
            </h2>
            <p className="mt-2 text-muted-foreground">
              Stay updated with our recent events and announcements
            </p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link href="/news">View All News</Link>
          </Button>
        </div>

        <CircuitDivider />

        <div className="grid gap-6 sm:grid-cols-2">
          {latestNews.map((post) => (
            <Link
              key={post.slug}
              href={`/news/${post.slug}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
            >
              {/* Decorative circuit line */}
              <div className="absolute left-0 top-0 z-10 h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 transition-opacity group-hover:opacity-100" />

              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-muted">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-muted-foreground/50" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-secondary/30 px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      <span className="mr-1 h-1 w-1 rounded-full bg-primary" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <time className="text-xs text-muted-foreground">
                    {post.date}
                  </time>
                  <span className="text-sm font-medium text-primary group-hover:underline">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
