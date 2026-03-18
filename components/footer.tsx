import Link from "next/link"

const footerLinks = {
  navigation: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/membership", label: "Membership" },
    { href: "/news", label: "News" },
  ],
  resources: [
    { href: "/milestones", label: "Milestones" },
    { href: "/promo", label: "Events" },
    { href: "/portal", label: "Contact" },
  ],
  social: [
    { href: "https://discord.com/invite/cY7bGFFz9q", label: "Discord" },
    { href: "https://www.instagram.com/illinoismicrotech", label: "Instagram" },
    { href: "https://www.linkedin.com/company/illinois-microtech", label: "LinkedIn" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="6" y="6" width="12" height="12" rx="1" />
                  <path d="M6 9h-3M6 12h-3M6 15h-3M18 9h3M18 12h3M18 15h3M9 6v-3M12 6v-3M15 6v-3M9 18v3M12 18v3M15 18v3" />
                </svg>
              </div>
              <span className="font-serif text-lg font-semibold">Illinois MicroTech</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Bringing experiences in MEMS and microtechnology to undergraduates at UIUC.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif font-semibold">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-serif font-semibold">Connect</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Circuit Divider */}
        <div className="mt-8 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <div className="h-px flex-1 bg-gradient-to-r from-primary/50 via-secondary/30 to-transparent" />
          <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/30 to-primary/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            Illinois MicroTech is a Registered Student Organization at the University of Illinois Urbana-Champaign.
          </p>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Illinois MicroTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
