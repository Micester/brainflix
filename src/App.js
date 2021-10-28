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

//Importing video-details and putting into array
import VideoArrayDetails from './data/video-details.json'



class App extends React.Component {
  //Videos Array
  state = {

    ActiveVideo: VideoArrayDetails[0],
    Videos: VideoArrayDetails,
  }

  updateActiveVideo = (id) => {
    const foundVideoId = this.state.Videos.findIndex((Vidoes)=> id === Vidoes.id);
    this.setState({
    ActiveVideo: this.state.Videos[foundVideoId]
    })
  }

  render(){
    return (
      <>
        <Header logo={logoSrc} avatar={avatarSrc}/>
        <VideoPlayer Video={VideoSrc}/>
  
  
      </>
    );
  }
}

export default App;
