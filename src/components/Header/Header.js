import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={{ borderBottom: '1px solid gray' }} className="navbar navbar-expand-lg navbar-light container">
            <a className="navbar-brand mr-5 text-light " href="#"><img style={{ width: '100px' }} src="https://i.ibb.co/gPWBFc8/Logo.png" alt="" /></a>
            <form className="form-inline my-2 my-lg-0 ml-5">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link mr-4 text-" to="">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4 text-" to="">Destination</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4 text-" to="/hotel">Book</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4 text-" to="">Contact</Link>
                    </li>
                </ul>
                <button style={{ backgroundColor: '#F9A51A', padding: '4px 25px', border: 'none', borderRadius: '5px' }} className="my-2 my-sm-0" type="submit">Login</button>
            </div>
        </nav>
    );
};

export default Header;