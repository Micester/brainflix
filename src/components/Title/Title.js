//Main Title Under Hero
const Title = (props) => {

    console.log('Title Props', props.TitleList[0].title) //Shows VideoPlayerList Array in console

    const HeroTitle = props.TitleList[0].title; //Simplistic grabbing image from above Array

    return(
      
        <section className="Hero-about-Title">
  
            <h1 className="Hero-about__title__text">{HeroTitle}</h1>
         
        </section>
   
    )
}

export default Title;