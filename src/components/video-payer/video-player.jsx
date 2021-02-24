import React, {useRef, useState, useEffect} from 'react';
import {VIDEO_DELAY} from '../../const';
import PropTypes from 'prop-types';

let timerId = null;

const VideoPlayer = ({src, poster}) => {

  const videoRef = useRef();
  const [videoStart, setStartVideo] = useState(false);
  const [videoReset, setResetVideo] = useState(false);

  useEffect(() => {
    if (videoStart) {
      timerId = setTimeout(() => {
        videoRef.current.play();
      }, VIDEO_DELAY);
      return;
    }
  }, [videoStart]
  );

  useEffect(() => {
    if (videoReset) {
      clearTimeout(timerId);
      videoRef.current.load();
    }
    return;
  }, [videoReset]
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
