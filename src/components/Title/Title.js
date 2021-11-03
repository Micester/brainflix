//Main Title Under Hero
//Divider Line

import Divider from "../Divider/Divider";
const Title = (props) => {
    return(
        <section className="About-Title">
            <h1 className="About__Title__text">{props.ActiveVideo.title}</h1>
            <div className="About-Title-MobileDiv">
                <Divider/>
            </div>
        </section>
    )
}
export default Title;