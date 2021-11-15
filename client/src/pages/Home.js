import React from "react";
import axios from "axios";
import '../App.css';
import avatarSrc from '../assets/Images/Mohan-muruge.jpg';
import VideoPlayerList from '../components/VideoPlayer/VideoPlayerList';
import Hero from '../components/Hero/Hero';
import Title from '../components/Title/Title';
import Author from '../components/Author/Author';
import Desc from '../components/Desc/Desc';
import Comments from '../components/Comments/Comments';
import AddComments from '../components/AddComment/AddComment';
import PrevComments from '../components/PrevComments/PrevComments';
import Divider from '../components/Divider/Divider';

class Home extends React.Component {
  state = {
    videos: [],
    videoId: [],
    comments: [],
    ActiveVideo: {}
  };
                             
componentDidMount() {
  axios.get('/videos').then((response) => {
    console.log(response.data)
    this.setState({videos:response.data, ActiveVideo: response.data[0]});
    
  }).catch ((error) => {
    console.log(error);
  })
}

// Get Video by Id
getVideoById(id) {
  axios 
  .get(`/videos/${id}`)
  .then((response) => {
    console.log("Get Videos by ID",response.data);
    this.setState({
      ActiveVideo: response.data
    });
  })
  .then((response) => {
    console.log(this.state.ActiveVideo);
  })
 .catch((error) => console.log(error));
  }

//Component Did Update
componentDidUpdate(prevProps, prevState) {
  const { id } = this.props.match.params; 
  console.log('we are in side component did update', id);
  
  if (id) {
    if (prevState.ActiveVideo.id !== id) {
      this.getVideoById(id);
    }
  }
}

  videoUpdate = (id) => {
    this.setState({
     });
   }

  render() {
    return (
      <div className="HomePage">
        <>
          <section>
            <Hero videos={this.state.ActiveVideo} />
          </section>

          {/* Needs to update */}
          <section className="About-Comments">
            <div className="About-Comments-Left">
              <section className="About">
                <Title videos={this.state.ActiveVideo} />
                <Author videos={this.state.ActiveVideo} />
                <Divider />
                <Desc videos={this.state.ActiveVideo} />
              </section>

              <section className="Comments">
                <Comments videos={this.state.ActiveVideo} />
                <AddComments avatar={avatarSrc} />
                <Divider />
                    <PrevComments avatar={avatarSrc}
                  videos={this.state.ActiveVideo} />
              </section>
            </div>

            <div className="About-Comments-right">
              <section className="NextVideos">
                <VideoPlayerList
                  videos={this.state.videos}
                  videoId= {() => this.state.videoId}
                />
              </section>
            </div>
          </section>
        </>
      </div>
    );
  }

}

export default Home;
