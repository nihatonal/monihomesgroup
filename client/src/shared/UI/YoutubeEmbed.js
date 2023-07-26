import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "react-background-video-player";
import video_ from '../../assets/videos/fethiyetanitim.mp4'
import './YoutubeEmbed.css'
const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
        {/* <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            autoplay={1}
        /> */}
        <VideoPlayer
          className="video"
          src={video_}
          autoPlay={true}
          muted={true}
          loop={true}
        />
        
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;