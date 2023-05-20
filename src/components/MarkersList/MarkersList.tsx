import { ListBox } from "primereact/listbox";
import { Marker } from "../../generatedApis";
import { sampleData as markers } from "./sampleData";

interface PropsType {
  selectedMarkers: Marker[];
  setSelectedMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
}

const MarkersList = ({ selectedMarkers, setSelectedMarkers }: PropsType) => {
  // const { value: markers } = useAsync(async () => {
  //   const { data } = await apis.markerListGet();
  //   return data;
  // });

  return (
    <ListBox
      filter
      multiple
      value={selectedMarkers}
      onChange={({ value }) => setSelectedMarkers(value)}
      options={markers?.map((marker) => ({
        name: `Marker ${marker.subnet}.${marker.node}`,
        marker,
      }))}
      optionLabel="name"
      optionValue="marker"
      listClassName="h-[33vh]"
    />
  );
};

export default MarkersList;

