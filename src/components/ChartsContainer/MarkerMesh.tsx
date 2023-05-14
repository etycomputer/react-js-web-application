import { Sphere, useCursor } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { Marker } from "../../generatedApis";

function MarkerMesh({
  position,
  marker,
}: {
  position: THREE.Vector3;
  marker: Marker;
}) {
  const meshRef = React.useRef<THREE.Mesh | null>(null);

  const [hovered, setHovered] = React.useState(false);

  useCursor(hovered);

  return (
    <Sphere
      userData={{ marker }}
      position={position}
      ref={meshRef}
      scale={0.5}
      onPointerOver={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </Sphere>
  );
}

export default MarkerMesh;

