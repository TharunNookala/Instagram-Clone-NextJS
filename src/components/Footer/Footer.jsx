import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full font-normal flex flex-col p-2 items-center justify-center text-gray-500 text-xs'>
            <div className='p-2'>
                <ul className='flex flex-wrap items-center justify-center gap-4 p-2'>
                    <li><Link href="/">Meta</Link></li>
                    <li><Link href="/"> About</Link></li>
                    <li><Link href="/">Blog</Link></li>
                    <li><Link href="/">Jobs</Link></li>
                    <li><Link href="/">Help</Link></li>
                    <li><Link href="/">API</Link></li>
                    <li><Link href="/">Privacy</Link></li>
                    <li><Link href="/">Terms</Link></li>
                    <li><Link href="/">Top Accounts</Link></li>
                    <li><Link href="/">Locations</Link></li>
                    <li><Link href="/">Instagram Lite</Link></li>
                    <li><Link href="/">Threads</Link></li>
                    <li><Link href="/">Contact Uploading & Non-Users</Link></li>
                    <li><Link href="/">Meta Verified</Link></li>
                </ul>
            </div>
            <div className='p-2 flex gap-2'>
                <select name='lang' id='lang' className='outline-none'>
                    <option value="EN">English</option>
                    <option value="FR">French</option>
                    <option value="UK">English(UK)</option>
                    <option value="TEL">తెలుగు</option>
                </select>
                <p>&copy; {new Date().getFullYear()} Instagram from Meta</p>
            </div>
        </footer>
    )
}

export default Footer