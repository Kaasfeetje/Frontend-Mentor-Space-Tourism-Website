import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CloseIcon from "../Icons/CloseIcon";
import HamburgerIcon from "../Icons/HamburgerIcon";
import LogoIcon from "../Icons/LogoIcon";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative mx-auto max-w-screen-lg w-full flex justify-between items-center p-6 md:p-0 lg:py-6">
            <div className="md:pl-10">
                <LogoIcon />
            </div>
            <div className="hidden absolute bg-headerLineGray w-1/3 h-px left-40 z-20 lg:block "></div>
            <nav
                className={`${
                    isOpen ? "show" : "hidden"
                }  bg-transparentWhite fixed right-0 top-0 h-screen w-3/5 huge-blur pt-24 pl-6 md:block md:h-auto md:static md:w-auto md:pt-0 lg:pl-24 lg:pr-32`}
            >
                <ul
                    className={`font-barlowCondensed text-white text-base tracking-widest uppercase md:flex md:text-sm lg:text-base`}
                >
                    <li className={`py-3 md:mx-6 md:py-0 lg:mx-8`}>
                        <NavLink to="/" className="md:py-8 md:block">
                            <span className="font-bold pr-3 md:hidden lg:inline-block">
                                00
                            </span>
                            Home
                        </NavLink>
                    </li>
                    <li className={`py-3 md:mx-6 md:py-0 lg:mx-8`}>
                        <NavLink to="/destination" className="md:py-8 md:block">
                            <span className="font-bold pr-3 md:hidden lg:inline-block">
                                01
                            </span>
                            Destination
                        </NavLink>
                    </li>
                    <li className={`py-3 md:mx-6 md:py-0 lg:mx-8`}>
                        <NavLink to="/crew" className="md:py-8 md:block">
                            <span className="font-bold pr-3 md:hidden lg:inline-block">
                                02
                            </span>
                            Crew
                        </NavLink>
                    </li>
                    <li className={`py-3 md:mx-6 md:py-0 lg:mx-8`}>
                        <NavLink to="/technology" className="md:py-8 md:block">
                            <span className="font-bold pr-3 md:hidden lg:inline-block">
                                03
                            </span>
                            Technology
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div
                className={`${
                    isOpen ? "hidden" : "show"
                } absolute right-6 md:hidden`}
                onClick={() => setIsOpen(true)}
            >
                <HamburgerIcon />
            </div>

            <div
                className={`${
                    isOpen ? "show" : "hidden"
                }  absolute right-6 z-10 md:hidden`}
                onClick={() => setIsOpen(false)}
            >
                <CloseIcon />
            </div>
        </header>
    );
};

export default Header;
