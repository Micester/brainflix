//Comments Hard Coded
const PrevComments = (props) => {
    console.log('Prev Comments Name:', props.PrevCommentsList[0].comments[0].name) //Shows VideoPlayerList Array in console

    const PrevCommentsName = props.PrevCommentsList[0].comments[0].name;
    const PrevCommentsTimestamp = props.PrevCommentsList[0].comments[0].timestamp;
    const PrevCommentsText = props.PrevCommentsList[0].comments[0].comment;
    
    const PrevCommentsName1 = props.PrevCommentsList[1].comments[1].name;
    const PrevCommentsTimestamp1 = props.PrevCommentsList[1].comments[1].timestamp;
    const PrevCommentsText1 = props.PrevCommentsList[1].comments[1].comment;

    const PrevCommentsName2 = props.PrevCommentsList[2].comments[2].name;
    const PrevCommentsTimestamp2 = props.PrevCommentsList[2].comments[2].timestamp;
    const PrevCommentsText2 = props.PrevCommentsList[2].comments[2].comment;

    return(
        <section className="PrevComments">

            <section className="PrevComments-box">
    
                {/* Left Avatar Image */}
                <div className="PrevComments-box-NTC"> 
                    <div className="PrevComments-box-NTC-Left">
                        <div className="PrevComments-box-NTC-Left__Avatar"><img className="header-mid__avatar" src={props.avatar} alt ="avatar"/></div>
                    </div>
                
                {/* Comment/name/Timestamp */}
                    <div className="PrevComments-box-NTC-Right">
                        <p className="PrevComments-box-NTC-Right__name">{PrevCommentsName}</p>
                        <p className="PrevComments-box-NTC-Right__timestampe">{PrevCommentsTimestamp}</p>
                        <p className="PrevComments-box-NTC-Right__comment">{PrevCommentsText}</p>
                    </div>
                </div>

                <div className="PrevComments-box-NTC">
                    <div className="PrevComments-box-NTC-Left">
                        <div className="PrevComments-box-NTC-Left__Avatar"><img className="header-mid__avatar" src={props.avatar} alt ="avatar"/></div>
                    </div>
                    <div className="PrevComments-box-NTC-Right">
                        <p className="PrevComments-box-NTC__name">{PrevCommentsName1}</p>
                        <p className="PrevComments-box-NTC__timestampe">{PrevCommentsTimestamp1}</p>
                        <p className="PrevComments-box-NTC__comment">{PrevCommentsText1}</p>
                    </div>
                </div>

                <div className="PrevComments-box-NTC">
                    <div className="PrevComments-box-NTC-Left">
                        <div className="PrevComments-box-NTC-Left__Avatar"><img className="header-mid__avatar" src={props.avatar} alt ="avatar"/></div>
                    </div>
                    <div className="PrevComments-box-NTC-Right">
                        <p className="PrevComments-box-NTC__name">{PrevCommentsName2}</p>
                        <p className="PrevComments-box-NTC__timestampe">{PrevCommentsTimestamp2}</p>
                        <p className="PrevComments-box-NTC__comment">{PrevCommentsText2}</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default PrevComments;