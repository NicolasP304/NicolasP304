export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "stripe-payment-gateway-integration",
    title: "Stripe Payment Gateway Integration",
    subtitle: "Enterprise intranet form workflows (PHP-based)",
    description:
      "Implemented secure payment processing, improving transaction reliability and increasing client revenue from $5,000 to $15,000 (+200%).",
    tags: ["PHP", "Payments", "Security", "Automation"]
  },
  {
    slug: "gl-validation-system",
    title: "Capstone: GL Validation System",
    subtitle: "Power Apps, Power Automate, Oracle Fusion rules",
    description:
      "Led a team as SCRUM Master to build real-time validation for single and bulk General Ledger entries, reducing errors and improving finance workflow efficiency.",
    tags: ["Power Platform", "Scrum", "Validation"]
  },
  {
    slug: "social-feed-integration",
    title: "Social Feed Integration (Meta Graph API)",
    subtitle: "Client intranet enhancement",
    description:
      "Integrated a social media feed application with the Meta Graph API to surface content directly within the intranet.",
    tags: ["API", "JavaScript", "Integration"]
  }
];
