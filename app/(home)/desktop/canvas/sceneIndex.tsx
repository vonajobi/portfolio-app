import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Vector3, TextureLoader} from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import {Html, Loader, PerspectiveCamera, Sparkles, Text,} from '@react-three/drei';
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing';
import {ModelLoader} from './model';
import { Lights } from './lights';



const SceneIndex = (props: any) => {
  //  background image as a texture fot the scene
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
      <color attach='background' args={['#050505']} />

      {/* this set the color of the scene */}
      {/* Fog( color : Integer, near : Float, far : Float ) */}
      <fog attach='fog' args={[0x050505, 13, 28]} />;
      <pointLight position={[0, 10, -7]} intensity={1} />;

      <Suspense 
        fallback={
          <Html>
            <Loader />
          </Html>
        }
        >
      {/* model is being called here */}
        <ModelLoader />;
        <CyclingTitle words= {['HELLO','DEVELOPER','DESIGNER', 'CREATIVE']}/>
        {/* <TitleL>{`DEVELOPER`}</TitleL>; */}
        <Sparkles count={60} scale={[30, 30, 10]} size={2} speed={2} />;
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


const FONT = '/assets/fonts/Rubik_80s_Fade/Rubik80sFade-Regular.ttf';
const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);

const CyclingTitle = ({
  words = [''],
  hold = 2.6, // seconds each word stays fully visible
  fade = 0.6, // seconds to fade/float in or out
}: {
  words?: string[];
  hold?: number;
  fade?: number;
}) => {
  const { viewport, camera } = useThree();
  const [index, setIndex] = useState(0);
  const group = useRef<THREE.Group>(null);
  const layers = useRef<any[]>([]);
  const fit = useRef(1);
  const clock = useRef(0);

  const reduceMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const fontSize = viewport.width / 4;
  // visible width at the title's depth (z = -8), with a little margin
  const maxWidth = viewport.getCurrentViewport(camera, [0, 0, -8]).width * 0.9;

  // shrink long words so they stay on screen
  const measure = (t: any) => {
    const b = t.textRenderInfo?.blockBounds; // [minX, minY, maxX, maxY]
    if (!b) return;
    const w = b[2] - b[0];
    fit.current = w > maxWidth ? maxWidth / w : 1;
  };

  useFrame((_, dt) => {
    if (reduceMotion || !group.current) return; // reduced motion: first word, no cycling

    clock.current += Math.min(dt, 0.1);
    const t = clock.current;

    let alpha = 1;
    let slide = 0; // -1 = below, 0 = in place, 1 = above

    if (t < fade) {
      const p = easeOut(t / fade);
      alpha = p;
      slide = 1-p;
    } else if (t > hold + fade) {
      const p = easeOut(Math.min(1, (t - hold - fade) / fade));
      alpha = 1 - p;
      slide = -p;
    }

    if (t >= hold + 2 * fade) {
      clock.current = 0;
      alpha = 0;
      setIndex((i) => (i + 1) % words.length);
    }

    group.current.position.y = slide * fontSize * 0.25;
    group.current.scale.setScalar(fit.current);
    layers.current.forEach((l) => {
      if (l) l.fillOpacity = alpha;
    });
  });

  return (
    <group ref={group} position={[0, 0, -8]}>
      <Text
        ref={(el: any) => { layers.current[0] = el; }}
        font={FONT}
        fontSize={fontSize}
        lineHeight={1.3}
        anchorX="center"
        anchorY="middle"
        material-toneMapped={false}
        onSync={measure}
      >
        {words[index]}
        <meshBasicMaterial color="#DEE7E7" />
      </Text>
      <Text
        ref={(el: any) => { layers.current[1] = el; }}
        font={FONT}
        fontSize={fontSize}
        lineHeight={1.3}
        anchorX="center"
        anchorY="middle"
        material-toneMapped={false}
      >
        {words[index]}
        <meshStandardMaterial roughness={1} metalness={0.5} color="#860111" />
      </Text>
    </group>
  );
};

const Rig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(-state.pointer.x / 2, state.pointer.y / 2, 10),
      0.05
    )
  })
}

export default SceneIndex;
