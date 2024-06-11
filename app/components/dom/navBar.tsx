"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import useStore from '../helpers/helper'

export const Navbar: React.FC = ({}) => {
  const router = usePathname()
  const [active] = useState(router)

  const navItems = [
    // {
    //   text: 'HOME',
    //   path: '/',
    // },
    {
      text: 'PROJECTS',
      path: '../projects',
    },
  ]

  return (
    <nav className='absolute top-0 left-0 right-0 z-20 flex items-center justify-between w-full px-5 pt-5 pb-1 border-b sm:px-10 lg:px-20 text-white/75 border-b-white/20'>
      <span className='mix-blend-difference font-bold' >
        <Link href='/'>
          HOME
        </Link>
      </span>

      <ul className='flex text-sm font-light tracking-wider space-x-4  md:space-x-10 font-ubuntu [&>*]:cursor-pointer [&>*]:leading-none [&>*:hover]:text-white [&>*]:transition-all'>
        {navItems.map((item) => {
          const { text, path } = item

          return (
            <li
              key={text}
              
              className={`${
                active === path ? 'text-white' : 'text-white/75'
              } hover-effect`}
            >
              <Link href={path}>
              {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
