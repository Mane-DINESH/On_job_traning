import { useState } from "react";
import { motion } from "framer-motion";

const tabs = ["Description", "Resources", "Project"];

const LectureTabs = () => {
  const [active, setActive] = useState("Description");

  return (
    <div className="yt-tabs">
      <div className="yt-tabs-header">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)}>
            {tab}
            {active === tab && (
              <motion.div
                layoutId="yt-underline"
                className="yt-underline"
              />
            )}
          </button>
        ))}
      </div>

      <div className="yt-tabs-content">
        {active === "Description" && <p> This course will teach you complete React from basics to advanced concepts.
          You will build real-world projects and understand modern React development.</p>}
        {active === "Resources" && <p>Notes <br/> 
        React is a JavaScript library developed by Facebook for building user interfaces.

Key Concepts:
• Component-Based Architecture
• Virtual DOM for fast rendering
• One-way data binding
• Reusable UI components
• Declarative programming style

Why React?
- Easy to learn
- Large community support
- High performance
- Used in real-world applications like Facebook, Instagram, Netflix
`
       <br/>   GitHub links.
       <br/>
      github: <a href="#">https://github.com/yourusername/react-introduction-project</a></p>}

      
        {active === "Project" && <p>
          
          <h1>Live project steps.</h1>
          
           <ul>
      <li>Setup React project</li>
      <li>Create homepage with video grid</li>
      <li>Add search functionality</li>
      <li>Implement routing</li>
      <li>Build video player page</li>
      <li>Add animated tabs</li>
      <li>Make layout responsive</li>
    </ul>
          
          </p>}
      </div>
    </div>
  );
};

export default LectureTabs;
