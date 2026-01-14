'use client'
import { useState, useEffect, useRef } from 'react'
import { Loader } from '../dom/loader'
import { usePathname } from 'next/navigation'
import React from 'react'

interface DomProps {
  children: React.ReactNode
}

const Dom = ({ children }: DomProps) => {
  const path = usePathname()
  const [loading, setLoading] = useState(true)
  const containerRef = useRef(null)

  // Reset loader whenever we navigate to home
  useEffect(() => {
    if (path === '/') setLoading(true)
  }, [path])

  return (
    <div
      ref={containerRef}
      className="z-20 absolute top-0 left-0 pointer-events-none w-screen h-screen mx-auto overflow-hidden sm:px-1 lg:px-2 dom"
    >
      {loading && path === '/' && <Loader setUnmount={() => setLoading(false)} />}

      {children}
    </div>
  )
}

export default Dom

