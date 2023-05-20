import { Tab, TabList } from "@tremor/react";
import React from "react";
import { Marker } from "../../generatedApis";
import { sampleData as markers } from "../MarkersList/sampleData";
import ThreeDimentionChart from "../ThreeDimentionChart";
import TwoDimentionChart from "../TwoDimentionChart";

type TabNameType = "3D" | "2D";

interface PropsType {
  selectedMarkers: Marker[];
  setSelectedMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
}

function ChartsContainer({ selectedMarkers, setSelectedMarkers }: PropsType) {
  const [selectedTab, setSelectedTab] = React.useState<TabNameType>("3D");

  return (
    <div className="h-[84vh] overflow-hidden">
      <TabList
        defaultValue="3D"
        onValueChange={(value) => setSelectedTab(value as TabNameType)}
        className="mb-6"
      >
        <Tab value="3D" text="3D" />
        <Tab value="2D" text="2D" />
      </TabList>

      {selectedTab === "3D" ? (
        <ThreeDimentionChart
          markers={markers}
          selectedMarkers={selectedMarkers}
          setSelectedMarkers={setSelectedMarkers}
        />
      ) : (
        <TwoDimentionChart selectedMarkers={selectedMarkers} />
      )}
    </div>
  );
}

export default ChartsContainer;

