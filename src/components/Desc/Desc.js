//Description under Author (Likes, )
const Desc = (props) => {
    console.log('Desc Props', props) //Shows VideoPlayerList Array in console
    const description = props.DescList[0].description;
    
    // Hero-Description Text
    return(
        <section className="Hero-about-Desc">
            <p className="Hero-about-Desc__text">{description}</p>
        </section>
   
   
    )
}

export default Desc;