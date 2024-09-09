import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Character } from './Character'
import { Environment, ContactShadows } from '@react-three/drei'
import { ACESFilmicToneMapping, PCFSoftShadowMap, MeshStandardMaterial, PlaneGeometry } from 'three'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'




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


        
        <EffectComposer>
  
        <Bloom luminanceThreshold={0.7} luminanceSmoothing={1} />


      </EffectComposer>
     
      
      <Character/>
    </Canvas>
  )
}
