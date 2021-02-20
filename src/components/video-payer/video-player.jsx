import React, {useRef} from 'react';
import {VIDEO_DELAY} from '../../const';
import PropTypes from 'prop-types';

let timerId = null;

const VideoPlayer = ({src, poster}) => {

  const videoRef = useRef();

  const videoStart = () => {
    timerId = setTimeout(() => {
      videoRef.current.play();
    }, VIDEO_DELAY);
  };

  const videoReset = () => {
    clearTimeout(timerId);
    videoRef.current.load();
  };

  return (
    <div
      className="small-movie-card__image"
      onMouseEnter={videoStart}
      onMouseLeave={videoReset}
    >
      <video
        poster={poster}
        src={src}
        ref={videoRef}
        width="280"
        height="175"
        muted
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
