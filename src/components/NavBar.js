import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar(){
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <Link to="/"><button>Dorota's Hair Salon</button></Link>
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact & Hours</Link>
                </div>
            </div>
            <div className="rightSide">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact & Hours</Link>
                    <button onClick={toggleNavbar}>
                        <MenuIcon />
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
