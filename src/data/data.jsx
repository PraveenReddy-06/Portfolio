import { FaJava, FaReact, FaGitAlt, FaNetworkWired } from "react-icons/fa";
import { SiMysql, SiSpringboot, SiTailwindcss, SiHibernate, SiCanva } from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { MdStorage, MdPsychology } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsFileEarmarkWord, BsFileEarmarkExcel } from "react-icons/bs";

const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "MySQL", icon: SiMysql },
      { name: "Hibernate", icon: SiHibernate },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    category: "Core CS",
    skills: [
      { name: "Data Structures", icon: TbBinaryTree },
      { name: "OOP", icon: PiBracketsCurlyBold },
      { name: "DBMS", icon: MdStorage },
      { name: "Computer Networks", icon: FaNetworkWired },
      { name: "AI / ML", icon: MdPsychology },
      { name: "Neural Networks", icon: MdPsychology },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Power BI", icon: AiOutlinePoweroff },
      { name: "Canva", icon: SiCanva },
      { name: "Word", icon: BsFileEarmarkWord },
      { name: "Excel", icon: BsFileEarmarkExcel },
    ],
  },
];

export default skillsData;