//Hero Image (Under-Header)
// import Author from './components/Author/Author';

const Hero = (props) => {

    console.log('Hero Props', props.HeroList[0].image) //Shows VideoPlayerList Array in console

    const HeroImg = props.HeroList[0].image; //Simplistic grabbing image from above Array

    return(
          //Img Container & Img 
          <div className="Hero"> 
            <img className="Hero-Image" src={HeroImg} alt="Hero-Img"/> 
            {/* <Author AuthorList={this.state.AuthorList}/> */}
          </div> 

    )
}

export default Hero;