import React, {useState, useEffect} from 'react'
import './Nav.css'
import './Banner.css'

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src= "https://www.tubefilter.com/wp-content/uploads/2016/07/Netflix_logo.jpg"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src= "https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u1.jpg"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav
