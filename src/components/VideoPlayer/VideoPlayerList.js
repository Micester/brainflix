// import { Component } from'react'; 
import  VideoPlayer from './VideoPlayer';
import  TakeVid from '../../data/videos.json';

function VideoPlayerList({handleClick}) {
        const ChosenVideo = TakeVid.slice(1);
        return(
            <>
             <p className="NextVideos-title">NEXT VIDEOS</p>
                    {ChosenVideo.map((album) => {
                            return (    
                                    <ul className="NextVideos-Lists" key={album.id}>
                                        <VideoPlayer 
                                        id = {album.id}
                                        title={album.title} 
                                        image={album.image} 
                                        channel={album.channel} 
                                        albumObj={album}
                                        
                                        // channel = {album.channel}
                                        // comments = {album.comments}
                                        // description = {album.description}
                                        // id = {album.id}
                                        // image = {album.image} 
                                        // likes = {album.likes}
                                        // timestamp = {album.timestamp}
                                        // title = {album.title} 
                                        // views = {album.views}
                                        // albumObj={album}
                                        handleClick = {handleClick}
                                        />
                                    </ul>
                        );
                    })}
            </>
        );
}
export default VideoPlayerList;

