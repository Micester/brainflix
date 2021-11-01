//Main Title Under Hero
const Comments = (props) => {
    const numOfComments = props.CommentsList[0].comments.length;

    return(
        <div className="Comments__num">{numOfComments} Comments</div>
    )
}
export default Comments;