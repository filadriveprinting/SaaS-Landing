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
    <mesh ref={ref} scale={1.5}>
      <torusKnotGeometry args={[1, 0.32, 128, 20]} />
      <MeshDistortMaterial
        color="#ff6b35"
        emissive="#fbbf24"
        emissiveIntensity={0.25}
        roughness={0.15}
        metalness={0.7}
        distort={0.28}
        speed={1.2}
      />
    </mesh>
  );
}

function FloatingSphere() {
  return (
    <Float speed={1.1} rotationIntensity={0.45} floatIntensity={0.9}>
      <mesh position={[1.85, 1.3, -1.2]} scale={0.75}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshTransmissionMaterial
          backside
          samples={3}
          thickness={0.6}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.04}
          color="#fbbf24"
        />
      </mesh>
    </Float>
  );
}

function FloatingRing() {
  return (
    <Float speed={0.8} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh position={[-2.05, -1.3, -0.7]} rotation={[0.6, 0.4, 0]} scale={0.65}>
        <torusGeometry args={[1, 0.06, 24, 128]} />
        <meshStandardMaterial
          color="#ff9b6c"
          emissive="#ff9b6c"
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
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffb47e" />
      <pointLight position={[-4, -3, 2]} intensity={1.4} color="#fbbf24" />
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.4}>
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
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        dpr={[1, 1.5]}
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
