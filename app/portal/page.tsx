import { getResumes } from "@/lib/resumes"
import PortalPage from "./portal-client"

export default function ContactPage() {
  return <PortalPage resumes={getResumes()} />
}
