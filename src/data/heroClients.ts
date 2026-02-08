export interface HeroClient {
  id: string;
  name: string;
  followers: string;
  image: string;
  platform: "instagram" | "youtube" | "tiktok";
}

import Client1 from "@/assets/clients/1.png";
import Client2 from "@/assets/clients/2.png";
import Client3 from "@/assets/placeholders/client-1.png";
import Client4 from "@/assets/placeholders/client-2.png";
import Client5 from "@/assets/placeholders/client-3.png";
import Client6 from "@/assets/placeholders/client-4.png";
export const heroClients: HeroClient[] = [
  {
    id: "1",
    name: "Irfan Mohammad",
    followers: "",
    image: Client1,
    platform: "instagram",
  },
  {
    id: "2",
    name: "Jibran",
    followers: "",
    image: Client2,
    platform: "instagram",
  },
  {
    id: "3",
    name: "Liah",
    followers: "243K+ Followers",
    image: Client3,
    platform: "instagram",
  },
  {
    id: "4",
    name: "Daniel Del Carmen",
    followers: "25K+ Followers",
    image: Client4,
    platform: "instagram",
  },
  {
    id: "5",
    name: "Shaien",
    followers: "10K+ Followers",
    image: Client5,
    platform: "instagram",
  },
  {
    id: "6",
    name: "Christian Schutte",
    followers: "15K+ Followers",
    image: Client6,
    platform: "instagram",
  },
];
