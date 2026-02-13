export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Tom Sanders",
    role: "Lifestyle Creator • 120K Followers",
    content: "They turned my raw footage into cinematic reels. My engagement tripled in the first month — I went from 2K views to consistently hitting 50K+.",
    avatar: "/placeholders/testimonial-1.png"
  },
  {
    id: "2",
    name: "David Lee",
    role: "Tech YouTuber • 500K Subscribers",
    content: "The editing quality is insane. They understand pacing, hooks, and retention like no other team I've worked with. My watch time is up 40%.",
    avatar: "/placeholders/testimonial-2.png"
  },
  {
    id: "3",
    name: "Rachel Adams",
    role: "Marketing Director • SaaS Startup",
    content: "We needed someone who could make B2B content feel exciting. They delivered trailers and shorts that actually got our audience talking.",
    avatar: "/placeholders/testimonial-3.png"
  },
  {
    id: "4",
    name: "Mark Johnson",
    role: "Fitness Coach • Personal Brand",
    content: "From strategy to execution, they handled everything. My Instagram grew from 5K to 80K organically in 6 months. The content speaks for itself.",
    avatar: "/placeholders/testimonial-4.png"
  },
  {
    id: "5",
    name: "Sarah Chen",
    role: "Creative Director • Agency Owner",
    content: "As someone in the creative industry, I have high standards. Take It Viral didn't just meet them — they exceeded every expectation.",
    avatar: "/placeholders/testimonial-5.png"
  },
  {
    id: "6",
    name: "Alex Rivera",
    role: "Startup Founder • E-commerce",
    content: "They helped us build an organic brand presence that truly resonates with our audience. Our content now converts — we've seen a 3x increase in inbound leads.",
    avatar: "/placeholders/testimonial-6.png"
  }
];
