//Main Title Under Hero
const Author = (props) => {
  console.log ('author',props)
    const newDate = new Date(props.videos.timestamp);

    return(
        <section className="About-Author">
              <div className="About-Author__stats">
                <p className="About-Author__stats__text">By {props.videos.channel}</p>
                <p className="About-Author__stats__timestamp">{newDate.toLocaleDateString()}</p>
              </div>

              <div className="About-Author__stats">
                <p className="About-Author__stats__views">{props.videos.views}</p>
                <p className="About-Author__stats__likes">{props.videos.likes}</p>
              </div>

              {/* Tablet / Desktop */}
                <div className="About-Author__stats__Tablet__left">
                  <p className="About-Author__stats__Tablet__left__text">By {props.videos.channel}</p>
                  <p className="About-Author__stats__Tablet__left__timestamp">{newDate.toLocaleDateString()}</p>
                </div>

                <div className="About-Author__stats__Tablet__right">
                  <p className="About-Author__stats__Tablet__right__views">{props.videos.views}</p>
                  <p className="About-Author__stats__Tablet__right__likes">{props.videos.likes}</p>
                </div>
              {/* </div> */}
        </section>
    )
}
export default Author;