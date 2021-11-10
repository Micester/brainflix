//Description under Author (Likes, )

const Desc = (props) => { 
    console.log('desc',props);
    return(
        <section className="About-Desc">
            <p className="About-Desc__text">{props.videos.description}</p>
        </section>
    )
}
export default Desc;