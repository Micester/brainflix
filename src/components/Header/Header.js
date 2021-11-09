import { Link } from "react-router-dom";
import logoSrc from '../../assets/Logo/BrainFlix-logo.svg';
import avatarSrc from '../../assets/Images/Mohan-muruge.jpg';

function Header(props) {
    return (
        <nav>
            {/* <NavLink to="/home" exact> */}
            <header className="header">
                {/* header top Logo */}
                <Link to="/">
                    <div className="header-top">
                        <div className="header-top__logo"><img className="header-top__logo__image" src={logoSrc} alt="Logo" /></div>
                    </div>
                </Link>
                {/* header middle search-bar/avatar */}
                <div className="header-mid">
                    <input className="header-mid__search" id="text" name="text" type="text" placeholder="Search"></input>
                    <div><img className="header-mid__avatar" src={avatarSrc} alt="avatar" /></div>
                </div>
                {/* header bottom button */}
                <div className="header-bot">
                    <Link to="/videos">
                        <button className="header-bot__btn">UPLOAD</button>
                    </Link>
                </div>
                <div><Link to="/videos"> <img className="header-mid__avatar__tablet" src={avatarSrc} alt="avatar" /></Link></div>
            </header>
            {/* </NavLink> */}
        </nav >
    );
}
export default Header;