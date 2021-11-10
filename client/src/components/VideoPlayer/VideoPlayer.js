//Videos rendered to videroPLayer
function VideoPlayer(props) {
  return(
    <article 
      onClick={() => {
        props.handleClick(props.id);
      }}  
      className="NextVideos-Lists-Click"
     >
        <div className="NextVideos-Lists-Click-Left">
          <img className="NextVideos-Lists-Click-Left__img" src={props.image} alt={props.name}/>
        </div>

        <div className="NextVideos-Lists-Click-Right">
          <p className="NextVideos-Lists-Click-Right__Name">{props.title}</p>
          <p className="NextVideos-Lists-Click-Right__Channel">{props.channel}</p>
        </div>
    </article>
  )
}
export default VideoPlayer;

