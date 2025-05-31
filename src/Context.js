import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { allvideos as initialVideos } from "./Pages/YourVideo/videoAssets.js";

export const YouTubeContext = createContext({});

const YouTubeContextProvider = (props) => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});
  const [signUp, setSignUp] = useState(false);

  const [history, setHistory] = useState([]);
  const [likedVideo, setLikedVideo] = useState([]);
  const [disLikedVideo, setDisLikedVideo] = useState([]);
  const [watchLater, setWatchLater] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [subscribedChannels, setSubscribedChannels] = useState([]);

  const [allVideos, setAllVideos] = useState(initialVideos);
  const [playVideo, setPlayVideo] = useState({});
  // const [commentObject, setCommentObject] = useState([]);
  const [drawSlidbar, setDrawSlidbar] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = async (userInfo) => {
    const { userName, email, phone, password } = userInfo;
    if (userName && email && phone && password) {
      const existingUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

      const isDuplicate = existingUsers.some((user) => user.email === email);
      if (isDuplicate) {
        alert("User with this email already exists!");
        return;
      }
      const updatedUsers = [...existingUsers, userInfo];
      localStorage.setItem("allUsers", JSON.stringify(updatedUsers));

      setAllUsers(updatedUsers);
      setUser(userInfo);
      navigate("/youtube");
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
    } else {
      alert("Please fill all the required fields!");
    }
  };

  const handleLogin = async (userInfo) => {
    if (userInfo.email && userInfo.password) {
      const account = await allUsers.find(
        (item) =>
          item.email === userInfo.email && item.password === userInfo.password
      );
      if (account) {
        setUser(account);
        setHistory(account.history || []);
        setLikedVideo(account.likedVideo || []);
        setWatchLater(account.watchLater || []);
        setPlaylists(account.playlists || []);
        setSubscribers(account.subscribers || []);
        setSubscribedChannels(account.subscribedChannels || []);
        navigate("/youtube");
      } else {
        alert("Account dosen't exesist!");
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
    } else {
      alert("Please fill all the required fields!");
    }
  };

  const handleLogout = () => {
    setUser({});
    setHistory([]);
    setLikedVideo([]);
    setDisLikedVideo([]);
    setWatchLater([]);
    setPlaylists([]);
    setSubscribers([]);
    setSubscribedChannels([]);
    navigate("/youtube/feed/accounts/login");
  };

  const handleSelectVideo = (video) => {
    setPlayVideo(video);
    setHistory((prevHistory) => {
      const alreadyExists = prevHistory.includes(video.id);
      if (alreadyExists) {
        const updatedHistory = prevHistory.filter((id) => id !== video.id);
        return [...updatedHistory, video.id];
      } else {
        return [...prevHistory, video.id];
      }
    });
    navigate("/youtube/feed/videopage");
  };

  const handleAddLike = async (id) => {
    if (!user?.email) {
      alert("Please login to like a video!");
      return;
    }
    const updatedVideos = allVideos.map((video) => {
      if (video.id === id) {
        let updatedLikes;
        let updatedDisLikes;
        const hasDisLiked = video.disLikes?.some((disLike) => disLike.email === user.email);
        if( hasDisLiked) {
          updatedDisLikes = video.disLikes?.filter(
            (disLike) => disLike.email !== user.email
          );
          video.disLikes = updatedDisLikes;
        }
        const hasLiked = video.likes?.some((like) => like.email === user.email);
        if (hasLiked) {
          updatedLikes = video.likes.filter(
            (like) => like.email !== user.email
          );
        } else {
          updatedLikes = [
            ...(video.likes || []),
            { email: user.email || "Guest" },
          ];
        }
        const updatedVideo = {
          ...video,
          likes: updatedLikes,
        };
        setPlayVideo(updatedVideo);
        console.log("Liked Video is :", updatedVideo);
        return updatedVideo;
      }
      return video;
    });
    setAllVideos(updatedVideos);

    if(disLikedVideo?.includes(id)) {
      let updatedDisLikedVideo = disLikedVideo?.filter((videoId) => videoId !== id);
      setDisLikedVideo(updatedDisLikedVideo);
    }
    if (!likedVideo.includes(id)) {
      setLikedVideo((pre) => {
        return [...pre, id];
      });
    } else {
      let updatedLikedVideo = likedVideo.filter((videoId) => videoId !== id);
      setLikedVideo(updatedLikedVideo);
    }
    console.log("Liked Video is :", likedVideo);
  };

  const handleAddDisLike = async (id) => {
    if (!user?.email) {
      alert("Please login to disLike a video!");
      return;
    }
    const updatedVideos = allVideos.map((video) => {
      if (video.id === id) {
        let updatedDisLikes;
        let updatedLikes;
        const hasLiked = video.likes?.some((like) => like.email === user.email);
        if( hasLiked) {
          updatedLikes = video.likes?.filter(
            (like) => like.email !== user.email
          );
          video.likes = updatedLikes;
        }
        const hasDisLiked = video.disLikes?.some(
          (disLike) => disLike.email === user.email
        );
        if (hasDisLiked) {
          updatedDisLikes = video.disLikes?.filter(
            (disLike) => disLike.email !== user.email
          );
        } else {
          updatedDisLikes = [
            ...(video.disLikes || []),
            {
              email: user.email || "Guest",
            },
          ];
        }
        const updatedVideo = {
          ...video,
          disLikes: updatedDisLikes,
        };
        setPlayVideo(updatedVideo);
        console.log("DisLiked Video is :", updatedVideo);
        return updatedVideo;
      }
      return video;
    });
    setAllVideos(updatedVideos);
    if(likedVideo?.includes(id)) {
      let updatedLikedVideo = likedVideo?.filter((videoId) => videoId !== id);
      setLikedVideo(updatedLikedVideo);
    }
    if (!disLikedVideo.includes(id)) {
      setDisLikedVideo((pre) => {
        return [...pre, id];
      });
    } else {
      let updatedDisLikedVideo = disLikedVideo.filter(
        (videoId) => videoId !== id
      );
      setDisLikedVideo(updatedDisLikedVideo);
    }
    console.log("DisLiked Video is :", disLikedVideo);
  };
  const handleAddComment = async (comment, id) => {
    const updatedVideos = allVideos.map((video) => {
      if (video.id === id) {
        const updatedVideo = {
          ...video,
          comments: [
            ...(video.comments || []),
            {
              userName: user.userName || "Guest",
              text: comment,
              time: new Date().toLocaleTimeString(),
              date: new Date().toLocaleDateString(),
            },
          ],
        };
        setPlayVideo(updatedVideo);
        return updatedVideo;
      }
      return video;
    });
    setAllVideos(updatedVideos);
  };

  const update = useCallback(async () => {
    const updatedUser = {
      ...user,
      history,
      likedVideo,
      disLikedVideo,
      watchLater,
      playlists,
      subscribers,
      subscribedChannels,
    };
    if (JSON.stringify(user) !== JSON.stringify(updatedUser)) {
      setUser(updatedUser);
      const updatedUsers = allUsers.map((item) =>
        item.email === user.email ? updatedUser : item
      );
      setAllUsers(updatedUsers);
    }
  }, [
    user,
    allUsers,
    history,
    likedVideo,
    disLikedVideo,
    watchLater,
    playlists,
    subscribers,
    subscribedChannels,
  ]);

  useEffect(() => {
    setHistory(history.reverse());
  }, [history]);

  useEffect(() => {
    update();
  }, [
    history,
    likedVideo,
    disLikedVideo,
    watchLater,
    playlists,
    subscribedChannels,
    subscribers,
  ]);

  useEffect(() => {
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }, [allUsers]);

  useEffect(() => {
    if (user && Object.keys(user).length > 0) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    const AllUsers = JSON.parse(localStorage.getItem("allUsers")) || [];
    const User = JSON.parse(localStorage.getItem("user")) || {};
    setAllUsers(AllUsers);
    setUser(User);
    if (User && Object.keys(User).length > 0) {
      setHistory(User.history || []);
      setLikedVideo(User.likedVideo || []);
      setDisLikedVideo(User.disLikedVideo || []);
      setWatchLater(User.watchLater || []);
      setPlaylists(User.playlists || []);
      setSubscribers(User.subscribers || []);
      setSubscribedChannels(User.subscribedChannels || []);
    }
  }, []);

  const value = {
    allUsers,
    setAllUsers,
    user,
    setUser,
    signUp,
    setSignUp,
    navigate,
    drawSlidbar,
    setDrawSlidbar,
    playVideo,
    setPlayVideo,
    // commentObject, setCommentObject,
    history,
    setHistory,
    likedVideo,
    setLikedVideo,
    disLikedVideo,
    setDisLikedVideo,
    playlists,
    setPlaylists,
    watchLater,
    setWatchLater,
    subscribedChannels,
    setSubscribedChannels,
    subscribers,
    setSubscribers,
    handleCreateAccount,
    handleLogin,
    handleLogout,
    handleSelectVideo,
    handleAddLike,
    handleAddDisLike,
    allVideos,
    setAllVideos,
    handleAddComment,
  };
  return (
    <YouTubeContext.Provider value={value}>
      {props.children}
    </YouTubeContext.Provider>
  );
};

export default YouTubeContextProvider;
