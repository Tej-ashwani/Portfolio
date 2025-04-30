interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Coordinator",
    company: "GFG Student Chapter",
    period: "Jan 2023 - Aug 2024",
    responsibilities: [
      "Created coding resources, increasing student engagement by 30%.",
      "Organized 10+ coding competitions and workshops with 95% participation.",
      "Mentored 50+ juniors in DSA, web development, and problem-solving."
    ]
  }
];