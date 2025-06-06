import React, { useContext } from "react";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
// import { BiUserCircle } from "react-icons/bi"
import { VscAccount } from "react-icons/vsc";
import Searchbar from "./Searchbar/Searchbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../logo.png";
import { YouTubeContext } from "../../Context";

const Navbar = () => {
  const { setSignUp, navigate, user, setDrawSlidbar } = useContext(YouTubeContext);
  // const [currentUser,setCurrentUser]=useState({});
  return (
    <>
      <div className="contaner_nbar">
        <div className="leftslide_nbar">
          <div className="grid_nbar" onClick={() => setDrawSlidbar(true)}>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <Link to={"/youtube"} className="logoTitle_nbar">
            <img src={logo} alt="Youtube-logo" className="logo_nbar" />
            <p className="title_nbar">YouTube</p>
          </Link>
        </div>
        <div className="search_nbar">
          <Searchbar />
        </div>
        <div className="icons_div_nbar">
          <RiVideoAddLine size={22} className="icons_nbar" />
          <div className="app_Box">
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
            <p className="appBox"></p>
          </div>
          <IoMdNotificationsOutline size={22} className="icons_nbar" />
        </div>
        <div className="sign_div_nbar">
          {user.userName ? (
            <div className="userLogo_nbar" onClick={() => { navigate("/youtube/feed/accounts/profile") }}>
              <p>{user?.userName[0].toUpperCase()}</p>
            </div>
          ) : (
            <div
              className="logoSign_nbar"
              onClick={() => {
                setSignUp(true);
                // navigate("/youtube/feed/login");
              }}
            >
              <VscAccount size={22} className="userIcon_nbar" />
              <p className="sign_nbar">Sign in</p>
            </div>
          )}

          {/* {currentUser ? (
                <>
                <div>
                    <p>
                        {}
                    </p>
                </div>
            </>):(<>
            <p>
                <BiUserCircle size={22}/>
                <b>Sign in</b>
            </p>
            </>)} */}
        </div>
      </div>
      {}
    </>
  );
};

export default Navbar;
