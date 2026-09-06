import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

/** Soft spinning "prisma" (torusKnot) + particles + orbital protons — from HeroScene @ b7efda3, toned for Figma dark */

function TorusKnot() {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    mesh.current.rotation.y += 0.004
    mesh.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.12
  })

  return (
    <mesh ref={mesh}>
      <torusKnotGeometry args={[1.1, 0.35, 100, 16]} />
      <meshStandardMaterial
        color="#4f6bff"
        emissive="#3d57e8"
        emissiveIntensity={0.18}
        roughness={0.35}
        metalness={0.75}
        transparent
        opacity={0.85}
      />
    </mesh>
  )
}

function Particles() {
  const mesh = useRef()
  const count = 420

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const colorA = new THREE.Color("#4f6bff")
    const colorB = new THREE.Color("#7b8cff")
    for (let i = 0; i < count; i++) {
      const r = 2 + Math.random() * 3.2
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
    mesh.current.rotation.y = state.clock.elapsedTime * 0.04
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.45}
        sizeAttenuation
        depthWrite={false}
      />
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
    group.current.rotation.y = state.clock.elapsedTime * 0.35
  })

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={[p.x, 0, p.z]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#7b8cff" transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 3, 3]} intensity={0.55} />
      <directionalLight position={[-3, -2, -3]} intensity={0.15} color="#4f6bff" />
      <Particles />
      <TorusKnot />
      <Orbitals />
    </>
  )
}

/**
 * Fixed full-page 3D background (HeroScene prisma @ b7efda3).
 * Low opacity wrapper keeps Figma dark readable; pointer-events none.
 */
export default function ThreeBackground() {
  return (
    <div className="three-bg" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 50 }}
        dpr={[1, 1.25]}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
