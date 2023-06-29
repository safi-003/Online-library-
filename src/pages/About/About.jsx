import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Hello, I'm Syed Mohammed Safiuddin, the developer of an innovative online library management web application. I am passionate about creating user-friendly and efficient solutions that cater to the needs of book enthusiasts and avid readers.

With my web application, users can explore a vast collection of books and easily choose their preferred titles. </p>
            <p className='fs-17'>The application provides detailed information about each book, including the number of available copies, allowing users to make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
