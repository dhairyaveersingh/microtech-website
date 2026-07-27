import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"
import Link from "next/link"
import { notFound } from "next/navigation"
import { newsItems, tagColors } from "@/lib/news"

export function generateStaticParams() {
  return newsItems.map((post) => ({ slug: post.slug }))
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = newsItems.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Back link */}
            <Link
              href="/news"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tagColors[tag] || "bg-muted text-muted-foreground"}`}
                >
                  <span className="mr-1.5 h-1 w-1 rounded-full bg-current opacity-60" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <time className="mt-4 block text-muted-foreground">
              {post.formattedDate}
            </time>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <CircuitDivider className="py-4" />

            {/* Render content - in production this would use MDX */}
            <article className="prose prose-neutral max-w-none">
              {post.content.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="mt-8 font-serif text-xl font-semibold text-foreground">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter(line => line.startsWith("- "))
                  return (
                    <ul key={index} className="mt-4 space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
                        </li>
                      ))}
                    </ul>
                  )
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="mt-4 text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </article>

            <CircuitDivider className="py-8" />

            {/* CTA */}
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <h3 className="font-serif text-lg font-semibold text-foreground">
                Interested in this event?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Join our Discord for the latest updates and to RSVP for events.
              </p>
              <a
                href="https://discord.com/invite/cY7bGFFz9q"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
