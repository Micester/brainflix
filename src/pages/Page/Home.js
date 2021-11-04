//Header - Avatar & Img 
import logoSrc from '../../assets/Logo/BrainFlix-logo.svg';
import avatarSrc from '../../assets/Images/Mohan-muruge.jpg';

import VideoPlayerList from '../../components/VideoPlayer/VideoPlayerList';
//Hero
import Hero from '../../components/Hero/Hero';
//Title 
import Title from '../../components/Title/Title';
//Author
import Author from '../../components/Author/Author';
//Description 
import Desc from '../../components/Desc/Desc';
//Comments
import Comments from '../../components/Comments/Comments';
import AddComments from '../../components/AddComment/AddComment';
import PrevComments from '../../components/PrevComments/PrevComments';
//Divider Lines
import Divider from '../../components/Divider/Divider';


function Home(props) {
    console.log("HomePage props", props);
  
    return (
      <div className="HomePage">
         <>
          {/* Header */}
          <Header logo={logoSrc} avatar={avatarSrc} />

          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/videos" exact component={App} />
            <Route path="/videos/:id" component={App} />
            <Route path="/videos/Upload" component={VideoUpload} />
          </Switch>

          {/* Needs to update */}
          <section>
            <Hero ActiveVideo={this.state.ActiveVideo} />
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
        </>
      </div>
    );
  }
  
  export default Home;
  