import { Component } from'react'; 
import  VideoPlayer from './VideoPlayer';

class NextVideos extends Component {
    // console.log('Next Vidoes', props);

    state = {
        playlist: [],
        clickedItem: ''
    }
    render() {
        return(
            <>
             <p className="NextVideos-title">NEXT VIDEOS</p>
                {/* <ul className="NextVideos-Lists"> */}
                    {this.props.albums
                    .filter((album) => album.id !== '2')
                        .map((album) => {
                            return (    
                                    <ul className="NextVideos-Lists" key={album.id}>
                                        <VideoPlayer 
                                        title={album.title} 
                                        image={album.image} 
                                        channel={album.channel} 
                                        albumObj={album}
                                        updateActiveVideo={this.props.updateActiveVideo}
                                        handleClicks={(event) => {
                                            console.log(event);
                                            console.log(album.image);
                                            this.setState({clickedItem: album.image});
                                          }}
                                        />
                                    </ul>
                        );
                    })}
                        <div>
                            Clicked Video: {this.state.clickedItem}
                        </div>

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