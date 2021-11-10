import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';

import avatarSrc from '../assets/Images/Mohan-muruge.jpg';
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

class Home extends React.Component {
  state = {
    videos: [],
    ActiveVideo: {}
  };

  //   Component Did Mount
  componentDidMount() {
    console.log(this.props);
    this.getVideos();
    this.getVideoById("84e96018-4022-434e-80bf-000ce4cd12b8");
  }

  // Gets Videos
  getVideos() {
    axios
      .get("https://project-2-api.herokuapp.com/videos/?api_key=%3C41455ad6-5375-402b-85af-4e0468cc04cb%3E")
      .then((response) => {
        this.setState({
          videos: response.data,
          ActiveVideo: response.data[0]
        });
      })
      .catch((error) => console.log(error));
  }

  // Get Video by Id
  getVideoById(id) {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/${id}?api_key=%3C41455ad6-5375-402b-85af-4e0468cc04cb%3E`)
      .then((response) => {
        console.log("Get Videos by ID", response.data);
        this.setState({
          ActiveVideo: response.data
        });
      })
      .catch((error) => console.log(error));
  }

  //Component Did Update
  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;

    if (id) {
      if (prevState.ActiveVideo.id !== id) {
        this.getVideoById(id);
      }
    }
  }

  // HandleClick is good
  handleClick = (id) => {
    console.log('handled click');
    console.log(id);
    const foundVideoId = this.state.videos.findIndex((album) => id == album.id);
    console.log(foundVideoId);
    this.setState({
      ActiveVideo: this.state.videos[foundVideoId]
    });
  };
  render() {
    return (
      <div className="HomePage">
        <>
          <section>
            <Hero videos={this.state.ActiveVideo} />
          </section>
          {/* Needs to update */}
          {/* Title/Author/Description/Comments */}
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

            {/* Needs to update */}
            <div className="About-Comments-right">
              <section className="NextVideos">
                <VideoPlayerList
                  albums={this.state.albums}
                  handleClick={this.handleClick}
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
