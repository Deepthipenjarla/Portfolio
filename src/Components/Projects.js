import React from 'react';
import ProjectBox from './ProjectBox';
import FlexibleDesignImage from '../images/FlexibleDesignImage.png';
import ResponsiveImage from '../images/ResponsiveImage.png';
import MinioImage from '../images/MinioImage.png';
import DatavisualizationImage from '../images/DatavisualizationImage.png';
const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>MY <b>PROJECTS</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={DatavisualizationImage} projectName="Datavisualization" />
        <ProjectBox projectPhoto={FlexibleDesignImage} projectName="FlexibleDesign" />
        <ProjectBox projectPhoto={ResponsiveImage} projectName="Responsive" />
        <ProjectBox projectPhoto={MinioImage} projectName="Minio" />
      </div>

    </div>
  )
}

export default Projects