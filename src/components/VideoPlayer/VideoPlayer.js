//Hero Image Under Header
const VideoPlayer = (props) => {
  console.log('video props', props.image);

  return(
    <div className="VideoPlay">
      <div className="VideoImage-src"><img src={props.image} alt={props.name}/></div>
    </div>

  )
}


export default VideoPlayer; 

