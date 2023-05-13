import { TableCell, TableRow } from "@tremor/react";
import { Marker } from "../../generatedApis";

interface PropsType {
  marker: Marker;
}

function MarkerRow({ marker }: PropsType) {
  return (
    <TableRow>
      <TableCell className="">{`${marker.node}.${marker.subnet}`}</TableCell>
      <TableCell className="">{"-"}</TableCell>
    </TableRow>
  );
}

export default MarkerRow;

