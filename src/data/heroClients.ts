export interface HeroClient {
  id: string;
  name: string;
  followers: string;
  image: string;
  platform: "instagram" | "youtube" | "tiktok";
}

import Client1 from "@/assets/clients/1.png";
import Client2 from "@/assets/clients/2.png";
import Client3 from "@/assets/clients/3.png";
import Client4 from "@/assets/clients/4.png";
import Client5 from "@/assets/clients/5.jpg";
import Client6 from "@/assets/clients/6.jpeg";
import Client6a from "@/assets/clients/6.png";

export const heroClients: HeroClient[] = [
  {
    id: "1",
    name: "Jibran",
    followers: "",
    image: Client2,
    platform: "instagram",
  },
  {
    id: "2",
    name: "Irfan Mohammad",
    followers: "",
    image: Client1,
    platform: "instagram",
  },
  {
    id: "3",
    name: "Tanya Milton",
    followers: "",
    image: Client3,
    platform: "instagram",
  },
  {
    id: "4",
    name: "Vir Garg",
    followers: "",
    image: Client4,
    platform: "instagram",
  },
  {
    id: "5",
    name: "Kanishka",
    followers: "75K+ Followers",
    image: Client6,
    platform: "instagram",
  },
  {
    id: "6",
    name: "Khushi Bagari",
    followers: "6K+ Followers",
    image: Client6a,
    platform: "instagram",
  },
];
