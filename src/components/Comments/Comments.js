//Main Title Under Hero
const Comments = (props) => {
    console.log('Num of Comments in Props', props.CommentsList[0].comments.length) //Shows VideoPlayerList Array in console
    const numOfComments = props.CommentsList[0].comments.length;

    return(
        <div className="Hero-Comments__num">{numOfComments} Comments</div>
    )
}
export default Comments;