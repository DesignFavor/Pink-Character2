import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Character } from './Character'
import { Environment } from '@react-three/drei'
import { ACESFilmicToneMapping, PCFSoftShadowMap, MeshStandardMaterial, PlaneGeometry } from 'three'
import { EffectComposer, SSAO, SSR } from '@react-three/postprocessing'



export default function App() {
  
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />

    <Environment
    background={0}
    rotation={0}
    files="../public/ShowcaseEnvy.hdr"
    />
      <OrbitControls />
      
      <Character/>
    </Canvas>
  )
}
