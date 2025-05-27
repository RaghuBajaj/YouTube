import { useCallback, useContext, useEffect, useState } from "react";
import "./Login.css";
import { YouTubeContext } from "../../Context";
import logo from "../../logo.png";

function Login() {
  const { handleCreateAccount, handleLogin, setSignUp, navigate }= useContext(YouTubeContext);
  const [sign, setSign] = useState(true);
  const [onTry, setOnTry] = useState(false);
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    history:[],
    likedVideo:[],
    watchLater:[],
    subscribedChannels:[],
    subscribers:[]
  });

  const initialInfo = useCallback(() => {
    const blank = {
      userName: "",
      email: "",
      password: "",
      phone: "",
      history:[],
      likedVideo:[],
      watchLater:[],
      subscribedChannels:[],
      subscribers:[]
    };
    setUserInfo(blank);
  }, []);

  const handleState=(e, setState, field)=> {
    setState((prev)=>({ ...prev , [field] : e.target.value}));
  };

  useEffect(() => {
    initialInfo();
    setOnTry(false);
  }, [initialInfo]);

  return (
    <div className="login">
      {sign === true && (
        <div className="login_box">
            <div className="parts_box">
                <img src={logo} alt="" className="" />
                <div className="log">
                    <p className="lo_h">Create a YouTube Account</p>
                    <p className="lo_p">Enter your name</p>
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
                    {onTry === true && userInfo.phone === "" && (
                    <p className="red">
                        <span>!</span> Email is required
                    </p>
                    )}
                </div>
                <div className="lo_div">
                    <p className="lo_p ">Password</p>
                    <input
                    type="text"
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
                    }}>
                        Sign In
                    </button>
                    <button
                    type="button"
                    className="lo_btn"
                    onClick={() => {
                        handleCreateAccount(userInfo);
                        setOnTry(true);
                        setSignUp(false);
                        navigate("/youtube");
                    }}>
                        Continue 
                    </button>
                </div>
            </div>
          
        </div>
      )}

      {sign === false && (
        <div className="login_box">
            <div className="parts_box">
                <img src={logo} alt="" className="" />
                <div className="log">
                    <p className="lo_h">Sign in</p>
                    <p className="lo_p">to continue to TouTube</p>
                </div>
            </div>
            <div className="parts_box">
                <div className="lo_div">
                    <p className="lo_p ">Email</p>
                    <input
                    type="text"
                    placeholder="Email"
                    className="lo_inp"
                    onChange={(e) => handleState(e, setUserInfo, "phone")}
                    ></input>
                    {onTry === true && userInfo.phone === "" && (
                    <p className="red">
                        <span>!</span> Email is required
                    </p>
                    )}
                </div>
                <div className="lo_div">
                    <p className="lo_p ">Password</p>
                    <input
                    type="text"
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
                    }}>
                        Create account
                    </button>
                    <button
                    type="button"
                    className="lo_btn"
                    onClick={() => {
                        handleLogin(userInfo);
                        setOnTry(true);
                        setSignUp(false);
                        navigate("/youtube");
                    }}>
                        Continue 
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}

export default Login;