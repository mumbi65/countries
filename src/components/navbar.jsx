import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <div className="countries-nav-bar">
            <h1 className="navbar-title">Countries <span>Around</span></h1>
            <div className="countries-nav-links">
                <ul className="nav nav-underline">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="buttton" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                        <ul className="dropdown-menu custom-dropdown" aria-labelledby="navbarDropdown">
                            <Link to="/continents" state={'Africa'}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Africa</a></li>
                            </Link>
                            <Link to="/continents" state={'Asia'}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Asia</a></li>
                            </Link>
                            <Link to="/continents" state={'Oceania'}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Oceania</a></li>
                            </Link>
                            <Link to="/continents" state={'North America'}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">North America</a></li>
                            </Link>
                            <Link to="/continents" state={'Antarctica'}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Antarctica</a></li>
                            </Link>
                            <Link to="/continents" state={'South America'}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">South America</a></li>
                            </Link>
                            <Link to="/continents" state={'Europe'}>
                                <li><a className="dropdown-item custom-dropdown-item" href="">Europe</a></li>
                            </Link>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </div>
            
        </>
    )
}

export default NavBar