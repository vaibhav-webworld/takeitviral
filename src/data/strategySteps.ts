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
    title: "Listening to Your Vision",
    description: "We begin by discussing your goals, audience, and expectations to ensure our approach aligns perfectly with your vision."
  },
  {
    id: "2",
    number: 2,
    title: "Planning with Purpose",
    description: "We analyze trends, competitors, and opportunities to craft a strategic roadmap tailored to your needs."
  },
  {
    id: "3",
    number: 3,
    title: "Visualizing Your Ideas",
    description: "Creative concepts come to life as we design user-friendly and visually appealing solutions."
  },
  {
    id: "4",
    number: 4,
    title: "Bringing It to Life",
    description: "Using cutting-edge technologies, we develop and implement your project with precision and care."
  }
];
