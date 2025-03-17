

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MacModel(props) {
  const { nodes, materials } = useGLTF('/mac.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['02___Default']} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Background} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.dark_beige} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.dark_grey} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.darker_beige} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.darker_beige} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.darkest_beige} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.darkest_beige} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.light_beige} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.lighter_beige} />
      </group>
    </group>
  )
}

useGLTF.preload('/mac.glb')
