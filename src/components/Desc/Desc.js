//Description under Author (Likes, )

const Desc = (props) => {
    return(
        <section className="About-Desc">
            <p className="About-Desc__text">{props.ActiveVideo.description}</p>
        </section>
    )
}
export default Desc;