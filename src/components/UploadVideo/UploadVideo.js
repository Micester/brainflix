import './UploadVideos.css';
import Thumb from '../../assets/Images/Upload-video-preview.jpg';
import Divider from '../Divider/Divider';

const UploadVideo = (props) => {
    return (
        <div className="UploadVideo__AddComment">
            {/* Add Comment Avatar */}

            {/* Enter comment and submit button*/}
            <div className="UploadVideo__AddComment__Right">
                <div className='UploadVideo__AddComment__divider'>
                    <Divider />
                </div>

                <div className="UploadVideo__AddComment__Right__tablet">
                    <div className="UploadVideo__AddComment__Right__tablet__left">
                        <p className="UploadVideo__AddComment__Right__title">VIDEO THUMBNAIL</p>
                        <img className="UploadVideo__AddComment__img" src={Thumb} alt="avatar" />
                    </div>

                    <div className="UploadVideo__AddComment__Right__tablet__right">
                        <p className="UploadVideo__AddComment__Right__title">TITLE YOUR VIDEO</p>

                        <div className="UploadVideo__AddComment__Right__box">
                            <input className="UploadVideo__AddComment__Right__Search" id="comment" name="comment" type="comment" placeholder="Add a title to you're video"></input>
                        </div>
                        <p className="UploadVideo__AddComment__Right__title">ADD A VIDEO DESCRIPTION</p>
                        <input className="UploadVideo__AddComment__Right__Search2" id="comment" name="comment" type="comment" placeholder="Add a description to you're video"></input>
                    </div>
                </div>

                <div className="UploadVideo__AddComment__Right__box">
                    <div className='UploadVideo__AddComment__divider'>
                        <Divider />
                    </div>
                    <div className="UploadVideo__AddComment__Right__box__buttons">
                        <button className="UploadVideo__AddComment__Right__btn2">CANCEL</button>
                        <button className="UploadVideo__AddComment__Right__btn">PUBLISH</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UploadVideo;