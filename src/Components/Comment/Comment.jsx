import './Comment.css';

const Comment = ({comment}) => {
  return (
    <div className="comment-box">
        <div className='user-icon'>{comment?.userName[0].toUpperCase()}</div> 
        <div className='comment-content'>
            <span className="user-name">{comment?.userName}</span>
            <div className="content">
            {comment?.text}
            </div>
        </div>
        {/* <div className="comment-footer">
            <span className="comment-date">{new Date(comment.date).toLocaleDateString()}</span>
            <span className="comment-likes">{comment.likes} likes</span>
        </div> */}
    </div>
  )
};

export default Comment;