export interface Metric {
  id: string;
  value: string;
  label: string;
}

export const metrics: Metric[] = [
  {
    id: "1",
    value: "60+",
    label: "GLOBAL CLIENTS"
  },
  {
    id: "2",
    value: "14+",
    label: "YEARS OF EXPERIENCE"
  },
  {
    id: "3",
    value: "16+",
    label: "AWARDS WON"
  },
  {
    id: "4",
    value: "99%",
    label: "SUCCESS RATE"
  }
];
