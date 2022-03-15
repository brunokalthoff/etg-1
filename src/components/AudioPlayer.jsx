import React, { useState, useEffect, useContext, useRef } from 'react';
import AudioControls from './AudioControls';
import { ArtistContext } from '../ArtistContext';
import { useParams } from 'react-router-dom';


export default function AudioPlayer() {
  // State & Context & Params
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [artists] = useContext(ArtistContext);
  const { room } = useParams();
  // Effect

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
    document.documentElement.style.setProperty('--active-color', activeColor);
  }, [trackIndex]);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);


    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  }


  // Destructure for conciseness

  let arr = room.split('-');
  const str = arr[0];
  const yolo = Number(str) - 1;

  const tracks = artists[yolo].art.audios;
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];


  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  }

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  }

  const handleClick = i => {
    setTrackIndex(i);
  }

  let activeColor = color;

  // const onScrubEnd = () => {
  //   // If not already playing, start
  //   if (!isPlaying) {
  //     setIsPlaying(true);
  //   }
  //   startTimer();
  // }


  return (
    <div className="audio-player">
      <div className="track-info">
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className="title">{title}</h2>
        <h3 className="artist">{artist}</h3>
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress"
          onChange={(e) => onScrub(e.target.value)}
        // onMouseUp={onScrubEnd}
        // onKeyUp={onScrubEnd}
        />
      </div>
      <div className='Tracklist'>
        {tracks.map((track, i) =>
        (
          <button onClick={() => handleClick(i)} className={trackIndex === i ? 'ButtonMaxime Tracks TrackActive' : 'ButtonMaxime Tracks'} key={i}><span className='big'>{track.title}</span> <span className='italic'>{track.artist}</span></button>
        )
        )}

      </div>
    </div>
  );

};