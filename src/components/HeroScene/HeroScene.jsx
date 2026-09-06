import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Large ambient wireframe dodecahedron — circuit/network background mesh.
function Dodecahedron() {
  const group = useRef()
  const geometry = useMemo(() => new THREE.DodecahedronGeometry(3.0, 0), [])
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    // Very slow rotation + gentle wander so it stays background
    group.current.rotation.x = Math.sin(t * 0.08) * 0.04
    group.current.rotation.y += 0.0006
    group.current.position.x = Math.sin(t * 0.1) * 0.55
    group.current.position.y = Math.sin(t * 0.13) * 0.35
    group.current.position.z = Math.cos(t * 0.09) * 0.25
  })

  return (
    <group ref={group}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#00D9FF" transparent opacity={0.32} />
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