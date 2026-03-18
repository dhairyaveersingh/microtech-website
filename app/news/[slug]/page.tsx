import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"
import Link from "next/link"
import { notFound } from "next/navigation"

// This data would typically be read from markdown files
const newsData: Record<string, {
  title: string
  date: string
  formattedDate: string
  tags: string[]
  content: string
}> = {
  "illinois-union-fundraiser": {
    title: "Illinois Union Fundraiser",
    date: "2026-02-15",
    formattedDate: "February 15, 2026",
    tags: ["Social", "Fundraiser"],
    content: `
Join Illinois MicroTech for our exciting fundraiser at the Illinois Union! This is a great opportunity to support our club while connecting with fellow members and the broader UIUC community.

## Event Details

- **Date:** February 15, 2026
- **Location:** Illinois Union
- **Time:** 6:00 PM - 9:00 PM

All proceeds go towards funding our HackerFab equipment, cleanroom tour events, and educational workshops. We hope to see you there!
    `,
  },
  "mnms-cleanroom-tours": {
    title: "MNMS Cleanroom Tours",
    date: "2026-01-20",
    formattedDate: "January 20, 2026",
    tags: ["Tour", "Workshop"],
    content: `
Illinois MicroTech is excited to offer exclusive cleanroom tours at the Micro and Nanotechnology Laboratory (MNMS) facility on campus!

## What to Expect

During the tour, you'll get to:

- See state-of-the-art fabrication equipment in action
- Learn about the processes used to create microelectromechanical systems
- Understand cleanroom protocols and why they're essential
- Meet graduate students and researchers working on cutting-edge projects

## How to Sign Up

Tours are limited to small groups to ensure an optimal experience. Sign up through our Discord server or contact us via email to reserve your spot.

These tours are one of our most popular events - don't miss out!
    `,
  },
  "grad-panel": {
    title: "Graduate Student Panel",
    date: "2025-11-10",
    formattedDate: "November 10, 2025",
    tags: ["Panel", "Workshop"],
    content: `
Join us for an insightful panel discussion with UIUC graduate students working in MEMS, microfabrication, and related fields!

## Panel Highlights

Our distinguished panelists will share:

- Their journey from undergrad to graduate research
- Current research projects in microtechnology
- Tips for getting involved in research as an undergraduate
- Career paths in the semiconductor and MEMS industries

## Q&A Session

After the panel presentations, there will be an extended Q&A session where you can ask questions about:

- Graduate school applications
- Research opportunities at UIUC
- Industry vs. academia career paths
- Specific technical topics in MEMS

This is a fantastic networking opportunity - come with questions!
    `,
  },
}

const tagColors: Record<string, string> = {
  Social: "bg-primary/10 text-primary",
  Fundraiser: "bg-secondary/30 text-secondary-foreground",
  Tour: "bg-primary/10 text-primary",
  Workshop: "bg-secondary/30 text-secondary-foreground",
  Panel: "bg-primary/10 text-primary",
}

export function generateStaticParams() {
  return Object.keys(newsData).map((slug) => ({ slug }))
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = newsData[slug]

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
