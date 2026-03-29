import { Effect } from "postprocessing";
import * as THREE from "three";
import { wrapEffect } from "@react-three/postprocessing";


const fragmentShader = /* glsl */ `
precision highp float;

uniform float colorNum;
uniform float pixelSize;
uniform float curve;
uniform float grayscale;

float bayerMatrix[64] = float[](
    0.,48.,12.,60.,3.,51.,15.,63.,
  32.,16.,44.,28.,35.,19.,47.,31.,
    8.,56., 4.,52.,11.,59., 7.,55.,
  40.,24.,36.,20.,43.,27.,39.,23.,
    2.,50.,14.,62., 1.,49.,13.,61.,
  34.,18.,46.,30.,33.,17.,45.,29.,
  10.,58., 6.,54., 9.,57., 5.,53.,
  42.,26.,38.,22.,41.,25.,37.,21.
);

vec3 dither(vec2 uv, vec3 color) {
  int x = int(uv.x * resolution.x) % 8;
  int y = int(uv.y * resolution.y) % 8;
  int i = y*8+x;

  float threshold = bayerMatrix[i]/ 64.0;
  color = clamp(color + threshold, 0.0, 1.0);
  color.r = floor(color.r * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
  color.g = floor(color.g * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);
  color.b = floor(color.b * (colorNum - 1.0) + 0.5) / (colorNum - 1.0);

  return color;
}

float luminance(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

const float MASK_BORDER = 0.9;
const float MASK_INTENSITY = 0.8;

void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor) {
  //curved monitor
  vec2 curveUv = uv*2.0-1.0;
  vec2 offset = curveUv.yx * curve;
  curveUv += curveUv * offset * offset;
  curveUv = curveUv * 0.5 + 0.5;

  // shader CRT mask
  vec2 pixel = uv*resolution;
  vec2 coord = pixel/pixelSize;
  vec2 subCoord = coord*vec2(3,1);
  vec2 cellOffset = vec2(0,mod(floor(coord.x), 3.0)*0.5);

  float ind = mod(floor(subCoord.x), 3.0);
  vec3 maskColor = vec3(ind == 0.0, ind == 1.0, ind == 2.0) * 2.0;

  vec2 cellUv = fract(subCoord + cellOffset) * 2.0 - 1.0;
  vec2 border = 1.0 - cellUv * cellUv * MASK_BORDER;
  maskColor.rgb *= border.x * border.y;

  vec2 rgbCellUV = floor(coord+cellOffset) * pixelSize / resolution;
  
  
  vec4 color = texture2D(inputBuffer, rgbCellUV);

  //grayscale option
  if (grayscale > 0.5) {
  float l = luminance(color.rgb);
  color.rgb = vec3(l);
  }

  color.rgb = dither(rgbCellUV, color.rgb);
  color.rgb *= 1.0 + (maskColor - 1.0) * MASK_INTENSITY;

  vec2 edge = smoothstep(0., 0.02, curveUv)*(1.-smoothstep(1.-0.02, 1., curveUv));
  color.rgb *= edge.x * edge.y;

  outputColor = color;
}
`;

class HybridDitherEffectImpl extends Effect {
  constructor() {
    const uniforms = new Map([
      ["colorNum", new THREE.Uniform(16)],
      ["pixelSize", new THREE.Uniform(4)],
      ["curve", new THREE.Uniform(0.3)],
      ["grayscale", new THREE.Uniform(0)],

    ]);

    super("HybridDitherEffect", fragmentShader, { 
        uniforms, 
    });
     
    
}


  
}

export const HybridDitherEffect = wrapEffect(HybridDitherEffectImpl);
