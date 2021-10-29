
function VideoPlayer(props) {
  console.log('videoplayer props', props);

  return(
    <article className="NextVideos-List-Click"
     onClick={() => {
      props.updateActiveVideo(props.id);
     }}
     >
        <div className="NextVideos-List-Click-Left">
          <img className="NextVideos-List-Click-Left__img" src={props.image} alt={props.name}/>
        </div>

        <div className="NextVideos-List-Click-Right">
          <p className="NextVideos-List-Click-Right__Name">{props.title}</p>
          <p className="NextVideos-List-Click-Right__Channel">{props.channel}</p>
        </div>

    </article>

  )
}

export default VideoPlayer;

