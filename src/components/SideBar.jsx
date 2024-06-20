
import React from 'react';
import { AiFillHome } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import { IoReorderThreeOutline } from 'react-icons/io5';

const SideBar = ({ notificationCount }) => {
    const menu = [
        {
            name: <span className='font-semibold'>Home</span>, icon: <AiFillHome />, url: '',
        },
        {
            name: 'Search', icon: <IoSearchSharp />, url: '',
        },
        {
            name: 'Explore', icon: <MdExplore />, url: '',
        },
        {
            name: 'Messages', icon: <FaFacebookMessenger />,
        },
        {
            name: 'Notifications', icon: <IoIosHeartEmpty />,
        },
        {
            name: 'Create', icon: <FiPlusSquare />,
        },
        {
            name: 'Profile', icon: <div className='h-4 w-4 rounded-full'><img className='h-4 w-4 rounded-full' src="/images/profile(3).jpeg" alt="" /></div>,
        },
    ];

    return (
        <>
            {menu.map(item => (
                <div key={item.name} className='flex items-center'>
                    <div>{item.icon}</div>
                    <div className='m-2 font-normal'>{item.name}</div>
                    {item.name === 'Notifications' && notificationCount > 0 && (
                        <div className="ml-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                            {notificationCount}
                        </div>
                    )}
                </div>
            ))}
            <div className='flex items-center absolute bottom-16 gap-1'>
                <div><IoReorderThreeOutline /></div>
                <div>More</div>
            </div>
        </>
    );
};

export default SideBar;
