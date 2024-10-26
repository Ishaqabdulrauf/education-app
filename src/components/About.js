import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Learning</strong>, the world’s leading platform for education and self-development.
          We strive to make high-quality education accessible to everyone, anytime, anywhere. 
          Our mission is to empower individuals by providing a learning environment where they 
          can develop the skills and knowledge necessary to succeed.
        </p>
        <p>
          <strong>Learning</strong> offers a wide variety of courses taught by experienced educators
          who are passionate about their subjects. Whether you're looking to improve your professional skills,
          dive into new academic topics, or explore a personal hobby, we have something for you.
        </p>
        <p>
          Our platform combines interactive lessons, virtual classrooms, and hands-on projects 
          to make the learning process immersive and engaging. We continuously work on integrating
          advanced technologies to enhance the learning experience for our users.
        </p>
        <h2>Our Vision</h2>
        <p>
          We envision a world where knowledge is shared freely and learners can access the best educational
          resources from anywhere in the world. Our goal is to create an educational experience that is
          inclusive, comprehensive, and effective for everyone.
        </p>
        <h2>Our Team</h2>
        <p>
          Our team is composed of professionals who are passionate about education and technology. We are
          committed to creating a platform that pushes the boundaries of learning and development.
        </p>
      </div>
    </section>
  );
};

export default About;
