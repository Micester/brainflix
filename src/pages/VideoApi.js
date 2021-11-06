import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import UploadVideo from "../components/UploadVideo/UploadVideo";

import Divider from '../components/Divider/Divider';

// const VidoesAPI = ("https://project-2-api.herokuapp.com/videos/?api_key=%3C41455ad6-5375-402b-85af-4e0468cc04cb%3E");

const VidoesAPI = ("https://project-2-api.herokuapp.com/?api_key=%3C41455ad6-5375-402b-85af-4e0468cc04cb%3E");


const VidoesAPID = ("https://project-2-api.herokuapp.com/videos/:id/?api_key=%3C41455ad6-5375-402b-85af-4e0468cc04cb%3E");

//https://project-2-api.herokuapp.com/videos/?api_key=%3C41455ad6-5375-402b-85af-4e0468cc04cb%3E

class VideoApi extends React.Component {
    state = {
      videos: [],
      ActiveVideo: {}
    };
  
//   Component Did Mount
  componentDidMount() {
    console.log(this.props);
    this.getVideos();
  }

  // Gets Videos
  getVideos() {
    axios
      .get(VidoesAPI)
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
    .get(`https://project-2-api.herokuapp.com/videos/${id}`)
    .then((response) => {
      console.log(response.data);
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

  
    render() {
      // console.log(this.state);
      console.log("Video page Videos", this.state.videos);
  
      return (
        <div>
          <Divider/>
          <h1>Upload Video</h1>
          <h2>Video title: {this.state.ActiveVideo.title}</h2>
          {/* short circuit, if the thing on the left is false don't output the thing on the right */}
          {false && <p>Hello World</p>}
          
          <UploadVideo/>

          <ul>
            {this.state.albums &&
              this.state.albums.map((album) => (
                <li key={video.id}>
                  <Link to={"/videos/" + album.id}>
                    <h3>{video.title}</h3>
                    <img
                      src={video.image}
                      alt={video.channel + " by the " + video.id}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      );
    }
  }
  
export default VideoApi;
  