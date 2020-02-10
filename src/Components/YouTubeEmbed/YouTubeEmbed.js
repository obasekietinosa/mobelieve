import React from 'react'
import './YouTubeEmbed.css'

export default function YouTubeEmbed(props) {
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <iframe
                className="embed-responsive-item" 
                width="1140" 
                height="641" 
                title={props.id}
                src={"https://www.youtube.com/embed/" + props.id} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </div>
    )
}
