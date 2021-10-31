//Hero Image (Under-Header)
// import Author from './components/Author/Author';

const Hero = (props) => {
    console.log('Hero Props', props.ActiveVideo.image) //Shows VideoPlayerList Array in console
    // const HeroImg = props.HeroList[0].image; //Simplistic grabbing image from above Array

    return(
          //Video 
          <div className="Hero">
            <video className="Hero-Image" poster={props.ActiveVideo.image} controls></video>
          </div>
    )
}
export default Hero;
