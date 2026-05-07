// Centralized portfolio content for easy edits

export const profile = {
  name: "Jaime Rama Fernández",
  role: "MEng Electrical & Electronic Engineering @ Imperial",
  tagline: "Third-year Engineering student at Imperial College London with a First Class Honours grade, combining rigorous technical training in signal processing and machine learning with hands-on financial experience in M&A, valuation, and algorithmic trading.",
  location: "London, UK",
  links: {
    github: "https://github.com/jaimerama",
    linkedin: "https://www.linkedin.com/in/jaimerama/",
    email: "mailto:jaimeramaf@gmail.com",
  },
};

import profilePhoto from "@/assets/IMG_8641.jpg";
import deutscheLogo from "@/assets/deutsche.png";
import ibmLogo from "@/assets/IBM.jpg";
import lseLogo from "@/assets/LSE.png";
import tescoDcf from "@/assets/tesco_dcf.png";
import lseproject from "@/assets/LSE_project.png";
import ghost from "@/assets/ghost.png";
import tesc from "@/assets/TESCO_PROJ.png";
import collage from "@/assets/collage.png";
import optiv from "@/assets/optiverlogo.png";
import salvos from "@/assets/salvos.jpeg";
import IMP from "@/assets/imperial-logo.png";
import SMM from "@/assets/SMM.png";

export const profileImage = profilePhoto;

export const experience = [
  {
    company: "Salvos Technologies",
    role: "Control Team Lead",
    period: "Sep 2024 – March 2026",
    logo: salvos,
    points: [
      "Led weekly project milestones across interdependent workstreams, achieving a 95% on-time delivery rate.",
      "Designed fail-safe strategies to mitigate critical safety risks and negotiated resources with senior leadership.",
    ],
  },
  {
    company: "Optiver",
    role: "Algorithmic Trading Programme Trainee",
    period: "May 2025 – Jun 2025",
    logo: optiv,
    points: [
      "Tested options pricing, arbitrage, and market-making strategies in a simulated trading environment.",
      "Evaluated liquidity dynamics, pricing efficiency, and execution timing to refine trading decisions.",
    ],
  },
];

export interface ProjectItem {
  title: string;
  blurb: string;
  repoUrl?: string;
  websiteUrl?: string;
  image: string;
  details: string;
  stack: string[];
  award?: string;
}

export const projects: ProjectItem[] = [
  {
    title: "S&P 500 Market-Cap Predictor",
    blurb: "Regression model predicting market capitalisation from financial ratios.",
    image: lseproject,
    details:
      "Built a market-cap prediction model using 15 financial ratios across S&P 500 companies, achieving R² ≈ 0.76. Segmented firms by risk-return profile using PCA and K-means to support the application of public market comparables to private company valuation.",
    stack: ["Python", "Machine Learning", "PCA", "K-means", "Financial Analysis"],
  },
  {
    title: "Low-Latency Edge AI on Raspberry Pi",
    blurb: "Building a local voice-based AI assistant on Raspberry Pi using IBM Granite.",
    image: ghost,
    details:
      "This project focuses on deploying an IBM Granite LLM on Raspberry Pi to deliver fully local inference in a resource-constrained environment. It examines the trade-offs between latency, hardware limitations and usability, while integrating voice-based interaction and anomaly-detection features into a portable privacy-first prototype.",
    stack: ["IBM Granite", "Raspberry Pi", "Edge AI", "Python", "Voice Interfaces"],
  },
  {
    title: "Tesco DCF Valuation Model",
    blurb: "Full discounted cash flow model with sensitivity analysis.",
    image: tesc,
    details:
      "Built a full DCF model on Tesco as part of an Imperial College Corporate Finance project. Forecasted key operating drivers, estimated beta and WACC, valued the business using GGM and exit multiples, and conducted sensitivity analysis on core assumptions.",
    stack: ["Excel", "DCF", "WACC", "Financial Modelling", "Sensitivity Analysis"],
  },
  {
    title: "ECG & Adaptive Filtering",
    blurb: "Signal processing projects in ECG analysis and LMS filtering.",
    image: collage,
    details:
      "Projects in ECG signal processing, Wiener filtering, LMS adaptive filtering variants including gear-shifting and sign-based approaches, AR process identification, and speech signal analysis. Implemented in MATLAB as part of Advanced Signal Processing coursework.",
    stack: ["MATLAB", "Signal Processing", "ECG", "AR Models"],
  },
];

export const education = [
  {
    school: "Imperial College London",
    degree: "MEng Electrical & Electronic Engineering with Management",
    period: "2023 – 2027",
    notes: "First Class Honours, 74%. Modules: Machine Learning, Deep Learning, Statistical Signal Processing, Control Systems, Communication Networks, Power Electronics, Corporate Finance, Accounting.",
    logo: IMP,
  },
  {
    school: "Santa María del Mar",
    degree: "Secondary Education",
    period: "Graduated 2023",
    notes: "Final grade: 9.55/10. Class President, Physics Olympiad team, UNESCO project leader.",
    logo: SMM,
  },
];

export const languages = [
  { name: "Spanish & Galician", level: "Native", flag: "🇪🇸", countryCode: "es" },
  { name: "English", level: "Bilingual", flag: "🇬🇧", countryCode: "gb" },
  { name: "French", level: "Advanced", flag: "🇫🇷", countryCode: "fr" },
  { name: "Portuguese", level: "Intermediate", flag: "🇵🇹", countryCode: "pt" },
];

export const techSkills = {
  languages: ["Python", "MATLAB", "C++", "Excel", "PowerPoint"],
  tools: ["DCF Modelling", "WACC", "Beta Estimation", "Comparable Company Analysis", "Capital Structure"],
  web: ["Machine Learning", "Signal Processing", "Deep Learning", "Edge AI"],
};


export interface AwardItem {
  title: string;
  org: string;
  date: string;
  details: string;
  image?: string;
}

export const awards: AwardItem[] = [
  {
    title: "Deutsche Bank M&A Case Study Workshop",
    org: "Deutsche Bank",
    date: "Oct 2025",
    details: "Selected participant. Analysed 5 acquisition targets for a £10bn EV client. Built mock financing structure for a £4.4bn transaction.",
    image: deutscheLogo,
  },
  {
    title: "Applied Machine Learning",
    org: "London School of Economics",
    date: "Jul 2025",
    details: "Built market-cap prediction model (R² ≈ 0.76) and applied PCA/K-means for firm segmentation.",
    image: lseLogo,
  },
  {
    title: "Corporate Finance Valuation Project",
    org: "Imperial College London",
    date: "Feb 2026",
    details: "Full DCF model on Tesco with GGM, exit multiples, WACC estimation, and sensitivity analysis.",
    image: tescoDcf,
  },
  {
    title: "IBM Consultancy Project",
    org: "IBM",
    date: "Apr – Jun 2026",
    details: "Developing a practical edge-AI concept using Granite LLM as part of an IBM consultancy project. Assessing use cases and shaping a low-cost prototype focused on privacy, accessibility and local deployment.",
    image: ibmLogo,
  },
];

export const volunteering = [
  {
    title: "Sponsorship Officer — Imperial College London Basketball",
    period: "May 2024 – Sep 2025",
    details: "Negotiated sponsorships for the university basketball club, supporting team funding and operations.",
  },
  {
    title: "Volunteer Educator — Entreculturas",
    period: "Oct 2022 – Jun 2023",
    details: "Delivered after-school lessons for underprivileged children, adapting material to different learning needs.",
  },
];