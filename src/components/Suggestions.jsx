

import React from 'react';

const Suggestions = () => {
    const UserData = [
        { username: 'cthurmanrea', followedBy: 'theoriginalavery', url: <img className='h-6 w-6 rounded-full' src="/images/profile(2).jpeg" alt="" /> },
        { username: 'border_wulf', followedBy: 'danielleharris95 + 5 more', url: <img className='h-6 w-6 rounded-full' src="/images/profile(3).jpeg" alt="" /> },
        { username: 'amazinglegendkun', followedBy: 'Suggested for you', url: <img className='h-6 w-6 rounded-full' src="/images/profile(4).jpeg" alt="" /> },
        { username: 'the_first_turtle', followedBy: 'Followed by callie.marolf + 3 more', url: <img className='h-6 w-6 rounded-full' src="/images/profile(5).jpeg" alt="" /> },
        { username: 'didagus.fb', followedBy: 'aslan_diaz + 5 more', url: <img className='h-6 w-6 rounded-full' src="/images/profile(6).jpeg" alt="" /> }
    ];

    return (
        <>
            <div className='flex justify-between mt-6'>
                <div className='text-gray-400 font-semibold'>
                    Suggestions For You
                </div>
                <div className='font-semibold'>See All</div>
            </div>

            {UserData.map((user, index) => (
                <div key={index} className='mt-3 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 rounded-full bg-red-700'>
                            {user.url}
                        </div>
                        <div className='flex flex-col w-52'>
                            <div className='font-semibold'>{user.username}</div>
                            <div className='text-gray-400'>Followed by {user.followedBy}</div>
                        </div>
                    </div>
                    <div className='text-blue-400 font-medium'>Follow</div>
                </div>
            ))}
            <div className='mt-7 mb-7 flex flex-col text-gray-300'>
                <div>About . Help . Press . API . Jobs . Privacy . Terms</div>
                <div>Location Language</div>
            </div>
            <div className='text-gray-300'>
                ©️ 2022 INSTAGRAM FORM META
            </div>
        </>
    );
};

export default Suggestions;
