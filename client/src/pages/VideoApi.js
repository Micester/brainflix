import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import UploadVideo from "../components/UploadVideo/UploadVideo";
import Divider from '../components/Divider/Divider';
import '../components/UploadVideo/UploadVideos.css'


class VideoApi extends React.Component {
  state = {
    videos: [],
    ActiveVideo: {}
  };

  //   Component Did Mount
  componentDidMount() {
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
        this.setState({
          videos: response.data
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
    return (
      <div>
        <Divider />
        <div className="UploadPage">
          <h1 className="UploadPage-title">Upload Video</h1>
          {false && <p>Hello World</p>}
          <UploadVideo />
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
      </div>
    );
  }
}
export default VideoApi;
