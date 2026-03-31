import React from 'react'
import {useEffect, useState, Dispatch, SetStateAction} from 'react' 
import { ClimbingBoxLoader, PropagateLoader } from 'react-spinners'
import { animated, useChain, useSpring, useSpringRef } from '@react-spring/web'

interface LoaderProps {
  setUnmount: Dispatch<SetStateAction<boolean>>
}


export const Loader: React.FC<LoaderProps> = ({ setUnmount }) => {
  const [color] = useState('#CD5C5C')

  const bgSpringRef = useSpringRef()
  const bgSpring = useSpring({
    ref: bgSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 400 },
    onResolve: () => setUnmount(true),
    delay: 200
  })
  const textSpringRef = useSpringRef()
  const textSpring1 = useSpring({
    ref: textSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 900 },
    delay: 600
  })


  useChain([textSpringRef, bgSpringRef])

  return (
    <animated.div
      style={bgSpring}
      className='absolute top-0 left-0 z-30 flex flex-col gap-6 items-center justify-center w-screen h-screen bg-black'>
          
              {/* <ClimbingBoxLoader color={color} size={18}/> */}
              <PropagateLoader color={color} size={15} speedMultiplier={0.6}/>
            <animated.span
              style={textSpring1}
              className='relative text-sm font-bold text-white'>
              Victoria Onajobi | Creative
            </animated.span>         
    
    </animated.div> 
  )
};
