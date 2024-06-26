"use client"
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Dom from './components/layout/dom'
import useStore  from './components/helpers/helper'
import { usePathname } from 'next/navigation'
// import Header from './components/dom/header'
import Index from "./components/dom"
const LCanvas = dynamic(() => import('./components/canvas/canvas'), {
  ssr: false,
})

function App({ pageProps = { title: 'app' } }: { Component: React.ComponentType<any>, pageProps?: any }) {
  const router = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // resesting state based on router
    useStore.setState({ router: null })
    // assume loasing is done after setting state
    setIsLoading(false)
  }, [router])
  // console.log(useStore.getState())
  // Render the Loader until loading is complete

  return (
    <>
    {/* <Header title={pageProps.title}/> */}
      <Dom>
        {/* <Page/> */}
        {/* {router === '/' ? <Page{...pageProps}/>: null} */}
        {<Index{...pageProps}/>}
      </Dom>
      {(Index as any).r3f && <LCanvas>{(Index as any).r3f(pageProps)}</LCanvas>}
      </>
  )
}

 export default App
