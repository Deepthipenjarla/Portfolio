import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    MinioDesc : "Streamlined user interaction with a robust and efficient system for handling multimedia content. Demonstrated prowess in integrating cutting-edge technologies to enhance user experience. Elevating my portfolio to new heights with Minio, I've empowered seamless media management for a richer and more interactive showcase.",
    MinioGithub : "https://github.com/Deepthipenjarla/MinioImage",
    MinioWebsite : "",

    VirtualMouseusingOpenCVDesc : "Experience the future of human-computer interaction with my Virtual Mouse project, utilizing OpenCV for intuitive, hands-free control.",
    VirtualMouseusingOpenCVGithub:"https://github.com/Deepthipenjarla/Finalyear_project.git",
    VirtualMouseusingOpenCVWebsite:"",

    ResponsiveDesc : "Responsive design is crucial for ensuring that your web application looks and functions well on various devices, adapting seamlessly to different screen sizes and orientations. Prioritize fluid layouts, flexible grids, and media queries to create a user-friendly experience, guaranteeing optimal usability and engagement across desktops, tablets, and mobile devices.",
    ResponsiveGithub : "https://github.com/Deepthipenjarla/Responsive-Task-Nov",
    ResponsiveWebsite : "",

    FlexibleDesignDesc:"I have Implemented responsive design in a MERN stack project, aligning with Figma designs for optimal user experience across various devices. Ensured seamless responsiveness and adaptability, enhancing the project's accessibility and user engagement",
    FlexibleDesignGithub:"https://github.com/Deepthipenjarla/ResponsiveImage",
    FlexibleDesignWebsite:"",
    
    DatavisualizationDesc:"I excel at transforming raw data into compelling visual narratives. Through dynamic data visualization, I bring spreadsheets to life, crafting insightful and impactful bar graphs that distill complex information into clear insights. My portfolio showcases a mastery of Excel and a talent for translating numbers into visually engaging stories, making data not just accessible but visually compelling.",
    DatavisualizationGithub:"https://github.com/Deepthipenjarla/Datavisualization",
    DatavisualizationWebsite:"",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox