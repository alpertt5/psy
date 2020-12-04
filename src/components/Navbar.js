import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);



    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>
                                Ana Sayfa
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/hakkimda" className='nav-links' onClick={closeMobileMenu}>
                                Hakkimda
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/yazilar" className='nav-links' onClick={closeMobileMenu}>
                                Yazilar
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/sunumlar" className='nav-links' onClick={closeMobileMenu}>
                                Sunumlar
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/duyurular" className='nav-links' onClick={closeMobileMenu}>
                                Duyurular
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/iletisim" className='nav-links' onClick={closeMobileMenu}>
                                Iletisim
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
}


export default Navbar;