import anh_an from "../assets/anh_an.png";
import people2 from "../assets/people-2.jpg";
import pos from "../assets/projects/pos.png";
import koimed from "../assets/projects/koimed.png";
import sat from "../assets/projects/sat.png";
import TPK from "../assets/projects/TPK.png";
export const HERO_CONTENT = `Welcome! I'm Tu, a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in technologies like ReactJS, Spring Boot, WordPress, MySQL, Github Actions, AWS and more.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including ReactJS, Spring Boot, WordPress, AWS, MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.

`;

export const EXPERIENCES = [
  {
    year: "02/2024 - Present",
    role: "Full-Stack Developer",
    company: "SAT Mock Test System",
    description: `Designed and developed a user interface using ReactJS to replicate the real SAT Test environment with high accuracy. Built and implemented the backend system using Spring Boot and RestfulAPI. Developed student management features, enabling teachers to create tests, manage students, and assign them to specific mock SAT tests.`,
    technologies: ["ReactJS", "Bootstrap", "Spring Boot", "MySQL", "CI/CD", "JWT"],
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
    github: "https://github.com/anhtu2808/Koi-Veterinary-Service-Center",
    link: "https://koimed.anhtudev.works",
    video: "https://www.youtube.com/embed/sSDgWOXnOhg?si=2bytXfmx5kbHXpdr",
    description:
      "A web application designed for Koi fish veterinary services, featuring appointment booking, treatment scheduling, and pond health tracking. Integrated AWS S3, Google Login, and payment gateways like MoMo and VNPay.",
    technologies: ["ReactJS", "Redux", "Bootstrap"  , "Ant Design", "Spring Boot", "AWS S3", "VNPay", "Github Actions"],
  },
  {
    title: "SAT Mock Test System",
    image: sat,
    github: null,
    link: "https://sat.chasedream.edu.vn/",
    video: "https://www.youtube.com/embed/oC5nO0AvOeE?si=QNMrPw9pYyJciKeK",
    description:
      "A web-based platform that simulates the real SAT Test environment, allowing students to practice SAT tests in a realistic format and enabling teachers to manage tests, assign students to do practice test/entrance test, and review their results.",
    technologies: ["ReactJS", "Redux", "Bootstrap", "Spring Boot", "MySQL", "MapStruct", "JWT", "Github Actions CI/CD"],
  },
  {
    title: "POS Application",
    image: pos,
    github: "https://github.com/anhtu2808/POS-Application",
    link: null,
    video: "https://www.youtube.com/embed/5yythVfMz_w?si=xSTpxuVNUqzaOWW-",
    description:
      "A Desktop Application with barcode scanning functionality, supporting checkout processes, inventory management, and warehouse organization. Developed using WPF and .NET Framework.",
    technologies: ["C#", ".NET Framework", "WPF", "SQL Server"],
  },
  {
    title: "TPK Enterprise Website",
    image: TPK,
    github: null,
    link: "https://tpk.tayninh.vn",
    video: null,
    description:
      "A corporate website for TPK Enterprise, featuring a responsive design and integration with WordPress.",
    technologies: ["WordPress", "Elementor", "SMTP", "Linux"],
  }
];

export const CONTACT = {
  address: "Origami S801, Long Binh, Thu Duc, Ho Chi Minh City",
  phoneNo: "+84 3892 755 13 ",
  email: "dangmaianhtu@gmail.com",
};

export const REVIEWS = [

  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: "Ethan Caldwell",
    image: people2,
    company: "NexaWave",
  },
  {
    content: 'Tú lúc nào cũng tỏa ra một niềm đam mê cháy bỏng với công nghệ thông tin, thái độ làm việc chuyên nghiệp và tinh thần trách nhiệm cao. Tú sẵn sàng vượt qua những thử thách, chịu khó học hỏi trau dồi chuyên môn để thực hiện được dự án mà ban đầu bạn chưa đủ năng lực để làm. Tú là một lập trình viên trẻ tài năng, đáng tin cậy để hợp tác và giao phó nhiệm vụ.',
    name: "Nguyen Ngoc An",
    image: anh_an,
    company: "SAT Chasedream",
  }
];
