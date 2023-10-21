'use client'
import { useState } from "react";

export default function Navbar () {
    const [menuOpen,setMenuOpen] = useState(false);

    const handleMenu = () =>{
        setMenuOpen(!menuOpen)

    }
    return ( 
        <div className="navbar h-16 px-3">
            <a href="/" className="font-bold text-3xl">Rides</a>

            <div className={`links ${menuOpen ? 'active' : '' }`}>
                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/contacts">Contact</a>
                <a href="/signin">Sign In</a>
            </div>

            <div className={`menu-btn w-7 lg:hidden md:hidden ${menuOpen ? 'active' : '' }`} onClick={handleMenu}>
                <div className="line-1 h-1 w-full bg-white rounded-md mt-1"></div>
                <div className="line-2 h-1 w-full bg-white rounded-md mt-1"></div>
                <div className="line-3 h-1 w-full bg-white rounded-md mt-1"></div>
            </div>
        </div>
     );
}