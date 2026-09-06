import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Spinning dodecahedron (polyhedron). Alternative: octahedronGeometry args={[1.2, 0]}.
function Dodecahedron() {
  const group = useRef()
  const geometry = useMemo(() => new THREE.DodecahedronGeometry(1.2, 0), [])
  const edges = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    group.current.rotation.y += 0.005
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
  })

  return (
    <group ref={group}>
      <mesh geometry={geometry}>
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#3B82F6"
          emissiveIntensity={0.3}
          roughness={0.3}
          metalness={0.8}
          transparent
          opacity={0.88}
        />
      </mesh>
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#00D9FF" transparent opacity={0.35} />
      </lineSegments>
    </group>
  )
}

function Particles() {
  const mesh = useRef()
  const count = 500

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const colorA = new THREE.Color("#00D9FF")
    const colorB = new THREE.Color("#3B82F6")
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI * 2
      pos[i * 3] = Math.sin(theta) * Math.cos(phi) * r
      pos[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * r
      pos[i * 3 + 2] = Math.cos(theta) * r
      const mix = Math.random()
      const c = colorA.clone().lerp(colorB, mix)
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.05
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Orbitals() {
  const group = useRef()
  const count = 6

  const positions = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      pos.push({ x: Math.cos(angle) * 1.8, z: Math.sin(angle) * 1.8 })
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.4
  })

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={[p.x, 0, p.z]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#3B82F6" />
        </mesh>
      ))}
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 1.5]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={0.8} />
      <directionalLight position={[-3, -3, -3]} intensity={0.2} color="#8B5CF6" />
      <Particles />
      <Dodecahedron />
      <Orbitals />
    </Canvas>
  )
}