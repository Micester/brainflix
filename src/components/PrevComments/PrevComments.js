//Comments Hard Coded
//Import Divider Lines
import Divider from "../Divider/Divider";

const PrevComments = (props) => {
    const newDate = new Date(props.ActiveVideo.comments[0].timestamp);
    const newDate1 = new Date(props.ActiveVideo.comments[1].timestamp);
    const newDate2 = new Date(props.ActiveVideo.comments[2].timestamp);

    const finalDate = new Date(props.ActiveVideo.comments.timestamp);
    return(
        <section className="PrevComments">
            <section className="PrevComments-box">
                {/* Left Avatar Image */}
                <div className="PrevComments-box-NTC"> 
                    <div className="PrevComments-box-NTC-Left">
                        <div className="PrevComments-box-NTC-Left__Avatar">
                            {/* Mobile Avatars */}
                            <img className="header-mid__avatar" src={props.avatar} alt ="avatar"/>

                            {/* Tablet Avatars */}
                            <img className="header-mid__avatar-comments" src={props.avatar} alt ="avatar"/>
                        </div>
                    </div>
                
                {/* Comment/name/Timestamp */}
                    <div className="PrevComments-box-NTC-Right">
                        <div className="PrevComments-box-NTC-Right-Container">
                            <p className="PrevComments-box-NTC-Right__name">{props.ActiveVideo.comments[0].name}</p>
                            <p className="PrevComments-box-NTC__timestampe">{finalDate.toLocaleDateString()}</p>
                        </div>
                        <p className="PrevComments-box-NTC__comment">{props.ActiveVideo.comments[0].comment}</p>
                    </div>
                </div>
                <Divider/>

                <div className="PrevComments-box-NTC">
                    <div className="PrevComments-box-NTC-Left">
                        <div className="PrevComments-box-NTC-Left__Avatar">
                            <img className="header-mid__avatar" src={props.avatar} alt ="avatar"/>
                            <img className="header-mid__avatar-comments" src={props.avatar} alt ="avatar"/>
                        </div>
                    </div>
                    <div className="PrevComments-box-NTC-Right">
                        <div className="PrevComments-box-NTC-Right-Container">
                            <p className="PrevComments-box-NTC-Right__name">{props.ActiveVideo.comments[1].name}</p>
                            <p className="PrevComments-box-NTC__timestampe">{newDate1.toLocaleDateString()}</p>
                        </div>
                        <p className="PrevComments-box-NTC__comment">{props.ActiveVideo.comments[1].comment}</p>
                    </div>
                </div>
                <Divider/>

                <div className="PrevComments-box-NTC">
                    <div className="PrevComments-box-NTC-Left">
                        <div className="PrevComments-box-NTC-Left__Avatar">
                            <img className="header-mid__avatar" src={props.avatar} alt ="avatar"/>
                            <img className="header-mid__avatar-comments" src={props.avatar} alt ="avatar"/>
                        </div>
                    </div>
                    <div className="PrevComments-box-NTC-Right">
                        <div className="PrevComments-box-NTC-Right-Container">
                            <p className="PrevComments-box-NTC-Right__name">{props.ActiveVideo.comments[2].name}</p>
                            <p className="PrevComments-box-NTC__timestampe">{newDate2.toLocaleDateString()}</p>
                        </div>
                        <p className="PrevComments-box-NTC__comment">{props.ActiveVideo.comments[2].comment}</p>
                    </div>
                </div>
                <Divider/>
            </section>
        </section>
    )
}
export default PrevComments;


