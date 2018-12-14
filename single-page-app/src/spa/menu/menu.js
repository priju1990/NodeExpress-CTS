import React from 'react';
import Home from '../content/home';
import About from '../content/about';
import {Link} from "react-router-dom";
class Menu extends React.Component {
    
    render() { 
        return ( 
            <ul className="header">
                <li > <Link to="/"> HOME </Link>

                </li>
                <li>
                    <Link to="/about"> ABOUT</Link>

                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </ul>

         );
    }
}
 
export default Menu;