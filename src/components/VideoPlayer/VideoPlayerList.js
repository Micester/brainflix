import { Component } from'react'; 
import  VideoPlayer from './VideoPlayer';

class NextVideos extends Component {
    // state = {
    //     LastVideos: []
    // }
    render() {
        return(
            <>
             <p className="NextVideos-title">NEXT VIDEOS</p>
                {/* <ul className="NextVideos-Lists"> */}
                    {this.props.videos
                    .filter((videos) => videos.id !== '2')
                        .map((videos) => {
                            return (    
                    
                                    <ul className="NextVideos-Lists" key={videos.id}>
                                        <VideoPlayer 
                                        title={videos.title} 
                                        image={videos.image} 
                                        channel={videos.channel} />
                                    </ul>
                              
                        );
                    })}
                {/* </ul>  */}
            </>
        );
    }
}

export default NextVideos;

//Hero Image Under Header
// function VideoList(props) {
//     console.log('VideoList props', props)

//     return(
    
        
//     );
// }

// export default VideoList;


//THIS CODE BELOW LOOPS THROUGH ARRAY IMAGES AND SPITS THEM OUT IN A LIST
//
// {/* <ul>
//         {props.albums
//           .filter((album) => album.id !== '2')
//           .map((album) => {
//             return (    
//               <li key={album.id}>
//                 <VideoPlayer name={album.title} image={album.image} albumObj={album} />
                
//                 {/* <h3>{album.name}</h3>
//                 <img src={album.art} alt={album.name} /> */}
//               </li>
//             );
//           })}
//       </ul> */}