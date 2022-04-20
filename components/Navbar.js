import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/router'


function Navbar() {

    const router = useRouter()

    const { data: session, status } = useSession()




    if (status === "authenticated") {
        return (
            <div className='m-1 flex items-center justify-end text-white'>
                <p className='p-1 px-4 font-semibold bg-theme border-2 rounded-lg text-xs md:text-md'  >
                    {session.user.name}</p >
                <Link href='/api/auth/signout'>
                    <a className='p-1 px-4 font-semibold bg-theme border-2 rounded-lg  hover:bg-blue-600 text-xs md:text-md' onClick={(e) => { e.preventDefault(); signOut() }} >
                        Sign Out
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {!session &&
                <div className=' m-1 md:mr-6 flex items-center justify-end text-white font-semibold' >

                    <h2 onClick={() => router.push('/signup/merchant')} className='cursor-pointer p-1 px-4 bg-theme border-2 rounded-lg text-xs md:text-md  hover:bg-blue-600'>
                        List your bussiness
                    </h2>
                    <h2 onClick={() => signIn()} className='cursor-pointer p-1 px-4 bg-theme border-2 rounded-lg text-xs md:text-md  hover:bg-blue-600'>
                        Sign In
                    </h2>


                </div>
            }

        </div>
    )
}

export default Navbar