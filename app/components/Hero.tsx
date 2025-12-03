"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 lg:pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-4 lg:mb-6"
            >
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm lg:text-base font-medium mb-4 shadow-sm">
                👋 Available for new opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="mb-6 lg:mb-6"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1.2 }}
              >
                <motion.span
                  className="block text-gray-900 dark:text-white mb-2"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                >
                  Hi, I'm
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                >
                  Temesgen
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
                  Marie
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Profile Image - Mobile Only - Better positioned and styled */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              className="lg:hidden flex justify-center mb-8"
            >
              <div className="relative">
                {/* Simplified mobile design - cleaner look */}
                <motion.div
                  className="relative w-48 h-48 sm:w-56 sm:h-56"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Main container with gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-2">
                      {/* Image */}
                      <motion.div
                        className="relative w-full h-full rounded-full overflow-hidden shadow-xl"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                      >
                        <Image
                          src="/images/temesgen-profile.jpg"
                          alt="Temesgen Marie - Backend & Mobile Developer"
                          width={224}
                          height={224}
                          className="w-full h-full object-cover object-center"
                          priority
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Floating elements - simplified and better positioned for mobile */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800"
                  >
                    <span className="text-white font-bold text-xs">JS</span>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800"
                  >
                    <span className="text-white font-bold text-xs">API</span>
                  </motion.div>

                  <motion.div
                    animate={{
                      x: [0, 6, 0],
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 -right-3 w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-md flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-800"
                  >
                    <span className="text-white font-bold text-xs">DB</span>
                  </motion.div>
                </motion.div>

                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mb-6 lg:mb-8"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-3 lg:mb-4">
                Backend & Mobile Developer
              </h2>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Crafting scalable backend architectures and intuitive mobile experiences. Specialized in modern web
                technologies, API development, and cross-platform mobile solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                View My Work
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  <ArrowDown className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
                </motion.div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 lg:px-8 py-3 lg:py-4 text-base lg:text-lg transition-all duration-300 group bg-transparent"
              >
                <Download className="w-4 h-4 lg:w-5 lg:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="flex space-x-3 lg:space-x-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "#", label: "GitHub", color: "hover:bg-gray-100 dark:hover:bg-gray-800" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20" },
                { icon: Mail, href: "#", label: "Email", color: "hover:bg-red-50 dark:hover:bg-red-900/20" },
                {
                  icon: ExternalLink,
                  href: "#",
                  label: "Portfolio",
                  color: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 ${social.color} transition-all duration-300 relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <social.icon className="w-4 h-4 lg:w-5 lg:h-5 relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex order-2 justify-center"
          >
            <div className="relative">
              {/* Outer Glow Ring */}
              <motion.div
                className="absolute -inset-8 lg:-inset-12"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-xl"></div>
              </motion.div>

              {/* Middle Ring */}
              <motion.div
                className="absolute -inset-4 lg:-inset-6 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 15,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Image Container */}
              <motion.div
                className="relative w-96 h-96 xl:w-[28rem] xl:h-[28rem]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Inner Shadow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-3 lg:p-4 shadow-2xl">
                  {/* Image */}
                  <motion.div
                    className="relative w-full h-full rounded-full overflow-hidden"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  >
                    <Image
                      src="/images/temesgen-profile.jpg"
                      alt="Temesgen Marie - Backend & Mobile Developer"
                      width={448}
                      height={448}
                      className="w-full h-full object-cover object-center"
                      priority
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </motion.div>
                </div>

                {/* Floating Tech Badges */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 w-14 h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-800"
                >
                  <span className="text-white font-bold text-sm lg:text-base">JS</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-14 h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-800"
                >
                  <span className="text-white font-bold text-sm lg:text-base">API</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 -right-6 lg:-right-8 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-800"
                >
                  <span className="text-white font-bold text-xs lg:text-sm">DB</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/4 -left-6 lg:-left-8 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl border-2 border-white dark:border-gray-800"
                >
                  <span className="text-white font-bold text-xs lg:text-sm">UI</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-2 lg:h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-1.5 lg:mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
