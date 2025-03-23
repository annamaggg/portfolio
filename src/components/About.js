import React from 'react';
import './About.css';
import { Navbar } from './Navbar';

export const About = () => {

  return (
    <>
      <Navbar />
      <div className='paragraph'>
        <h1 className='text-page-heading'>About me</h1>
        <p className="text-page-intro-about">I studied Digital Media Arts at the University of Surrey, during which I discovered an interest in coding. During my year in industry, my time was spent on self-led learning, finding a mentor, attending online events, working on personal and professional projects. My interest only grew so I applied for the Makers Academy software development bootcamp. <br></br> <br></br>During my time at Makers, I got to grips with working practices such as test-driven development, paired-programming and agile ceremonies to build web applications. The technology revolved around object-oriented programming, primarily with Ruby and Javascript. See the software page for more details, or my Github linked below. For more information about my professional experience and values, see my Linkedin profile.<br></br> <br></br>I am now looking for exciting opportunities to develop my capabilities further and apply my skills to real-world projects. I am open to collaborate on projects and love talking to new people so please get in touch if you would like to chat!! <br></br><br></br><br></br>
        Email: annamagnusson99@gmail.com</p>
      </div>

        <div className='icons'>
          <a href='https://github.com/annamaggg' target="blank"><img src='https://res.cloudinary.com/dnwbll6u0/image/upload/githubIcon_gfjiyw.jpg' alt='githubIcon' className='icon'/></a>
          <a href='https://www.linkedin.com/in/anna-magnusson-519658199/' target="blank"><img src='https://res.cloudinary.com/dnwbll6u0/image/upload/linkedinIcon_vyk62w.jpg' alt='linkedinIcon' className='icon'/></a>
        </div>
    
    </>
  )
}