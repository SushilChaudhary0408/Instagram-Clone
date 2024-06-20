
import React from 'react';

const Stories = () => {
    const stories = [
        { story: 1, text: 'jonathan_...', url: <img className='h-12 w-12 rounded-full' src="/images/profile(1).jpeg" alt="" /> },
        { story: 2, text: 'johnnyolth...', url: <img className='h-12 w-12 rounded-full' src="/images/profile(2).jpeg" alt="" /> },
        { story: 3, text: 'calvaryma...', url: <img className='h-12 w-12 rounded-full' src="/images/profile(3).jpeg" alt="" /> },
        { story: 4, text: 'calvaryma...', url: <img className='h-12 w-12 rounded-full' src="/images/profile(4).jpeg" alt="" /> },
        { story: 5, text: 'theorigina...', url: <img className='h-12 w-12 rounded-full' src="/images/profile(5).jpeg" alt="" /> },
        { story: 6, text: 'calvarycla...', url: <img className='h-12 w-12 rounded-full' src="/images/profile(6).jpeg" alt="" /> },
    ];

    return (
        <div className='h-32 border border-gray-300 rounded-md flex items-center justify-evenly overflow-auto scrollbar-hide'>
            {stories.map(item => (
                <div key={item.story} className='flex flex-col items-center justify-evenly'>
                    <div className='h-12 w-12 rounded-full ring-2 ring-rose-400 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white'>
                        {item.url}
                    </div>
                    <span className='font-semibold text-xs'>{item.text}</span>
                </div>
            ))}
        </div>
    );
};

export default Stories;
