import { Table, TableBody } from "@tremor/react";
import MarkerRow from "./MarkerRow";
import { sampleData as markers } from "./sampleData";

const MarkersList = () => {
  // const { value: markers } = useAsync(async () => {
  //   const { data } = await apis.markerListGet();
  //   return data;
  // });

  return (
    <div className="max-h-[35vh] overflow-auto">
      <Table>
        <TableBody>
          {markers?.map((marker) => (
            <MarkerRow marker={marker} key={marker.markerId} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MarkersList;

