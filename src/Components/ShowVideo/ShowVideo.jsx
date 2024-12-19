import React from 'react'

const ShowVideo = ({video}) => {
  return (
    <div>
        <div>
            <video ></video>
        </div>
        <div>
            <div>{video.uploader}</div>
            <div>
                <div>{video.title}</div>
                <div>{video.uploader}</div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default ShowVideo
