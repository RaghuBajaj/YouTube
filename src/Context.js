import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allvideos } from "./Pages/YourVideo/videoAssets";

export const YouTubeContext = createContext({});

const YouTubeContextProvider = (props) => {
    const [showVid,setShowVid] = useState({});
    const [drawSlidbar,setDrawSlidbar] = useState(false);
    const [history,setHistory] = useState([]);
    const [likedVideo,setLikedVideo] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        console.log("history",history);
        console.log("likedvidid",likedVideo);
    },[history,likedVideo]);
    const value = {
        history,
        setHistory,
        likedVideo,
        setLikedVideo,
        drawSlidbar,
        setDrawSlidbar,
        showVid,
        setShowVid,
        navigate,
        allvideos
    };
    return(
        <YouTubeContext.Provider value={value}>
            {props.children}
        </YouTubeContext.Provider>
    )
};

export default YouTubeContextProvider;