import { Card, Tab, TabList } from "@tremor/react";
import React from "react";
import ListScreen from "./components/ListScreen";
import ChartScreen from "./components/ChartScreen";

type TabNameType = "list" | "chart";

function App() {
  const [selectedTab, setSelectedTab] = React.useState<TabNameType>("list");

  return (
    <main className="bg-slate-50 p-6 w-full h-screen">
      <TabList
        defaultValue="list"
        onValueChange={(value) => setSelectedTab(value as TabNameType)}
      >
        <Tab value="list" text="List" />
        <Tab value="chart" text="Chart" />
      </TabList>

      {selectedTab === "list" ? (
        <Card className="mt-6">
          <ListScreen />
        </Card>
      ) : (
        <Card className="mt-6">
          <ChartScreen />
        </Card>
      )}
    </main>
  );
}

export default App;

