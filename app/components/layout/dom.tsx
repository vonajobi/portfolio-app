import { useEffect, useRef, useState } from 'react'
import useStore from '../helpers/helper'
import { Loader } from '../dom/loader'
import {usePathname} from 'next/navigation'
import { Navbar } from '../dom/navBar'

const Dom = ({ children } :{ children: React.ReactNode} ) => {
  const ref = useRef(null)
  useEffect(() => {
  useStore.setState({ dom: ref.current })
  }, [])

  const [unmount, setUnmount] = useState<boolean>(false)
  const path =  usePathname();
  console.log(setUnmount)

  // sets the z-index of the dom element to 10 if the path is ./components/projects
  const [zIndex, setZIndex] = useState('z-10')
  useEffect(() => {
    // Set the z-index based on the path and unmount state
    if (path === './components/projects' && unmount) {
      setZIndex('z-10')
    } else if (path !== '/') {
      setZIndex('z-12')
    } else {
      setZIndex('z-10')
    }
  }, [path, unmount]) // so necessary unless the dom will not unmout and set to true
  //updates whenever the path or unmount changes


  return (
    <>
    {/* <Navbar/> */}
      <div
        className={`${zIndex}  absolute top-0 left-0 pointer-events-none w-screen h-screen mx-auto overflow-hidden sm:px-1 lg:px-2 dom`}
        ref={ref}
      >
        
        {!unmount && path === '/' ? <Loader setUnmount={setUnmount} /> : null}
        {children}
      </div>
    </>
  )
}

export default Dom
