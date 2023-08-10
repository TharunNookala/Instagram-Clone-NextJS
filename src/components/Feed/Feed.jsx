import { useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { useState } from "react";
import MainNav from "../MainNav/MainNav";
import AppLayout from "../AppLayout/AppLayout";

const Feed = () => {
    // const { data: session } = useSession()
    // const route = useRouter();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("/api/examples/protected")
    //         const json = await res.json()
    //         if (json.content) {
    //             setContent(json.content)
    //         }
    //     }
    //     fetchData();
    // }, [session])

    // if (!session) {
    //     return (
    //         <AccessDenied />
    //     )

    // }

    return (
        <div className='flex sm:items-center sm:justify-center md:items-end md:justify-end w-screen h-full text-xl'>
            <div className="md:w-[20%] lg:w-1/5 border-2 fixed top-0 left-0"><MainNav /></div>
            <div className="md:w-[80%] lg:w-4/5 flex-1 border"><AppLayout /></div>
        </div>
    )
}

export default Feed