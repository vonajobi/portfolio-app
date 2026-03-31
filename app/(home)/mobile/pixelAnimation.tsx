"use client";

// import { useRef, useEffect } from "react";

// export default function PixelDitherCanvas({
 
//   pixelSize = 6, // smaller pixels for smoother edge
//   fadeSpeed = 0.005, // how fast top pixels disappear
// }: {
//   className?: string;
//   pixelSize?: number;
//   fadeSpeed?: number;
// }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current!;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const dpr = window.devicePixelRatio || 1;
//     const width = window.innerWidth;
//     const height = window.innerHeight / 2; // half screen height
//     canvas.width = width * dpr;
//     canvas.height = height * dpr;
//     canvas.style.width = `${width}px`;
//     canvas.style.height = `${height}px`;
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     const cols = Math.ceil(width / pixelSize);
//     const rows = Math.ceil(height / pixelSize);

//     // generate random noise for each pixel
//     const noise = new Float32Array(cols * rows);
//     for (let i = 0; i < noise.length; i++) noise[i] = Math.random();

//     let cutoff = 1; // start fully opaque

//     const animate = () => {
//       ctx.clearRect(0, 0, width, height);

//       for (let y = 0; y < rows; y++) {
//         const vertical = y / rows;

//         for (let x = 0; x < cols; x++) {
//           const n = noise[y * cols + x];
//           const threshold = cutoff - vertical * 0.5; // top fades faster

//           if (n > threshold) {
//             ctx.fillStyle = "#1b3fe2"; // pixel color
//             ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
//           }
//         }
//       }

//       cutoff -= fadeSpeed;
//       cutoff = Math.max(cutoff, 0);

//       if (cutoff > 0) requestAnimationFrame(animate);
//     };

//     animate();
//   }, [pixelSize, fadeSpeed]);

//   return (
//     <canvas
//       ref={canvasRef}
    
//       style={{ position: "absolute", bottom: 0, }}
//     />
//   );
// }
import { useEffect, useRef } from "react";
import {createNoise3D} from "simplex-noise";

type Props = {
  fontSize?: number;
  alpha?: number;
  chars?: string;
};

export default function PixelDitherCanvas({
  fontSize = 8,
  alpha = 0.3,
  chars = " %*>:'",
}:Props){
  const canvasRef = useRef<HTMLCanvasElement|null>(null)
  const rafRef = useRef<number|null>(null)
  useEffect(()=>{
    const canvas = canvasRef.current
    if(!canvas) return
    
    const ctx = canvas.getContext('2d')
    if(!ctx) return
    
    let row = 0;
    let col = 0;
    const noise3D =  createNoise3D()
    const resize = ()=> {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight/2

      ctx.font=`${fontSize}px monospace`
      ctx.textBaseline = "top"

      col = Math.floor(canvas.width/fontSize)
      row = Math.floor(canvas.height/fontSize)
    }

    const smoothStep = (a:number, b:number, x:number)=>{
      const t = Math.max(0, Math.min(1, (x-a)/(b-a)))
      return t*t*(3-2*t)
    }
    const draw=(time:number)=>{
      ctx.clearRect(0,0,canvas.width,canvas.height)
      // COLOUR CHANGE
      ctx.fillStyle="PINK"
      ctx.globalAlpha = alpha
      ctx.globalCompositeOperation = "screen"

      const SCALE = 0.015

      for(let y=0; y<row;y++){
        for(let x = 0; x<col;x++){
          //domain warp
          const wx= x + noise3D(x* 0.05, y*0.05, time*0.000015)*4
          const wy= y + noise3D(x* 0.05+100, y*0.05, time*0.000015)*4
          //organic field
          const n = noise3D(
            wx*SCALE,
            wy*SCALE,
            time*0.00015+x*0.02+y*0.03
          )

          const v=smoothStep(-0.3,0.6,n)
          if(v<=0) continue

          //perceptual density curve
          const density = Math.pow(v, 1.8)
          const idx = Math.floor(density * (chars.length - 1))

          //micro jitter
          const j = 0.25 * fontSize
          const ox = (Math.random() - 0.5) * j
          const oy = (Math.random() - 0.5) * j

          ctx.fillText(
            chars[idx],
            x*fontSize +ox,
            y*fontSize + oy,
          )
        }
      }
      ctx.globalAlpha = 1
      rafRef.current=requestAnimationFrame(draw)
    }
    resize()
    window.addEventListener("resize", resize)
    rafRef.current = requestAnimationFrame(draw)

    return ()=>{
      if(rafRef.current) cancelAnimationFrame(rafRef.current)
        window.removeEventListener("resize",resize)
    }
  
  }, [fontSize, alpha,chars])

  return(
    <canvas
      ref={canvasRef}
      aria-hidden  
      style={{
        position:"fixed",
        bottom:"0",}}
  />)
}
