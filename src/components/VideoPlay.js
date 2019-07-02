import React from 'react'

export default function VideoPlay({selectedvideo}) {
   
    if(selectedvideo){
         const url = `https://www.youtube.com/embed/${selectedvideo.id.videoId}`
         console.log(selectedvideo);  
         return (
        <div>
            <div className="ui embed">
                <iframe title="video title" src={url} ></iframe>
            </div>
            <div className="ui segment">
                <h3 className="ui header">{selectedvideo.snippet.title}</h3>
                <p>{selectedvideo.snippet.description}</p>
            </div>
        </div>
    )
    }
    return <div></div>
 
}
