import React, { useState } from 'react';
import Link from '../link/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { DiBlackberry } from 'react-icons/di';



const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/home", name: "Home Page" },
        { id: 2, path: "/about", name: "About Page" },
        { id: 3, path: "/courses", name: "Courses Page" },
        { id: 4, path: "/contact", name: "Contact Page" },
        { id: 5, path: "/profile/:id", name: "Profile Page" }
    ];

    return (
        <nav className='text-black p-6 bg-orange-300'>
            <div className='md:hidden text-2xl' onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose />
                        :
                        <AiOutlineMenu />
                }

            </div>
            <ul className={`md:flex absolute md:static duration-1000 px-6
                ${open ? 'top-16' : '-top-60'}
                 bg-orange-300`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}>

                    </Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;