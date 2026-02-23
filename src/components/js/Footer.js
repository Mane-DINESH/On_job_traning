// import React from "react";
// import "../css/Footer.css";

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* About / Logo */}
//         <div className="footer-section about">
//           <h2>ShreeGeniusItHub</h2>
//           <p>
//             Empowering learners to excel in technology. Join our community and
//             boost your career with real-world projects and expert instructors.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div className="footer-section links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/about">About</a></li>
//             <li><a href="/courses">Courses</a></li>
//             <li><a href="/contact">Contact</a></li>
//             <li><a href="/privacy">Privacy Policy</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="footer-section contact">
//           <h3>Contact</h3>
//           <p>Email: support@shreegeniusithub.com</p>
//           <p>Phone: +91 98765 43210</p>
//           <div className="footer-social">
//             <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
//             <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
//             <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png" alt="Instagram" /></a>
//             <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="LinkedIn" /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <p>© 2026 ShreeGeniusItHub. All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// }



import React from "react";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About / Logo */}
        <div className="footer-section about">
          <h2>ShreeGeniusItHub</h2>
          <p>
            Empowering learners to excel in technology. Join our community and
            boost your career with real-world projects and expert instructors.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: support@shreegeniusithub.com</p>
          <p>Phone: +91 98765 43210</p>

          <div className="footer-social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                width="24"
                height="24"
              />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
                width="24"
                height="24"
              />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384063.png"
                alt="Instagram"
                width="24"
                height="24"
              />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="LinkedIn"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 ShreeGeniusItHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
