import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
     const navigate = useNavigate();
  return (
    <motion.div
      className="yt-video-card"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
    >
        
      <div className="yt-thumbnail-wrapper" onClick={() => navigate(`/lecture/${video.id}`)}>
        <img src={video.thumbnail} alt={video.title} />
        <span className="yt-duration">{video.duration}</span>
      </div>

      <div className="yt-video-info">
        <h3 className="yt-video-title">{video.title}</h3>
        <p className="yt-channel">{video.channel}</p>
        <p className="yt-views">{video.views}</p>
      </div>
    </motion.div>
  );
};

export default VideoCard;
