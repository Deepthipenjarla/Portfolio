import React from 'react';
import Skills from './Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
        <h1 className='AboutTextHeading' >
    <span role="img" aria-label="Hi">👋</span> Get to <b>know</b> me!
</h1>

          <p>
            Hi, my name is <b>PENJARLA DEEPTHI SAI LAKSHMI </b> and I am from Andhra Pradesh, India.
           <br></br>
            I'm a <b>MERN stack web developer</b> currently pursuing  B.Tech Final year in the Stream of Artificial Intelligence at KIETW Kakinda.
           <br></br>
            I'm expanding my expertise as a remote Research Intern with IIIT Hyderabad.
           <br></br>
            I am <b>Open</b> to new Collaborations or work where I can Contribute and Grow. Feel free to connect with me, links are in the footer.<br/>
          
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional <b>Toolkits</b> i used <b>Skillset</b></h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='visualstudiocode' />
        <Skills skill='python' />
        <Skills skill='windows'/>
        
      </div>
    </>
  )
}

export default About