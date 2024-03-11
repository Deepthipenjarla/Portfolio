import React from 'react'; 
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaWindows,
  FaPython,  
} from "react-icons/fa";
import {
  DiNodejs,
  DiJavascript1
} from "react-icons/di";
import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVisualstudiocode, 
} from "react-icons/si";
import { AiOutlineWindows } from "react-icons/ai"; 

const Skills = ({ skill }) => {
  const getIcon = (skill) => {
    switch (skill.toLowerCase()) {
      case 'postman':
        return <SiPostman />;
      case 'react':
        return <FaReact />;
      case 'javascript':
        return <DiJavascript1 />;
      case 'node':
        return <DiNodejs />;
      case 'express':
        return <SiExpress />;
      case 'mongodb':
        return <SiMongodb />;
      case 'git':
        return <FaGitAlt />;
      case 'github':
        return <FaGithub />;
      case 'windows':
        return <FaWindows />;
      case 'vs':
        return <AiOutlineWindows />;
      case 'python':
        return <FaPython />;
      case 'visualstudiocode':
        return <SiVisualstudiocode />;
      default:
        return null;
    }
  };

  return (
    <div title={skill} className='SkillBox'>
      {getIcon(skill)}
    </div>
  );
}

export default Skills;
