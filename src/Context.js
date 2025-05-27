import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allvideos } from "./Pages/YourVideo/videoAssets.js";

export const YouTubeContext = createContext({});

const YouTubeContextProvider = (props) => {
    const [allUsers, setAllUsers] = useState([]);
    const [user, setUser] = useState([]);
    const [signUp, setSignUp] = useState(false);

    const [showVid, setShowVid] = useState({});
    const [drawSlidbar, setDrawSlidbar] = useState(false);

    const [history, setHistory] = useState([]);
    const [watchLater, setWatchLater] = useState([]);
    const [likedVideo, setLikedVideo] = useState([]);
    const [subscribedChannels, setSubscribedChannels] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const navigate = useNavigate();

    const handleCreateAccount = async( {userInfo} ) =>{
    if(userInfo.userName !=='' && userInfo.email !=='' && userInfo.password !== ''){
      setAllUsers((prev)=>{
        if(prev){
          return[...prev,userInfo];
        }
        else{
          return userInfo;
        }
      });
      setUser(userInfo);
      navigate('/youtube');
    //   try {
    //     const res = await axios.post(`http://localhost:5500/api/v1/user/registerUser`, { ...userInfo });
    //     const data = res.data;
    //     console.log("Register data is :", data);
    //     setUserId(data.data._id);
    //     setUser(data.data);
    //     navigate('/Home');
    //   } catch (error) {
    //     console.log("Register error is :", error);
    //   }
    }
    else{
      alert('Please fill all the required fields!');
    }
  };
    
  const handleLogin = async( {userInfo} ) =>{
    if(userInfo.phone !== '' && userInfo.password !== ''){
      const account = allUsers.find((item)=>item.phone === userInfo.phone && item.password === userInfo.password);
      if(account){
        setUser(account); 
        setHistory(account.history || []);
        setLikedVideo(account.likedVideo || []);
        navigate('/youtube');
      }
      else{
        alert('Account dosent exesist!');
      }
    //   try {
    //     const res = await axios.post(`http://localhost:5500/api/v1/user/loginUser`,{ ...userInfo });
    //     const data = res.data;
    //     console.log("Login data is :", data);

    //     const User = data.data;
    //     setUserId(User._id);
    //     setUser(User); 

    //     await getUserCart(User._id);
    //     await getUserOrder(User._id);

    //     navigate('/Home');
    //   } catch (error) {
    //     console.log("Login error is :", error);
    //   }
    }
    else{
      alert('Please fill all the required fields!');
    }
  };

    useEffect(()=>{
        setHistory(history.reverse());
    },[history]);
    useEffect(()=>{
        // console.log("history",history);
        // console.log("likedvidid",likedVideo);
    },[history,likedVideo]);
    const value = {
        allUsers, setAllUsers,
        user, setUser,
        signUp, setSignUp,
        allvideos,
        navigate,
        drawSlidbar, setDrawSlidbar,
        showVid, setShowVid,
        history, setHistory,
        likedVideo, setLikedVideo,
        watchLater, setWatchLater,
        subscribedChannels, setSubscribedChannels,
        subscribers, setSubscribers,
        handleCreateAccount, 
        handleLogin
    };
    return(
        <YouTubeContext.Provider value={value}>
            {props.children}
        </YouTubeContext.Provider>
    )
};

export default YouTubeContextProvider;