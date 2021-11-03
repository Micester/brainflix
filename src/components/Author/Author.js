//Main Title Under Hero
const Author = (props) => {
    const newDate = new Date(props.ActiveVideo.timestamp);
    return(
        <section className="About-Author">
              <div className="About-Author__stats">
                <p className="About-Author__stats__text">By {props.ActiveVideo.channel}</p>
                <p className="About-Author__stats__timestamp">{newDate.toLocaleDateString()}</p>
              </div>

              <div className="About-Author__stats">
                <p className="About-Author__stats__views">{props.ActiveVideo.views}</p>
                <p className="About-Author__stats__likes">{props.ActiveVideo.likes}</p>
              </div>

              {/* Tablet / Desktop */}
                <div className="About-Author__stats__Tablet__left">
                  <p className="About-Author__stats__Tablet__left__text">By {props.ActiveVideo.channel}</p>
                  <p className="About-Author__stats__Tablet__left__timestamp">{newDate.toLocaleDateString()}</p>
                </div>

                <div className="About-Author__stats__Tablet__right">
                  <p className="About-Author__stats__Tablet__right__views">{props.ActiveVideo.views}</p>
                  <p className="About-Author__stats__Tablet__right__likes">{props.ActiveVideo.likes}</p>
                </div>
              {/* </div> */}
        </section>
    )
}
export default Author;