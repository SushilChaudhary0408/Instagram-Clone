
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaSmile } from "react-icons/fa";

const Post = ({ isLiked, handleLikeClick, handleFormSubmit, handleInputChange, inputValue }) => {
    const divElements = [
        { className: 'h-1 w-1 rounded-full bg-slate-400' },
        { className: 'h-1 w-1 rounded-full bg-blue-400' },
        { className: 'h-1 w-1 rounded-full bg-slate-400' },
        { className: 'h-1 w-1 rounded-full bg-slate-400' },
        { className: 'h-1 w-1 rounded-full bg-slate-400' },
        { className: 'h-1 w-1 rounded-full bg-slate-400' },
        { className: 'h-1 w-1 rounded-full bg-slate-400' },
        { className: 'h-1 w-1 rounded-full bg-slate-400' }
    ];

    return (
        <div className='mt-3 text-left border border-gray-300 rounded-md'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='h-12 w-12 ms-2 mt-2 rounded-full ring-2 ring-rose-400 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white '>
                        <img className='h-12 w-12 rounded-full' src="/images/profile(3).jpeg" alt="" />
                    </div>
                    <div className='font-semibold'>calvarymagazine</div>
                </div>
                <div className='me-3'>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>
            </div>
            <div className='mt-2'>
                <img className='h-56 w-full' src="/images/post.jpeg" alt="" />
            </div>
            <div className='m-2'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1'>
                        <div className='flex justify-between items-center'>
                            {isLiked ? (
                                <div onClick={handleLikeClick}>
                                    <FaHeart className="text-red-600 cursor-pointer" />
                                </div>
                            ) : (
                                <div onClick={handleLikeClick}>
                                    <FaRegHeart className="cursor-pointer" />
                                </div>
                            )}
                        </div>
                        <div><i class="fa-regular fa-message"></i></div>
                        <div><i class="fa-regular fa-paper-plane"></i></div>
                    </div>
                    <div className='flex gap-x-0.5'>
                        {divElements.map((element, index) => (
                            <div key={index} className={element.className}></div>
                        ))}
                    </div>
                    <div className='me-2'><i class="fa-regular fa-bookmark"></i></div>
                </div>
                <div>
                    <div class="flex items-center relative h-4 overflow-hidden">
                        <div class="absolute w-3 h-3 rounded-full z-20 ring-0 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white">
                            <img className='w-3 h-3 rounded-full' src="/images/profile(3).jpeg" alt="" />
                        </div>
                        <div class="absolute left-2.5 w-3 h-3 rounded-full z-10">
                            <img className='w-3 h-3 rounded-full' src="/images/profile(2).jpeg" alt="" />
                        </div>
                        <div className='ms-8'>
                            <span>Liked by </span>
                            <span className='font-semibold'>calvarymv</span>
                            <span> and </span>
                            <span className='font-semibold'>others</span>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <span className='font-semibold'>calvarymagazine</span>
                        <span className='font-normal'> AS IRON SHARPENS IRON ~ SOCIAL MEN'S CONFERENCE Eight thousand men attended the free event at the Anaheim Convention... </span>
                        <span className='text-gray-400'>more</span>
                    </div>
                    <div className='mt-2 text-gray-400'>View all 7 comments</div>
                    <div className='mt-2 mb-5 text-gray-400 text-xs'>3 DAYS AGO</div>
                </div>
            </div>
            <hr />
            <div className='m-2 flex justify-between items-center border-gray-300'>
                <div className='flex gap-2 w-full'>
                    <div className='input-container w-full'>
                        <form onSubmit={handleFormSubmit} className="flex flex-row w-full gap-1 justify-between">
                            <input
                                type="text"
                                className="w-3/4 border-2 rounded-lg px-2 focus:border-rose-500 outline-none"
                                cols="30" 
                                rows="5"
                                value={inputValue}
                                onChange={handleInputChange}
                                placeholder="Add a comment"
                            />
                            <div className='flex items-center gap-2'>
                                <button type="submit">Post</button>
                                <div><FaSmile /></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
