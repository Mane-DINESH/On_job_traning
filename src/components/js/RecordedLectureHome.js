import React, { useState } from "react";
import VideoCard from "./VideoCard";
import "../css/RecordedLectureHome.css";

const videosData = [
  {
    id: 1,
    title: "React Full Course for Beginners",
    channel: "ShreeGenius",
    views: "12K views",
    duration: "12:30",
    thumbnail: "https://img.youtube.com/vi/dGcsHMXbSOA/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "JSX & Components Explained",
    channel: "ShreeGenius",
    views: "8.4K views",
    duration: "18:45",
    thumbnail: "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "React Props & State",
    channel: "ShreeGenius",
    views: "6.1K views",
    duration: "15:20",
    thumbnail: "https://img.youtube.com/vi/IYvD9oBCuJI/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "React useEffect Hook",
    channel: "ShreeGenius",
    views: "9.2K views",
    duration: "14:10",
    thumbnail: "https://img.youtube.com/vi/0ZJgIjIuY7U/maxresdefault.jpg",
  },
  {
    id: 5,
    title: "React useState Hook",
    channel: "ShreeGenius",
    views: "7.8K views",
    duration: "10:55",
    thumbnail: "https://img.youtube.com/vi/O6P86uwfdR0/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "React Router DOM v6",
    channel: "ShreeGenius",
    views: "11K views",
    duration: "20:40",
    thumbnail: "https://img.youtube.com/vi/59IXY5IDrBA/maxresdefault.jpg",
  },
  {
    id: 7,
    title: "React Form Handling",
    channel: "ShreeGenius",
    views: "5.6K views",
    duration: "13:05",
    thumbnail: "https://img.youtube.com/vi/IkMND33x0qQ/maxresdefault.jpg",
  },
  {
    id: 8,
    title: "React Project Setup",
    channel: "ShreeGenius",
    views: "4.9K views",
    duration: "11:15",
    thumbnail: "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg",
  },
  {
    id: 9,
    title: "React Performance Optimization",
    channel: "ShreeGenius",
    views: "3.2K views",
    duration: "16:30",
    thumbnail: "https://img.youtube.com/vi/2t4v9XgB4nE/maxresdefault.jpg",
  },
  {
    id: 10,
    title: "React Interview Questions",
    channel: "ShreeGenius",
    views: "14K views",
    duration: "22:10",
    thumbnail: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
  },
];

const RecordedLectureHome = () => {
  const [search, setSearch] = useState("");

  const filteredVideos = videosData.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="yt-home">
      {/* SEARCH BAR */}
      <div className="yt-search-wrapper">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="yt-search"
        />
      </div>

      {/* VIDEO GRID */}
      <div className="yt-video-grid">
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))
        ) : (
          <p className="yt-no-results">No videos found</p>
        )}
      </div>
    </div>
  );
};

export default RecordedLectureHome;
