import  VideoPlayer from './VideoPlayer';
import { Link } from "react-router-dom";


function VideoPlayerList ({videos, videoId}) {
        const video = videos; 
        return(
            <>
             <p className="NextVideos-title">NEXT VIDEOS</p>
                    {video.filter((data) =>
                    data.id !== videoId)
                    .map((data) => {
                        return (    
                            <Link to= {"/home/" + data.title} className="NextVideos-title-link" key={data.id}>
                                <ul className="NextVideos-Lists">
                                    <VideoPlayer 
                                    id = {data.id}
                                    title={data.title} 
                                    image={data.image} 
                                    channel={data.channel} 
                                    albumObj={data}
                                    />
                                </ul>
                            </Link>
                    );
                    })}

            </>
        );
}
export default VideoPlayerList;


