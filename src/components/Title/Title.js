//Main Title Under Hero
import Divider from "../Divider/Divider";

const Title = (props) => {
    console.log('Title Props', props.TitleList[0].title) //Shows VideoPlayerList Array in console
    const HeroTitle = props.TitleList[0].title; //Simplistic grabbing image from above Array

    return(
        <section className="About-Title">
            <h1 className="About__Title__text">{HeroTitle}</h1>
            <div className="About-Title-MobileDiv">
                <Divider/>
            </div>
        </section>
    )
}
export default Title;