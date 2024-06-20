import React from 'react';

const UserProfile = () => {
    return (
        <div className='flex h-28 items-center justify-between'>
            <div className='flex w-full'>
                <div className='h-12 w-12 rounded-full ring-2 ring-gray-200 ring-offset-1 ring-offset-slate-50 dark:ring-offset-white'>
                    <img className='h-12 w-12 rounded-full' src="/images/profile(6).jpeg" alt="" />
                </div>
                <div className='flex flex-col ms-3'>
                    <div className='font-semibold'>calvarystp</div>
                    <div className='text-gray-400'>C A L V R Y S T . P E T E</div>
                </div>
            </div>
            <div className='text-blue-400 font-medium'>
                Switch
            </div>
        </div>
    );
};

export default UserProfile;
