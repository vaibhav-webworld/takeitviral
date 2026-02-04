export interface HeroClient {
  id: string;
  name: string;
  followers: string;
  image: string;
  platform: 'instagram' | 'youtube' | 'tiktok';
}

export const heroClients: HeroClient[] = [
  {
    id: "1",
    name: "Chris Goode",
    followers: "38K+ Followers",
    image: "/placeholders/client-1.png",
    platform: "instagram"
  },
  {
    id: "2",
    name: "Bizzle",
    followers: "120K+ Followers",
    image: "/placeholders/client-2.png",
    platform: "instagram"
  },
  {
    id: "3",
    name: "Liah",
    followers: "243K+ Followers",
    image: "/placeholders/client-3.png",
    platform: "instagram"
  },
  {
    id: "4",
    name: "Daniel Del Carmen",
    followers: "25K+ Followers",
    image: "/placeholders/client-4.png",
    platform: "instagram"
  },
  {
    id: "5",
    name: "Shaien",
    followers: "10K+ Followers",
    image: "/placeholders/client-5.png",
    platform: "instagram"
  },
  {
    id: "6",
    name: "Christian Schutte",
    followers: "15K+ Followers",
    image: "/placeholders/client-6.png",
    platform: "instagram"
  }
];
