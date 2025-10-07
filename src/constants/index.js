import anh_an from "../assets/anh_an.png";
import anh_long from "../assets/anh_long.png";
import koimed from "../assets/projects/koimed.png";
import sat from "../assets/projects/sat.png";
export const HERO_CONTENT = `Welcome! I'm Tu, A final-year Software Engineering student at FPT University and Full-Stack Software Engineer with hands-on experience in developing scalable web applications, backend APIs, and cloud deployments. Experienced in freelance projects, including building and deploying multi-tenant SaaS applications. Skilled in Java, React, AWS, and CI/CD, with strong problem-solving and teamwork abilities.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including ReactJS, Spring Boot, WordPress, AWS, MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.
`;

export const EXPERIENCES = [
  {
    year: "12/2024 - 06/2025",
    role: "Backend Developer Internship",
    company: "FPT Software",
    description: "Developed and maintained backend API services for a $10 million automotive startup in the Japanese market. Gained hands-on experience in deploying and troubleshooting applications on AWS, utilizing services such as Lambda, EC2, ECS, RDS, S3 and CloudWatch ",
    technologies: ["Python", "Fast API", "AWS (EC2, ECS, Lambda, RDS, IAM)", "Elasticsearch", "Microservices", "Docker"],
  },
  {
    year: "02/2024 - Present",
    role: "Full-Stack Developer",
    company: "SAT Chasedream",
    description: `As a Full-Stack Developer for SAT Chasedream, I designed and developed a multi-tenant LMS platform specialized for Digital SAT preparation. Built a responsive and realistic test-taking interface, and implemented backend APIs to manage question banks, test assignments, and student performance tracking. Integrate LLM to develop explanation feature. Streamlined deployment with GitHub Actions (CI/CD), ensuring a user-friendly, scalable, reliability system optimized for both mobile and desktop currently serving over 400 active users.`,
    technologies: ["ReactJS", "Bootstrap", "Spring Boot", "MySQL", "CI/CD", "JWT", "AWS(SES, SQS, S3)", "Docker"],
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
    title: "Metro Ticketing System",
    image: null,
    github: [
      { name: "Admin Portal", url: "https://github.com/anhtu2808/Metro-Admin" },
      { name: "Backend", url: "https://github.com/anhtu2808/Metro-Backend" },
      { name: "Mobile App", url: "https://github.com/anhtu2808/Metro-Mobile" }
    ],
    link: "https://metro.anhtudev.works",
    video: "https://www.youtube.com/embed/videoseries?si=Tgg3Is-NxhOnuPxe&amp;list=PLlolFUWzABBn56QjcVsYl5H4e6DBpEp0h",
    description:
      " a comprehensive mobile solution aimed at modernizing the urban travel experience within Ho Chi Minh City's public transit network. It is developed using Microservices architecture, with React Native for the mobile app and Spring Boot for the backend. The system includes features for managing users, tickets, and payments, as well as providing real-time updates on the status of the public transit network.",
    technologies: ["Spring Boot", "Docker", "Microservices", "MySQL", "Kafka", "ReactJS", "React Native", "Ant Design", "Redux Toolkit", "Redux Thunk", "Axios (Interceptor)"],
  },
  {
    title: "SAT Chasedream LMS",
    image: sat,
    github: null,
    link: "https://sat.chasedream.edu.vn/",
    video: "https://www.youtube.com/embed/XAtOByOhjAg?si=W2wxW8J994w4GZfq",
    description:
      "Chasdream LMS is a modern, multi-tenant SaaS platform specifically engineered for students and educational centers preparing for the Digital SAT. The platform is designed to precisely simulate the official Bluebook™ testing environment, offering an adaptive testing experience and a suite of powerful tools for personalized learning. It serves not only as an effective practice tool for students but also as a robust management solution for B2B clients like tutoring centers.",
    technologies: ["ReactJS", "Redux", "Bootstrap", "Spring Boot", "MySQL", "MapStruct", "JWT", "Github Actions CI/CD"],
  },
  {
    title: "Koi Veterinarian System",
    image: koimed,
    github: "https://github.com/anhtu2808/Koi-Veterinary-Service-Center",
    link: "https://koimed.anhtudev.works",
    video: "https://www.youtube.com/embed/sSDgWOXnOhg?si=2bytXfmx5kbHXpdr",
    description:
      "A web application designed for Koi fish veterinary services, It enables users to book veterinary appointments, manage treatment schedules, and track pond health. The system includes features for managing doctors, treatments, and service schedules, as well as providing news updates, service ratings, and user feedback. Perfect for ensuring the well-being of your Koi fish and maintaining a healthy pond environment.",
    technologies: ["ReactJS", "Redux", "Bootstrap", "Ant Design", "Spring Boot", "AWS S3", "VNPay", "Github Actions"],
  },

];

export const CONTACT = {
  address: "Origami S801, Long Binh, Thu Duc, Ho Chi Minh City",
  phoneNo: "+84 3892 755 13 ",
  email: "dangmaianhtu@gmail.com",
};

export const REVIEWS = [
  {
    content: 'Tú lúc nào cũng tỏa ra một niềm đam mê cháy bỏng với công nghệ thông tin, thái độ làm việc chuyên nghiệp và tinh thần trách nhiệm cao. Tú sẵn sàng vượt qua những thử thách, chịu khó học hỏi trau dồi chuyên môn để thực hiện được dự án mà ban đầu bạn chưa đủ năng lực để làm. Tú là một lập trình viên trẻ tài năng, đáng tin cậy để hợp tác và giao phó nhiệm vụ.',
    name: "Nguyen Ngoc An",
    image: anh_an,
    company: "SAT Chasedream",
  },
  {
    content: 'Một người làm việc rất có trách nhiệm và chuyên nghiệp. Luôn hoàn thành công việc đúng tiến độ, nhiệt tình hỗ trợ khi công ty cần chỉnh sửa. Rất hài lòng khi được hợp tác.',
    name: "Long Doan",
    image: anh_long,
    company: "TPK Tay Ninh Enterprise",
  }

];
