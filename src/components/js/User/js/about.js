import React from "react";
import "../css/about.css";
import Footer from "../../Footer";

export default function About() {
  return (
    <>
      <section className="about-page">
        <div className="about-hero">
          <h1>About ShreeGeniusItHub</h1>
          <p>Empowering learners to achieve their tech dreams.</p>
        </div>

        <div className="about-content">
          <div className="about-text animate-left">
            <h2>Who We Are</h2>
            <p>
              ShreeGeniusItHub is a premier learning platform offering courses
              in Web Development, Data Science, Programming, and modern
              technologies. Our mission is to help students and professionals
              gain real-world skills and excel in their careers.
            </p>
          </div>

          <div className="about-image animate-right">
            <img
              src="https://images.unsplash.com/photo-1581091215368-99ff439c3e2f?auto=format&fit=crop&w=600&q=60"
              alt="About Us"
            />
          </div>
        </div>

        <div className="about-mission animate-up">
          <h2>Our Mission</h2>
          <p>
            To provide high-quality education that is accessible, practical,
            and empowering for learners worldwide.
          </p>
        </div>

        <div className="about-vision animate-up">
          <h2>Our Vision</h2>
          <p>
            To become the most trusted platform for technical education and
            career growth, enabling every learner to reach their full potential.
          </p>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </>
  );
}
