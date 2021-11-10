import Divider from "../Divider/Divider";

function PrevComments  (props)  {
    const commentsAll = props.videos.comments;
    const newDate = new Date(props.videos.timestamp);
    return (
        <>
            {commentsAll?.map((oldComments) => (
                <section key={oldComments.id} className="PrevComments">
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
                                    <p className="PrevComments-box-NTC-Right__name">{oldComments.name}</p>
                                    <p className="PrevComments-box-NTC__timestampe">{newDate.toLocaleDateString()}</p>
                                </div>
                                <p className="PrevComments-box-NTC__comment">{oldComments.comment}</p>
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


