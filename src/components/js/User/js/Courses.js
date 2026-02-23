import React, { useState } from "react";
import "../css/Courses.css";
import Footer from "../../Footer";

const coursesData = [
  { title: "React JS", desc: "Build dynamic web applications", img: "https://via.placeholder.com/250x150?text=React" },
  { title: "Node JS", desc: "Backend development with Node", img: "https://via.placeholder.com/250x150?text=NodeJS" },
  { title: "Python", desc: "Learn Python for programming and data", img: "https://via.placeholder.com/250x150?text=Python" },
  { title: "Data Science", desc: "Analyze data effectively", img: "https://via.placeholder.com/250x150?text=Data+Science" },
  { title: "JavaScript", desc: "Master frontend programming", img: "https://via.placeholder.com/250x150?text=JavaScript" },
  { title: "HTML & CSS", desc: "Web design fundamentals", img: "https://via.placeholder.com/250x150?text=HTML+%26+CSS" },
];

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses by title
  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="courses" id="courses">
      <h2>Our Courses</h2>

      {/* Search Bar */}
      <div className="course-search">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="course-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.img} alt={course.title} />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <a href="/contact" className="btn">Enroll Now</a>
              </div>
            </div>
          ))
        ) : (
          <p className="no-courses">No courses found.</p>
        )}
      </div>
      <div style={{marginTop:'30px'}}>
  <Footer/>
      </div>
    
    </section>
  );
}
