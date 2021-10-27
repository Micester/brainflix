import React from 'react';
import './App.css';

//Header Stuff
import Header from './components/Header/Header';
import logoSrc from './assets/Logo/BrainFlix-logo.svg';
import avatarSrc from './assets/Images/Mohan-muruge.jpg';

//Video Player
import VideoSrc from './data/videos.json'; //Video 
// import VidoeDetails from './data/video-details.json'; //Video-Details
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
// import VideoSrc from './data/data';

function App() {
  return (
    <>
      <Header logo={logoSrc} avatar={avatarSrc}/>
      <VideoPlayer Video={VideoSrc}/>


    </>
  );
}

export default App;
