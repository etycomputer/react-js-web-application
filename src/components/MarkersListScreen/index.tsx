import {
  Card,
  Table,
  TableBody,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import MarkerRow from "./MarkerRow";
import { sampleData as markers } from "./sampleData";

const MarkersListScreen = () => {
  // const { value: markers } = useAsync(async () => {
  //   const { data } = await apis.markerListGet();
  //   return data;
  // });

  return (
    <Card>
      <Title>Markers</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell className="text-center">Id</TableHeaderCell>
            <TableHeaderCell className="text-center">Node</TableHeaderCell>
            <TableHeaderCell className="text-center">Subnet</TableHeaderCell>
            <TableHeaderCell className="text-center">X</TableHeaderCell>
            <TableHeaderCell className="text-center">Y</TableHeaderCell>
            <TableHeaderCell className="text-center">Z</TableHeaderCell>
            <TableHeaderCell className="text-center">Status</TableHeaderCell>
            <TableHeaderCell className="text-center">
              Activation Time
            </TableHeaderCell>
            <TableHeaderCell className="text-center w-44">Actions</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {markers?.map((marker) => (
            <MarkerRow marker={marker} key={marker.markerId} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default MarkersListScreen;

