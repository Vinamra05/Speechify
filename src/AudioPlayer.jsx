import React, { useEffect, useRef, useState } from "react";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { MdOutlineDownloading } from "react-icons/md";

const AudioPlayer = ({ audioFile }) => {
  const audioref = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressRef = useRef();

  useEffect(() => {
    if (audioFile) {
      const audioArrayBuffer = audioFile.AudioStream.buffer;
      const audioURL = URL.createObjectURL(
        new Blob([audioArrayBuffer], { type: "audio/mpeg" })
      );
      const audio = audioref.current;
      audio.src = audioURL;

      audio.addEventListener("loadeddata", () => {
        setDuration(audio.duration);
      });

      audio.addEventListener("timeupdate", updateProgressBar);
      audio.addEventListener("ended", handleAudioEnd);

      return () => {
        audio.removeEventListener("timeupdate", updateProgressBar);
        audio.removeEventListener("ended", handleAudioEnd);
        URL.revokeObjectURL(audioURL);
      };
    }
  }, [audioFile]);

  const updateProgressBar = () => {
    const audio = audioref.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    setCurrentTime(audio.currentTime);
    progressRef.current.style.width = `${progress}%`;
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);  // Reset to play button when audio ends
  };

  const downloadAudio = () => {
    if (audioFile) {
      const audioArrayBuffer = audioFile.AudioStream.buffer;
      const audioURL = URL.createObjectURL(
        new Blob([audioArrayBuffer], { type: "audio/mpeg" })
      );
      const a = document.createElement("a");
      a.href = audioURL;
      a.download = "audio.mp3";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(audioURL);
    }
  };

  const togglePlay = () => {
    const audio = audioref.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-orange-400 to-pink-300 rounded-lg shadow-md w-[90%] max-w-2xl mx-auto">
      <audio ref={audioref} />

      <div className="relative w-full bg-gray-200 h-[8px] rounded-full overflow-hidden mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 to-pink-500"
          ref={progressRef}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-800 text-white rounded-full shadow hover:from-orange-500 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
          disabled={!audioFile}
          onClick={togglePlay}
        >
          {isPlaying ? <FaRegCirclePause className="w-6 h-6" /> : <FaRegCirclePlay className="w-6 h-6" />}
        </button>

        <button
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-800 text-white rounded-full shadow hover:from-orange-500 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-orange-400 disabled:opacity-50"
          disabled={!audioFile}
          onClick={downloadAudio}
        >
          <MdOutlineDownloading className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
