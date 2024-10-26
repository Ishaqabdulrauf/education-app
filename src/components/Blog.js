import React from 'react';
import './Blog.css';
import { FaUser, FaCalendarAlt } from 'react-icons/fa'; 

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Stay Ahead in Online Learning",
      description: "Tips and tricks to get the most out of your online education journey and succeed in your courses.",
      author: "Jane Doe",
      date: "September 28, 2024",
    },
    {
      id: 2,
      title: "Top 10 Resources for Students in 2024",
      description: "Discover the top resources that will help students excel in their studies this year.",
      author: "John Smith",
      date: "October 3, 2024",
    },
    {
      id: 3,
      title: "How Technology is Changing Education",
      description: "An in-depth look at how modern technology is transforming the way we learn and teach.",
      author: "Anna Brown",
      date: "September 15, 2024",
    }
  ];

  return (
    <section className="blog-container">
      <h1>Latest Blogs</h1>
      <p>Stay updated with our latest articles, tips, and educational news.</p>
      <div className="blog-grid">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <div className="blog-meta">
              <span><FaUser /> {blog.author}</span>
              <span><FaCalendarAlt /> {blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
