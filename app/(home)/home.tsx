
"use client"
import { useEffect, useState } from 'react'
import useStore  from '../components/helpers/helper'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
// import { DesktopHomepageOverlay } from '../components/dom/desktopHome'
import { MobileHomepageOverlay } from './mobile/mobileHome'
import useIsDesktop from '../components/helpers/mediaQuery'


const LCanvas = dynamic(() => import('../components/canvas/canvas'), {
  ssr: false,
})
const SceneIndex = dynamic(() => import('../components/canvas/scene'), {
  ssr: false,
});




function Home() {
  const router = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  const isDesktop = useIsDesktop()

  useEffect(() => {
    // resesting state based on router
    useStore.setState({ router: null })
    // assume loasing is done after setting state
    setIsLoading(false)
  }, [router])
  
  

  return (
    <>
      {isDesktop ? (
        <>
      {/* <DesktopHomepageOverlay/> */}
          <LCanvas>
            <SceneIndex/>
          </LCanvas>
        </>
      ): 
      (<MobileHomepageOverlay/>)}
      </>
  )
}

 export default Home
