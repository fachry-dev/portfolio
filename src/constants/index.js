import cvPdf from "../assets/docs/CV-Fachry-Rizky-Wardana.pdf";
import PulseFiImg from "../assets/img/PulseFi_Mockup.png";
import RamahTechImg from "../assets/img/flyer-ramah-teknologi.jpeg";
import QrScanImg from "../assets/img/flyer_qr_scanner.png";
import PayrollImg from "../assets/img/flyer_payroll.png";
import EcommerceImg from "../assets/img/flyer_ecommerce_flutter.png";
import TodoImg from "../assets/img/flyer_todo_app.png";
import SirImg from "../assets/img/Sir-Riyadh.jpg";
import MadaniImg from "../assets/img/Madani-Teach.jpg";

export const PROFILE = {
  name: "Fachry Rizky Wardana",
  role: "Full-Stack Software Developer",
  resumeUrl: cvPdf,
  email: "fachry.bussines@gmail.com",
};

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#experience", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const STACK_CATEGORIES = [
  {
    title: "FRONTEND",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "BACKEND",
    skills: ["MySQL", "PostgreSQL", "Laravel", "PHP"],
  },
  {
    title: "TOOLS",
    skills: ["Git", "Figma", "Firebase", "Postman"],
  },
  {
    title: "MOBILE",
    skills: ["Flutter", "Dart"],
  },
];

export const SERVICES = [
  {
    id: "01",
    title: "Web Development",
    icon: "fa-solid fa-laptop-code",
    desc: "Building high-performance, scalable, and interactive web applications using React/Next.js architectures backed by robust server-side integrations.",
  },
  {
    id: "02",
    title: "Mobile Development",
    icon: "fa-solid fa-mobile-screen-button",
    desc: "Crafting fluid, cross-platform mobile applications with Flutter, specializing in pixel-perfect UI slicing and seamless REST API integrations.",
  },
  {
    id: "03",
    title: "Full-Stack Development",
    icon: "fa-solid fa-layer-group",
    desc: "Bridging modern frontend interfaces with secure database management, including deployment and configuration on cloud ecosystems like AWS and GCP.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "PulseFi Platform",
    category: "Web",
    img: PulseFiImg,
    desc: "A modern financial behavior tracking platform using React.js and Tailwind CSS, featuring a real-time visual dashboard and scalable data management.",
    tags: ["React", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Website Corporate & HR Digital",
    category: "Web",
    img: RamahTechImg,
    desc: "A large-scale enterprise portal for company profile and digital HR management needs, built using Next.js and integrated with PostgreSQL database.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Frontend Development",
      "JavaScript",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    title: "ScanGo App",
    category: "Mobile",
    img: QrScanImg,
    desc: "A high-performance mobile ticketing scanner application built with Flutter. It features seamless high-speed QR code processing and real-time REST API integration for instant ticket validation and attendance synchronization.",
    tags: ["Flutter", "Dart", "REST API", "Mobile Dev"],
  },
  {
    id: 4,
    title: "E-Commerce App",
    category: "Mobile",
    img: EcommerceImg,
    desc: "A mobile e-commerce application for food products and healthy diet programs developed using Flutter, focusing on fluid UI/UX and responsive shopping cart management.",
    tags: ["Flutter", "Dart", "REST API"],
  },
  {
    id: 5,
    title: "Todo App",
    category: "Mobile",
    img: TodoImg,
    desc: "A mobile-based productivity application for recording assignments and tracking student SKL targets, implementing Flutter and Firebase for real-time data synchronization and built-in Face Detection features.",
    tags: ["Flutter", "Dart", "Firebase", "ML Kit"],
  },
  {
    id: 6,
    title: "Payroll Web - System Pengagajian",
    category: "Web",
    img: PayrollImg,
    desc: "A Laravel-based employee management and payroll application built to streamline digital HR administration, tracking attendance, and salary processing",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "PHP", "Laravel"],
  },
];

export const EXPERIENCE = [
  {
    id: "exp-1",
    date: "2026 (Feb - May)",
    role: "Project Software Developer",
    company: "PT Pratama Solusi Teknologi",
    location: "Purwakarta, Indonesia (Remote/Hybrid)",
    image: RamahTechImg,
    desc: "Responsible for developing and slicing large enterprise portals using Next.js and Tailwind CSS. Actively collaborate with the backend team for PostgreSQL database system integration and page rendering performance optimization.",
  },
  {
    id: "exp-2",
    date: "2025 (Aug)",
    role: "Web Development Trainer",
    company: "Sir Sekolah Indonesia Riyadh",
    location: "Riyadh, Saudi Arabia (International Exchange)",
    image: SirImg,
    desc: "International Web Development Trainer teaching core frontend fundamentals using HTML, CSS, and Tailwind CSS.",
  },
  {
    id: "exp-3",
    date: "2025 (May)",
    role: "Web Development Mentor",
    company: "SDIT Insan Madani",
    location: "Bekasi, West Java, Indonesia",
    image: MadaniImg,
    desc: "Served as a Frontend Web Development Trainer for school teachers and staff, delivering foundational concepts of HTML, CSS, and basic programming logic through interactive learning methods.",
  },
];

export const CERTIFICATIONS = [
  {
    id: "cert-1",
    title: "Belajar Penggunaan Generative AI",
    issuer: "Dicoding Indonesia",
    date: "Mei 2026",
    credentialId: "RVZK0G1QOZD5",
    credentialUrl: "https://www.dicoding.com/certificates/RVZK0G1QOZD5",
    certImg: "",
    skills: ["Generative AI", "Prompt Engineering", "Large Language Models"],
  },
  {
    id: "cert-2",
    title: "AI Praktis untuk Produktivitas",
    issuer: "Dicoding Indonesia",
    date: "Apr 2026",
    credentialId: "0LZ0Y4VYNX65",
    credentialUrl: "https://www.dicoding.com/certificates/0LZ0Y4VYNX65",
    // certImg: AiProductivityImg,
    skills: ["Generative AI", "Prompt Engineering", "AI Productivity Tools"],
  },
  {
    id: "cert-3",
    title: "Belajar Membuat Aplikasi Web dengan React",
    issuer: "Dicoding Indonesia",
    date: "Mar 2026",
    credentialId: "L4PQ96RK2PO1",
    credentialUrl: "https://www.dicoding.com/certificates/L4PQ96RK2PO1",
    // certImg: ReactImg,
    skills: ["React.js", "State Management", "Web Application Development"],
  },
  {
    id: "cert-4",
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
    credentialId: "MEPJOLMELZ3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJOLMELZ3V",
    // certImg: FrontendPemulaImg,
    skills: ["JavaScript", "DOM Manipulation", "HTML5", "CSS3 Layouts"],
  },
  {
    id: "cert-5",
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Feb 2026",
    credentialId: "53XEKVV4KXRN",
    credentialUrl: "https://www.dicoding.com/certificates/53XEKVV4KXRN",
    // certImg: JsDasarImg,
    skills: ["JavaScript Fundamentals", "Data Structures", "Control Flow"],
  },
  {
    id: "cert-6",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    credentialId: "MEPJ217VWP3V",
    credentialUrl: "https://www.dicoding.com/certificates/MEPJ217VWP3V",
    // certImg: WebDasarImg,
    skills: ["HTML Basics", "Semantic Web", "CSS Flexbox & Grid"],
  },
  {
    id: "cert-7",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Dicoding Indonesia",
    date: "Jan 2026",
    credentialId: "EYX4K3955PDL",
    credentialUrl: "https://www.dicoding.com/certificates/EYX4K3955PDL",
    // certImg: SoftwareDevDasarImg,
    skills: [
      "Software Engineering Fundamentals",
      "SDLC Methodology",
      "Programming Logic",
    ],
  },
  {
    id: "cert-8",
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Des 2025",
    credentialId: "1RXYQ33DQZVM",
    credentialUrl: "https://www.dicoding.com/certificates/1RXYQ33DQZVM",
    // certImg: FlutterPemulaImg,
    skills: [
      "Flutter UI Widget",
      "Mobile Layouting",
      "Stateful & Stateless Widget",
    ],
  },
  {
    id: "cert-9",
    title: "Memulai Pemrograman dengan Dart",
    issuer: "Dicoding Indonesia",
    date: "Nov 2025",
    credentialId: "1OP8JRQ6VPQK",
    credentialUrl: "https://www.dicoding.com/certificates/1OP8JRQ6VPQK",
    // certImg: DartDasarImg,
    skills: ["Dart OOP", "Asynchronous Programming", "Collections & Generics"],
  },
  {
    id: "cert-10",
    title: "IBM Introduction to Artificial Intelligence",
    issuer: "IBM",
    date: "Okt 2025",
    credentialId: "MDL-211",
    credentialUrl:
      "https://skills.yourlearning.ibm.com/certificate/share/165b2a71e7ewogICJsZWFybmVyQ05VTSIgOiAiNTY4MDI0OFJFRyIsCiAgIm9iamVjdElkIiA6ICJNREwtMjExIiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiCn0b279e564d4-10", // Sesuaikan jika kamu menyimpannya di platform tertentu
    // certImg: IbmAiImg,
    skills: [
      "Artificial Intelligence Concepts",
      "Machine Learning Intro",
      "AI Ethics",
    ],
  },
  {
    id: "cert-11",
    title: "IBM Introduction to Generative AI",
    issuer: "IBM",
    date: "Okt 2025",
    credentialId: "MDL-388",
    credentialUrl:
      "https://skills.yourlearning.ibm.com/certificate/share/b5ee1140a4ewogICJvYmplY3RJZCIgOiAiTURMLTM4OCIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAibGVhcm5lckNOVU0iIDogIjU2ODAyNDhSRUciCn064f6cd5ce3-10",
    // certImg: IbmGenAiImg,
    skills: ["Generative AI Models", "LLM Mechanics", "AI Engineering Basics"],
  },
  {
    id: "cert-12",
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    date: "Okt 2025",
    credentialId: "N9ZO2MM7RPG5",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZO2MM7RPG5",
    // certImg: DicodingAiDasarImg,
    skills: [
      "AI Fundamentals",
      "Neural Networks Intro",
      "Data Science Overview",
    ],
  },
];

export const TYPING_WORDS = [
  "Web Developer",
  "Full-Stack Developer",
  "Mobile Developer",
  "UI/UX Enthusiast",
];
