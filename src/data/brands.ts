import RedBullLogo from "@/assets/brands/redbull.svg";

export interface Brand {
  id: string;
  name: string;
  logo?: string;
}

export const brands: Brand[] = [
  { id: "1", name: "Blackbox.ai" },
  { id: "2", name: "Asklexy.me" },
  { id: "3", name: "TEDx" },
  { id: "4", name: "RedBull", logo: RedBullLogo },
  { id: "5", name: "Blackbox.ai" },
  { id: "6", name: "Asklexy.me" },
  { id: "7", name: "TEDx" },
  { id: "8", name: "RedBull", logo: RedBullLogo },
];
