import React from 'react';
import './Services.css'; 
import { FaChalkboardTeacher, FaLaptopCode, FaBook, FaUserGraduate } from 'react-icons/fa';

const Services = () => {
  
  const services = [
    {
      id: 1,
      title: "One-on-One Tutoring",
      description: "Personalized learning with dedicated instructors tailored to your specific needs.",
      icon: <FaChalkboardTeacher size={50} color="#5c48ee" />, 
    },
    {
      id: 2,
      title: "Virtual Classrooms",
      description: "Join interactive online classrooms with peers and engage with expert educators.",
      icon: <FaLaptopCode size={50} color="#5c48ee" />, 
    },
    {
      id: 3,
      title: "Study Materials & Resources",
      description: "Access a library of curated study materials, textbooks, and video tutorials.",
      icon: <FaBook size={50} color="#5c48ee" />, 
    },
    {
      id: 4,
      title: "Career Counseling",
      description: "Receive career advice and guidance from professionals in the field to help you navigate your career path.",
      icon: <FaUserGraduate size={50} color="#5c48ee" />, 
    }
  ];

  return (
    <section className="services-container">
      <h1>Our Services</h1>
      <p>
        We provide a wide range of services to ensure you have everything you need to succeed in your learning journey.
        From personalized tutoring to virtual classrooms, we have you covered.
      </p>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div> {/* Display React Icons */}
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
