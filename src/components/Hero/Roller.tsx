"use client";
import { Center, useGLTF, ContactShadows } from "@react-three/drei";
import { forwardRef, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";

type RollerProps = {
  src?: string;
  scale?: number;
  rotation?: [number, number, number];
  light?: boolean;
  speed?: number;
};

const Roller = forwardRef<THREE.Group, RollerProps>(function Roller(
  {
    src = "/models/70s_-_80s_roller_skate/greenroller.gltf",
    scale = 0.0125,
    rotation = [0, 0, 0],
    light = true,
    speed = 0,
  }: RollerProps,
  ref
) {
  const { scene } = useGLTF<string>(src);
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    scene.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) {
        const m = o as THREE.Mesh;
        m.castShadow = true;
        m.receiveShadow = true;

        const apply = (mat: any) => {
          if (mat.map) mat.map.colorSpace = THREE.SRGBColorSpace; // baseColor
          if (mat.emissiveMap)
            mat.emissiveMap.colorSpace = THREE.SRGBColorSpace;
          if (mat.roughnessMap)
            mat.roughnessMap.colorSpace = THREE.LinearSRGBColorSpace;
          if (mat.metalnessMap)
            mat.metalnessMap.colorSpace = THREE.LinearSRGBColorSpace;
          if (mat.normalMap)
            mat.normalMap.colorSpace = THREE.LinearSRGBColorSpace;
          // keď je príliš „metal“ bez env, uber:
          if ("metalness" in mat && mat.metalness > 0.9) mat.metalness = 0.5;
        };
        Array.isArray(m.material)
          ? m.material.forEach(apply)
          : apply(m.material);
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += speed * delta * 60;
  });

  return (
    <Center>
      <group
        ref={(node) => {
          group.current = node ?? null;
          if (typeof ref === "function") ref(node);
          else if (ref)
            (ref as React.RefObject<THREE.Group | null>).current = node;
        }}
        dispose={null}
        scale={scale}
        rotation={rotation}
      >
        {light && (
          <>
            <spotLight
              position={[0, 0, 2]}
              intensity={50}
              distance={50}
              color="#6F1D86"
              castShadow
            />
            <spotLight
              position={[10, 0, 0]}
              intensity={50}
              distance={50}
              color="#6F1D86"
              castShadow
            />
          </>
        )}
        <primitive object={scene} />
        <ContactShadows opacity={0.6} blur={2} far={15} resolution={1024} />
      </group>
    </Center>
  );
});

export default Roller;
