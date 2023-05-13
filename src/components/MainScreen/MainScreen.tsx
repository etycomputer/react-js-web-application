import { Card, Col, Grid } from "@tremor/react";
import ChartsContainer from "../ChartsContainer";
import MarkerDetails from "../MarkerDetails";
import MarkersList from "../MarkersList";
import { sampleData } from "../MarkersList/sampleData";

function MainScreen() {
  return (
    <main className="bg-slate-50 p-6 w-full min-h-screen">
      <Grid numCols={12} className="gap-2">
        <Col numColSpan={4}>
          <Card>
            <MarkersList />
          </Card>
          <Card className="mt-2">
            <MarkerDetails marker={sampleData[0]} />
          </Card>
        </Col>
        <Col numColSpan={8}>
          <Card className="h-full">
            <ChartsContainer />
          </Card>
        </Col>
      </Grid>
    </main>
  );
}

export default MainScreen;

