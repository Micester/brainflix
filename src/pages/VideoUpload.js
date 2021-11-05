import React from "react";
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';

class VideoUpload extends React.Component {

    

    render() {
        console.log("Video Page videos", this.state.albums);
        return (
            <div>
                <Header/>
                <Link to={"/videos/" + videos.id}>
                    <Button/>

                </Link>
            </div>

        );
    }

}

  
export default VideoUpload;