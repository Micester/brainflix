//Hero Image (Under-Header)
const Hero = (props) => {
    return(
          //Video
          <div className="Hero">
            <video className="Hero-Image" poster={props.ActiveVideo.image} controls></video>
          </div>
    )
}
export default Hero;


