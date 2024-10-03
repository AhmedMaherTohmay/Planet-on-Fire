import { useEffect, useRef } from "react";
import Cover from "./Cover";

function BackGround({ url, playbackSpeed = 1, img }) {
  const videoRef = useRef(null);

  // Set the playback rate when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed; // Slow down the video to half-speed
    }
  }, [playbackSpeed]);

  return (
    <div id="background-container" style={{ position: "fixed" }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        id="background-video"
      >
        <source src={url} type="video/mp4" />
      </video>
      <Cover img={img} />
    </div>
  );
}

export default BackGround;
