import "./Leftsidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import {
  MdOutlineSubscriptions,
  MdSubscriptions,
} from "react-icons/md";
import { FaHouse, FaCircleUser } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";
import { BiUserCircle } from "react-icons/bi";
import { PiFilmReelBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { YouTubeContext } from "../../Context";

const Leftsidebar = () => {
  const { user } = useContext(YouTubeContext);
  let path = window.location.pathname;
  return (
    <div className="container_Lsb">
      <NavLink to={"/youtube"} className="icon_sidebar_div_Lsb">
        {path === "/youtube" ? (
          <FaHouse size={24} className="icon_sidebar_Lsb" />
        ) : (
          <AiOutlineHome size={24} className="icon_sidebar_Lsb" />
        )}
        <div className="text_sidebar_Lsb">Home</div>
      </NavLink>

      <NavLink to={"youtube/feed/shorts"} className="icon_sidebar_div_Lsb">
        {path === "/youtube/feed/shorts" ? (
          <SiYoutubeshorts size={24} className="icon_sidebar_Lsb" />
        ) : (
          <PiFilmReelBold size={26} className="icon_sidebar_Lsb" />
        )}
        <div className="text_sidebar_Lsb">Shorts</div>
      </NavLink>

      <NavLink to={"/youtube/feed/Subscriptions"} className="icon_sidebar_div_Lsb">
        {path === "/youtube/feed/Subscriptions" ? (
          <MdSubscriptions size={24} className="icon_sidebar_Lsb" />
        ) : (
          <MdOutlineSubscriptions size={24} className="icon_sidebar_Lsb" />
        )}
        <div className="text_sidebar_Lsb">Subscription</div>
      </NavLink>

      <NavLink to={"/youtube/feed/Library"} className="icon_sidebar_div_Lsb">
        {path === "/youtube/feed/Library" ? (
          <FaCircleUser size={24} className="icon_sidebar_Lsb" />
        ) : (
          <BiUserCircle size={24} className="icon_sidebar_Lsb" />
        )}
        {user?.userName ? (
          <div className="text_sidebar_Lsb">You</div>
        ) : (
          <div className="text_sidebar_Lsb">Library</div>
        )}
      </NavLink>
    </div>
  );
};

export default Leftsidebar;
