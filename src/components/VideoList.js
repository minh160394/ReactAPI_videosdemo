import React from 'react';
import Video from './Videos';
export default function VideoList({getvideos,onselectedvideo}) {
    const listvideos = getvideos.map(videositem => {
        return <Video key={videositem.id.videoId} onselectedvideo={onselectedvideo} myvideo={videositem}/>;
    });
    return <div>{listvideos}</div>
    
}
