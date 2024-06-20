

import { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './App.css'
import SideBar from './components/SideBar';
import Stories from './components/Stories';
import Post from './components/Post';
import UserProfile from './components/UserProfile';
import Suggestions from './components/Suggestions';

function App() {
    const [count, setCount] = useState(0)
    const [isLiked, setIsLiked] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [notificationCount, setNotificationCount] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setNotificationCount(notificationCount + 1);
            setInputValue('');
        }
    };

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            setNotificationCount(notificationCount + 1);
        } else {
            setNotificationCount(notificationCount - 1);
        }
    };

    return (
        <>
            <div className='flex flex-row border-r mt-4 h-screen'>
                <div className='h-full border-r border-gray-200 ms-4 fixed left-0'>
                    <div className='text-left pb-6 font-semibold'>Instagram</div>
                    <div className='me-20 '>
                        <SideBar notificationCount={notificationCount} />
                    </div>
                    <div className='flex items-center absolute bottom-3 gap-1'>
                        <div><IoReorderThreeOutline /></div>
                        <div>More</div>
                    </div>
                </div>
                
                <div className='w-[30%] ms-80'>
                    <Stories />
                    <Post
                        isLiked={isLiked}
                        handleLikeClick={handleLikeClick}
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                        inputValue={inputValue}
                    />
                </div>
                <div className='flex text-left flex-col pt-6 ms-5 w-[30%]'>
                    <UserProfile />
                    <Suggestions />
                </div>
            </div>
        </>
    )
}

export default App;
