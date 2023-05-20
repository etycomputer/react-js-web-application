import { Card, Col, Grid } from "@tremor/react";
import React from "react";
import { Marker } from "../../generatedApis";
import ChartsContainer from "../ChartsContainer";
import MarkerDetails from "../MarkerDetails";
import MarkersList from "../MarkersList";

function MainScreen() {
  const [selectedMarkers, setSelectedMarkers] = React.useState<Marker[]>([]);

  return (
    <main className="bg-slate-50 p-6 w-full min-h-screen">
      <Grid numCols={12} className="gap-2">
        <Col numColSpan={4}>
          <Card>
            <MarkersList
              selectedMarkers={selectedMarkers}
              setSelectedMarkers={setSelectedMarkers}
            />
          </Card>
          <Card className="mt-2">
            <MarkerDetails
              marker={
                selectedMarkers.length === 1 ? selectedMarkers[0] : undefined
              }
            />
          </Card>
        </Col>
        <Col numColSpan={8}>
          <Card className="h-full">
            <ChartsContainer
              selectedMarkers={selectedMarkers}
              setSelectedMarkers={setSelectedMarkers}
            />
          </Card>
        </Col>
      </Grid>
    </main>
  );
}

export default MainScreen;

