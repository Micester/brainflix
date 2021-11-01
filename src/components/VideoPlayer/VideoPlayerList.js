import { Component } from'react'; 
import  VideoPlayer from './VideoPlayer';

class NextVideos extends Component {
    state = {
        playlist: [],
        clickedItem: ''
    }
    render() {
        return(
            <>
             <p className="NextVideos-title">NEXT VIDEOS</p>
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
            </>
        );
    }
}
export default NextVideos;

