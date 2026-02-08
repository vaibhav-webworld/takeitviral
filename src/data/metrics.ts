export interface Metric {
  id: string;
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  {
    id: "1",
    value: "20+",
    label: "GLOBAL CLIENTS",
  },
  {
    id: "2",
    value: "150+ M",
    label: "VIEW GENERATED",
  },
  {
    id: "3",
    value: "1 : 1",
    label: "DIRECT SUPPORT",
  },
  {
    id: "4",
    value: "100%",
    label: "SATISFACTION RATE",
  },
];
