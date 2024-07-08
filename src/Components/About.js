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
          <h5> Hi, my name is <b>PENJARLA DEEPTHI SAI LAKSHMI </b> and I am from Andhra Pradesh, India.</h5>
           <h5> I'm a <b>Graduate</b> in the Stream of Artificial Intelligence at KIETW,Kakinda.</h5>
           <h5>I'm expanding my expertise as a remote Research Intern with IIIT Hyderabad.</h5><h5> I am <b>Open</b> to new Collaborations or work where I can Contribute and Grow. Feel free to connect with me, links are in the footer.</h5><br/>
            <b>Other than Academic</b>
            <br></br>
            <h5>👉I am NCC Cadet where i leaded a Contingent of KIET Group.</h5>
            <h5>👉Joined as Coordinator at KIET GROUP & on my journey of innovation and leadership.</h5>
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