import VideoPlayer from './VideoPlayer';

function VideoList(props) {
    console.log('VideoList props', props)
    return(
        <ul>
        {props.albums
          .filter((album) => album.id !== '2')
          .map((album) => {
            return (    
              <li key={album.id}>
                <VideoPlayer name={album.title} image={album.image} albumObj={album} />
                {/* <h3>{album.name}</h3>
                <img src={album.art} alt={album.name} /> */}
              </li>
            );
          })}
      </ul>
    );
}

export default VideoList;