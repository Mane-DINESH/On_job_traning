import { motion } from "framer-motion";

const LectureList = ({ lectures, activeLecture, onSelect }) => {
  return (
    <div className="yt-playlist">
      <div className="yt-playlist-header">
        <h3>Course content</h3>
      </div>

      {lectures.map((lecture, index) => {
        const active = lecture.id === activeLecture.id;

        return (
          <div
            key={lecture.id}
            className={`yt-playlist-item ${active ? "active" : ""}`}
            onClick={() => onSelect(lecture)}
          >
            {active && (
              <motion.div
                layoutId="yt-active"
                className="yt-active-indicator"
              />
            )}

            <span className="yt-index">{index + 1}</span>

            <div className="yt-text">
              <p className="yt-video-name">{lecture.title}</p>
              <span className="yt-duration">{lecture.duration}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LectureList;
