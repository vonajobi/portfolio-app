import React, { useRef, useState, useEffect, } from 'react';
import { useGLTF, Center, Float } from '@react-three/drei';
// import type {GLTF} from 'three/addons/loaders/GLTFLoader.js'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { useCallback } from 'react';



type GLTFResult = GLTF & {
  // these are the nodes that create the object in the modeling software
    nodes: {
      crushies_portfolio: THREE.Mesh;
    };
    materials: {
      'Steel_-_Satin': THREE.MeshStandardMaterial;
    };
  };
  
   export const ModelLoader: React.FC<any> = (props) => {
    const group = useRef<THREE.Group>(null);
      
     const { nodes, materials} = useGLTF('/assets/downBad.glb') as any as GLTFResult;
    //  logging any errors
     if (!nodes) {
      console.error('nameofObject not exist in the model');
      // Or handle the error in another way
      }
  //log nodes:
    // console.log(Object.keys(nodes))
    // console.log(materials)
    // console.log(nodes.crushies_portfolio.geometry.attributes.position.count);

    const [modelScale, setModelScale] = useState(3);
    // Responsive adjustment handler for model scale
    const handleResize = useCallback(() => {
      const isSmallScreen = window.innerWidth <= 768;
      setModelScale(isSmallScreen ? 2.4 : 3); // 20% reduction on small screens
    }, []);

    // Set up resize handling
    useEffect(() => {
      // Initial check
      handleResize();
      // Add listener
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);
  
    return (
      <group ref={group} {...props} dispose={null}>
          <Float>
            <Center position={[0, 0, -5]}>
              <mesh 
                  castShadow 
                  geometry={nodes.crushies_portfolio.geometry}
                  material={materials['Steel_-_Satin']}
                  rotation={[0, Math.PI / 3.5, 0]}
                  scale={0.13} 
                  >
                    <meshStandardMaterial roughness={0.15} metalness={0.3} color='red'/>
                </mesh>
            </Center>
          </Float>
      </group>
    );
  };
  
  useGLTF.preload('/assets/downBad.glb')
  