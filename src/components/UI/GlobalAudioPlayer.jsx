import React, { useRef, useState, useEffect } from "react";
import styles from "./GlobalAudioPlayer.module.css";

export default function GlobalAudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const duration = audioRef.current.duration || 1;
    setProgress((audioRef.current.currentTime / duration) * 100);
  };

  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const percent = e.target.value;
    audioRef.current.currentTime = (percent / 100) * audioRef.current.duration;
    setProgress(percent);
  };

  const handleVolume = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  useEffect(() => {
    const audio = audioRef.current;
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);
    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className={styles.player}>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />
      <div className={styles.info}>{title}</div>
      <div className={styles.controls}>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}
