import { CycleRaycast, Grid, TrackballControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

import { Marker } from "../../generatedApis";
import MarkerTooltip from "./MarkerTooltip";
import MarkersMesh from "./MarkersMesh";

interface ThreeSceneProps {
  markers: Marker[];
}

function ThreeDimentionChart({ markers }: ThreeSceneProps) {
  const [hoveredMarker, setHoveredMarker] = React.useState<Marker>();

  return (
    <>
      <Canvas camera={{ position: [0, 1, 35], fov: 90 }}>
        <hemisphereLight intensity={1} color="white" groundColor="red" />
        <MarkersMesh markers={markers} />
        <TrackballControls />
        <Grid infiniteGrid />
        <CycleRaycast
          preventDefault={true}
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

