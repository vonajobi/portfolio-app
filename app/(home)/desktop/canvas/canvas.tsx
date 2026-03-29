
import { Canvas } from '@react-three/fiber'
import { memo, FC, useEffect, useRef, useState, useCallback } from 'react';
import { OrbitControls} from '@react-three/drei';
import { PostProcessing } from './post-processing';
import {ModelLoader} from './model';
import React, {ReactNode} from 'react'
import useStore from '../../../components/helpers/helper'
import SceneIndex from './sceneIndex';
import { EnvironmentWrapper } from './environment';
import { useControls, folder, Leva } from 'leva';
import * as THREE from 'three'
import { Lights } from './lights';



const DesktopCanvas = ({ children }: {children : ReactNode}) => {
    const dom = useStore((state) => state.dom) || React.createRef<HTMLDivElement>();  

    return (
      <Canvas
       style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
        }} 
        onCreated={(state) => {
          if (dom && dom.current && state.events.connect) {
            state.events.connect(dom.current);
          }
        }}
        shadows
        camera={{ position: [0, 1.5, 14], fov: 50 }}
      > 
        <Lights/>
        <OrbitControls/>
        {children}
      </Canvas>
     
    );
  };

  const Effects: FC = memo(() => (
  <PostProcessing />
  ))

  export default DesktopCanvas;
  
  

  

  