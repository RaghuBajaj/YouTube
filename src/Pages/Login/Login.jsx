import { useCallback, useContext, useEffect, useState } from "react";
import "./Login.css";
import { YouTubeContext } from "../../Context";
import logo from "../../logo.png";

function Login() {
  const { handleCreateAccount, handleLogin, setSignUp, navigate } =
    useContext(YouTubeContext);
  const [sign, setSign] = useState(true);
  const [onTry, setOnTry] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    history: [],
    likedVideo: [],
    disLikedVideo: [],
    watchLater: [],
    playlists: [],
    subscribers: [],
    subscribedChannels: [],
  });

  const initialInfo = useCallback(() => {
    const blank = {
      userName: "",
      email: "",
      password: "",
      phone: "",
      history: [],
      likedVideo: [],
      disLikedVideo: [],
      watchLater: [],
      playlists: [],
      subscribers: [],
      subscribedChannels: [],
    };
    setUserInfo(blank);
  }, []);

  const handleState = (e, setState, field) => {
    setState((prev) => ({ ...prev, [field]: e.target.value }));
    setOnTry(false);
  };

  useEffect(() => {
    initialInfo();
    setOnTry(false);
  }, [initialInfo]);

  return (
    <div className="login">
      {sign === true && (
        <div className="login_box">
          <div className="cross_div_box">
            <div
              className="cross"
              onClick={() => {
                navigate("/youtube");
                setSignUp(false);
              }}
            >
              {" "}
              X{" "}
            </div>
          </div>
          <div className="body_box">
            <div className="parts_box">
              <img src={logo} alt="Youtube-logo" className="" />
              <div className="log">
                <p className="lo_h">Create a YouTube Account</p>
                <p className="lo_p">Enter your name</p>
              </div>
            </div>
            <div className="parts_box">
              <div className="lo_div">
                <p className="lo_p ">Full name</p>
                <input
                  type="text"
                  placeholder="Full name"
                  className="lo_inp"
                  onChange={(e) => handleState(e, setUserInfo, "userName")}
                ></input>
                {onTry === true && userInfo.userName === "" && (
                  <p className="red">
                    <span>!</span> Name is required
                  </p>
                )}
              </div>
              <div className="lo_div">
                <p className="lo_p ">Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="lo_inp"
                  onChange={(e) => handleState(e, setUserInfo, "email")}
                ></input>
                {onTry === true && userInfo.email === "" && (
                  <p className="red">
                    <span>!</span> Email is required
                  </p>
                )}
              </div>
              <div className="lo_div">
                <p className="lo_p ">Phone</p>
                <input
                  type="text"
                  placeholder="10 digits phone number"
                  className="lo_inp"
                  onChange={(e) => handleState(e, setUserInfo, "phone")}
                ></input>
                {onTry === true && userInfo.phone === "" && (
                  <p className="red">
                    <span>!</span> Phone number is required
                  </p>
                )}
              </div>
              <div className="lo_div">
                <p className="lo_p ">Password</p>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  className="lo_inp"
                  onChange={(e) => handleState(e, setUserInfo, "password")}
                ></input>
                {onTry === true && userInfo.password === "" && (
                  <p className="red">
                    <span>!</span> Password is required
                  </p>
                )}
              </div>
              <div className="btn_div">
                <button
                  className="create"
                  onClick={() => {
                    setSign(false);
                  }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="lo_btn"
                  onClick={() => {
                    if (
                      userInfo.userName &&
                      userInfo.email &&
                      userInfo.phone &&
                      userInfo.password
                    ) {
                      handleCreateAccount(userInfo);
                      setSignUp(false);
                      navigate("/youtube");
                    } else {
                      setOnTry(true);
                    }
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {sign === false && (
        <div className="login_box">
          <div className="cross_div_box">
            <div
              className="cross"
              onClick={() => {
                navigate("/youtube");
                setSignUp(false);
              }}
            >
              {" "}
              X{" "}
            </div>
          </div>
          <div className="body_box">
            <div className="parts_box">
              <img src={logo} alt="Youtube-logo" className="" />
              <div className="log">
                <p className="lo_h">Sign in</p>
                <p className="lo_p">to continue to YouTube</p>
              </div>
            </div>
            <div className="parts_box">
              <div className="lo_div">
                <p className="lo_p ">Email</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="lo_inp"
                  onChange={(e) => handleState(e, setUserInfo, "email")}
                ></input>
                {onTry === true && userInfo.email === "" && (
                  <p className="red">
                    <span>!</span> Email is required
                  </p>
                )}
              </div>
              <div className="lo_div">
                <p className="lo_p ">Password</p>
                <input
                  type="password"
                  placeholder="At least 6 characters"
                  className="lo_inp"
                  onChange={(e) => handleState(e, setUserInfo, "password")}
                ></input>
                {onTry === true && userInfo.password === "" && (
                  <p className="red">
                    <span>!</span> Password is required
                  </p>
                )}
              </div>
              <div className="btn_div">
                <button
                  className="create"
                  onClick={() => {
                    setSign(true);
                  }}
                >
                  Create account
                </button>
                <button
                  type="button"
                  className="lo_btn"
                  onClick={() => {
                    if (userInfo.email && userInfo.password ) {
                      handleLogin(userInfo);
                      setSignUp(false);
                      navigate("/youtube");
                    } else {
                      setOnTry(true);
                    }
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
