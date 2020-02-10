import React from 'react'
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';

export default function PromoVid() {
    let params = (new URL(document.location)).searchParams;
    let quiz = params.get("quiz") || "video";
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 my-3">
                    <h2 className="text-center">
                        Watch my new video <i>Billionaire</i> now!
                    </h2>
                    <YouTubeEmbed id="1EDqTOUzCVU" />
                </div>
                <div className="col-12 text-center">
                    <a className="btn btn-secondary btn-lg" href={"/trivia/" + quiz + "/questions"}>Become a Billionaire!</a>
                </div>
            </div>
        </div>
    )
}
