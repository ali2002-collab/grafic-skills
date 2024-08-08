import React from 'react';
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from '../constants';

// Navbar component to display the navigation menu
const Navbar = () => {
    // State to track whether the hamburger menu is open or closed
    const [hamburgerButtonOpen, setHamburgerButtonOpen] = useState(false);

    // Function to toggle the hamburger menu open or closed
    const toggleNavbar = () => {
        setHamburgerButtonOpen(!hamburgerButtonOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo and brand name */}
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">Grafic Skills</span>
                    </div>
                    
                    {/* Navigation items for larger screens */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Us button for larger screens */}
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md">
                            Contact Us
                        </a>
                    </div>

                    {/* Hamburger menu button for smaller screens */}
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {hamburgerButtonOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Dropdown menu for smaller screens */}
                {hamburgerButtonOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Contact Us button for smaller screens */}
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-800">
                                Contact Us
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
