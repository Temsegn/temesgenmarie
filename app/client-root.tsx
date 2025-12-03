"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LoadingScreen from "./components/LoadingScreen"
import ThemeProvider from "./components/ThemeProvider"
import GeometricBackground from "./components/GeometricBackground"
import FloatingElements from "./components/FloatingElements"

export default function ClientRoot() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-500 relative overflow-hidden"
          >
            <GeometricBackground />
            <FloatingElements />
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <TechStack />
            <Achievements />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </ThemeProvider>
  )
}
