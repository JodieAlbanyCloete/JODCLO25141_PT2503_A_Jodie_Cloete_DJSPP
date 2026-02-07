import React, { useRef, useState, useEffect } from "react";
import styles from "./GlobalAudioPlayer.module.css";

export default function GlobalAudioPlayer({ src, title }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Play / Pause button
  const togglePlay = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play(); // must await the promise
      }
      setIsPlaying(!isPlaying);
    } catch (err) {
      if (err.name !== "AbortError") console.error("Audio play error:", err);
    }
  };

  // Mute / Unmute button
  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Update progress bar
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const duration = audioRef.current.duration || 1;
    setProgress((audioRef.current.currentTime / duration) * 100);
  };

  // Seek audio
  const handleSeek = (e) => {
    if (!audioRef.current) return;
    const percent = e.target.value;
    audioRef.current.currentTime = (percent / 100) * audioRef.current.duration;
    setProgress(percent);
  };

  // Adjust volume
  const handleVolume = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol;
      if (vol > 0 && isMuted) setIsMuted(false);
    }
  };

  // Reset play button when audio ends
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => audio.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <div className={styles.player}>
      {/* Audio element */}
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} />

      {/* Title */}
      <div className={styles.info}>{title}</div>

      {/* Controls */}
      <div className={styles.controls}>
        {/* Play/Pause */}
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>

        {/* Progress bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className={styles.progressBar}
        />

        {/* Mute / Unmute */}
        <button onClick={toggleMute}>
          {isMuted || volume === 0 ? "🔇" : "🔊"}
        </button>

        {/* Volume slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className={styles.volumeBar}
        />
      </div>
    </div>
  );
}
