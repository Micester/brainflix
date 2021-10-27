//Video Player, Displayed Current Video Under Header

const VideoPlayer = (props) => {
    return(

        <div className="VideoPlayer">
          <video controls className="VideoPlayer" id="Video" preload="metadata">
            <source src={props.video}></source>
          </video>
        </div>
     
    )
}

export default VideoPlayer;

//NEED TO

//Sort Videos.JSON into an array --> go thru ids, imgs, etc --> display based on id and img conneted to id. 
//After Vidoe player is done, once NEXT VIDEOS are done, Link next vidoes so the next video displayes under the header
//Using the array from above help display what video gets replaced with each other.