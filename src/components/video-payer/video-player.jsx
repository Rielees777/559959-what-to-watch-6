import React, {useRef, useState, useEffect} from 'react';
import {VIDEO_DELAY} from '../../const';
import PropTypes from 'prop-types';

let timerId = null;

const VideoPlayer = ({src, poster}) => {

  const videoRef = useRef();
  const [videoStart, setStartVideo] = useState(false);
  const [videoReset, setResetVideo] = useState(false);

  useEffect(() => {
    if (videoStart && videoRef.current) {
      timerId = setTimeout(() => {
        videoRef.current.play();
      }, VIDEO_DELAY);
      return;
    }
  }, [videoStart, videoRef]
  );

  useEffect(() => {
    if (videoReset && videoRef.current) {
      clearTimeout(timerId);
      videoRef.current.load();
    }
    return;
  }, [videoReset, videoRef]
  );

  return (
    <div
      className="small-movie-card__image"
      onMouseEnter={() => setStartVideo(!videoStart)}
      onMouseLeave={() => setResetVideo(!videoReset)}
    >
      <video
        poster={poster}
        src={src}
        ref={videoRef}
        width="100%"
        height="100%"
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
