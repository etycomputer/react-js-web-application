import { Tab, TabList } from "@tremor/react";
import React from "react";

type TabNameType = "3D" | "lineChart";

function ChartsContainer() {
  const [selectedTab, setSelectedTab] = React.useState<TabNameType>("3D");

  return (
    <div>
      <TabList
        defaultValue="markersList"
        onValueChange={(value) => setSelectedTab(value as TabNameType)}
        className="mb-6"
      >
        <Tab value="3D" text="3D" />
        <Tab value="lineChart" text="Line Chart" />
      </TabList>

      {selectedTab === "3D" ? <div /> : <div />}
    </div>
  );
}

export default ChartsContainer;

