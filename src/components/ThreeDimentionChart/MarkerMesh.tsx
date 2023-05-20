import { Sphere, useCursor } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { Marker } from "../../generatedApis";

interface PropsType {
  position: THREE.Vector3;
  marker: Marker;
  onClick: () => void;
  isSelected: boolean;
}

function MarkerMesh({ position, marker, onClick, isSelected }: PropsType) {
  const meshRef = React.useRef<THREE.Mesh | null>(null);

  const [hovered, setHovered] = React.useState(false);

  useCursor(hovered);

  return (
    <Sphere
      userData={{ marker }}
      position={position}
      ref={meshRef}
      scale={isSelected ? 0.6 : 0.5}
      onPointerOver={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={() => onClick()}
    >
      <meshStandardMaterial
        color={hovered ? "hotpink" : isSelected ? "blue" : "orange"}
      />
    </Sphere>
  );
}

export default MarkerMesh;

