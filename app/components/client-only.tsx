"use client"

import { type ReactNode, useEffect, useState } from "react"

/**
 * Renders children only on the client (after mount).
 * Prevents SSR from executing browser-only code and
 * avoids null-reference errors for DOM/event listeners.
 */
export default function ClientOnly({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return <>{children}</>
}
