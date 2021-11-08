//Comments Hard Coded
//Import Divider Lines
import Divider from "../Divider/Divider";

const PrevComments = (props) => {
    // const newDate = (props.videos.comments[0].timestamp);
    // const newDate1 = (props.videos.comments[1].timestamp);
    // const newDate2 = (props.videos.comments[2].timestamp);

    const commentsAll = props.videos.comments;

    const newDate = new Date (commentsAll);

    
    // const newDate = new Date(props.videos.comments);
    // const newDate1 = new Date(props.videos.comments);
    // const newDate2 = new Date(props.videos.comments);

    console.log('prev comments', props)

    return (
        <>
            {commentsAll?.map((comment) => (
                <section key={comment.comments} className="PrevComments">

                    <section className="PrevComments-box">
                        {/* Left Avatar Image */}
                        <div className="PrevComments-box-NTC">
                            <div className="PrevComments-box-NTC-Left">
                                <div className="PrevComments-box-NTC-Left__Avatar">
                                    {/* Mobile Avatars */}
                                    <div className="header-mid__avatar" />

                                    {/* Tablet Avatars */}
                                    <div className="header-mid__avatar-comments" />
                                </div>
                            </div>

                            {/* Comment/name/Timestamp */}
                            <div className="PrevComments-box-NTC-Right">
                                <div className="PrevComments-box-NTC-Right-Container">
                                    <p className="PrevComments-box-NTC-Right__name">{props.videos.comments[0].name}</p>
                                    <p className="PrevComments-box-NTC__timestampe">{newDate.toLocaleDateString()}</p>
                                </div>
                                <p className="PrevComments-box-NTC__comment">{props.videos.comments[0].comment}</p>
                            </div>
                        </div>
                        <Divider />

                        <div className="PrevComments-box-NTC">
                            <div className="PrevComments-box-NTC-Left">
                                <div className="PrevComments-box-NTC-Left__Avatar">
                                    <div className="header-mid__avatar" />
                                    <div className="header-mid__avatar-comments" />
                                </div>
                            </div>
                            <div className="PrevComments-box-NTC-Right">
                                <div className="PrevComments-box-NTC-Right-Container">
                                    <p className="PrevComments-box-NTC-Right__name">{props.videos.comments[1].name}</p>
                                    <p className="PrevComments-box-NTC__timestampe">{newDate.toLocaleDateString()}</p>
                                </div>
                                <p className="PrevComments-box-NTC__comment">{props.videos.comments[1].comment}</p>
                            </div>
                        </div>
                        <Divider />

                        <div className="PrevComments-box-NTC">
                            <div className="PrevComments-box-NTC-Left">
                                <div className="PrevComments-box-NTC-Left__Avatar">
                                    <div className="header-mid__avatar" />
                                    <div className="header-mid__avatar-comments" />
                                </div>
                            </div>
                            <div className="PrevComments-box-NTC-Right">
                                <div className="PrevComments-box-NTC-Right-Container">
                                    <p className="PrevComments-box-NTC-Right__name">{props.videos.comments[2].name}</p>
                                    <p className="PrevComments-box-NTC__timestampe">{newDate.toLocaleDateString()}</p>
                                </div>
                                <p className="PrevComments-box-NTC__comment">{props.videos.comments[2].comment}</p>
                            </div>
                        </div>
                        <Divider />
                    </section>
                </section>

            ))}
        </>
    )
}
export default PrevComments;


