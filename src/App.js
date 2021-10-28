import React from 'react';
import './App.css';

//Header
import Header from './components/Header/Header';
import logoSrc from './assets/Logo/BrainFlix-logo.svg';
import avatarSrc from './assets/Images/Mohan-muruge.jpg';


//Video Player Test
import videoDetails from './data/video-details.json';// Import video-detail data
import VideoList from './components/VideoPlayer/VideoPlayerList';


console.log(videoDetails);

class App extends React.Component {
  //Videos Array
  state = {
    ActiveVideo: videoDetails,
    albums: videoDetails,
    ActiveInfo: videoDetails,
    ActiveComments: videoDetails,
  };


  updateActiveVideo = (id) => {
    const foundVideoId = this.state.albums.findIndex((album)=> id === album.id);
    this.setState({
    ActiveVideo: this.state.albums[foundVideoId]
    });
  };

  render(){
    return (
      <>
        <Header logo={logoSrc} avatar={avatarSrc}/>
        <VideoList albums={this.state.albums}
        updateActiveVideo={this.updateActiveVideo}/>
  
     
  
      </>
    );
  }
}

export default App;
