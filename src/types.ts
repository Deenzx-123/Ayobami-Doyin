export interface Project {
  id: string;
  title: string;
  category: string;
  positioning: string;
  description: string;
  problem: string;
  strategy: string;
  process: string[];
  solution: string;
  impact: string;
  designSystem?: string[];
  keyLearnings?: string[];
  futureImprovements?: string[];
  image: string;
  wireframeImage?: string;
  mockupImage?: string;
  gallery?: string[];
  flows?: { title: string; description: string; image: string }[];
  year: string;
  role: string;
  tags: string[];
  videoUrl?: string;
}