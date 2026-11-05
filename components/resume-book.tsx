"use client"

import { useState } from "react"
import { ArrowLeft, ArrowUpRight, BookOpen, FileText, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import type { Resume } from "@/lib/resumes"
import { ResumePreview } from "@/components/resume-preview"

export function ResumeBook({ resumes }: { resumes: Resume[] }) {
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState<Resume | null>(null)
  const filtered = resumes.filter((resume) =>
    `${resume.name} ${resume.major}`.toLowerCase().includes(query.trim().toLowerCase()),
  )

  return (
    <section aria-labelledby="resume-book-heading" className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-xl bg-primary/10 p-3 text-primary"><BookOpen className="h-6 w-6" aria-hidden="true" /></div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Meet our members</p>
              <h2 id="resume-book-heading" className="mt-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">Student Resume Book</h2>
              <p className="mt-2 max-w-xl text-muted-foreground">Explore the people behind Illinois MicroTech. Browse students by name and major, and view their resumes.</p>
            </div>
          </div>
          <Dialog onOpenChange={() => { setSelected(null); setQuery("") }}>
            <DialogTrigger asChild><Button size="lg" className="shrink-0">Browse Resumes <ArrowUpRight aria-hidden="true" /></Button></DialogTrigger>
            <DialogContent className="flex h-[90dvh] max-h-[900px] w-[94vw] flex-col gap-0 overflow-hidden p-0 sm:max-w-5xl">
              <DialogHeader className="shrink-0 border-b p-6 pr-12 text-left">
                <DialogTitle className="font-serif text-2xl">Student Resume Book</DialogTitle>
                <DialogDescription>Select a student to view their resume.</DialogDescription>
              </DialogHeader>
              <div className="flex min-h-0 flex-1 flex-col sm:flex-row">
                <div className={`${selected ? "hidden sm:flex" : "flex"} min-h-0 flex-col sm:w-72 sm:shrink-0 sm:border-r`}>
                  <div className="shrink-0 p-4">
                    <label htmlFor="resume-search" className="sr-only">Search by name or major</label>
                    <div className="relative">
                      <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                      <input id="resume-search" type="search" placeholder="Search name or major" value={query} onChange={(event) => setQuery(event.target.value)} className="h-10 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                    </div>
                    <p className="mt-3 text-xs text-muted-foreground" role="status">{filtered.length} {filtered.length === 1 ? "student" : "students"}</p>
                  </div>
                  <ul aria-label="Students" className="min-h-0 flex-1 space-y-2 overflow-y-auto px-4 pb-4">
                    {filtered.map((resume) => (
                      <li key={resume.url}>
                        <button type="button" aria-pressed={selected?.url === resume.url} onClick={() => setSelected(resume)} className={`w-full rounded-xl border p-4 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selected?.url === resume.url ? "border-primary bg-primary/10" : "border-border hover:border-primary/50 hover:bg-muted/50"}`}>
                          <span className="block font-semibold text-foreground">{resume.name}</span>
                          <span className="mt-1 block text-sm text-muted-foreground">{resume.major}</span>
                          <span className="mt-3 flex items-center gap-1 text-xs font-medium text-primary">View resume <ArrowUpRight className="h-3 w-3" aria-hidden="true" /></span>
                        </button>
                      </li>
                    ))}
                    {filtered.length === 0 && <li className="py-6 text-sm text-muted-foreground">{resumes.length === 0 ? "Student resumes will appear here soon." : "No students found. Try another name or major."}</li>}
                  </ul>
                </div>
                <div className={`${selected ? "flex" : "hidden sm:flex"} min-h-0 min-w-0 flex-1 flex-col bg-muted/20`}>
                  {selected ? (
                    <>
                      <div className="shrink-0 border-b bg-background p-4">
                        <Button variant="ghost" size="sm" className="mb-2 sm:hidden" onClick={() => setSelected(null)}><ArrowLeft aria-hidden="true" /> Back to students</Button>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div><h3 className="font-semibold">{selected.name}</h3><p className="text-sm text-muted-foreground">{selected.major}</p></div>
                          <Button variant="outline" size="sm" asChild><a href={selected.url} target="_blank" rel="noopener noreferrer">Open PDF <ArrowUpRight aria-hidden="true" /></a></Button>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">If the preview doesn&apos;t display, use Open PDF.</p>
                      </div>
                      <ResumePreview key={selected.url} url={selected.url} name={selected.name} />
                    </>
                  ) : (
                    <div className="flex flex-1 flex-col items-center justify-center p-8 text-center text-muted-foreground">
                      <FileText className="mb-4 h-10 w-10 text-primary/60" aria-hidden="true" />
                      <p className="font-serif text-xl font-semibold text-foreground">Get to know our students</p>
                      <p className="mt-2 max-w-xs text-sm">Choose a name from the directory to read their resume here.</p>
                    </div>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}
