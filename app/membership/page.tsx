import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CircuitDivider } from "@/components/circuit-divider"
import Image from "next/image"
import leadershipData from "@/content/data/leadership.json"

export default function MembershipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Membership & Leadership
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the people who make Illinois MicroTech possible
              </p>
            </div>
          </div>
        </section>

        {/* Executive Boards */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
              Executive Board
            </h2>
            <p className="mt-2 text-muted-foreground">
              Current and past executive board members from Fall 2023 to Spring 2026
            </p>

            <CircuitDivider />

            <div className="space-y-16">
              {leadershipData.execBoards.map((board) => (
                <div key={board.semester}>
                  <h3 className="mb-6 flex items-center gap-3 font-serif text-xl font-semibold text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {board.semester.split(" ")[0][0]}
                    </span>
                    {board.semester}
                  </h3>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {board.members.map((member) => (
                      <div
                        key={`${board.semester}-${member.role}`}
                        className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg"
                      >
                        <div className="aspect-square overflow-hidden bg-secondary/20">
                          <Image
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-foreground">{member.name}</h4>
                          <p className="text-sm text-primary">{member.role}</p>
                        </div>
                        {/* Circuit corner decoration */}
                        <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-primary/0 transition-colors group-hover:border-primary/30" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HackerFab Team */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/30 text-secondary-foreground">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <rect x="9" y="9" width="6" height="6" />
                  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                HackerFab Team
              </h2>
            </div>

            <CircuitDivider />

            {/* Project Leads */}
            <div className="mb-12">
              <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                Project Leads
              </h3>
              <div className="flex flex-wrap gap-3">
                {leadershipData.hackerfabTeam.leads.map((lead) => (
                  <span
                    key={lead}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {lead}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Members */}
            <div className="mb-12">
              <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                Current Members
              </h3>
              <div className="flex flex-wrap gap-3">
                {leadershipData.hackerfabTeam.currentMembers.map((member) => (
                  <span
                    key={member}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-secondary" />
                    {member}
                  </span>
                ))}
              </div>
            </div>

            {/* Founding Members */}
            <div className="rounded-xl border border-primary/30 bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                Founding Members
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Special recognition to those who launched the HackerFab initiative at Illinois MicroTech
              </p>
              <div className="flex flex-wrap gap-3">
                {leadershipData.hackerfabTeam.foundingMembers.map((member) => (
                  <span
                    key={member}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-primary/50 bg-primary/5 px-4 py-2 text-sm font-semibold text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EOH Team */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                EOH Team
              </h2>
            </div>

            <CircuitDivider />

            {/* Project Leads */}
            <div className="mb-12">
              <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                Project Leads
              </h3>
              <div className="flex flex-wrap gap-3">
                {leadershipData.eohTeam.leads.map((lead) => (
                  <span
                    key={lead}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    {lead}
                  </span>
                ))}
              </div>
            </div>

            {/* Current Members */}
            <div className="mb-12">
              <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">
                Current Members
              </h3>
              <div className="flex flex-wrap gap-3">
                {leadershipData.eohTeam.currentMembers.map((member) => (
                  <span
                    key={member}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-primary/5 p-8 sm:p-12">
              {/* Circuit decoration */}
              <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                <svg viewBox="0 0 100 100" className="h-full w-full text-primary">
                  <path d="M0 20 H40 V40 H60 V20 H100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M0 50 H30 V70 H70 V50 H100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M0 80 H50 V60 H80 V80 H100" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="40" cy="40" r="4" fill="currentColor" />
                  <circle cx="60" cy="20" r="4" fill="currentColor" />
                  <circle cx="70" cy="70" r="4" fill="currentColor" />
                </svg>
              </div>

              <div className="relative">
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Want to Join Our Team?
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  Illinois MicroTech welcomes all UIUC students interested in MEMS and microtechnology. 
                  Join our Discord to stay updated on meetings, events, and opportunities to get involved.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://discord.com/invite/cY7bGFFz9q"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join our Discord
                  </a>
                  <a
                    href="/portal"
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
