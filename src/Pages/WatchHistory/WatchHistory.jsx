import { useContext, useEffect } from "react";
import { YouTubeContext } from "../../Context";
import SideVideos from "../VideoPage/SideVideos";
import "./WatchHistory.css";

const WatchHistory = () => {
  const { allvideos, history } = useContext(YouTubeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="container_WH">
      <div className="Vid_part2_WH">
        {history.map((itm, idx) => {
          const vid = allvideos.find((item) => item.id === itm);
          return <SideVideos key={idx} vid={vid} />;
        })}
      </div>
    </div>
  );
};

export default WatchHistory;
