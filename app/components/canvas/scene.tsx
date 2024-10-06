import { Suspense, useEffect } from 'react';
import React from 'react';
import * as THREE from 'three';
import { Vector3, TextureLoader } from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import {Html, Loader, PerspectiveCamera, Sparkles, Text,} from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';

import ModelLoader from './model';
import { texture } from 'three/examples/jsm/nodes/Nodes.js';



const SceneIndex = (props: any) => {
 // background image as a texture fot the scene
//  const {scene} = useThree();
//   const textureLoader = new TextureLoader();
//   useEffect(() => {
//     textureLoader.load('/assets/backgroundJPG.jpg', (texture) => {
//       texture.repeat.set(1,1); // repeat the texture for scaling
//       scene.background = texture;
//     });
//   }, []);


   useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: 0, z: 12 } as Vector3, 0.005);
    state.camera.lookAt(0, 0, 0);

  })
 
  return (
    <>
   
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 14]}
        fov={55}
        near={0.1}
        far={100}
      />
      {/* this set the color of the scene */}
      {/* Fog( color : Integer, near : Float, far : Float ) */}
      <fog attach='fog' args={["#860111", 15, 28]} />;
      <pointLight position={[0, 10, -7]} intensity={1} />;

      <Suspense 
        fallback={
          <Html>
            <Loader />
          </Html>
        }
      >
      {/* model is being called here */}
        <ModelLoader position={[-10, -5, -1]} rotation={[0, -0.2, 0]} />;
        <Title>{`DESIGNER`}</Title>;
        <TitleL>{`DESIGNER`}</TitleL>;
        <Sparkles count={60} scale={[20, 20, 20]} size={1} speed={2} />;
      </Suspense>
      <EffectComposer multisampling={0} enableNormalPass={false}>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          opacity={2}
        />
        <Noise opacity={0.025} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
      
      <Rig /> 
    </>
  )
}


const Title = ({ children }: { children: any }) => {
  
  const {viewport} = useThree();
  const { width } = viewport;
  return (
      <Text
        position={[0, 0, -8]}
        lineHeight={1.3}
        font={('/assets/fonts/duft-lacks-font/DuftLacks-YzxOa.otf')}
        fontSize={width / 4}
        material-toneMapped={false}
        anchorX='center'
        anchorY='middle'
      >
        {children}
        <meshStandardMaterial roughness={1} metalness={0.5} color='#DEE7E7' />
      </Text>
  )
}

const TitleL = ({ children }: { children: any }) => {
  const { width } = useThree((state) => state.viewport)
  return (
    <Text
      position={[0, 0, -8]}
      lineHeight={1.3}
      font={('/assets/fonts/duft-lacks-font/DuftLacks-YzxOa.otf')}
      //font={('/assets/fonts/Keania_One/KeaniaOne-Regular.ttf')}
      fontSize={width / 4}
      material-toneMapped={false}
      anchorX='center'
      anchorY='middle'
    >
      
      {children}
      <meshStandardMaterial roughness={1} metalness={0.5} color='#EFEFEF' />
    </Text>
  )
}

const Rig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(-state.pointer.x / 2, state.pointer.y / 2, 10),
      0.05
    )
  })
}

export default SceneIndex;

