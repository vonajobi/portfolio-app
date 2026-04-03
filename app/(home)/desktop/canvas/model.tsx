import React, { useRef, useState, useEffect, } from 'react';
import { useGLTF, Center, Float } from '@react-three/drei';
// import type {GLTF} from 'three/addons/loaders/GLTFLoader.js'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { useCallback } from 'react';
import { useMemo } from 'react';

   export const ModelLoader: React.FC<any> = (props) => {
    const group = useRef<THREE.Group>(null);
      
    const gltf = useGLTF('/assets/scene_compressed.glb') as any;

    const meshNodes = useMemo(() => {
      const meshes: THREE.Mesh[] = [];
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) meshes.push(child);
      });
      return meshes;
    }, [gltf]);
    
    if (!meshNodes) {
      console.error('No mesh found in GLTF');
      return null;
    }
    // console.log(gltf.material)
    // console.log(gltf)
//     console.log(gltf.scene)
//     gltf.scene.traverse((child) => {
//       if ((child as any).isMesh) {
//         console.log(child.name, child.position)
//       }
//     })
//    


    

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
    
  // const materials = useMemo(() => ({
  //   legs: new THREE.MeshStandardMaterial({ color: "#70642A", metalness: 1, roughness: 0.15 }),
  //   joints: new THREE.MeshStandardMaterial({ color: "#222222" }),
  //   wires: new THREE.MeshStandardMaterial({ color: "#6B4949" }),
  //   connectors: new THREE.MeshStandardMaterial({ color: "#70642A" }),
  //   default: new THREE.MeshStandardMaterial({ color: "#EDECE4", metalness: 0.3, roughness: 0.15  })
  // }), []);


    return (
    <group ref={group} {...props} dispose={null}>
      <Float>
        <Center position={[0, 0, 2]}>
          {/* Render all meshes */}
          {meshNodes.map((mesh, idx) => (
            <mesh
              key={idx}
              castShadow
              geometry={mesh.geometry}
              material={mesh.material}              
              rotation={[.5, Math.PI / 3.5, .1]}
              scale={7}
            >
              <meshStandardMaterial color="red"
              emissive="#0e3096"
              emissiveIntensity={.2}
              metalness={0.13} />
            </mesh>
          ))}
        </Center>
      </Float>
    </group>
    );
  };
  
  useGLTF.preload('/assets/scene_compressed.glb')
  
  