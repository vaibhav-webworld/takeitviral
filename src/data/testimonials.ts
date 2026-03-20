export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
import Client1 from "@/assets/clients/1.png";
import Client2 from "@/assets/clients/2.png";
import Client3 from "@/assets/clients/3.png";
import Client6 from "@/assets/clients/6.jpeg";
import Client5 from "@/assets/clients/5.jpeg";


export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Jibran",
    role: "Content Creator",
    content: "I love how the edits perfectly match our brand’s vibe!",
    avatar: Client2
  },
  {
    id: "2",
    name: "Irfan Mohommad",
    role: "IOS Developer",
    content: "They make social media feel effortless I was able to focus on my placement session while they handled the content creation. Highly recommend!",
    avatar: Client1
  },
  {
    id: "3",
    name: "Taniya Milton",
    role: "Product Manager",
    content: "Their video helped me to get a job! Big shout out to Vaibhav and team!",
    avatar: Client3
  },
  {
    id: "4",
    name: "Kanishka",
    role: "Content Creator",
    content: "Helped to grow my Insta from 0 to 75k in just 6 months! Amazing work!",
    avatar: Client6
  },
  // {
  //   id: "5",
  //   name: "Sarah Chen",
  //   role: "Creative Director",
  //   content: "The quality of content they produce is unmatched. Highly recommend!",
  //   avatar: "/placeholders/testimonial-5.png"
  // },
  // {
  //   id: "6",
  //   name: "Alex Rivera",
  //   role: "Startup Founder",
  //   content: "They helped us build an organic brand presence that truly resonates with our audience.",
  //   avatar: "/placeholders/testimonial-6.png"
  // }
];
