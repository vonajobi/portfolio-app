import React, { CSSProperties } from 'react'
import {useEffect, useState} from 'react' 
import { ClimbingBoxLoader } from 'react-spinners'
import { useTransition } from 'react'
import { animated, useChain, useSpring, useSpringRef } from '@react-spring/web'

interface LoaderProps {
  setUnmount: React.Dispatch<React.SetStateAction<boolean>>
  text?: string
}
// react spinner
// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

export const Loader: React.FC<LoaderProps> = ({ setUnmount }) => {
  const [color] = useState('#CD5C5C')

  const bgSpringRef = useSpringRef()
  const bgSpring = useSpring({
    ref: bgSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 800 },
    delay: 500,
    onResolve: () => setUnmount(true),
  })
  const textSpringRef = useSpringRef()
  const textSpring1 = useSpring({
    ref: textSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 600,
  })


  useChain([textSpringRef, bgSpringRef])


  return (
    <animated.div
      style={bgSpring}
      className='absolute top-0 left-0 z-30 flex flex-col gap-8 items-center justify-center w-screen h-screen bg-black'>
          
              <ClimbingBoxLoader color={color} size={18}/>
            <animated.span
              style={textSpring1}
              className='relative text-sm font-bold text-[#FFFFF] bottom-8'>
              Victoria Onajobi | Designer
            </animated.span>         
    
    </animated.div>
  );
};

export const CustomLoader: React.FC<LoaderProps> = ({ setUnmount, text }) => {
  const bgSpringRef = useSpringRef()
  const bgSpring = useSpring({
    ref: bgSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 400 },
    delay: 300,
    onResolve: () => setUnmount(true),
  })

  const textSpringRef = useSpringRef()
  const textSpring1 = useSpring({
    ref: textSpringRef,
    from: { opacity: 1 },
    to: { opacity: 0 },
    delay: 800,
  })

  useChain([textSpringRef, bgSpringRef])

  return (
    <animated.div
      style={bgSpring}
      className='absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black z-[19]'
    >
      <animated.span
        style={textSpring1}
        className='relative text-3xl text-white  bottom-8'
      >
        {text}
      </animated.span>
    </animated.div>
  )
  
}
