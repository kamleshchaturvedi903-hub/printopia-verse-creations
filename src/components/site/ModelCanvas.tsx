import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import type { Group } from "three";
import modelAsset from "@/assets/hero-model.glb.asset.json";

function Model({ float }: { float: boolean }) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(modelAsset.url);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    if (float) ref.current.position.y = Math.sin(t * 0.8) * 0.06;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload(modelAsset.url);

export default function ModelCanvas({
  float = true,
  autoRotateSpeed = 0.8,
  controlsRef,
}: {
  float?: boolean;
  autoRotateSpeed?: number;
  controlsRef?: React.MutableRefObject<{ reset: () => void } | null>;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      camera={{ position: [0, 0.4, 3.2], fov: 40 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={2.2} castShadow />
      <directionalLight position={[-4, 2, -3]} intensity={0.7} />
      <Suspense fallback={null}>
        <Bounds fit clip observe margin={1.15}>
          <Model float={float} />
        </Bounds>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        position={[0, -1.05, 0]}
        opacity={0.32}
        scale={8}
        blur={2.6}
        far={3}
      />
      <OrbitControls
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={controlsRef as any}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        autoRotate
        autoRotateSpeed={autoRotateSpeed}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 1.8}
      />
    </Canvas>
  );
}
