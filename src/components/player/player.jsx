import React, {useState, useEffect, useRef} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFilm} from '../../store/api-actions';
import LoadingScreen from '../loading/loading';

const Player = () => {
  const videoRef = useRef();
  const [videoStart, setStartVideo] = useState(true);
  const [timeLinePosition, setTimeLinePosition] = useState(0);
  const [currentime, setCurrentTime] = useState(``);
  const [fullScreenState, setFullScreenVideo] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  let {filmId} = useParams();


  const {film, isFilmLoaded} = useSelector((state) => state.DATA);
  const {videoLink, previewImage} = film;

  const getTime = (time) => {
    let h = time / 3600 ^ 0;
    let m = (time - h * 3600) / 60 ^ 0;
    let s = time - h * 3600 - m * 60;
    return (h < 10 ? `0` + h : h) + `:` + (m) + `:` + (s);
  };

  useEffect(() => {
    dispatch(fetchFilm(filmId));
  }, [filmId]);

  useEffect(() => {
    if (videoStart) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [videoStart]);

  const handlePlayButtonClick = () => {
    setStartVideo(!videoStart);
  };

  const handleFullScreenOpen = () => {
    if (fullScreenState) {
      videoRef.current.requestFullscreen();
      setFullScreenVideo(true);
    } else {
      videoRef.current.exitFullscreen();
      setFullScreenVideo(false);
    }
  };
  const handleTimeLinePosition = () => {
    setTimeLinePosition((videoRef.current.currentTime / videoRef.current.duration) * 100);
    setCurrentTime(Math.floor(videoRef.current.duration - videoRef.current.currentTime));
  };

  if (!isFilmLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="player">
      <video
        src={videoLink}
        ref={videoRef}
        poster={previewImage}
        className="player__video"
        onClick={handlePlayButtonClick}
        onTimeUpdate={handleTimeLinePosition}
      />
      <button
        onClick={() => history.push(`/films/${filmId}`)}
        type="button"
        className="player__exit">
        Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={timeLinePosition} max="100"></progress>
            <div className="player__toggler" style={{left: `${timeLinePosition}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{getTime(currentime)}</div>
        </div>

        <div className="player__controls-row">
          {!videoStart ? <button
            onClick={handlePlayButtonClick}
            type="button"
            className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button> :
            <button
              onClick={handlePlayButtonClick}
              type="button"
              className="player__play">
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          }
          <div className="player__name">Transpotting</div>

          <button
            onClick={handleFullScreenOpen}
            type="button"
            className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
