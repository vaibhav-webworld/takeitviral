export interface ShowcaseItem {
  id: string;
  title: string;
  thumbnail: string;
  type: 'short-form' | 'long-form';
  description?: string;
}

export const shortFormVideos: ShowcaseItem[] = [
  {
    id: "sf1",
    title: "Bessemer Venture Partners",
    thumbnail: "/placeholders/reel-1.png",
    type: "short-form",
    description: "have better risk capital"
  },
  {
    id: "sf2",
    title: "Earning Success",
    thumbnail: "/placeholders/reel-2.png",
    type: "short-form",
    description: "earning your success"
  },
  {
    id: "sf3",
    title: "The Brain",
    thumbnail: "/placeholders/reel-3.png",
    type: "short-form",
    description: "your brain potential"
  },
  {
    id: "sf4",
    title: "Stabledash",
    thumbnail: "/placeholders/reel-4.png",
    type: "short-form",
    description: "dashboard analytics"
  }
];

export const longFormVideos: ShowcaseItem[] = [
  {
    id: "lf1",
    title: "Podcast Interview",
    thumbnail: "/placeholders/longform-1.png",
    type: "long-form",
    description: "In-depth conversation"
  },
  {
    id: "lf2",
    title: "Developer Stories",
    thumbnail: "/placeholders/longform-2.png",
    type: "long-form",
    description: "developers and founders to understand how"
  },
  {
    id: "lf3",
    title: "Future of Longevity",
    thumbnail: "/placeholders/longform-3.png",
    type: "long-form",
    description: "the future of joyful longevity"
  }
];
