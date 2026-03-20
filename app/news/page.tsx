import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"
import Link from "next/link"
import Image from "next/image"

// This data would typically be read from markdown files
// For now, we're using static data that mirrors the content structure
const newsItems = [
  {
    slug: "test",
    title: "test",
    date: "2026-02-15",
    formattedDate: "March 20, 2026",
    tags: ["Social", "Fundraiser"],
    excerpt: "abcd.",
    image: "/images/news/sp26 union fundraiser.png",
  },
  {
    slug: "illinois-union-fundraiser",
    title: "Illinois Union Fundraiser",
    date: "2026-02-15",
    formattedDate: "February 15, 2026",
    tags: ["Social", "Fundraiser"],
    excerpt: "Join us for our Illinois Union fundraiser event! Support Illinois MicroTech while enjoying great food and company.",
    image: "/images/news/sp26 union fundraiser.png",
  }
  {
    slug: "mnms-cleanroom-tours",
    title: "MNMS Cleanroom Tours",
    date: "2026-01-20",
    formattedDate: "January 20, 2026",
    tags: ["Tour", "Workshop"],
    excerpt: "Experience the cutting-edge cleanroom facilities at the Micro and Nanotechnology Laboratory with Illinois MicroTech.",
    image: "/images/news/sp26 cleanroom.png",
  },
  {
    slug: "grad-panel",
    title: "Graduate Student Panel",
    date: "2025-11-10",
    formattedDate: "November 10, 2025",
    tags: ["Panel", "Workshop"],
    excerpt: "Learn from UIUC graduate students about research opportunities in MEMS and microtechnology.",
    image: "/images/news/sp26 grad panel.png",
  },
]

const tagColors: Record<string, string> = {
  Social: "bg-primary/10 text-primary",
  Fundraiser: "bg-secondary/30 text-secondary-foreground",
  Tour: "bg-primary/10 text-primary",
  Workshop: "bg-secondary/30 text-secondary-foreground",
  Panel: "bg-primary/10 text-primary",
}

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                News & Events
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Stay updated with our latest events, talks, workshops, and announcements
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                All Posts
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {newsItems.length} articles
              </div>
            </div>

            <CircuitDivider className="py-4" />

            <div className="space-y-6">
              {newsItems.map((post, index) => (
                <article key={post.slug}>
                  <Link
                    href={`/news/${post.slug}`}
                    className="group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row">
                      {/* Image */}
                      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-muted sm:aspect-square sm:w-48 md:w-56">
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

                      {/* Content */}
                      <div className="flex-1 p-6 sm:p-8">
                        <div className="flex flex-wrap items-center gap-3">
                          {/* Tags */}
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
                            >
                              <span className="mr-1.5 h-1 w-1 rounded-full bg-current opacity-60" />
                              {tag}
                            </span>
                          ))}
                          
                          {/* Date */}
                          <time className="text-sm text-muted-foreground">
                            {post.formattedDate}
                          </time>
                        </div>

                        <h3 className="mt-4 font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                          {post.title}
                        </h3>

                        <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                          Read full article
                          <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Circuit trace decoration at bottom */}
                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>

                  {/* Connecting line between posts */}
                  {index < newsItems.length - 1 && (
                    <div className="mx-auto mt-6 flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-border" />
                      <div className="h-2 w-2 rounded-full bg-secondary/50" />
                      <div className="h-px w-8 bg-border" />
                    </div>
                  )}
                </article>
              ))}
            </div>

            {/* Info about adding posts */}
            <div className="mt-12 rounded-xl border border-dashed border-border bg-muted/30 p-6 text-center">
              <svg viewBox="0 0 24 24" className="mx-auto h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              <h3 className="mt-4 font-serif font-semibold text-foreground">
                Adding New Posts
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Club officers can add new posts by creating Markdown files in the{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">/content/news/</code>{" "}
                folder and pushing to GitHub.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
