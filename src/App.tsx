import { Tab, TabList } from "@tremor/react";
import React from "react";
import ChartScreen from "./components/ChartScreen";
import MarkersListScreen from "./components/MarkersListScreen";

type TabNameType = "markersList" | "chart";

function App() {
  const [selectedTab, setSelectedTab] =
    React.useState<TabNameType>("markersList");

  return (
    <main className="bg-slate-50 p-6 w-full min-h-screen">
      <TabList
        defaultValue="markersList"
        onValueChange={(value) => setSelectedTab(value as TabNameType)}
        className="mb-6"
      >
        <Tab value="markersList" text="List" />
        <Tab value="chart" text="Chart" />
      </TabList>

      {selectedTab === "markersList" ? <MarkersListScreen /> : <ChartScreen />}
    </main>
  );
}

export default App;

