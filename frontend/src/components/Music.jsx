import React, { useState } from 'react';
import record from '../images/record.png';

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const StopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M6 6h12v12H6z"/>
  </svg>
);

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioRef, setAudioRef] = useState(null);

    const playMusic = () => {
        if (audioRef) {
            audioRef.play();
        }
        setIsPlaying(true);
    };

    const stopMusic = () => {
        if (audioRef) {
            audioRef.pause();
            audioRef.currentTime = 0;
        }
        setIsPlaying(false);
    };

    const togglePlay = () => {
        if (isPlaying) {
            stopMusic();
        } else {
            playMusic();
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
                onClick={togglePlay}
                style={{
                    zIndex: 1,
                    position: 'fixed',
                    top: "120px",
                    left: "105px",
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    backgroundColor: 'orange',
                    color: 'white',
                    border: 'none',
                    outline: 'none',
                    marginRight: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {isPlaying ? <StopIcon /> : <PlayIcon />}
            </button>
            <img
                src={record}
                alt="黑胶唱片"
                style={{
                    zIndex: 1,
                    position: 'fixed',
                    top: "70px",
                    left: "20px",
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                }}
            />
            <audio ref={setAudioRef} loop autoPlay>
                <source src="/record.mp3" type="audio/mpeg" />
                您的浏览器不支持 audio 元素。
            </audio>
        </div>
    );
};

export default MusicPlayer;