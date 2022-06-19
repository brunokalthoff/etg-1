import React from 'react';
import { BsFillSkipForwardFill } from "react-icons/bs";
import { BsFillSkipBackwardFill } from "react-icons/bs";
import { BsPauseFill } from "react-icons/bs";
import { BsPlayFill } from "react-icons/bs";


const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <BsFillSkipBackwardFill />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <BsPauseFill />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <BsPlayFill />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <BsFillSkipForwardFill />
    </button>
  </div>
);

export default AudioControls;