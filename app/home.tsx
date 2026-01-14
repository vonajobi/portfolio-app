
"use client"
import { useEffect, useState } from 'react'
import useStore  from './components/helpers/helper'
import dynamic from 'next/dynamic'
import Dom from './components/layout/dom'
import { usePathname } from 'next/navigation'
import { HomepageOverlay } from './components/dom/homeIndex'


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
     {/* <Loader/> */}
      <HomepageOverlay/>
      </Dom>
        <LCanvas>
          <SceneIndex/>
        </LCanvas>
      </>
  )
}

 export default Home
// "use client"
// import { useState } from 'react'
// import dynamic from 'next/dynamic'
// import { Loader } from './components/dom/loader'
// import { HomepageOverlay } from './components/dom/homeIndex'
// import React from 'react'

// const LCanvas = dynamic(() => import('./components/canvas/canvas'), { ssr: false })
// const SceneIndex = dynamic(() => import('./components/canvas/scene'), { ssr: false })

// const Home = () => {
//   const [loading, setLoading] = useState(true)

//   return (
//     <>
//     <div className="z-20 absolute top-0 left-0 pointer-events-none w-screen h-screen mx-auto overflow-hidden sm:px-1 lg:px-2 dom ">
//       <HomepageOverlay />
//       {loading && (
//         <div className="">
//           <Loader setUnmount={() => setLoading(false)} />
//         </div>
//       )}
//     </div>
//       <LCanvas>
//         <SceneIndex onReady={() => setLoading(false)} />
//       </LCanvas>
//     </>
//   )
// }

// export default Home

