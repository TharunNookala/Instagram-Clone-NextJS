import Image from 'next/image'
import Link from 'next/link'
import { PiDotsThreeBold, PiNavigationArrow } from 'react-icons/pi'
import { AiOutlineHeart } from 'react-icons/ai'
import { CiFaceSmile } from 'react-icons/ci'
import { FaRegComment, FaRegBookmark } from 'react-icons/fa'
import { useState } from 'react'
import VercelImage from '../../../public/GooglePlay.png'


const Post = ({ postIndex }) => {
    const [comment, setComment] = useState('')
    return (
        <seciton className="flex flex-col p-2 ">
            <div className='flex items-center justify-between'>
                <div>
                    <Link href="" className='flex gap-2 items-center'>
                        <Image
                            src={VercelImage}
                            alt='user img'
                            width="30"
                            height="30"
                            className='rounded-full bg-red-400'
                        />
                        <span className='text-sm font-semibold'>username</span>
                        <span className='text-xs'>{new Date().toLocaleTimeString().split(' ')[0]}</span>
                    </Link>
                </div>
                <div className='p-2'><button><PiDotsThreeBold size={20} /></button></div>
            </div>
            <div className='p-1'>
                <Image
                    src=""
                    alt='post'
                    width=""
                    height=""
                    className='bg-black aspect-square'
                />
            </div>
            <div className='flex items-center justify-between  p-2'>
                <div className='flex gap-2'>
                    <button><AiOutlineHeart size={22} className='text-black cursor-pointer hover:text-black/30' /></button>
                    <button><FaRegComment className='transform -scale-x-100 text-black cursor-pointer hover:text-black/30' /></button>
                    <button><PiNavigationArrow className='transform -scale-x-100 text-black cursor-pointer hover:text-black/30' /></button>
                </div>
                <div>
                    <button><FaRegBookmark className='text-black cursor-pointer hover:text-black/30' /></button>
                </div>
            </div>
            <div className='px-2'>
                <p className='text-sm font-normal'>Liked by <span className='font-semibold'>Someone</span> and 34 others</p>
            </div>
            <div className='px-2'>
                <div className='flex gap-1'>
                    <p className='text-sm font-semibold'>username</p>
                    <span className='text-sm font-normal'>This is Description of the post</span>
                </div>
            </div>
            <div className='flex flex-col'>
                {
                    new Array(3).fill(0).map((val, i) => (
                        <div key={i} className='flex px-2 gap-1'>
                            <p className='text-sm font-semibold'>username{i + 1}</p>
                            <span className='text-sm font-normal'>comment {i + 1}</span>
                        </div>
                    ))
                }
            </div>
            <div className='px-2 py-1 border-b border-gray-300 flex items-center'>
                <form className='w-full flex px-1'>
                    <input
                        type='text'
                        name={`comment ${postIndex}`}
                        id={`comment ${postIndex}`}
                        placeholder='Add a comment...'
                        className='w-full placeholder:text-xs font-normal outline-none text-sm'
                        onChange={(e) => setComment(e.target.value)}
                        value={comment}
                    />
                    {comment ? <button className='font-semibold text-sm text-blue-500'>Post</button> : ''}
                </form>
                <div className='text-gray-500'><button><CiFaceSmile size={15} className='cursor-pointer hover:text-gray-300/90' /></button></div>
            </div>
        </seciton>
    )
}

export default Post