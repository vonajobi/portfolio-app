
"use client"
import { useEffect, useState } from 'react'
import useStore  from './components/helpers/helper'
import dynamic from 'next/dynamic'
import Dom from './components/layout/dom'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HomepageOverlay } from './components/dom/homeIndex'
// import HomePage from './components/dom/home'


const LCanvas = dynamic(() => import('./components/canvas/canvas'), {
  ssr: false,
})
const SceneIndex = dynamic(() => import('./components/canvas/scene'), {
  ssr: false,
});




function Home() {
  const router = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // resesting state based on router
    useStore.setState({ router: null })
    // assume loasing is done after setting state
    setIsLoading(false)
  }, [router])
  
  

  return (
    <>
     <Dom>
      <HomepageOverlay/>
      </Dom>
        <LCanvas>
          <SceneIndex/>
        </LCanvas>
      </>
  )
}

 export default Home
