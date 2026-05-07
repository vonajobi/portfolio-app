"use client"

import React from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"

export const Navbar: React.FC = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const category = searchParams.get("category")

  const navItems = [
    {
      text: "#SKETCHBOOK",
      href: "/sketchbook",
    },
  ]

  const projectItems = [
    {
      text: "[DESIGN]",
      value: "design",
      href: "/projects?category=design",
    },
    {
      text: "[WEB DEV]",
      value: "dev",
      href: "/projects?category=dev",
    },
  ]

  const isProjectsPage = pathname.startsWith("/projects")

  return (
    <nav className="absolute 
                    top-0 
                    left-0 
                    right-0 
                    
                    z-20 flex 
                    items-center 
                    justify-between 
                    
                    w-full 
                    px-5 
                    sm:px-10 
                    lg:px-20 
                    pt-5 pb-5 
                    
                    border-b 
                    text-white/75 
                    border-b-white/20 
                    backdrop-blur-sm
                    ">

      {/* HOME */}
      <span className="mix-blend-difference font-bold">
        <Link href="/">HOME</Link>
      </span>

      <ul className="flex text-sm font-light tracking-wider space-x-4 md:space-x-10 font-ubuntu">

        {/* PROJECTS DROPDOWN */}
        <li className="relative group ">

          <Link
            href="/projects"
            className="hover-effect"
          >
            #PROJECTS
          </Link>

          <div className="absolute left-0 mt-2 w-32 bg-black/80 backdrop-blur-sm rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">

            {projectItems.map((item) => (
              <Link
                key={item.value}
                href={item.href}
                className={`block px-4 py-2 text-xs transition-all ${
                  category === item.value
                    ? "text-white bg-white/10"
                    : "text-white/75 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </li>

        {/* OTHER NAV ITEMS */}
        {navItems.map((item) => {

          return (
            <li
              key={item.text}
              className="hover-effect"
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
