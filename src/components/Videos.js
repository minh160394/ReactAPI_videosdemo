import React from 'react'

export default function Videos({myvideo,onselectedvideo}) {
    return (
        <div>
            <div onClick={ () => onselectedvideo(myvideo)} className="ui segment">
                 <img
                  alt={myvideo.snippet.title}
                  className="ui image"
                  src={myvideo.snippet.thumbnails.medium.url} />
                <h4 className="ui header">{myvideo.snippet.title}</h4>

            </div>
          
        </div>
    )
}
