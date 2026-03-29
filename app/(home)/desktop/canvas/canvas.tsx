import { Canvas, useFrame } from '@react-three/fiber'
import { memo, FC, useEffect, useRef, useState, useCallback, Suspense, useMemo } from 'react';
import { Loader, OrbitControls} from '@react-three/drei';
import {EffectComposer, Bloom, Noise, Vignette, wrapEffect } from '@react-three/postprocessing';
import { PostProcessing } from './post-processing'
import { Sparkles, PerspectiveCamera } from '@react-three/drei'
import {ModelLoader} from './model';
import { EnvironmentWrapper } from './environment';
import { DitheringEffect } from './dithering/DitheringEffect';
import { useControls, folder, Leva } from 'leva';
import {Lights} from './lights'
import { Vector3, TextureLoader} from 'three';
import * as THREE from 'three'
import { HybridDitherEffect } from './dithering/hybridDither'
import {ReactNode} from 'react';
import useStore from '@/app/components/helpers/helper';
import Scene from './scene';



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
const DesktopCanvas = () => {
  const dom = useStore((state) => state.dom) ||useRef<HTMLDivElement>(null);  
  return (
    <>
      {/* <Leva hidden={false}/> */}
      <Canvas
        shadows
        dpr={[1,2]}
        onCreated={(state) => {
          if (dom && dom.current && state.events.connect) {
            state.events.connect(dom.current);
          }
        }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 8,
          
        }}
        >
         <Scene/>
        {/* <EnvironmentWrapper intensity={intensity} highlight={highlight}/>         */}
        <OrbitControls/>
      </Canvas>
      </>
    );
  };


  const Effects: FC = memo(() => (
  <PostProcessing />
  ))

  
  export default DesktopCanvas;
  

  