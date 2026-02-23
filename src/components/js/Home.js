import React from "react";
import Navbar from "./Navbar";
import "../css/Home.css";
import Footer from "./Footer";

const offers = [
  {
    title: "React JS Bootcamp",
    desc: "Get 50% off on our comprehensive React course.",
    img: "https://via.placeholder.com/300x180?text=React+Offer",
  },
  {
    title: "Python Programming",
    desc: "Learn Python with hands-on projects. Limited time offer!",
    img: "https://via.placeholder.com/300x180?text=Python+Offer",
  },
  {
    title: "Full Stack Development",
    desc: "Enroll now and get 1-on-1 mentoring for free.",
    img: "https://via.placeholder.com/300x180?text=Full+Stack+Offer",
  },
  {
    title: "Data Science Mastery",
    desc: "Start your data career with 30% discount.",
    img: "https://via.placeholder.com/300x180?text=Data+Science+Offer",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content animate-up">
            <h1>Learn. Code. Excel.</h1>
            <p>Join ShreeGeniusItHub and master modern technologies!</p>
            <a href="/courses" className="btn">Explore Courses</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about animate-up">
        <div className="about-container">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
              alt="About Us"
            />
          </div>
          <div className="about-text">
            <h2>About ShreeGeniusItHub</h2>
            <p>
              We provide top-quality courses in Web Development, Data Science,
              Programming, and more. Learn from expert instructors and
              build real-world projects to accelerate your career.
            </p>
            <a href="/about" className="btn">Learn More</a>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="testimonials animate-up">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Amazing courses! Learned so much in a short time."</p>
            <h4>- Priya K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Instructors are very professional and helpful."</p>
            <h4>- Raj S.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend ShreeGeniusItHub for tech learners."</p>
            <h4>- Ankit M.</h4>
          </div>
        </div>
      </section>

      
      {/* Offers Section */}
      <section className="offers animate-up">
        <h2>Special Offers</h2>
        <div className="offer-cards">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card animate-up">
              <img src={offer.img} alt={offer.title} />
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <a href="/courses" className="btn">Enroll Now</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </>
  );
}
