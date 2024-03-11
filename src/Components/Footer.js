import React from 'react';
import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer>
      <h4>Developed by PENJARLA DEEPTHI SAI LAKSHMI</h4>
      <h4>Copyright &copy; 2024 DP</h4>
      <div className='footerLinks'>
        <a href='https://github.com/Deepthipenjarla' target='_blank' rel='noreferrer'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/deepthi-penjarla/' target='_blank' rel='noreferrer'>
          <FaLinkedin />
        </a>
        <a href='mailto:penjarladeepthisailakshmi@gmail.com' target='_blank' rel='noreferrer'>
          <GrMail />
        </a>
        <a href='https://www.hackerrank.com/profile/deepthipenjarla1' target='_blank' rel='noreferrer'>
          <FaHackerrank />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
