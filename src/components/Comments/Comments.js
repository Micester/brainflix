//Main Title Under Hero

function Comments(props) {


    const numOfComments = props.videos.comments;
    console.log('num of comments', props.videos.comments);
    return (

        <>
            {numOfComments?.map((numOf) => (
                <div key={numOf.id}>
                    <div className="Comments__num">{numOfComments.length}Comments</div>
                </div>
            ))
            }
        </>

    )
}
export default Comments;