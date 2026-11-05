import { readdirSync } from "node:fs"
import path from "node:path"

export type Resume = { name: string; major: string; url: string }

// Each uploaded PDF is its own directory entry: Student Name--Major.pdf.
// Read on the server during the site build; no separate roster to maintain.
export function getResumes(): Resume[] {
  return readdirSync(path.join(process.cwd(), "public", "resumes"), { withFileTypes: true })
    .filter((file) => file.isFile() && /\.pdf$/i.test(file.name))
    .map((file) => {
      const parts = file.name.replace(/\.pdf$/i, "").split("--")
      if (parts.length !== 2 || parts.some((part) => !part.trim())) {
        throw new Error(`Resume "${file.name}" must be named "Student Name--Major.pdf". See public/resumes/README.md.`)
      }
      return { name: parts[0].trim(), major: parts[1].trim(), url: `/resumes/${encodeURIComponent(file.name)}` }
    })
    .sort((a, b) => a.name.localeCompare(b.name, "en") || a.major.localeCompare(b.major, "en"))
}
