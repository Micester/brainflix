//Description under Author (Likes, )
const Desc = (props) => {
    const description = props.DescList[0].description;
    // Hero-Description Text
    return(
        <section className="About-Desc">
            <p className="About-Desc__text">{description}</p>
        </section>
   
   
    )
}

export default Desc;