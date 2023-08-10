// "use client"
import Lottie from 'react-lottie-player';
import LoginPageAnimation from "../../../public/assets/animations/loginPage-animation.json"
import Footer from "../Footer/Footer";
import Button from '../Button/Button';
import useForm from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { GrFacebook } from 'react-icons/gr'
import Link from 'next/link';
import Image from 'next/image';
import GooglePlay from '../../../public/GooglePlay.png'
import MSstore from '../../../public/MSstore.png'

export default function LoginPage() {
    const { form, onChangeHandler } = useForm({
        email: '',
        password: '',
    })

    const formSubmitHandler = async (e) => {
        e.preventDefault();
        // console.log(form);
    };

    const isDisabled = useMemo(() => {
        const isFormCorrect = Object.values(form).every((val) => !!val);
        return !isFormCorrect;
    }, [form])
    const [showPassword, setShowPassword] = useState(false);
    const passwordExists = !(form.password)

    const handleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="w-screen h-[90%] flex items-center justify-center p-2">
                <div className="hidden md:block md:h-full p-2">
                    <Lottie
                        loop
                        animationData={LoginPageAnimation}
                        play
                        className='w-full h-full'
                    />
                </div>
                <div className='flex flex-col items-center justify-center gap-2'>
                    <div className="flex flex-col items-center justify-center p-4 border">
                        <form onSubmit={formSubmitHandler} className='w-[300px] flex flex-col items-center justify-center py-3 px-7 gap-2 '>
                            <div className='p-2'>
                                <h1 className='uppercase tracking-widest text-3xl text-gray-700 font-semibold p-6'>Instagram</h1>
                            </div>
                            <input
                                type='email'
                                name='email'
                                id="email"
                                placeholder='Phone number, username, or email'
                                onChange={onChangeHandler}
                                value={form.email}
                                className='bg-gray-50 w-full hover:bg-transparent active:bg-transparent border rounded-sm p-2 outline-none placeholder:text-xs text-xs'
                            />
                            {
                                showPassword ?
                                    <div className='w-full flex text-sm border text-[#262626]'>
                                        <input
                                            type='text'
                                            name='password'
                                            id="password"
                                            placeholder='Password'
                                            onChange={onChangeHandler}
                                            value={form.password}
                                            className='bg-gray-50 w-full hover:bg-transparent active:bg-transparent rounded-sm p-2 outline-none placeholder:text-xs text-xs'
                                        />
                                        <button onClick={handleShowPassword} className='px-1 outline-none font-medium'>Hide</button>
                                    </div>
                                    : <div className='w-full flex text-sm border text-[#262626]'>
                                        <input
                                            type='password'
                                            name='password'
                                            id="password"
                                            placeholder='Password'
                                            onChange={onChangeHandler}
                                            value={form.password}
                                            className='bg-gray-50 w-full hover:bg-transparent active:bg-transparent rounded-sm p-2 outline-none placeholder:text-xs text-xs'
                                        />
                                        {passwordExists || <button onClick={handleShowPassword} className='px-1 outline-none font-medium '>Show</button>}
                                    </div>
                            }
                            <Button
                                className='text-white w-full disabled:bg-blue-400 bg-blue-500 rounded-lg py-1'
                                disabled={isDisabled}
                            >
                                Log in
                            </Button>
                        </form>
                        <div className='w-full flex items-center justify-center p-2 gap-2'>
                            <div className='h-[1px] w-full bg-gray-200 ml-5' />
                            <div className='items-center justify-center px-2 text-gray-500 text-xs font-medium'>OR</div>
                            <div className='h-[1px] w-full bg-gray-200 mr-5' />
                        </div>
                        <div className='text-blue-900 text-xs font-semibold p-2'>
                            <Link href="" className='flex items-center justify-center gap-2'>
                                <GrFacebook size={15} />
                                <p>Log in with Facebook</p>
                            </Link>
                        </div>
                        <div>
                            <Link href="" className='text-gray-700 text-[11px] p-2'>Forgot password?</Link>
                        </div>
                    </div>
                    <div className='flex gap-1 items-center justify-center border w-full text-xs p-6'>
                        <p className=''>Don't have an account?</p>
                        <Link href="" className='text-blue-500 font-medium'>Sign up</Link>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        Get the app.
                        <div className='flex items-center justify-center gap-2 p-2'>
                            <Link href=''><Image src={GooglePlay} alt="play store" width={100} height={20} /></Link>
                            <Link href=''><Image src={MSstore} alt="ms store" width={80} height={20} /></Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className="h-[10%]"><Footer /></div>
        </div >
    )
}
