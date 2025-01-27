import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allvideos } from "./Pages/YourVideo/videoAssets.js";

export const YouTubeContext = createContext({});

const YouTubeContextProvider = (props) => {
    const [allUsers,setAllUsers] = useState([]);
    const [user,setUser] = useState([]);

    const [showVid,setShowVid] = useState({});
    const [drawSlidbar,setDrawSlidbar] = useState(false);
    const [history,setHistory] = useState([]);
    const [watchhistory,setWatchHistory] = useState([]);
    const [likedVideo,setLikedVideo] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        setWatchHistory(history.reverse());
    },[history]);
    useEffect(()=>{
        console.log("history",history);
        console.log("likedvidid",likedVideo);
    },[history,likedVideo]);
    const value = {
        allUsers,setAllUsers,
        user,setUser,
        allvideos,
        navigate,
        history,
        setHistory,
        likedVideo,
        setLikedVideo,
        drawSlidbar,
        setDrawSlidbar,
        showVid,
        setShowVid,
        watchhistory,
        setWatchHistory
    };
    return(
        <YouTubeContext.Provider value={value}>
            {props.children}
        </YouTubeContext.Provider>
    )
};

export default YouTubeContextProvider;