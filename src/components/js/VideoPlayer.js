import { motion, AnimatePresence } from "framer-motion";

const VideoPlayer = ({ video }) => {
  return (
    <div className="yt-video-section">
      <AnimatePresence mode="wait">
        <motion.video
          key={video.videoUrl}
          src={video.videoUrl}
          controls
          className="yt-video"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        />
      </AnimatePresence>

      <h1 className="yt-title">{video.title}</h1>
      <p className="yt-meta">ShreeGenius • 12K views</p>
    </div>
  );
};

export default VideoPlayer;
