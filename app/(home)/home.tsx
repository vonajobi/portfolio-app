
"use client"
import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { MobileHomepageOverlay } from './mobile/mobileHome'
import useIsDesktop from '../components/helpers/mediaQuery'
import DesktopPage from './desktop/desktopHome'


const LCanvas = dynamic(() => import('./desktop/canvas/canvas'), {
  ssr: false,
})





function Home() {

  const isDesktop = useIsDesktop()
  return (
    <>
      {isDesktop ? (
        <DesktopPage/>
      ): 
      (<MobileHomepageOverlay/>)}
    </>
  )
}

 export default Home
