import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideNav = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'Request',
        path: '/request',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },

    {
        title: 'Admin',
        path: '/admin',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },
]

// export default SideNav;