import Image from 'next/image'
import InstaLogo from '../../../public/InstaLogo.png'
import { GoHomeFill } from 'react-icons/go'
import { FiSearch, FiHeart, FiPlusSquare } from 'react-icons/fi'
import { MdOutlineExplore } from 'react-icons/md'
import { BiMoviePlay } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import { LiaFacebookMessenger } from 'react-icons/lia'
import Link from 'next/link'
import VercelImage from '../../../public/GooglePlay.png'

const MainNav = () => {
    return (
        <header className='w-full h-screen flex flex-col items-center justify-center p-2'>
            <div className='w-full h-[15%] flex items-center justify-start p-2'>
                <Link href="https://www.instagram.com">
                    <Image
                        src={InstaLogo}
                        width={130}
                        height={40}
                        alt='Instagram Logo'
                    />
                </Link>
            </div>
            <div className='w-full h-full flex flex-col gap-2 p-1'>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'><GoHomeFill size={25} /><span className='text-base font-normal active:font-semibold'>Home</span></Link>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'><FiSearch size={25} /><span className='text-base font-normal active:font-semibold'>Search</span></Link>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'><MdOutlineExplore size={25} /><span className='text-base font-normal active:font-semibold'>Explore</span></Link>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'><BiMoviePlay size={25} /><span className='text-base font-normal active:font-semibold'>Reels</span></Link>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'><LiaFacebookMessenger size={30} /><span className='text-base font-normal active:font-semibold'>Messages</span></Link>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'><FiHeart size={25} /><span className='text-base font-normal active:font-semibold'>Notifications</span></Link>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'><FiPlusSquare size={25} /><span className='text-base font-normal active:font-semibold'>Create</span></Link>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'>
                    <Image
                        src={VercelImage}
                        width={30}
                        height={30}
                        alt='user image'
                        className='rounded-full bg-red-300'
                    />
                    <span className='text-base font-normal active:font-semibold'>Profile</span></Link>
            </div>
            <div className='w-full h-[10%] p-2'>
                <Link href="" className='flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md'>
                    <AiOutlineMenu size={25} /> <span className='text-base font-normal active:font-semibold'>More</span>
                </Link>
            </div>
        </header>
    )
}

export default MainNav