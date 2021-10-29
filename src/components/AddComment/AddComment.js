const AddComment = (props) => {
    return(
        <div className="Hero__AddComment">
            {/* Add Comment Avatar */}
            <div className="Hero__AddComment__Left">
                <div><img className="header-mid__avatar" src={props.avatar} alt ="avatar"/></div>
            </div> 
            {/* Enter comment and submit button*/}
            <div className="Hero__AddComment__Right">
                <p className="Hero__AddComment__Right">JOIN THE CONVERSATION</p>
                <input className="Hero__AddComment__Right__Search" id="comment" name="comment" type="comment" placeholder="Add a new comment"></input>
                <button className="Hero__AddComment__Right__btn">COMMENT</button>
            </div>
        </div>
    )
}
export default AddComment;