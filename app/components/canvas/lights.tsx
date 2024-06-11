import React, {useRef} from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useEffect } from 'react';


export const Lights = ({}) => {
  const groupL = useRef<THREE.Group>(null);
  const groupR = useRef<THREE.Group>(null);
  const front = useRef<THREE.SpotLight>(null);


  useFrame(({pointer}) => {
      if (groupL.current) {
        groupL.current.rotation.y = THREE.MathUtils.lerp(
          groupL.current.rotation.y,
          // the negative sign maeks the light rotate in the opposite direction
          -pointer.x * (Math.PI / 2), 
          0.1
        );
      }

      if (groupR.current) {
        groupR.current.rotation.y = THREE.MathUtils.lerp(
          groupR.current.rotation.y,
          pointer.x * (Math.PI / 2),
          0.1
        );
      }

      if (front.current) {
        front.current.position.x = THREE.MathUtils.lerp(
          front.current.position.x,
          -0.6 + pointer.x * -7,
          0.07
        );
        front.current.position.y = THREE.MathUtils.lerp(
          front.current.position.y,
          6 + pointer.y * -4,
          0.07
        );
      }
    })
    
    // useEffect(() => {
    //    console.log(front.current);
    // }, []);

  return (
    <>
      <group ref={groupL}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={20} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 7, -18]} distance={15} intensity={20} />
      </group>
      <spotLight ref={front}
        castShadow
        color={'#00000'}
        penumbra={0.75}
        angle={Math.PI / 6}
        position={[0, 0, 3]}
        distance={14}
        intensity={20}
        shadow-mapSize={[2048, 2048]}   // sets the resolution of the depth map which stores info about shadows
      />
    </>
  );
  };

