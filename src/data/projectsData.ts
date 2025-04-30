interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Centralized Training and Placement Portal",
    description: "A centralized portal for college placement management with student registration, email verification, and hiring updates, improving workflow by 40%.",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "https://github.com/Tej-ashwani/T-P"
  },
  {
    id: 2,
    title: "Learn Together",
    description: "An ed-tech platform for course enrollment, progress tracking, and discussion forums, enhancing user engagement by 55%.",
    tools: ["React.js", "Express.js", "Node.js", "MongoDB"],
    image: "https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "https://github.com/Tej-ashwani/StudyNotion"
  },
  {
    id: 3,
    title: "Resume Analyzer Tool",
    description: "An NLP-powered tool to evaluate resumes against job descriptions, achieving 92% accuracy in keyword matching and improving ATS scores by 30-40%.",
    tools: ["Python", "NLP", "Streamlit"],
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "https://github.com/Tej-ashwani/Resume-Analyser-Minor"
  }
];