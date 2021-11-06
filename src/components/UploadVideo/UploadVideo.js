

const UploadVideo = (props) => {
    return (
        <div className="Comments__AddComment">
            {/* Add Comment Avatar */}

            {/* Enter comment and submit button*/}
            <div className="Comments__AddComment__Right">
                
                <p className="Comments__AddComment__Right__title">TITLE YOUR VIDEO</p>

                <div className="Comments__AddComment__Right__box">
                    <input className="Comments__AddComment__Right__Search" id="comment" name="comment" type="comment" placeholder="Add a new comment"></input>
                </div>
                <p className="Comments__AddComment__Right__title">ADD A VIDEO DESCRIPTION</p>

                <div className="Comments__AddComment__Right__box">
                    <input className="Comments__AddComment__Right__Search" id="comment" name="comment" type="comment" placeholder="Add a new comment"></input>
                    <button className="Comments__AddComment__Right__btn">PUBLISH</button>
                    <button className="Comments__AddComment__Right__btn">CANCEL</button>
                </div>
            </div>
        </div>
    )
}
export default UploadVideo;