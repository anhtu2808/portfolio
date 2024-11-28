import anh_an from "../assets/anh_an.png";
import anh_long from "../assets/anh_long.png";
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
    description: `As a full-stack developer for the SAT Mock Test System, I developed a responsive, realistic test interface for students and built backend APIs to manage question banks, assign tests, and monitor student results. I implemented CI/CD with GitHub Actions for smooth deployment, ensuring the system was user-friendly and fully optimized for both mobile and desktop device.`,
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
      "A web application designed for Koi fish veterinary services, It enables users to book veterinary appointments, manage treatment schedules, and track pond health. The system includes features for managing doctors, treatments, and service schedules, as well as providing news updates, service ratings, and user feedback. Perfect for ensuring the well-being of your Koi fish and maintaining a healthy pond environment.",
    technologies: ["ReactJS", "Redux", "Bootstrap"  , "Ant Design", "Spring Boot", "AWS S3", "VNPay", "Github Actions"],
  },
  {
    title: "SAT Mock Test System",
    image: sat,
    github: null,
    link: "https://sat.chasedream.edu.vn/",
    video: "https://www.youtube.com/embed/MdmjfHVekuA?si=LWdydJhoggkuLE83",
    description:
      "The SAT Mock Test System allows students to practice the SAT in an interface that closely resembles the actual exam. It also provides teachers with essential tools to manage question banks, create and assign tests, and monitor student results and progress effectively.",
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
