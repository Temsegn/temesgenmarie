import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import ExperienceTimeline from "./components/ExperienceTimeline"
import ProjectsGrid from "./components/ProjectsGrid"
import SkillsGrid from "./components/SkillsGrid"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <ExperienceTimeline />
        <ProjectsGrid />
        <SkillsGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
