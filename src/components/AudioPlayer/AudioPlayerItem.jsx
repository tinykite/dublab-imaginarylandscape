import React, { useState, useEffect, useRef } from "react";
import "./AudioPlayer.scss";
import PauseButton from "./PauseButton.jsx";
import PlayButton from "./PlayButton.jsx";

const AudioPlayerItem = ({
  title,
  theme,
  background,
  year,
  city,
  location,
  time,
  audioUrl
}) => {
  const [playState, setPlayState] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const ref = useRef();

  const backgroundColor = {
    background: `${background}`
  };

  const onTimeUpdate = () => {
    const duration = ref.current.duration;
    let currentTime = ref.current.currentTime;
    let progress = (currentTime / duration) * 100;
    setProgressBar(progress);
  };

  const playAudio = () => {
    setPlayState(!playState);
    ref.current.play();
  };

  const pauseAudio = () => {
    setPlayState(!playState);
    ref.current.pause();
  };

  return (
    <section className={`podcast podcast--${theme}`} style={backgroundColor}>
      <div className="podcast__player">
        <div className="podcast__main">
          {playState ? (
            <button className="podcast__button-container" onClick={pauseAudio}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="25"
                height="25"
                className={`podcast__button podcast__button--${theme}`}
              >
                <rect x="0" y="0" width="6" height="25"></rect>
                <rect x="13" y="0" width="6" height="25"></rect>
              </svg>
            </button>
          ) : (
            <button className="podcast__button-container" onClick={playAudio}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
                width="25"
                height="25"
                className={`podcast__button podcast__button--${theme}`}
              >
                <polygon points="0,0 25,12.5 0,25 0,0" />
              </svg>
            </button>
          )}
          <h2 className="podcast__title">{title}</h2>
        </div>
        <div className={`podcast__progressBar podcast__progressBar--${theme}`}>
          <audio
            src={audioUrl}
            ref={ref}
            onTimeUpdate={onTimeUpdate}
            controls
          />
          <div
            style={{ width: progressBar + "%" }}
            className={`podcast__progressBar-playing podcast__progressBar-playing--${theme}`}
          ></div>
        </div>
        <ul className="podcast__meta">
          <li className="podcast__metaItem">{year} |</li>
          <li className="podcast__metaItem">{city} |</li>
          <li className="podcast__metaItem">{time} |</li>
          <li className="podcast__metaItem">{location}</li>
        </ul>
      </div>
    </section>
  );
};

export default AudioPlayerItem;
