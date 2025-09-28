import { Environment, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Roller from "./Roller";
import type { JSX } from "react";
import { Hotspot } from "../Hotspot";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function RollerScene(): JSX.Element {
  let isVisible = true;
  const isDesktop = useMediaQuery("(min-width: 950px)", false);
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <Canvas className="h-full w-full" shadows>
        <directionalLight
          position={[5, 10, 6]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-bias={-0.0005}
        />
        {/* jemné ambient */}
        <ambientLight intensity={0.15} />
        <group
          position={isDesktop ? [2, 0.7, 0] : [0.2, 0.7, 0]}
          rotation={[0.25, 4.75, -0.05]}
          scale={3}
          receiveShadow
        >
          <Roller />
        </group>
        <Environment files="/hdrs/warehouse-256.hdr" />
        <Hotspot isVisible position={[-0.25, 0, 3]} color="#c4bc23" />
        <Hotspot isVisible position={[0.5, 1, 3]} color="#851170" />
        <Hotspot isVisible position={[1.75, -0.25, 3]} color="#335DD7" />
      </Canvas>
    </div>
  );
}
