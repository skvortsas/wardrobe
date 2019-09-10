import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
        render(){
            const navStyle ={
                color: 'white',
            };

        return(
            <nav className="navbar-expand container col-9 bg-secondary mt-5 rounded-top">
                <ul className="navbar-nav">
                    <Link className="nav-item col-6 text-center" style={navStyle} to='/weather'>
                        <li className="">Погода</li>
                    </Link>
                    <Link className="nav-item col-6 text-center" style={navStyle} to='/wardrobe'>
                        <li className="">Гардероб</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;