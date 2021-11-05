import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VidoesAPI = ("https://project-2-api.herokuapp.com/?api_key=%3C87640266-501d-4b82-8982-48a62ca674d4%3E")

class VieoApi extends React.Component {
    state = {
      albums: [],
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
          ActiveVideo: response.data[0],
          albums: response.data
        });
      })
      .catch((error) => console.log(error));
  }

  // Get Video by Id
  getVideoById(id) {
    axios (`VidoesAPI${id}`)
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
      console.log("Video page Videos", this.state.albums);
  
      return (
        <div>
          <h1>Video Page/upload page?</h1>
          <h2>Album name: {this.state.ActiveVideo.name}</h2>
          {/* short circuit, if the thing on the left is false don't output the thing on the right */}
          {false && <p>Hello World</p>}
          <ul>
            {this.state.albums &&
              this.state.albums.map((album) => (
                <li key={album.id}>
                  <Link to={"/videos/" + album.id}>
                    <h3>{album.name}</h3>
                    <img
                      src={album.art}
                      alt={album.name + " by the " + album.artist}
                    />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      );
    }
  }
  
export default VieoApi;
  