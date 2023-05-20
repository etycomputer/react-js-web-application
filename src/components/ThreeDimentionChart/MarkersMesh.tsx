import React from "react";
import * as THREE from "three";
import { Marker } from "../../generatedApis";
import MarkerMesh from "./MarkerMesh";

interface PropsType {
  markers: Marker[];
  selectedMarkers: Marker[];
  setSelectedMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
}

function MarkersMesh({
  markers,
  selectedMarkers,
  setSelectedMarkers,
}: PropsType) {
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
    <>
      {markersToRender.map(([pos, marker], index) => {
        const isSelected = Boolean(
          selectedMarkers.find(({ markerId }) => markerId === marker.markerId)
        );

        return (
          <MarkerMesh
            key={index}
            position={pos}
            marker={marker}
            isSelected={isSelected}
            onClick={() => {
              if (isSelected) {
                setSelectedMarkers((prev) =>
                  prev.filter(({ markerId }) => markerId !== marker.markerId)
                );
              } else {
                setSelectedMarkers((prev) => [...prev, marker]);
              }
            }}
          />
        );
      })}
    </>
  );
}

export default MarkersMesh;

