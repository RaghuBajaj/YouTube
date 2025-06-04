import { useContext } from "react";
import { YouTubeContext } from "../../Context";
import { NavLink, Link } from "react-router-dom";
import "./Drawersliderbar.css";
import "./Leftsidebar.css";
import "../Navbar/Navbar.css";
import logo from "../../logo.png";
import {
  //   MdOutlineExplore,
  MdOutlineSubscriptions,
  MdSubscriptions,
  MdOutlineWatchLater,
  MdHistory,
  MdOutlinePodcasts,
} from "react-icons/md";
import {
  FaHouse,
  // FaCircleUser
} from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { HiAcademicCap } from "react-icons/hi";
import { SiYoutubeshorts } from "react-icons/si";
import { PiGreaterThan, PiFilmReelBold } from "react-icons/pi";
import { AiOutlineHome, AiOutlineLike, AiFillLike } from "react-icons/ai";
// import { BiUserCircle } from "react-icons/bi";
// import { TbMathGreater } from "react-icons/tb";

const Drawersliderbar = () => {
  const { setDrawSlidbar } = useContext(YouTubeContext);
  let path = window.location.pathname;
  return (
    <div className="Container_Dsb">
      <div className="leftslide_nbar">
        <div className="grid_nbar" onClick={() => setDrawSlidbar(false)}>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <Link to={"/youtube"} className="logoTitle_nbar">
          <img src={logo} alt="Youtube-logo" className="logo_nbar" />
          <p className="title_nbar">YouTube</p>
        </Link>
      </div>

      <div className="slidbar_components">
        <div className="option_box_Dsb">
          <NavLink
            to={"/youtube"}
            className={
              path === "/youtube"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            {path === "/youtube" ? (
              <FaHouse size={24} className="icon_sidebar_Dsb" />
            ) : (
              <AiOutlineHome size={24} className="icon_sidebar_Dsb" />
            )}
            <p className="option_Dsb">Home</p>
          </NavLink>
          <NavLink
            to={"/youtube/feed/shorts"}
            className={
              path === "/youtube/feed/shorts"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            {path === "/youtube/feed/shorts" ? (
              <SiYoutubeshorts size={24} className="icon_sidebar_Dsb" />
            ) : (
              <PiFilmReelBold size={24} className="icon_sidebar_Dsb" />
            )}
            <p className="option_Dsb">Shorts</p>
          </NavLink>
          <NavLink
            to={"/youtube/feed/Subscriptions"}
            className={
              path === "/youtube/feed/Subscriptions"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            {path === "/youtube/feed/Subscriptions" ? (
              <MdSubscriptions size={24} className="icon_sidebar_Dsb" />
            ) : (
              <MdOutlineSubscriptions size={24} className="icon_sidebar_Dsb" />
            )}
            <p className="option_Dsb">Subscriptions</p>
          </NavLink>
        </div>

        <div className="option_box_Dsb">
          <NavLink
            to={"/youtube/feed/Library"}
            className={
              path === "/youtube/feed/Library"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            <p className="option_Dsb">You</p>
            <PiGreaterThan size={16} className="icon_sidebar_Dsb" />
          </NavLink>
          <NavLink
            to={"/youtube/feed/watchhistory"}
            className={
              path === "/youtube/feed/watchhistory"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            <MdHistory size={24} className="icon_sidebar_Dsb" />
            <p className="option_Dsb">History</p>
          </NavLink>
          <NavLink
            to={"/youtube/feed/playlist"}
            className={
              path === "/youtube/feed/playlist"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            <CgPlayList size={24} className="icon_sidebar_Dsb" />
            <p className="option_Dsb">Playlists</p>
          </NavLink>
          <div className="options_div_Dsb">
            <GoVideo size={24} className="icon_sidebar_Dsb" />
            <p className="option_Dsb">Your videos</p>
          </div>
          <div className="options_div_Dsb">
            <HiAcademicCap size={24} className="icon_sidebar_Dsb" />
            <p className="option_Dsb">Your courses</p>
          </div>
          <div className="options_div_Dsb">
            <MdOutlinePodcasts size={24} className="icon_sidebar_Dsb" />
            <p className="option_Dsb">Your podcasts</p>
          </div>
          <NavLink
            to={"/youtube/feed/watchlater"}
            className={
              path === "/youtube/feed/watchlater"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            <MdOutlineWatchLater size={24} className="icon_sidebar_Dsb" />
            <p className="option_Dsb">Watch Later</p>
          </NavLink>
          <NavLink
            to={"/youtube/feed/likedvideo"}
            className={
              path === "/youtube/feed/likedvideo"
                ? "options_div_Dsb active_Dsb"
                : "options_div_Dsb"
            }>
            {path === "/youtube/feed/likedvideo" ? (
              <AiFillLike size={24} className="icon_sidebar_Dsb" />
            ) : (
              <AiOutlineLike size={24} className="icon_sidebar_Dsb" />
            )}
            <p className="option_Dsb">Liked videos</p>
          </NavLink>
        </div>

        {/* <div className='option_box_Dsb'>
                <div className='options_div_Dsb'>
                    <p className='option_Dsb'>Explore</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Trend-logo'></img>
                    <p className='option_Dsb'>Trending</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Shopping-logo'></img>
                    <p className='option_Dsb'>Shopping</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Music-logo'></img>
                    <p className='option_Dsb'>Music</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Film-logo'></img>
                    <p className='option_Dsb'>Films</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Live-logo'></img>
                    <p className='option_Dsb'>Live</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Gameing-logo'></img>
                    <p className='option_Dsb'>Gaming</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='News-logo'></img>
                    <p className='option_Dsb'>News</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Sport-logo'></img>
                    <p className='option_Dsb'>Sport</p>
                </div>
            </div>

            <div className='option_box_Dsb'>
                <div className='options_div_Dsb'>
                    <img alt='Settings-logo'></img>
                    <p className='option_Dsb'>Settings</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Report-logo'></img>
                    <p className='option_Dsb'>Report history</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='Help-logo'></img>
                    <p className='option_Dsb'>Help</p>
                </div>
                <div className='options_div_Dsb'>
                    <img alt='FeedBack-logo'></img>
                    <p className='option_Dsb'>Send feedback</p>
                </div>
            </div> */}
      </div>
    </div>
  );
};

export default Drawersliderbar;
