import React from 'react';
import './App.css';

//Header -- Mobile Done
import Header from './components/Header/Header';
import logoSrc from './assets/Logo/BrainFlix-logo.svg';
import avatarSrc from './assets/Images/Mohan-muruge.jpg';

//Import Video-detail data
import videoDetails from './data/video-details.json';
import ActiveVideo from './data/video-details.json';

//Import Vidoes data
import videos from './data/videos.json';
// import VideoList from './components/VideoPlayer/VideoPlayerList';


//Hero
import Hero from './components/Hero/Hero';
import img from './components/VideoPlayer/VideoPlayerList';

//Title 
import Title from './components/Title/Title';

//Author
import Author from './components/Author/Author';

//Description 
import Desc from './components/Desc/Desc';

//Comments
import Comments from './components/Comments/Comments';

import AddComments from './components/AddComment/AddComment';

import PrevComments from './components/PrevComments/PrevComments';

//Video Player
import NextVideos from './components/VideoPlayer/VideoPlayerList';

//Divider Lines
import Divider from './components/Divider/Divider';


console.log(videoDetails);
console.log(ActiveVideo[0].image);


class App extends React.Component {
  //Videos Array
  state = {
    //Active Video
    ActiveVideo: videoDetails[0],
    albums: videoDetails,
    // ActiveInfo: videoDetails,
    // ActiveComments: videoDetails,

    //Working components  --> (Needs to be changed by onClick)
    //Hero Props
    HeroList: videoDetails,

    //Title Props
    TitleList: videoDetails,
    //Author Props
    AuthorList: videoDetails,
    //Description Props
    DescList: videoDetails,
    //Comments Props
    CommentsList: videoDetails,
    PrevCommentsList: videoDetails,

    //NextVideo
    videos: videos,
  };

  //Update is good
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

        {/* Active Hero Image*/}
        {/* <section>
          <img class="ActiveImage">{this.state.ActiveVideo[0].image}</img>
        </section> */}

       {/* Needs to update */}
        <Hero ActiveVideo={this.state.ActiveVideo}/>
   
        {/* <Hero/>
        <section>
          <div>{this.state.ActiveVideo.image}</div>
        </section> */}

         {/* Needs to update */}
        {/* Title/Author/Description/Comments */}
        <section className="About">
          <Title TitleList={this.state.TitleList}/>
          <Divider/>
          <Author AuthorList={this.state.AuthorList}/>
          <Divider/>
          <Desc DescList={this.state.DescList}/>
        </section>

        <section className="Comments">
           <Comments CommentsList={this.state.CommentsList}/>
           <AddComments avatar={avatarSrc}/>
           <Divider/>
           <PrevComments avatar={avatarSrc} 
            PrevCommentsList={this.state.PrevCommentsList}/>
        </section>
        
         {/* Needs to update */}
        <section className="NextVideos">
          {/* <NextVideos /> */}
          <NextVideos 
          albums={this.state.albums}
          updateActiveVideo={this.updateActiveVideo}
          />
        </section>

  
        {/* Idk what this is */}
        {/* <VideoList albums={this.state.albums}
        updateActiveVideo={this.updateActiveVideo}/> */}
      </>
    );
  }
}
export default App;
