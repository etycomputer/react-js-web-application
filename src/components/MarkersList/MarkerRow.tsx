import { TableCell, TableRow } from "@tremor/react";
import { Marker } from "../../generatedApis";

interface PropsType {
  marker: Marker;
}

function MarkerRow({ marker }: PropsType) {
  return (
    <TableRow>
      <TableCell className="">{`Marker ${marker.subnet}.${marker.node}`}</TableCell>
    </TableRow>
  );
}

export default MarkerRow;

