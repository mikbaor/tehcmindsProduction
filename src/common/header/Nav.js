import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li>
                <Link to="/">
                    Techminds
                </Link>
            </li>
            
            <li>
                <Link to="/about-us">
                    Nosotros
                </Link>
            </li>

            <li>
                <Link to="/blog">
                    Blog
                </Link>
            </li>

            <li>
                <Link to="/portfolio">
                    Portafolio
                </Link>
            </li>

            <li>
                <Link to="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    )
}
export default Nav;
