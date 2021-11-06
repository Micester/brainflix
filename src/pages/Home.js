import React from "react";
import '../App.css';

//Header - Avatar & Img 
// import logoSrc from '../assets/Logo/BrainFlix-logo.svg';
import avatarSrc from '../assets/Images/Mohan-muruge.jpg';
//Header -- Mobile 
// import Header from './components/Header/Header';

import VideoPlayerList from '../components/VideoPlayer/VideoPlayerList';
//Hero
import Hero from '../components/Hero/Hero';
//Title 
import Title from '../components/Title/Title';
//Author
import Author from '../components/Author/Author';
//Description 
import Desc from '../components/Desc/Desc';
//Comments
import Comments from '../components/Comments/Comments';
import AddComments from '../components/AddComment/AddComment';
import PrevComments from '../components/PrevComments/PrevComments';
//Divider Lines
import Divider from '../components/Divider/Divider';
// import { render } from '@testing-library/react';

// //Import Video-detail data
import videoDetails from '../data/video-details.json';
import ActiveVideo from '../data/video-details.json';


// console.log(videoDetails);
// console.log(ActiveVideo[0].image);

class Home extends React.Component {
  state = {
    // Active Video
    ActiveVideo: videoDetails[0],
    albums: videoDetails,


    // Hero Props
    HeroList: videoDetails,
    CommentsList: videoDetails,
    PrevCommentsList: videoDetails,
  };

  // HandleClick is good
  handleClick = (id) => {
    console.log('handled click');
    console.log(id);
    const foundVideoId = this.state.albums.findIndex((album) => id == album.id);
    console.log(foundVideoId);
    this.setState({
      ActiveVideo: this.state.albums[foundVideoId]
    });
  };
  render() {
    return (
      <div className="HomePage">
        <>
          {/* Header */}
          {/* <section>
            <Header />
          </section> */}

          {/* 
        <Link to={"/videos/Home" + videos.id}>  */}
          {/* Needs to update */}
          <section>
            <Hero ActiveVideo={this.state.ActiveVideo} />
            <p> this is the home page</p>
          </section>


          {/* Needs to update */}
          {/* Title/Author/Description/Comments */}
          <section className="About-Comments">
            <div className="About-Comments-Left">
              <section className="About">
                <Title ActiveVideo={this.state.ActiveVideo} />
                {/* <Divider className="mobile"/> */}
                <Author ActiveVideo={this.state.ActiveVideo} />
                <Divider />
                <Desc ActiveVideo={this.state.ActiveVideo} />
              </section>

              <section className="Comments">
                <Comments CommentsList={this.state.CommentsList} />
                <AddComments avatar={avatarSrc} />
                <Divider />
                <PrevComments avatar={avatarSrc}
                  ActiveVideo={this.state.ActiveVideo} />
              </section>
            </div>

            {/* Needs to update */}
            <div className="About-Comments-right">
              <section className="NextVideos">
                {/* <NextVideos /> */}
                <VideoPlayerList
                  albums={this.state.albums}
                  handleClick={this.handleClick}
                />
              </section>
            </div>
          </section>
          {/* </Link> */}
        </>
      </div>
    );
  }

}

export default Home;
