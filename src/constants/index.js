// import project1 from "../assets/projects/project-1.jpg";
// import project2 from "../assets/projects/project-2.jpg";
// import project3 from "../assets/projects/project-3.jpg";
import pos from "../assets/projects/pos.png";
import koimed from "../assets/projects/koimed.png";
import sat from "../assets/projects/sat.png";
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in technologies like ReactJS, Spring Boot, WordPress, AWS, MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including ReactJS, Spring Boot, WordPress, AWS, MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.

`;

export const EXPERIENCES = [
  {
    year: "02/2024 - Present",
    role: "Full-Stack Developer",
    company: "SAT Mock Test System",
    description: `Designed and developed a user interface using ReactJS to replicate the real SAT Test environment with high accuracy. Built and implemented the backend system using Spring Boot and RestfulAPI. Developed teacher management features, enabling teachers to create tests, manage students, and assign them to specific mock exams.`,
    technologies: ["ReactJS", "Bootstrap", "Spring Boot", "MySQL", "JWT"],
  },
  {
    year: "03/2023 - 11/2023",
    role: "WordPress Developer",
    company: "TPK Enterprise Website",
    description: `Built and customized a corporate WordPress website based on Figma designs. Configured and deployed the website, ensuring responsiveness and alignment with company branding.`,
    technologies: ["WordPress", "Elementor"],
  },
];

export const PROJECTS = [
  
  {
    title: "Koi Veterinarian System",
    image: koimed,
    link: "https://koimed.anhtudev.works",
    description:
      "A web application designed for Koi fish veterinary services, featuring appointment booking, treatment scheduling, and pond health tracking. Integrated AWS S3, Google Login, and payment gateways like MoMo and VNPay.",
    technologies: ["ReactJS", "Ant Design", "Spring Boot", "AWS S3", "VNPay","Github Actions"],
  },
  {
    title: "SAT Mock Test System",
    image: sat,
    link: "https://sat.chasedream.edu.vn/",
    description:
      "A web-based platform that simulates the real SAT Test environment, allowing students to practice SAT tests in a realistic format and enabling teachers to manage tests, assign students, and review their results.",
    technologies: ["ReactJS", "Spring Boot", "MySQL", "JWT","Github Actions"],
  },
  {
    title: "POS Application",
    image: pos,
    link: "https://demo.anhtudev.works/POS",
    description:
      "A desktop POS system with barcode scanning functionality, supporting checkout processes, inventory management, and warehouse organization. Developed using WPF and .NET Framework.",
    technologies: ["C#", ".NET Framework", "WPF", "SQL Server"],
  },
];

export const CONTACT = {
  address: "Origami S801, Long Binh, Thu Duc, Ho Chi Minh City",
  phoneNo: "+84 3892 755 13 ",
  email: "dangmaianhtu@gmail.com",
};
