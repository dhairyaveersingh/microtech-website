"use client"

import { useEffect, useRef, useState } from "react"

export function ResumePreview({ url, name }: { url: string; name: string }) {
  const container = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState("Loading resume…")

  useEffect(() => {
    let cancelled = false
    let destroy: (() => void) | undefined
    const target = container.current!
    target.replaceChildren()
    setStatus("Loading resume…")

    async function render() {
      try {
        const pdfjs = await import("pdfjs-dist")
        if (cancelled) return
        pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString()
        const loading = pdfjs.getDocument({ url })
        destroy = () => { void loading.destroy() }
        const pdf = await loading.promise
        for (let number = 1; number <= pdf.numPages; number++) {
          if (cancelled) return
          const page = await pdf.getPage(number)
          if (cancelled) return
          const canvas = document.createElement("canvas")
          const viewport = page.getViewport({ scale: 1.6 })
          canvas.width = Math.ceil(viewport.width)
          canvas.height = Math.ceil(viewport.height)
          canvas.className = "mb-4 block h-auto w-full bg-white shadow-sm"
          canvas.setAttribute("role", "img")
          canvas.setAttribute("aria-label", `${name}'s resume, page ${number} of ${pdf.numPages}. Use Open PDF for the original document.`)
          await page.render({ canvas, viewport }).promise
          if (cancelled) return
          target.appendChild(canvas)
        }
        if (!cancelled) setStatus("")
      } catch {
        if (!cancelled) setStatus("The preview could not load. Use Open PDF above to read the resume.")
      }
    }
    void render()
    return () => { cancelled = true; destroy?.(); target.replaceChildren() }
  }, [url, name])

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4" role="region" aria-label={`${name}'s resume preview`} tabIndex={0}>
      {status && <p role="status" className="p-4 text-sm text-muted-foreground">{status}</p>}
      <div ref={container} />
    </div>
  )
}
