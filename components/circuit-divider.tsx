interface CircuitDividerProps {
  className?: string
}

export function CircuitDivider({ className = "" }: CircuitDividerProps) {
  return (
    <div className={`flex items-center gap-2 py-8 ${className}`}>
      <div className="h-2 w-2 rounded-full bg-primary" />
      <div className="h-px flex-1 bg-gradient-to-r from-primary via-primary/30 to-transparent" />
      <div className="relative">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <path d="M7 10h-4M7 14h-4M17 10h4M17 14h4M10 7v-4M14 7v-4M10 17v4M14 17v4" />
        </svg>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/30 to-primary" />
      <div className="h-2 w-2 rounded-full bg-primary" />
    </div>
  )
}

export function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dot grid pattern */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      
      {/* Circuit traces */}
      <svg className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          d="M0 20 H30 V40 H60 V30 H100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          className="text-primary"
        />
        <path
          d="M0 60 H20 V80 H50 V70 H80 V90 H100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
          className="text-secondary"
        />
        <path
          d="M0 40 H10 V50 H40 V45 H70 V55 H100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
          className="text-primary"
        />
        {/* Circuit nodes */}
        <circle cx="30" cy="40" r="0.8" className="fill-primary" />
        <circle cx="60" cy="30" r="0.8" className="fill-secondary" />
        <circle cx="50" cy="70" r="0.8" className="fill-primary" />
        <circle cx="80" cy="90" r="0.8" className="fill-secondary" />
      </svg>
    </div>
  )
}
