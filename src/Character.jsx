import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Character(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('./model/character-transformed.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      // Log available animation names
      console.log('Available animations:', Object.keys(actions))

      // Play the first available animation
      const firstAnimationName = Object.keys(actions)[0]
      actions[firstAnimationName]?.play()

    } else {
      console.error('No animations found or actions are not defined.')
    }
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]} scale={2}>
          <primitive object={nodes.mixamorigHips} />
        </group>
        <skinnedMesh castShadow receiveShadow name="10294136_0" geometry={nodes['10294136_0'].geometry} material={materials['Material.005']} skeleton={nodes['10294136_0'].skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadown ame="Aviator_Glasses" geometry={nodes.Aviator_Glasses.geometry} material={materials['Material.007']} skeleton={nodes.Aviator_Glasses.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials.Skin} skeleton={nodes.Cylinder.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.Skin} skeleton={nodes.Cylinder001.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials['Material.002']} skeleton={nodes.defaultMaterial.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Eyes" geometry={nodes.Eyes.geometry} material={materials['Eyes and Noes']} skeleton={nodes.Eyes.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Face" geometry={nodes.Face.geometry} material={materials.Skin} skeleton={nodes.Face.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Face001" geometry={nodes.Face001.geometry} material={materials.Mouth} skeleton={nodes.Face001.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Hoodie" geometry={nodes.Hoodie.geometry} material={materials.Material} skeleton={nodes.Hoodie.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="image_(11)_(1)_(1)" geometry={nodes['image_(11)_(1)_(1)'].geometry} material={materials.Logo} skeleton={nodes['image_(11)_(1)_(1)'].skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="image_(11)_(1)_(1)001" geometry={nodes['image_(11)_(1)_(1)001'].geometry} material={materials.Logo} skeleton={nodes['image_(11)_(1)_(1)001'].skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="neck" geometry={nodes.neck.geometry} material={materials.Skin} skeleton={nodes.neck.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Nose" geometry={nodes.Nose.geometry} material={materials['Eyes and Noes']} skeleton={nodes.Nose.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Skin} skeleton={nodes.Object_17.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Object_17001" geometry={nodes.Object_17001.geometry} material={materials.Skin} skeleton={nodes.Object_17001.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Plane001" geometry={nodes.Plane001.geometry} material={materials.Sneeker} skeleton={nodes.Plane001.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Plane076" geometry={nodes.Plane076.geometry} material={materials.Sneeker} skeleton={nodes.Plane076.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Sharp_Cuban_Link_Chain002" geometry={nodes.Sharp_Cuban_Link_Chain002.geometry} material={materials['Gold Chain']} skeleton={nodes.Sharp_Cuban_Link_Chain002.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
        <skinnedMesh castShadow receiveShadow name="Shirt" geometry={nodes.Shirt.geometry} material={nodes.Shirt.material} skeleton={nodes.Shirt.skeleton} position={[-0.033, -0.184, -1.265]} rotation={[Math.PI / 2, 0, 0]} scale={0.83} />
      </group>
    </group>
  )
}

useGLTF.preload('./model/character-transformed.glb')
