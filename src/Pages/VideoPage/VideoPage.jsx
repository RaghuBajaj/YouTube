import { useContext, useState } from "react";
import "./VideoPage.css";
import { YouTubeContext } from "../../Context";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { SlActionRedo } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
// import { allvideos } from "../YourVideo/videoAssets";
import SideVideos from "./SideVideos";
import Comment from "../../Components/Comment/Comment";

// import { useState } from 'react';
// import axios from "axios";

const VideoPage = () => {
  const { playVideo, handleAddLike, user, handleAddComment, handleAddDisLike, allVideos } = useContext(YouTubeContext);
    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (e) => {
      setCommentText(e.target.value);
    };
    const handleCancelChange = (e) => {
      setCommentText('');
    };

  return (
    <div className="container_VP">
      <div className="Vid_part1_VP">
        <div className="vidBox_VP">
          <video src={playVideo?.video} className="vid_VP" controls />
        </div>
        <p className="vidTitle_VP">{playVideo?.title}</p>
        <div className="Options_div_VP">
          <div className="L_S_M_div_VP">
            <div className="char_div_VP">
              <p className="char0_VP">{playVideo?.uploader?.[0]?.toUpperCase() || 'U'}</p>
            </div>
            <div className="uploader_VP">{playVideo?.uploader || "Uploader"}</div>
          </div>
          <div className="box_div_VP hover padding_VP">
            <IoMdNotificationsOutline size={22} className="icon_VP" />
            <p className="text_VP">Subscribe</p>
          </div>
          <div className="L_S_M_div_VP">
            <div className="box_div_VP">
              <div className="LD_div_VP LD_1_VP hover" onClick={() => handleAddLike(playVideo.id)}>
                {user?.likedVideo?.includes(playVideo.id) ? (
                  <>
                    <BiSolidLike  size={20} className="icon_VP" />
                    <p>{playVideo?.likes?.length || 0}</p>
                  </>
                ) :(
                  <>
                    <SlLike size={20} className="icon_VP" />
                    <p>{playVideo?.likes?.length || 0}</p>
                  </>
                )}
              </div>
              <span className="Vline_VP"></span>
              <div className="LD_div_VP LD_2_VP hover" onClick={() => handleAddDisLike(playVideo.id)}>
                {user?.disLikedVideo?.includes(playVideo.id) ? (
                  <>
                    <BiSolidDislike size={20} className="icon_VP" />
                    <p>{playVideo?.disLikes?.length || 0}</p>
                  </>
                ) :(
                  <>
                    <SlDislike size={20} className="icon_VP" />
                    <p>{playVideo?.disLikes?.length || 0}</p>
                  </>
                )}
              </div>
            </div>
            <div className="box_div_VP hover padding_VP ">
              <SlActionRedo size={20} className="icon_VP" />
              <p className="text_VP">Share</p>
            </div>
            <div className="box_div_VP hover more_VP">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
        
        <div className="video_info_VP"></div>

        <div className="comments_div_box_VP">
          <div className="cmt_box_h1_VP">{playVideo?.comments?.length || 0} Comments</div>
          {user?.userName && (
            <div className="add_comment_VP">
            <div className="char0_cmt_VP">
              { user?.userName?.[0].toUpperCase() }
            </div>
            <div className="comentTextBox_VP">
                <input type="text" value={commentText} placeholder="Add a comment..." className="input_add_cmt_VP" onChange={(e) => {handleCommentChange(e)}}/>
                {commentText.length > 0 && (
                  <div className="btn_CommentBox_VP">
                  <button className="btn_comment_VP hover" onClick={() => { handleCancelChange()}}>Cancel</button>
                  <button className="btn_comment_VP hover" onClick={() => { handleAddComment(commentText, playVideo.id); handleCancelChange()}}>Comment</button>
                </div>
                )}
            </div>
             
          </div>
          )}
          
          <div className="all_cmts_VP">
            {playVideo?.comments?.map((comment, idx) => {
              return <Comment key={idx} comment={comment} />;
            })}
          </div>
        </div>

      </div>

      <div className="Vid_part2_VP">
        {/* <div className="vid_list_VP"> */}
        {allVideos?.map((vid) => {
          return <SideVideos key={vid.id} vid={vid} />;
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default VideoPage;