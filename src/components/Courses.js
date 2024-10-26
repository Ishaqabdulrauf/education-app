import React from 'react';
import './Courses.css'; 

//  Images
import courseImage1 from '../assets/course1.jpg'; 
import courseImage2 from '../assets/course2.jpg';
import courseImage3 from '../assets/course3.jpg';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Mastery",
      description: "Learn how to build websites from scratch using modern tools and frameworks.",
      image: courseImage1, 
      price: "$199",
    },
    {
      id: 2,
      title: "Data Science Bootcamp",
      description: "Master the fundamentals of data science, machine learning, and artificial intelligence.",
      image: courseImage2,
      price: "$249",
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      description: "Understand how to build effective marketing strategies and grow your brand online.",
      image: courseImage3,
      price: "$149",
    },
    // {
    //   id: 4,
    //   title: "Graphic Design Basics",
    //   description: "Learn the principles of graphic design and start creating professional designs.",
    //   image: courseImage3,
    //   price: "$99",
    // }
  ];

  return (
    <section className="courses-container">
      <h1>Our Courses</h1>
      <p>
        Choose from a wide range of courses to kickstart or advance your career.
        Each course is designed to provide hands-on experience with real-world projects.
      </p>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p className="course-price">{course.price}</p>
            <button className="enroll-btn">Enroll Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
