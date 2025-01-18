import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from "./VideoPlayer.jsx";
import {useRef} from "react";

function App() {
  const playRef = useRef(null);
  const videoLink = "http://localhost:8000/uploads/courses/d355ef5d-0f89-45f0-b996-54554f67faf8/index.m3u8"
    const videoPlayerOptions = {
        controls: true,
        responsive: true,
        fluid: true,
        sources: [{
            src: videoLink,
            type: 'application/x-mpegURL'
        }],
    }

    const handlePlayReady = (player) => {
        playerRef.current = player;

        player.on("Waiting", () => {
            videojs.log("player is waiting");
        });

        player.on("dispose", () => {
            videojs.log("player will dispose");
        });
    }
  return (
    <>
        <div>
            <h1> Video Player</h1>
            <VideoPlayer options={videoPlayerOptions} onReady={handlePlayReady} />
        </div>
    </>
  )
}

export default App
