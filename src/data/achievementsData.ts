interface Achievement {
  id: number;
  title: string;
  description: string;
  metrics?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: 1,
    title: "Second Runner-up, Ideathon, JUET Guna",
    description: "Pitched and built a centralized placement platform for colleges.",
    metrics: "Improved workflow by 40%"
  },
  {
    id: 2,
    title: "Top 25 Finalist, Innovate 2.0 Hack To Build, JIT Noida",
    description: "Developed a QR-based Café Management System to enhance service efficiency.",
    metrics: "Increased service efficiency by 35%"
  },
  {
    id: 3,
    title: "Mentorship Impact at GFG Student Chapter",
    description: "Mentored juniors at GFG Student Chapter, improving their placement readiness.",
    metrics: "Mentored 50+ juniors"
  },
  {
    id: 4,
    title: "Event Organization Excellence",
    description: "Organized coding competitions and workshops with high participation rate.",
    metrics: "95% participation rate across 10+ events"
  }
];