import React from 'react'

const StoriesSection = () => {
    return (
        <div className='w-full overflow-x-scroll flex flex-grow gap-4 p-2'>
            {
                new Array(40).fill(0).map((val, i) => (
                    <div key={i} className='w-14 h-14 rounded-full bg-gray-200 ring-2 ring-pink-500 ring-offset-2 p-2 flex-none' />
                ))
            }
        </div>
    )
}

export default StoriesSection