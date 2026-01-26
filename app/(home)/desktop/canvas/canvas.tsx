
import { Canvas } from '@react-three/fiber'
import { memo, FC, useEffect, useRef, useState, useCallback } from 'react';
import { OrbitControls} from '@react-three/drei';
import { PostProcessing } from './post-processing';
import {ModelLoader} from './model';
import { EnvironmentWrapper } from './environment';
import { useControls, folder, Leva } from 'leva';
import * as THREE from 'three'




const DesktopCanvas = () => {
  const { intensity, highlight } = useControls({
        'Environment Settings': folder({
          intensity: {
            value: 0.2,
            min: 0.2,
            max: 1,
            step: 0.05,
            label: 'Environment Intensity'
          },
          highlight: {
            value: '#40444b',
            label: 'Highlight Color'
          }
        })
      });  
      
   
    return (
      <>
      <Leva hidden={false}/>
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 14], fov: 50 }}
        >
          <ModelLoader/>;
        <OrbitControls/>
        <EnvironmentWrapper intensity={intensity} highlight={highlight}/>
        <Effects/>        
      </Canvas>
      </>
    );
  };

  const Effects: FC = memo(() => (
  <PostProcessing />
  ))

  
  export default DesktopCanvas;
  

  