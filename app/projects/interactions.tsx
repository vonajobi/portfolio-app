import React, {useRef, useEffect} from 'react'
import {useSpring, animated, to} from '@react-spring/web'
import { useGesture } from '@use-gesture/react'

// calculates the rotation based on the position of the mouse
const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 50
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 50

type InteractionsProps = {
    children: React.ReactNode;
  }
const Interactions: React.FC<InteractionsProps> = ({ children }) => {
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
    const [{x, y,rotateX, rotateY, scale, zoom}, set] = useSpring(() => ({
        x:0,
        y:0, 
        rotateX: 0, 
        rotateY: 0,
        zoom: 0,
        scale:1, 
        config: { mass: 5, tension: 350, friction: 40 },
    }))

    // binds the gesture to the target element and updates the spring values based on the mouse position
    useGesture({
        onMove: ({ xy: [px, py] }) => {
            set({rotateX: calcX(py, y.get()), rotateY: calcY(px, y.get()), scale: 1.1})
        },
        onHover: ({ hovering}) => {
            !hovering && set({rotateX:0, rotateY:0, scale: 1})
        }
    },
    { target: target, eventOptions: { passive: false } }

    )
    
    
  return (
    <animated.div ref = {target}
    
    style={{
        transform: 'perspective(800px)',
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
      //  backgroundColor: 'blue',
        rotateY,
        minWidth:'475px',
        height: '100%',
      }}>
        {children}
    </animated.div>
  )
}

export default Interactions

