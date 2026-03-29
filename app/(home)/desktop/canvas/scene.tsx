import { Suspense } from 'react';
import React, {useEffect} from 'react';
import * as THREE from 'three';
import { Vector3, TextureLoader} from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import {Html, Loader, PerspectiveCamera, Sparkles, Text,} from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import {ModelLoader} from './model';
import { HybridDitherEffect } from './dithering/hybridDither';
import { Lights } from './lights';



const Scene = (props: any) => {        
      useFrame((state) => {
        state.camera.position.lerp({ x: 0, y: 0, z: 12 } as Vector3, 0.005);
        state.camera.lookAt(0, 0, 0);
        
      })
      return (
        <>
   
      <PerspectiveCamera
        makeDefault
        position={[10, 0, 14]}
        fov={55}
        near={0.01}
        far={100}
        />
      <color attach='background' args={['#3386E0']} />
        {/* <ambientLight intensity={0.25} /> */}
        <directionalLight position={[0, 10, 5]} intensity={10.5} />
      <Suspense 
        fallback={
          <Html>
            <Loader/>
          </Html>
        }
        >
        <ModelLoader/>;
        <Sparkles count={60} scale={[20, 20, 10]} size={1} speed={2} />
      </Suspense>
      <EffectComposer multisampling={0} enableNormalPass={false}>
        <Bloom
          intensity={0.25}
          luminanceThreshold={0.05}
          luminanceSmoothing={0.9}
          />
        <HybridDitherEffect colorNum={8} pixelSize={4}/>
        <Vignette eskil={false} offset={0.2} darkness={0.5} />
      </EffectComposer>
      
      <Rig /> 
    </>
  )
}

const Rig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(-state.pointer.x * 2, state.pointer.y * 2, 10),
      0.05
    )
  })
}

export default Scene;
