export interface SocialCard {
  id: string;
  name: string;
  handle: string;
  followers: string;
  platform: "youtube" | "instagram" | "twitter" | "linkedin" | "x";
  avatar: string;
  url: string;
}

export const socialCards: SocialCard[] = [
  {
    id: "1",
    name: "Youtube",
    handle: "@Kanda_Speaks",
    followers: "2K Subscribers",
    platform: "youtube",
    avatar: "/placeholders/social-1.png",
    url: "https://www.youtube.com/@Kanda_Speaks",
  },
  {
    id: "2",
    name: "Instagram",
    handle: "@kanda_speaks",
    followers: "10k Followers",
    platform: "instagram",
    avatar: "/placeholders/social-2.png",
    url: "https://www.instagram.com/kanda_speaks",
  },
  {
    id: "3",
    name: "Linkedin",
    handle: "@Vaibhav_Kanda",
    followers: "3k Followers",
    platform: "linkedin",
    avatar: "/placeholders/social-3.png",
    url: "https://www.linkedin.com/in/vaibhavkanda/",
  },
  {
    id: "4",
    name: "X",
    handle: "@Kanda_Speaks",
    followers: "Follow Now :)",
    platform: "x",
    avatar: "/placeholders/social-4.png",
    url: "https://www.youtube.com/@tharunspeaks",
  },
];
