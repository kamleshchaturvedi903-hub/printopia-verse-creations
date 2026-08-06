/*
 * R3F scene built with createElement instead of JSX on purpose:
 * JSX source-tagging injects string props that three.js objects reject.
 */
import { Suspense, createElement as e, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bounds, ContactShadows, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import type { Group } from "three";
import modelAsset from "@/assets/hero-model-v3.glb.asset.json";

function Model({ float, src }: { float: boolean; src: string }) {
  const ref = useRef<Group>(null);
  // `true` enables the Draco decoder — models are Draco-compressed for fast download.
  const { scene } = useGLTF(src, true);

  useFrame((state) => {
    if (!ref.current || !float) return;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.06;
  });

  return e("group", { ref }, e("primitive", { object: scene }));
}

useGLTF.preload(modelAsset.url, true);

export default function ModelCanvas({
  float = true,
  autoRotateSpeed = 0.8,
  src = modelAsset.url,
  controlsRef,
}: {
  float?: boolean;
  autoRotateSpeed?: number;
  src?: string;
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
      onCreated: ({ gl }: { gl: { domElement: HTMLCanvasElement } }) => {
        // Let the page keep scrolling over the hero: block wheel from OrbitControls,
        // while touch pinch-to-zoom still works.
        gl.domElement.addEventListener("wheel", (ev: Event) => ev.stopPropagation(), {
          capture: true,
        });
      },
    },
    e("ambientLight", { intensity: 0.6 }),
    e("directionalLight", { position: [4, 6, 4], intensity: 2.2 }),
    e("directionalLight", { position: [-4, 2, -3], intensity: 0.7 }),
    e(
      Suspense,
      { fallback: null },
      e(Bounds, { fit: true, clip: true, observe: true, margin: 1.15 }, e(Model, { float, src })),
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
      enableZoom: true,
      zoomSpeed: 0.8,
      minDistance: 1.6,
      maxDistance: 6,
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
