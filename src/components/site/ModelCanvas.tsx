/*
 * R3F scene built with createElement instead of JSX on purpose:
 * JSX source-tagging injects string props that three.js objects reject.
 */
import { Suspense, createElement as e, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import type { Group } from "three";
import modelAsset from "@/assets/hero-model.glb.asset.json";

function Model({ float }: { float: boolean }) {
  const ref = useRef<Group>(null);
  const { scene } = useGLTF(modelAsset.url);

  useFrame((state) => {
    if (!ref.current || !float) return;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.06;
  });

  return e("group", { ref }, e("primitive", { object: scene }));
}

useGLTF.preload(modelAsset.url);

export default function ModelCanvas({
  float = true,
  autoRotateSpeed = 0.8,
  controlsRef,
}: {
  float?: boolean;
  autoRotateSpeed?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controlsRef?: React.MutableRefObject<any>;
}) {
  return e(
    Canvas,
    {
      dpr: [1, 2] as [number, number],
      gl: { antialias: true, alpha: true },
      camera: { position: [0, 0.4, 3.2] as [number, number, number], fov: 40 },
      style: { background: "transparent" },
    },
    e("ambientLight", { intensity: 0.6 }),
    e("directionalLight", { position: [4, 6, 4], intensity: 2.2 }),
    e("directionalLight", { position: [-4, 2, -3], intensity: 0.7 }),
    e(
      Suspense,
      { fallback: null },
      e(Bounds, { fit: true, clip: true, observe: true, margin: 1.15 }, e(Model, { float })),
      e(Environment, { preset: "city" }),
    ),
    e(ContactShadows, {
      position: [0, -1.05, 0],
      opacity: 0.32,
      scale: 8,
      blur: 2.6,
      far: 3,
    }),
    e(OrbitControls, {
      ref: controlsRef,
      enableZoom: false,
      enablePan: false,
      enableDamping: true,
      dampingFactor: 0.06,
      autoRotate: true,
      autoRotateSpeed,
      minPolarAngle: Math.PI / 3.2,
      maxPolarAngle: Math.PI / 1.8,
    }),
  );
}
