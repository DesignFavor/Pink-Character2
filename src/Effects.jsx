import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer, SSAO, SSR } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

export default function App() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 5, 10]} />
      <OrbitControls />
      <Lights controls={controls} />
      <Ground />
      <Character />

      <EffectComposer>
        <SSAO
          radius={0.3}
          intensity={1}
          luminanceInfluence={0.3}
          color="black"
          />
        <SSR
          intensity={1}
          />
        <Bloom
          intensity={1}
          />
      </EffectComposer>
    </Canvas>
  )
}
