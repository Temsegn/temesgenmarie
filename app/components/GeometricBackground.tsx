"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function GeometricBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Skip during SSR or if window is not available
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      if (e && e.clientX !== undefined && e.clientY !== undefined) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    // Add null check for window
    if (window && window.addEventListener) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (window && window.removeEventListener) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-500/30 rotate-45"
        animate={{
          rotate: [45, 135, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-20 w-24 h-24"
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,90 10,90" fill="none" stroke="url(#triangleGradient)" strokeWidth="2" />
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full border-2 border-purple-500/40"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-pink-400/20 to-orange-400/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
