//Hero Image (Under-Header)
// import Author from './components/Author/Author';


function Hero (props) {


    return(
      <article
      onClick={() => {
        props.updateActiveAlbum(props.id);
      }}
      className="album-card"
    >
        
          <div className="Hero-Img"> 
              <img className="Hero-Image" src={props.art} alt={props.name} />
            {/* <Author AuthorList={this.state.AuthorList}/> */}
          </div> 
      </article>

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

