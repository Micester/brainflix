import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoUpload from './pages/VideoUpload';
import Home from './pages/Home';
import VideoApi from './pages/VideoApi';

import React from 'react';
import './App.css';

//Header - Avatar & Img 
import logoSrc from './assets/Logo/BrainFlix-logo.svg';
import avatarSrc from './assets/Images/Mohan-muruge.jpg';

// //Import Video-detail data
// import videoDetails from './data/video-details.json';
// import ActiveVideo from './data/video-details.json';


// Components ==================
//Header -- Mobile 
import Header from './components/Header/Header';
// //Video-List
// import VideoPlayerList from './components/VideoPlayer/VideoPlayerList';
// //Hero
// import Hero from './components/Hero/Hero';
// //Title 
// import Title from './components/Title/Title';
// //Author
// import Author from './components/Author/Author';
// //Description 
// import Desc from './components/Desc/Desc';
// //Comments
// import Comments from './components/Comments/Comments';
// import AddComments from './components/AddComment/AddComment';
// import PrevComments from './components/PrevComments/PrevComments';
// //Divider Lines
// import Divider from './components/Divider/Divider';


// console.log(videoDetails);
// console.log(ActiveVideo[0].image);

class App extends React.Component {
  // state = {
  //   //Active Video
  //   ActiveVideo: videoDetails[0],
  //   albums: videoDetails,


  //   //Hero Props
  //   HeroList: videoDetails,
  //   CommentsList: videoDetails,
  //   PrevCommentsList: videoDetails,
  // };

  //Component Did Mount
  // componentDidMount() {
  //   console.log(this.props);
  //   this.getVideos();
  // }

  // // Gets Videos
  // getVideos() {
  //   axios
  //     .get(apiKey)
  //     .then((response) => {
  //       this.setState({
  //         ActiveVideo: response.data[0],
  //         albums: response.data
  //       });
  //     })
  //     .catch((error) => console.log(error));
  // }

  // // Get Video by Id
  // getVideoById(id) {
  //   axios (`api_key${id}`)
  //   .then((response) => {
  //     console.log(response.data);
  //     this.setState({
  //       ActiveVideo: response.data
  //     });
  //   })
  //   .catch((error) => console.log(error));
  // }

  // //Component Did Update
  // componentDidUpdate(prevProps, prevState) {
  //   const { id } = this.props.match.params; 

  //   if (id) {
  //     if (prevState.ActiveVideo.id !== id) {
  //       this.getVideoById(id);
  //     }
  //   }
  // }

  //HandleClick is good
  // handleClick = (id) => {
  //   console.log('handled click');
  //   console.log(id);
  //   const foundVideoId = this.state.albums.findIndex((album) => id == album.id);
  //   console.log(foundVideoId);
  //   this.setState({
  //     ActiveVideo: this.state.albums[foundVideoId]
  //   });
  // };

  render() {
    return (
      <Router>
        <div className="App">
          {/* Header */}
          <Header logo={logoSrc} avatar={avatarSrc} />

       
          <Switch>
            {/* <Route path="/" exact component={VideoApi} />
            <Route path="/videos" exact component={VideoApi} />
            <Route path="/videos/:id" component={VideoApi} /> */}
            <Route path="/videos/Home" component={Home} />
            {/* <Route path="/videos/VideoUpload" component={VideoUpload} /> */}
          </Switch>
        </div>

      </Router>
    );
  }
}
export default App;
