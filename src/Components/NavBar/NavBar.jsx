import React from 'react';
import Link from '../link/link';



const NavBar = () => {
    const routes = [
        { id: 1, path: "/home", name: "Home Page" },
        { id: 2, path: "/about", name: "About Page" },
        { id: 3, path: "/courses", name: "Courses Page" },
        { id: 4, path: "/contact", name: "Contact Page" },
        { id: 5, path: "/profile/:id", name: "Profile Page" }
    ];

    return (
        <nav>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;