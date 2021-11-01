//Hero Image (Under-Header)

const Hero = (props) => {
    console.log('Hero Props', props.ActiveVideo.image) //Shows VideoPlayerList Array in console
    return(
          //Video 
          <div className="Hero">
            <video className="Hero-Image" poster={props.ActiveVideo.image} controls></video>
          </div>
    )
}
export default Hero;
