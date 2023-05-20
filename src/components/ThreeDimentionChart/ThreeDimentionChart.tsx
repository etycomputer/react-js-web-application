import { CycleRaycast, Grid, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { Marker } from "../../generatedApis";
import MarkerTooltip from "./MarkerTooltip";
import MarkersMesh from "./MarkersMesh";

interface ThreeSceneProps {
  markers: Marker[];
  selectedMarkers: Marker[];
  setSelectedMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
}

function ThreeDimentionChart({
  markers,
  selectedMarkers,
  setSelectedMarkers,
}: ThreeSceneProps) {
  const [hoveredMarker, setHoveredMarker] = React.useState<Marker>();

  return (
    <>
      <Canvas camera={{ position: [0, 1, 35], fov: 90 }}>
        <hemisphereLight intensity={1} color="white" groundColor="red" />
        <MarkersMesh
          markers={markers}
          selectedMarkers={selectedMarkers}
          setSelectedMarkers={setSelectedMarkers}
        />
        <TrackballControls />
        <Grid infiniteGrid />
        <CycleRaycast
          // we can't type in inputs when it's equal to true.
          preventDefault={false}
          onChanged={(objects) => {
            setHoveredMarker(
              objects[0]?.object.userData?.marker as Marker | undefined
            );
            return null;
          }}
        />
      </Canvas>
      <MarkerTooltip marker={hoveredMarker} />
    </>
  );
}

export default ThreeDimentionChart;

