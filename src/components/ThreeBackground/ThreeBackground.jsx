import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { EffectComposer, Bloom } from "@react-three/postprocessing"

const PARTICLE_COUNT = 800
const SPLINE_COUNT = 12
const SPLINE_POINTS = 40

function neuralColor(t) {
  const c = new THREE.Color()
  if (t < 0.5) {
    c.lerpColors(new THREE.Color("#22D3EE"), new THREE.Color("#3B82F6"), t * 2)
  } else {
    c.lerpColors(new THREE.Color("#3B82F6"), new THREE.Color("#7C3AED"), (t - 0.5) * 2)
  }
  return c
}

function NeuralParticles() {
  const mesh = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const col = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 3.5 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = Math.sin(phi) * Math.cos(theta) * radius
      pos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius * 0.6
      pos[i * 3 + 2] = Math.cos(phi) * radius
      const c = neuralColor(Math.random())
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.y = state.clock.elapsedTime * 0.015
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={PARTICLE_COUNT} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={PARTICLE_COUNT} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.6} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  )
}

function SplineCurve({ points, color, speed, offset }) {
  const curve = useMemo(() => {
    const pts = points.map(p => new THREE.Vector3(p.x, p.y, p.z))
    return new THREE.CatmullRomCurve3(pts)
  }, [points])

  const lineRef = useRef()
  const dotRef = useRef()

  useFrame((state) => {
    const t = (state.clock.elapsedTime * speed + offset) % 1
    const pos = curve.getPoint(t)
    if (dotRef.current) dotRef.current.position.copy(pos)
  })

  const linePoints = useMemo(() => curve.getPoints(SPLINE_POINTS), [curve])

  return (
    <group>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePoints.length}
            array={Float32Array.from(linePoints.flatMap(p => [p.x, p.y, p.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={color} transparent opacity={0.2} />
      </line>
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.035, 8, 8]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  )
}

function NeuralSplines() {
  const splines = useMemo(() => {
    const result = []
    const angleStep = (Math.PI * 2) / SPLINE_COUNT
    for (let i = 0; i < SPLINE_COUNT; i++) {
      const baseAngle = angleStep * i + (Math.random() - 0.5) * 0.3
      const radiusOuter = 4 + Math.random() * 2
      const radiusInner = 2.2 + Math.random() * 0.5
      const yOffset = (Math.random() - 0.5) * 2
      const points = []
      for (let j = 0; j < 5; j++) {
        const angle = baseAngle + (j - 2) * 0.25
        const r = j === 0 ? radiusOuter : j === 4 ? radiusOuter : radiusInner + Math.random() * 0.5
        points.push({
          x: Math.cos(angle) * r,
          y: yOffset + (Math.random() - 0.5) * 1.5,
          z: Math.sin(angle) * r,
        })
      }
      result.push({
        points,
        color: neuralColor(i / SPLINE_COUNT).getStyle(),
        speed: 0.08 + Math.random() * 0.06,
        offset: Math.random(),
      })
    }
    return result
  }, [])

  return splines.map((s, i) => (
    <SplineCurve key={i} {...s} />
  ))
}

function CentralPolygon() {
  const groupRef = useRef()
  const ringRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.15
      groupRef.current.rotation.y = t * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = t * 0.15
      ringRef.current.rotation.x = Math.sin(t * 0.08) * 0.05
    }
  })

  const ringCount = 80
  const ringPos = useMemo(() => {
    const pos = new Float32Array(ringCount * 3)
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2
      const r = 1.6 + Math.random() * 0.15
      pos[i * 3] = Math.cos(angle) * r
      pos[i * 3 + 1] = (Math.random() - 0.5) * 0.4
      pos[i * 3 + 2] = Math.sin(angle) * r
    }
    return pos
  }, [])

  const edges = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(0.9, 0)
    return new THREE.EdgesGeometry(geo)
  }, [])

  return (
    <group>
      <group ref={groupRef}>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="#22D3EE" transparent opacity={0.5} />
        </lineSegments>
        <lineSegments geometry={edges} scale={1.06}>
          <lineBasicMaterial color="#7C3AED" transparent opacity={0.2} />
        </lineSegments>
      </group>
      <points ref={ringRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={ringCount} array={ringPos} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.025} color="#22D3EE" transparent opacity={0.5} sizeAttenuation />
      </points>
    </group>
  )
}

function AmbientGlow() {
  return (
    <mesh>
      <sphereGeometry args={[2.0, 32, 32]} />
      <meshBasicMaterial
        color="#3B82F6"
        transparent
        opacity={0.04}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <NeuralParticles />
      <NeuralSplines />
      <CentralPolygon />
      <AmbientGlow />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.15}
          luminanceSmoothing={0.85}
          intensity={0.6}
          mipmapBlur
        />
      </EffectComposer>
    </>
  )
}

export default function ThreeBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0.3, 7], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: false }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <color attach="background" args={["#050816"]} />
      <Scene />
    </Canvas>
  )
}
