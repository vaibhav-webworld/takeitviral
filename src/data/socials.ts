export interface SocialCard {
  id: string;
  name: string;
  handle: string;
  followers: string;
  platform: "youtube" | "instagram" | "twitter" | "pinterest";
  avatar: string;
  url: string;
}

export const socialCards: SocialCard[] = [
  {
    id: "1",
    name: "QUANTUM PROJECT",
    handle: "@quantumproject",
    followers: "501K Subscribers",
    platform: "youtube",
    avatar: "/placeholders/social-1.png",
    url: "https://www.youtube.com/@quantumproject",
  },
  {
    id: "2",
    name: "INDIAN VIDEO SCHOOL",
    handle: "@indianvideoschool",
    followers: "65.9k Followers",
    platform: "instagram",
    avatar: "/placeholders/social-2.png",
    url: "https://www.instagram.com/indianvideoschool",
  },
  {
    id: "3",
    name: "THARUN NAIK",
    handle: "@tharunnaik",
    followers: "234k Followers",
    platform: "instagram",
    avatar: "/placeholders/social-3.png",
    url: "https://www.instagram.com/tharunnaik",
  },
  {
    id: "4",
    name: "THARUN SPEAKS",
    handle: "@tharunspeaks",
    followers: "846K Subscribers",
    platform: "youtube",
    avatar: "/placeholders/social-4.png",
    url: "https://www.youtube.com/@tharunspeaks",
  },
];
