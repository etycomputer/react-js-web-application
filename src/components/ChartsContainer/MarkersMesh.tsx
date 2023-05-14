import { Select } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { Marker } from "../../generatedApis";
import MarkerMesh from "./MarkerMesh";

function MarkersMesh({ markers }: { markers: Marker[] }) {
  const [selected, setSelected] = React.useState<THREE.Object3D[]>([]);
  // const selected = useSelect();
  const markersToRender = React.useMemo(() => {
    const spherical = new THREE.Spherical();

    return markers.map<[THREE.Vector3, Marker]>((marker) => [
      new THREE.Vector3().setFromSpherical(
        spherical.setFromCartesianCoords(
          marker.installPosition.x,
          marker.installPosition.y,
          marker.installPosition.z
        )
      ),
      marker,
    ]);
  }, [markers]);

  return (
    <Select multiple box onChange={setSelected}>
      {markersToRender.map(([pos, marker], index) => (
        <MarkerMesh key={index} position={pos} marker={marker} />
      ))}
    </Select>
  );
}

export default MarkersMesh;

