export type NewsItem = {
  slug: string
  title: string
  date: string
  formattedDate: string
  tags: string[]
  excerpt: string
  image?: string
  content: string
}

// Single source of truth for all news posts.
// To add a new post, prepend an entry to this array (newest first).
export const newsItems: NewsItem[] = [
  {
    slug: "illinois-union-fundraiser",
    title: "Illinois Union Fundraiser",
    date: "2026-02-15",
    formattedDate: "February 15, 2026",
    tags: ["Social", "Fundraiser"],
    excerpt:
      "Join us for our Illinois Union fundraiser event! Support Illinois MicroTech while enjoying great food and company.",
    image: "/images/news/sp26 union fundraiser.png",
    content: `
Join Illinois MicroTech for our exciting fundraiser at the Illinois Union! This is a great opportunity to support our club while connecting with fellow members and the broader UIUC community.

## Event Details

- **Date:** February 15, 2026
- **Location:** Illinois Union
- **Time:** 6:00 PM - 9:00 PM

All proceeds go towards funding our HackerFab equipment, cleanroom tour events, and educational workshops. We hope to see you there!
    `,
  },
  {
    slug: "mnms-cleanroom-tours",
    title: "MNMS Cleanroom Tours",
    date: "2026-01-20",
    formattedDate: "January 20, 2026",
    tags: ["Tour", "Workshop"],
    excerpt:
      "Experience the cutting-edge cleanroom facilities at the Micro and Nanotechnology Laboratory with Illinois MicroTech.",
    image: "/images/news/sp26 cleanroom.png",
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
  {
    slug: "grad-panel",
    title: "Graduate Student Panel",
    date: "2025-11-10",
    formattedDate: "November 10, 2025",
    tags: ["Panel", "Workshop"],
    excerpt:
      "Learn from UIUC graduate students about research opportunities in MEMS and microtechnology.",
    image: "/images/news/sp26 grad panel.png",
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
]

export const tagColors: Record<string, string> = {
  Social: "bg-primary/10 text-primary",
  Fundraiser: "bg-secondary/30 text-secondary-foreground",
  Tour: "bg-primary/10 text-primary",
  Workshop: "bg-secondary/30 text-secondary-foreground",
  Panel: "bg-primary/10 text-primary",
}
