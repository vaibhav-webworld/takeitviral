export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What's your typical process for a new project?",
    answer: "We start with a discovery call to understand your brand, goals, and target audience. From there, we create a content strategy, develop a production timeline, and begin creating high-quality content tailored to your needs."
  },
  {
    id: "2",
    question: "How long does a project usually take?",
    answer: "Timeline varies based on project scope. Short-form content packages typically take 1-2 weeks, while comprehensive brand campaigns can take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    id: "3",
    question: "Do you offer packages or custom quotes?",
    answer: "We offer both! We have structured packages for common needs, but we also create custom solutions for unique requirements. Every brand is different, and we're flexible in how we work with you."
  },
  {
    id: "4",
    question: "What's included in a branding package?",
    answer: "Our branding packages include content strategy, visual identity guidelines, social media templates, short-form video production, and ongoing support. We ensure your brand has a cohesive presence across all platforms."
  },
  {
    id: "5",
    question: "Can you work with our existing dev or marketing team?",
    answer: "Absolutely! We frequently collaborate with in-house teams and agencies. We can integrate seamlessly into your existing workflows and provide assets in any format your team needs."
  }
];
