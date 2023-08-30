/* eslint-disable no-template-curly-in-string */
import React, { useState } from "react";
import { FaBars, FaReact } from 'react-icons/fa';
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles.scss';

const data = [
    {
        label: 'HOME',
        TO: '/'
    },
    {
        label: 'ABOUT',
        TO: '/about'
    },
    {
        label: 'CONTACT',
        TO: '/contact'
    },
    {
        label: 'SKILLS',
        TO: '/skills'
    },
    {
        label: 'RESUME',
        TO: '/resume'
    },
    {
        label: 'PORTFOLIO',
        TO: '/portfolio'
    },
]

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className="navbar">

                <div className="navbar__container">

                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>

                </div>
                <ul className={'navbar__container__menu ${toggleIcon ? "active" : ""} '}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.TO}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }

                </div>

            </nav>

        </div>
    )
}

export default Navbar;