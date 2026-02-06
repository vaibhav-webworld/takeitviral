export interface StrategyStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const strategySteps: StrategyStep[] = [
  {
    id: "1",
    number: 1,
    title: "Deep Dive Discovery",
    description:
      "We start by dissecting your brand, niche, and competitors to define a unique voice that cuts through the noise and resonates with your target audience.",
  },
  {
    id: "2",
    number: 2,
    title: "Viral Blueprinting",
    description:
      "We don't guess; we strategize. We script high-retention hooks, identify rising trends, and build a content roadmap designed to trigger the algorithm.",
  },
  {
    id: "3",
    number: 3,
    title: "High-Impact Production",
    description:
      "Our creative team takes over. We turn raw concepts into polished, viral-ready assets using dynamic editing, sound design, and visual storytelling.",
  },
  {
    id: "4",
    number: 4,
    title: "Launch & Dominate",
    description:
      "We execute the rollout with precision, analyzing performance metrics to optimize reach and turn passive views into tangible growth.",
  },
];
