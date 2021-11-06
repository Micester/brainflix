import { NavLink } from "react-router-dom";

import logoSrc from '../../assets/Logo/BrainFlix-logo.svg';
import avatarSrc from '../../assets/Images/Mohan-muruge.jpg';

function Header(props) {
    return (
        <nav>
            {/* <NavLink to="/home" exact> */}
                <header className="header">
                    {/* header top Logo */}
                    <div className="header-top">
                        <div className="header-top__logo"><img className="header-top__logo__image" src={logoSrc} alt="Logo" /></div>
                    </div>
                    {/* header middle search-bar/avatar */}
                    <div className="header-mid">
                        <input className="header-mid__search" id="text" name="text" type="text" placeholder="Search"></input>
                        <div><img className="header-mid__avatar" src={avatarSrc} alt="avatar" /></div>
                    </div>
                    {/* header bottom button */}
                    <div className="header-bot">
                        <button className="header-bot__btn">UPLOAD</button>
                    </div>
                    <div><img className="header-mid__avatar__tablet" src={avatarSrc} alt="avatar" /></div>
                </header>
            {/* </NavLink> */}

        </nav >
    );
}
export default Header;