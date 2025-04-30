interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C++", "C", "Python", "JavaScript"]
  },
  {
    category: "Web Development",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML", "CSS3", "Bootstrap", "Node.js", "Express.js"]
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "Rest APIs", "NLTK", "Streamlit"]
  }
];