import Button from "../Button/Button";

const AddComment = (props) => {
    return(
        <div className="Comments__AddComment">
            {/* Add Comment Avatar */}
            <div className="Comments__AddComment__Left">
                <img className="Comments__AddComment__Left__avatar" src={props.avatar} alt ="avatar"/>
            </div> 
            {/* Enter comment and submit button*/}
            <div className="Comments__AddComment__Right">
                <p className="Comments__AddComment__Right__title">JOIN THE CONVERSATION</p>
                
                <input className="Comments__AddComment__Right__Search" id="comment" name="comment" type="comment" placeholder="Add a new comment"></input>
                <button className="Comments__AddComment__Right__btn">COMMENT</button>
            </div>
        </div>
    )
}
export default AddComment;