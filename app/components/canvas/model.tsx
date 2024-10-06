import React, { useRef, useState, useEffect, use } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import Lights  from './lights';

type GLTFResult = GLTF & {
  // these are the nodes that create the object in the modeling software
    nodes: {
      crushies_portfolio: THREE.Mesh;
      Scene: THREE.Mesh;
    };
    materials: {
      Default_OBJ: THREE.MeshStandardMaterial;
      ['Material.001']: THREE.MeshStandardMaterial;
    };
  };
  
   const ModelLoader: React.FC<any> = (props) => {
    const group = useRef<THREE.Group>(null);
      
     const { nodes } = useGLTF('./assets/downBad.glb') as GLTFResult;
    //  logging any errors
     if (!nodes.crushies_portfolio || !nodes.Scene) {
      console.error('nameofObject not exist in the model');
      // Or handle the error in another way
    }
  // if you don't know the names of the nodes, you can log them out here:
    // console.log(Object.keys(nodes))
    // console.log(nodes)


    useFrame(({ pointer }) => {
      if (group.current) {
        group.current.rotation.y = THREE.MathUtils.lerp(
          group.current.rotation.y,
          pointer.x * (Math.PI / 16),
          0.005
        );
        group.current.rotation.x = THREE.MathUtils.lerp(
          group.current.rotation.x,
          pointer.y * -(Math.PI / 16),
          0.005
        );
      }
      
    });
  
    return (
      <group ref={group} {...props} dispose={null}>
      <group 
      // position and rotation and size of the model
      position={[5, 5.5, -8]}
       rotation={[0, -.7, 0]} 
       scale={.12}>

          <mesh castShadow receiveShadow geometry={nodes.crushies_portfolio.geometry}>
            <meshStandardMaterial roughness={0} metalness={0.5} color='red' />
          </mesh>
          <mesh castShadow receiveShadow geometry={nodes.Scene.geometry} />
        </group>
        <Lights/>
      </group>
    );
  };
  
  // useGLTF.preload('../assets/downBad.glb')
export default ModelLoader;
  