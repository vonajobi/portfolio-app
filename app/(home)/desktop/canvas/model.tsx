import React, { useRef, useState, useEffect, } from 'react';
import { useGLTF, Center, Float } from '@react-three/drei';
// import type {GLTF} from 'three/addons/loaders/GLTFLoader.js'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { useCallback } from 'react';
import { Lights } from './lights';



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
      
    // const gltf = useGLTF('/assets/downBad.glb') as any as GLTFResult;
    const gltf = useGLTF("https://cdn.maximeheckel.com/models/spaceship-optimized.glb");

    const {nodes, materials} = gltf
  //log nodes:
    // console.log(Object.keys(nodes))
    // console.log(materials)
    // console.log(nodes.crushies_portfolio.geometry.attributes.position.count);
    // useEffect(()=>{
    //   materials['Steel_-_Satin'].transparent =true;
    //   materials['Steel_-_Satin'].alphaToCoverage = true;
    //   materials['Steel_-_Satin'].depthFunc = THREE.LessEqualDepth;
    //   materials['Steel_-_Satin'].depthTest = true;
    //   materials['Steel_-_Satin'].depthWrite = true;
    // },[])
    useEffect(() => {
    if (gltf) {
      function alphaFix(material) {
        material.transparent = true;
        material.alphaToCoverage = true;
        material.depthFunc = THREE.LessEqualDepth;
        material.depthTest = true;
        material.depthWrite = true;
      }
      alphaFix(gltf.materials.spaceship_racer);
      alphaFix(gltf.materials.cockpit);
    }
  }, [gltf]);
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
            <Center> scale={modelScale} rotation={[Math.PI/3.5, -0.4]} position={[0, 0.8,0]}
              <mesh 
                  castShadow 
                  receiveShadow
                  // geometry={nodes.crushies_portfolio.geometry}
                  // material={materials['Steel_-_Satin']}
                  geometry={gltf.nodes.Cube001_spaceship_racer_0.geometry}
                  material={gltf.materials.spaceship_racer}
                  // position={[-4, 6, -8]}
                  position={[-12, 10, -3.725]}
                  rotation={[0, -Math.PI * 0.5, 0]}                  
                  // scale={0.13}
                  scale={0.01} 
                  >
                    {/* <meshStandardMaterial color='red'/> */}
                </mesh>
                {/* <Lights/> */}
            </Center>
      </group>
    );
  };
  
  useGLTF.preload('/assets/downBad.glb')
  