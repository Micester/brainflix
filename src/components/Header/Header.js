
const Header = (props) => {
    return(
        <header className="header">
            {/* header top Logo */}
            <div className="header-top">
                <div className="header-top__logo"><img src={props.logo} alt ="Logo"/></div>
            </div>
            {/* header middle search-bar/avatar */}
            <div className="header-mid">
                <input className="header-mid__search" id="text" name="text" type="text" placeholder="Search"></input>
                <div><img className="header-mid__avatar" src={props.avatar} alt ="avatar"/></div>
            </div> 
            {/* header bottom button */}
            <div className="header-bot">
                <button className="header-bot__btn">UPLOAD</button>
            </div>
        </header>
    )
}

export default Header;