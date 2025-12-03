"use client"

import { X } from "lucide-react"

export default function FloatingCards() {
  const cards = [
    { text: "Services", position: "top-32 right-80", delay: "0s" },
    { text: "Benefits", position: "top-48 right-96", delay: "0.5s" },
    { text: "Partnership?", position: "top-64 right-64", delay: "1s" },
    { text: "Questions?", position: "top-80 right-80", delay: "1.5s" },
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute ${card.position} hidden lg:block animate-float`}
          style={{ animationDelay: card.delay }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-32 text-center">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-sm font-medium">{card.text}</span>
              <X className="w-4 h-4 text-white/60" />
            </div>
          </div>
        </div>
      ))}

      {/* Additional floating X symbols */}
      <div className="absolute top-40 right-48 hidden lg:block animate-float" style={{ animationDelay: "2s" }}>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3">
          <X className="w-6 h-6 text-white/40" />
        </div>
      </div>

      <div className="absolute top-72 right-40 hidden lg:block animate-float" style={{ animationDelay: "2.5s" }}>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-3">
          <X className="w-6 h-6 text-white/40" />
        </div>
      </div>
    </div>
  )
}
