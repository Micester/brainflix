//Hero Image (Under-Header)
// import Author from './components/Author/Author';


const Hero = (props) => {

    console.log('Hero Props', props.HeroList[0].image) //Shows VideoPlayerList Array in console

    const HeroImg = props.HeroList[0].image; //Simplistic grabbing image from above Array

    return(
          //Img Container & Img 
          <div className="Hero-Img"> 
            <img className="Hero-Image" src={HeroImg} alt="Hero-Img"/> 
            {/* <Author AuthorList={this.state.AuthorList}/> */}
          </div> 

    )
}

export default Hero;


///button
//import 'inset Scss file here./scss'
//import Btn from './Btn';

// function Hero (props) {
//   // console.log(props);fff
//   return (
//     <article
//       onClick={() => {
//         props.updateActiveAlbum(props.image);
//       }}
//       className="Hero-Image"
//     >
//     
//       <img className="album-card__img" src={props.art} alt={props.name} />
//       <Btn clickHandler={props.handleClicks} text="Add to playlist" />
//     </article>
//   );
// }

// export default Album;

