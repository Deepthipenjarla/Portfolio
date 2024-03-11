import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There !</h1>
          <h1>I'M <b>PENJARLA DEEPTHI SAI LAKSHMI </b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Berif <b>Introduction</b></h1>
          <p>
          I am a passionate and motivated <b>Full Stack Developer</b> with expertise in <b>Python, HTML, CSS,</b> and the<b> MERN (MongoDB, Express.js, React, Node.js) stack</b> .
          <br></br>
          My journey in the world of programming has equipped me with a diverse set of skills that allow me to create a <b>dynamic </b>and <b>user-friendly</b> web applications.
         <br></br>
                I also possess a solid foundation in <b>Artificial Intelligence (AI)</b> and <b>Machine Learning (ML)</b>, with a 50% proficiency level.
                <br></br>
          Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>  
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home