//Hero Image (Under-Header)


function Hero (props)  {


  console.log('hero', props);
  
    return(
          //Video
          <div className="Hero">
            <video className="Hero-Image" poster={props.videos.image} controls></video>
          </div>
    )
}
export default Hero;


