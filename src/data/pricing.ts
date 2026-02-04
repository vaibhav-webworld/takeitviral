export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "STARTER PLAN",
    price: 499,
    period: "MONTH",
    description: "Our basic pricing plan is designed to offer extraordinary value and features.",
    features: [
      { name: "ALL TEMPLATES UNLOCKED", included: true },
      { name: "UNLIMITED REQUESTS", included: true },
      { name: "UNLIMITED REVISIONS", included: true },
      { name: "PROJECT MANAGEMENT", included: true },
      { name: "ACCESS TO ALL SERVICES", included: false },
      { name: "PAUSE OR CANCEL ANYTIME", included: false },
      { name: "EMAIL SUPPORT", included: false },
    ]
  },
  {
    id: "growth",
    name: "GROWTH PLAN",
    price: 799,
    period: "MONTH",
    description: "Our pro pricing plan is designed for a businesses with advanced features.",
    popular: true,
    features: [
      { name: "ALL TEMPLATES UNLOCKED", included: true },
      { name: "UNLIMITED REQUESTS", included: true },
      { name: "UNLIMITED REVISIONS", included: true },
      { name: "PROJECT MANAGEMENT", included: true },
      { name: "ACCESS TO ALL SERVICES", included: true },
      { name: "PAUSE OR CANCEL ANYTIME", included: false },
      { name: "EMAIL SUPPORT", included: false },
    ]
  },
  {
    id: "premium",
    name: "PREMIUM PLAN",
    price: 1299,
    period: "MONTH",
    description: "Our plus pricing plan is designed for a corporate with premium support.",
    features: [
      { name: "ALL TEMPLATES UNLOCKED", included: true },
      { name: "UNLIMITED REQUESTS", included: true },
      { name: "UNLIMITED REVISIONS", included: true },
      { name: "PROJECT MANAGEMENT", included: true },
      { name: "ACCESS TO ALL SERVICES", included: true },
      { name: "PAUSE OR CANCEL ANYTIME", included: true },
      { name: "EMAIL SUPPORT", included: true },
    ]
  }
];
