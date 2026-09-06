import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Spinning wireframe dodecahedron (EdgesGeometry / lineSegments only).
function Dodecahedron() {
  const group = useRef()
  const geometry = useMemo(() => new THREE.DodecahedronGeometry(2.6, 0), [])
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.06
    group.current.rotation.y += 0.0012
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.08
  })

  return (
    <group ref={group} scale={1.15}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#00D9FF" transparent opacity={0.85} linewidth={2} />
      </lineSegments>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <Dodecahedron />
    </Canvas>
  )
}