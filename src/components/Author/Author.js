//Main Title Under Hero
const Author = (props) => {
    // console.log('Author Props', props) //Shows VideoPlayerList Array in console
    const HeroChannel = props.AuthorList[0].channel;
    const timestamp = props.AuthorList[0].timestamp;
    const views = props.AuthorList[0].views;
    const likes = props.AuthorList[0].likes;

    return(
        <section className="About-Author">
              <div className="About-Author__stats">
                <p className="About-Author__stats__text">By {HeroChannel}</p>
                <p className="About-Author__stats__timestamp">{timestamp}</p>
              </div>

              <div className="About-Author__stats">
                <p className="About-Author__stats__views">{views}</p>
                <p className="About-Author__stats__likes">{likes}</p>
              </div>
        </section>
    )
}
export default Author;