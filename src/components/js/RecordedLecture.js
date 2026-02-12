import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import LectureList from "./LectureList";
import LectureTabs from "./LectureTabs";
import "../css/RecordedLecture.css";

const lecturesData = [
  {
    id: 1,
    title: "Introduction to React",
    duration: "12:30",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    title: "JSX & Components",
    duration: "18:45",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "Understanding Props in React",
    duration: "15:20",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    title: "State & useState Hook",
    duration: "20:10",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    title: "useEffect Hook Explained",
    duration: "22:35",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    title: "React Router DOM Full Guide",
    duration: "25:40",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    title: "Handling Forms in React",
    duration: "19:55",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    title: "Context API for Beginners",
    duration: "21:15",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 9,
    title: "React Performance Optimization",
    duration: "17:50",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 10,
    title: "Deploy React App to Production",
    duration: "14:25",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
];


const RecordedLecture = () => {
  const [activeLecture, setActiveLecture] = useState(lecturesData[0]);

  return (
    <div className="yt-watch-page">
      {/* LEFT */}
      <div className="yt-left">
        <VideoPlayer video={activeLecture} />
        <LectureTabs />
      </div>

      {/* RIGHT */}
      <div className="yt-right">
        <LectureList
          lectures={lecturesData}
          activeLecture={activeLecture}
          onSelect={setActiveLecture}
        />
      </div>
    </div>
  );
};

export default RecordedLecture;
