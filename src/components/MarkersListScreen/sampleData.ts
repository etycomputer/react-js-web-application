import { Marker } from "../../generatedApis";

export const sampleData: Marker[] = Array.from(Array(10), (_v, i) => ({
  installPosition: { x: 0 + i, y: 1 + i, z: 2 + i },
  node: i,
  subnet: i,
  activated: i % 2 === 0,
  activationTime: new Date(),
  markerId: i,
}));

