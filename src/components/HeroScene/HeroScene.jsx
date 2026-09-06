import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Spinning wireframe dodecahedron that drifts around the scene.
function Dodecahedron() {
  const group = useRef()
  const geometry = useMemo(() => new THREE.DodecahedronGeometry(1.2, 0), [])
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.x = Math.sin(t * 0.12) * 0.06
    group.current.rotation.y += 0.0012
    // Lissajous-style wander so it is not stuck in the center
    group.current.position.x = Math.sin(t * 0.18) * 1.4
    group.current.position.y = Math.sin(t * 0.23) * 0.9
    group.current.position.z = Math.cos(t * 0.15) * 0.6
  })

  return (
    <group ref={group}>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#00D9FF" transparent opacity={0.85} linewidth={2} />
      </lineSegments>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <Dodecahedron />
    </Canvas>
  )
}