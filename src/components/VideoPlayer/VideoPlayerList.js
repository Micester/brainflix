//Hero Image Under Header
function VideoList(props) {
    console.log('VideoList props', props)

    // const HeroImg = props.albums[0].image;
    // const HeroTitle = props.albums[0].title;
    const HeroChannel = props.albums[0].channel;
    const timestamp = props.albums[0].timestamp;
    const description = props.albums[0].description;
    const views = props.albums[0].views;
    const likes = props.albums[0].likes;
    const numOfComments = props.albums[0].comments.length;


    return(
        <div className="Hero">
         
          {/* About HeroImg Section */}
          <section className="Hero-about">
       
            <div className="Hero-about__channelTime"> 
              <div className="Hero-about__channelViews">
                <p className="Hero-about__channelViews__text">By {HeroChannel}</p>
                <p className="Hero-about__channelViews__timestamp">{timestamp}</p>
              </div>

              <div className="Hero-about__channelViews">
                <p className="Hero-about__channelViews__views">{views}</p>
                <p className="Hero-about__channelViews__likes">{likes}</p>
              </div>
            </div>

            {/* About HeroImg Description */}
            <div className="Hero-about__description">
              <p className="Hero-bottom__description">{description}</p>
            </div>

            <section className="Hero-Comments">
              <div className="Hero-Comments__numOfComments">{numOfComments} Comments</div>
            </section>

          </section>

  
        </div>
        
        
    );
}

export default VideoList;






//THIS CODE BELOW LOOPS THROUGH ARRAY IMAGES AND SPITS THEM OUT IN A LIST
//
// {/* <ul>
//         {props.albums
//           .filter((album) => album.id !== '2')
//           .map((album) => {
//             return (    
//               <li key={album.id}>
//                 <VideoPlayer name={album.title} image={album.image} albumObj={album} />
                
//                 {/* <h3>{album.name}</h3>
//                 <img src={album.art} alt={album.name} /> */}
//               </li>
//             );
//           })}
//       </ul> */}