
"use client"
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { MobileHomepageOverlay } from './mobile/mobileHome'
import useIsDesktop from '../components/helpers/mediaQuery'
import DesktopPage from './desktop/desktopHome'






function Home() {
  const router = usePathname()
  const [isLoading, setIsLoading] = useState(true)

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
