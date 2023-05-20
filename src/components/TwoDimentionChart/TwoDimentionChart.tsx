import {
  CartesianGrid,
  Dot,
  Legend,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Marker } from "../../generatedApis";
import { getSampleData } from "./sampleData";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface PropsType {
  selectedMarkers: Marker[];
}

function TwoDimentionChart({ selectedMarkers }: PropsType) {
  const markersReadings = selectedMarkers.map((marker) => ({
    marker,
    readings: getSampleData(),
  }));

  return (
    <ResponsiveContainer width="99%" height="90%">
      <ScatterChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="temperature" />
        <Tooltip />
        <Legend />
        {markersReadings.map(({ marker, readings }, index) => (
          <Scatter
            key={`Marker ${marker.subnet}.${marker.node}`}
            name={`Marker ${marker.subnet}.${marker.node}`}
            data={readings.map((reading) => ({
              ...reading,
              timestamp: reading.timestamp.toLocaleString(),
            }))}
            fill={COLORS[index % COLORS.length]}
            line
            shape={(props) => <Dot {...props} r={props.payload.temperature} />}
          />
        ))}
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default TwoDimentionChart;

