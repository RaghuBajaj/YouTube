import { useContext, useEffect } from "react";
import { YouTubeContext } from "../../Context";
import SideVideos from "../VideoPage/SideVideos";
import "../WatchHistory/WatchHistory.css";

const LikedVideo = () => {
  const { likedVideo, allVideos } = useContext(YouTubeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="container_WH">
      <div className="Vid_part2_WH">
        {likedVideo?.map((itm, idx) => {
          const vid = allVideos?.find((item) => item.id === itm);
          return <SideVideos key={`likedVideo_${idx}`} vid={vid} />
        })}
      </div>
    </div>
  );
};

export default LikedVideo;
