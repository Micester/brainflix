//Main Title Under Hero
const Author = (props) => {
    console.log('Author Props', props) //Shows VideoPlayerList Array in console

    const HeroChannel = props.AuthorList[0].channel;
    const timestamp = props.AuthorList[0].timestamp;
    const views = props.AuthorList[0].views;
    const likes = props.AuthorList[0].likes;

    return(
        <section className="Hero-about-Author">
          
              <div className="Hero-about-Author__stats">
                <p className="Hero-about-Author__stats__text">By {HeroChannel}</p>
                <p className="Hero-about-Author__stats__timestamp">{timestamp}</p>
              </div>

              <div className="Hero-about-Author__stats">
                <p className="Hero-about-Author__stats__views">{views}</p>
                <p className="Hero-about-Author__stats__likes">{likes}</p>
              </div>
    
        </section>
    )
}
export default Author;