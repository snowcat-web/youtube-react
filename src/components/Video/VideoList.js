import React from 'react';
import VideoListItem from './VideoListItem';
import './VideoList.css';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem 
                onUserSelected={props.onVideoSelect}           
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <nav className="list-video">
          <ul>{videoItems}</ul>
        </nav>
    );
};

export default VideoList;