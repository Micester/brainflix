// import { Component } from'react'; 
import  VideoPlayer from './VideoPlayer';
import  TakeVid from '../../data/videos.json';
import { Link } from "react-router-dom";


function VideoPlayerList({handleClick}) {
        const ChosenVideo = TakeVid.slice(1);
        return(
            <>
             <p className="NextVideos-title">NEXT VIDEOS</p>
                    {ChosenVideo.map((album) => {
                            return (    
                                <Link to="/home/" className="NextVideos-title-link">
                                    <ul className="NextVideos-Lists" key={album.id}>
                                        <VideoPlayer 
                                        id = {album.id}
                                        title={album.title} 
                                        image={album.image} 
                                        channel={album.channel} 
                                        albumObj={album}
                                        handleClick = {handleClick}
                                        />
                                    </ul>
                                </Link>
                        );
                    })}
            </>
        );
}
export default VideoPlayerList;

