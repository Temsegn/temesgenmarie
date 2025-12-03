import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ThemeProvider from "./components/ThemeProvider"

export default function Page() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
