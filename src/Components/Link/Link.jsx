import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-10 hover:bg-amber-500 px-4 py-1 rounded-sm'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;