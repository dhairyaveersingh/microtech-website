import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { OverviewSection } from "@/components/home/overview-section"
import { ActivitiesSection } from "@/components/home/activities-section"
import { NewsSection } from "@/components/home/news-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <OverviewSection />
        <ActivitiesSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
