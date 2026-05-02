import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import "./HeroVisual3D.css";

function MorphingTorus() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t * 0.4) * 0.4;
      ref.current.rotation.y = t * 0.25;
    }
  });
  return (
    <mesh ref={ref} scale={1.4}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        color="#7c5cff"
        emissive="#22d3ee"
        emissiveIntensity={0.25}
        roughness={0.15}
        metalness={0.7}
        distort={0.32}
        speed={1.4}
      />
    </mesh>
  );
}

function FloatingSphere() {
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh position={[2.4, 1.2, -1]} scale={0.6}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.6}
          chromaticAberration={0.4}
          anisotropy={0.4}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.1}
          color="#22d3ee"
        />
      </mesh>
    </Float>
  );
}

function FloatingRing() {
  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={1}>
      <mesh position={[-2.6, -1.2, -0.5]} rotation={[0.6, 0.4, 0]} scale={0.5}>
        <torusGeometry args={[1, 0.06, 32, 200]} />
        <meshStandardMaterial
          color="#f472b6"
          emissive="#f472b6"
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
      <pointLight position={[-4, -3, 2]} intensity={1.4} color="#22d3ee" />
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1.2}>
        <MorphingTorus />
      </Float>
      <FloatingSphere />
      <FloatingRing />
      <Environment preset="city" />
    </>
  );
}

function FallbackVisual() {
  return (
    <div className="hero-visual__fallback" aria-hidden="true">
      <div className="hero-visual__orb hero-visual__orb--a" />
      <div className="hero-visual__orb hero-visual__orb--b" />
      <div className="hero-visual__orb hero-visual__orb--c" />
    </div>
  );
}

export function HeroVisual3D() {
  const [hasError, setHasError] = useState(false);

  if (hasError) return <FallbackVisual />;

  return (
    <div className="hero-visual" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      <div className="hero-visual__glow" aria-hidden="true" />
    </div>
  );
}

export default HeroVisual3D;
