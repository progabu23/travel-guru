import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
            <a className="navbar-brand mr-5 text-light " href="#"><img style={{width: '100px'}} src="https://i.ibb.co/ZKDsjy3/Logo.png" alt=""/></a>
            <form className="form-inline my-2 my-lg-0 ml-5">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            </form>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link mr-4 text-light" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 text-light" href="#">Destination</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 text-light" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-4 text-light" href="#">Contact</a>
                    </li>
                </ul>
                <button style={{backgroundColor: '#F9A51A', padding: '4px 25px', border: 'none', borderRadius: '5px'}} className="my-2 my-sm-0" type="submit">Login</button>
            </div>
        </nav>
    );
};

export default Nav;