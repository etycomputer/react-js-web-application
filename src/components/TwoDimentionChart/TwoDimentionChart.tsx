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
import { Reading } from "../../generatedApis";

interface PropsType {
  readings: Reading[];
}

function TwoDimentionChart({ readings }: PropsType) {
  return (
    <ResponsiveContainer width="99%" height="90%">
      <ScatterChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis dataKey="temperature" />
        <Tooltip />
        <Legend />
        <Scatter
          name={`Marker {marker.subnet}.{marker.node}`}
          data={readings.map((reading) => ({
            ...reading,
            timestamp: reading.timestamp.toLocaleString(),
          }))}
          fill="#8884d8"
          line
          shape={(props) => <Dot {...props} r={props.payload.temperature} />}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default TwoDimentionChart;

