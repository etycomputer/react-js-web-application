import { Reading } from "../../generatedApis";

export const getSampleData: () => Reading[] = () => [
  {
    timestamp: new Date("2023-05-01"),
    temperature: Math.ceil(Math.random() * 20),
    readingId: Math.ceil(Math.random() * 16),
    porePressure: Math.ceil(Math.random() * 5),
  },
  {
    timestamp: new Date("2023-05-02"),
    temperature: Math.ceil(Math.random() * 20),
    readingId: Math.ceil(Math.random() * 16),
    porePressure: Math.ceil(Math.random() * 5),
  },
  {
    timestamp: new Date("2023-05-03"),
    temperature: Math.ceil(Math.random() * 20),
    readingId: Math.ceil(Math.random() * 16),
    porePressure: Math.ceil(Math.random() * 5),
  },
  {
    timestamp: new Date("2023-05-04"),
    temperature: Math.ceil(Math.random() * 20),
    readingId: Math.ceil(Math.random() * 16),
    porePressure: Math.ceil(Math.random() * 5),
  },
  {
    timestamp: new Date("2023-05-05"),
    temperature: Math.ceil(Math.random() * 20),
    readingId: Math.ceil(Math.random() * 16),
    porePressure: Math.ceil(Math.random() * 5),
  },
  {
    timestamp: new Date("2023-05-06"),
    temperature: Math.ceil(Math.random() * 20),
    readingId: Math.ceil(Math.random() * 16),
    porePressure: Math.ceil(Math.random() * 5),
  },
];

