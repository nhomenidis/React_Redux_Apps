import React from 'react';
import VideoListItem from './video_list_item';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

const VideoList = props => {
    const videoItems = props.videos.map(video => {
      return (
        <VideoListItem
          onVideoSelect={props.onVideoSelect}
          key={video.etag}
          video={video}
        />
      );
    });
  
    return (
      <ListGroup>
        {videoItems}
      </ListGroup>
    );
  };
  

export default VideoList;