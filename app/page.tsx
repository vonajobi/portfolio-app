"use client"
import { useEffect, useState } from 'react'
import useStore  from './components/helpers/helper'
import dynamic from 'next/dynamic'
import Dom from './components/layout/dom'
import { usePathname } from 'next/navigation'
import Index from './components/dom'
import React from 'react'
import Header from './components/dom/header'

const LCanvas = dynamic(() => import('./components/canvas/canvas'), {
  ssr: false,
})



function HomePage() {
  const router = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  // const windowWidth = useState(window.innerWidth)  
  // const windowHeight = useState(window.innerHeight)  

  useEffect(() => {
    // resesting state based on router
    useStore.setState({ router: null })
    // assume loasing is done after setting state
    setIsLoading(false)
  }, [router])
  // console.log(useStore.getState())
  // Render the Loader until loading is complete
  console.log("Index:", Index.r3f);
  

  return (
    <>
    <Header title={ 'Victoria&apos;s Portfolio - Home Page' }/>
     <Dom>
      <Index/>
      </Dom>
      <LCanvas>
        {Index?.r3f && <Index.r3f />}
      </LCanvas>
   
      </>
  )
}

 export default HomePage
