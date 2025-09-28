import { Billboard } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

interface HotspotProps {
  position: [number, number, number];
  isVisible: boolean;
  color?: string;
}

export function Hotspot({
  position,
  isVisible,
  color = "#E6FC6A",
}: HotspotProps) {
  const hotspotRef = useRef<THREE.Mesh>(null);

  return (
    <Billboard position={position} follow={true}>
      <mesh ref={hotspotRef} visible={isVisible}>
        <circleGeometry args={[0.1, 120]} />
        <meshStandardMaterial color={color} transparent opacity={1} />
      </mesh>

      <mesh
        visible={isVisible}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <circleGeometry args={[0.15, 120]} />
        <meshStandardMaterial color={color} transparent opacity={0.75} />
      </mesh>
    </Billboard>
  );
}
