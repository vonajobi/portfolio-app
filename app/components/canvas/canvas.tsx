// the app.ts has the import canvas file which is necessary for the 3d model to show up
// it also has the dom file
//the dom file sets the zindex for the nav bar i believe
// indext.tsx imports sceneInedx and  makes it a prop for the canvas
//index.ts is used


import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stats } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import SceneIndex from './scene'
import React, {ReactNode} from 'react'
import useStore from '../helpers/helper'



const LControl = () => {
const dom = useRef<HTMLElement | null>(null);
const control = useRef(null);


  useEffect(() => {
    if (control.current && dom && dom.current) {
      const domElement = dom.current
      const style = domElement.style as any
      const originalTouchAction = style['touch-action']
      style['touch-action'] = 'none'
  
      return () => {
        style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])
  // @ts-ignore
  return <OrbitControls ref={control} domElement={dom.current} />
}
const LCanvas = ({ children }: {children : ReactNode}) => {
  const dom = useStore((state) => state.dom) || React.createRef<HTMLDivElement>();  
  const path = usePathname()
  
   
    return (
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          zIndex: `${path !== './components/projects' ? 9 : 11}`,
        }}
        onCreated={(state) => {
          if (dom && dom.current && state.events.connect) {
            state.events.connect(dom.current);
          }
        }}
        shadows
        camera={{ position: [0, 1.5, 14], fov: 50 }}
      >
        {/* <LControl /> */}
        {/* <Stats /> */}
        <Preload all />
        {children}
        
      </Canvas>
    );
  };
  
  export default LCanvas;
  

  