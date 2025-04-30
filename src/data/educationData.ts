interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score?: string;
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science",
    institution: "Jaypee University of Engineering & Technology",
    period: "2022-2026",
    location: "Guna, MP"
  },
  {
    id: 2,
    degree: "CBSE Class XII",
    institution: "Oxford Model Senior Secondary School",
    period: "2019-2021",
    location: "Kanpur, UP",
    score: "93.6%"
  }
];