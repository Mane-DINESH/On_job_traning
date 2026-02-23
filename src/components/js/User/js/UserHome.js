// import React from "react";
// import "../css/UserHome.css";
// import Courses from "./Courses"; // we will use carousel for courses

// export default function UserHome() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="user-hero">
//         <div className="hero-overlay">
//           <div className="hero-content animate-up">
//             <h1>Welcome Back!</h1>
//             <p>Explore your courses, projects, and resources.</p>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <section className="user-courses animate-up">
        
//         <Courses/>
//       </section>

//       {/* Add Testimonials Section */}
//       <section className="user-testimonials animate-up">
//         <h2>Student Feedback</h2>
//         <div className="testimonial-cards">
//           <div className="testimonial-card">
//             <p>"This platform helped me land my first job in tech!"</p>
//             <h4>- Priya K.</h4>
//           </div>
//           <div className="testimonial-card">
//             <p>"Excellent courses and hands-on projects."</p>
//             <h4>- Raj S.</h4>
//           </div>
//           <div className="testimonial-card">
//             <p>"Highly recommended for career growth."</p>
//             <h4>- Ankit M.</h4>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import React from "react";
import "../css/UserHome.css";
import Courses from "./Courses"; // Courses carousel
import Footer from "../../Footer";

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

export default function UserHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="user-hero">
        <div className="hero-overlay">
          <div className="hero-content animate-up">
            <h1>Welcome Back!</h1>
            <p>Explore your courses, projects, and resources.</p>
          </div>
        </div>
      </section>

    

      {/* Courses Section */}
      <section className="user-courses animate-up">
        <Courses />
      </section>

      {/* Testimonials Section */}
      <section className="user-testimonials animate-up">
        <h2>Student Feedback</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This platform helped me land my first job in tech!"</p>
            <h4>- Priya K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Excellent courses and hands-on projects."</p>
            <h4>- Raj S.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommended for career growth."</p>
            <h4>- Ankit M.</h4>
          </div>
        </div>
      </section>


        {/* Offers Section */}
      <section className="user-offers animate-up">
        <h2>Special Offers for You</h2>
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
      <Footer/>
    </>
  );
}
