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
    role: "UX Designer",
    content: "I love the customizable features that fit perfectly with our team's needs!",
    avatar: "/placeholders/testimonial-1.png"
  },
  {
    id: "2",
    name: "David Lee",
    role: "Senior Developer",
    content: "Suprema has streamlined our processes, significantly improving communication and project outcomes.",
    avatar: "/placeholders/testimonial-2.png"
  },
  {
    id: "3",
    name: "Rachel Adams",
    role: "Marketing Director",
    content: "With Suprema, our team collaboration has never been smoother or more efficient.",
    avatar: "/placeholders/testimonial-3.png"
  },
  {
    id: "4",
    name: "Mark Johnson",
    role: "Project Coordinator",
    content: "This tool has transformed our workflow. Incredibly intuitive and powerful.",
    avatar: "/placeholders/testimonial-4.png"
  },
  {
    id: "5",
    name: "Sarah Chen",
    role: "Creative Director",
    content: "The quality of content they produce is unmatched. Highly recommend!",
    avatar: "/placeholders/testimonial-5.png"
  },
  {
    id: "6",
    name: "Alex Rivera",
    role: "Startup Founder",
    content: "They helped us build an organic brand presence that truly resonates with our audience.",
    avatar: "/placeholders/testimonial-6.png"
  }
];
