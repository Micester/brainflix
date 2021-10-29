import React from 'react';
import './App.css';

//Header
import Header from './components/Header/Header';
import logoSrc from './assets/Logo/BrainFlix-logo.svg';
import avatarSrc from './assets/Images/Mohan-muruge.jpg';


//Video Player Test
import videoDetails from './data/video-details.json';// Import video-detail data
import VideoList from './components/VideoPlayer/VideoPlayerList';



//Hero
import Hero from './components/Hero/Hero';

//Title 
import Title from './components/Title/Title';

//Author
import Author from './components/Author/Author';

//Description 
import Desc from './components/Desc/Desc';




console.log(videoDetails);

class App extends React.Component {
  //Videos Array
  state = {
    ActiveVideo: videoDetails,
    albums: videoDetails,
    ActiveInfo: videoDetails,
    ActiveComments: videoDetails,

    //Working components
    //Hero Props
    HeroList: videoDetails,
    //Title Props
    TitleList: videoDetails,
    //Author Props
    AuthorList: videoDetails,
    //Description Props
    DescList: videoDetails,
    
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
        {/* Header */}
        <Header logo={logoSrc} avatar={avatarSrc}/>

        {/* Hero-Image*/}
        <Hero HeroList={this.state.HeroList}/> 
        
        {/* Title/Author/Description */}
        <section className="Hero-about">
          <Title TitleList={this.state.TitleList}/>
          <Author AuthorList={this.state.AuthorList}/>
          <Desc DescList={this.state.DescList}/>

        </section>

  
        {/* Idk what this is */}
        <VideoList albums={this.state.albums}
        updateActiveVideo={this.updateActiveVideo}/>
  
     
  
      </>
    );
  }
}

export default App;
