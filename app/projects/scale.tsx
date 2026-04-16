import React, {useRef, useEffect, useState} from 'react'
import {useSpring, animated, to} from '@react-spring/web'
import { useGesture } from '@use-gesture/react'



type ScaleProp = {
    children: React.ReactNode;
  }
const Scale: React.FC<ScaleProp> = ({ children }) => {
// prevents the default browser gestures when the component mounts and cleans up when the component unmounts
    useEffect(() => {
        const preventDefault = (e: Event) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)
    
        return () => {
          document.removeEventListener('gesturestart', preventDefault)
          document.removeEventListener('gesturechange', preventDefault)
        }
      }, [])

    const target = useRef(null)
    const [{scale, zoom}, set] = useSpring(() => ({
        zoom: 0,
        scale:1, 
        config: { mass: 5, tension: 350, friction: 40 },
    }))
    const [hovered, seHovered] = useState(false)

    // binds the gesture to the target element and updates the spring values based on the mouse position
    useGesture({
      onMove: () => {
            set({scale: 1.05})
        },
      onHover: ({ hovering}) => {
          set({scale: 1.05})
          seHovered(hovering ?? false)
      }
    },
    { target: target, eventOptions: { passive: false } }

    )
    
    
  return (
    <animated.div 
      ref = {target}
      className="flex 
                max-w-[500] 
                md:w-[500]
                "
      style={{
          scale
        }}>

          {children}
    </animated.div>
  )
}

export default Scale

