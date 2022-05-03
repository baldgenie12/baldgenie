import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LocationBar } from './LocationBarListingPage'


function Navbar() {

    const router = useRouter()

    const { data: session, status } = useSession()




    if (status === "authenticated") {
        return (
            <div className='m-1 flex items-center justify-end text-white'>
                <p className='p-1 px-4 font-semibold bg-theme border-2 rounded-lg text-xs md:text-[16px] font-theme font-medium'  >
                    {session.user.name}</p >
                <Link href='/api/auth/signout'>
                    <a className='p-1 px-4 font-semibold bg-theme border-2 rounded-lg  hover:bg-blue-600 text-xs md:text-[16px] font-theme font-medium' onClick={(e) => { e.preventDefault(); signOut() }} >
                        Sign Out
                    </a>
                </Link>
            </div>
        )
    }

    return (

        <div className='lg:flex items-center justify-between mx-[10px] mt-[23px] lg:mr-[44px] lg:ml-[37px]    '>

            <div onClick={() => router.push('/')} >
                <img
                    className='w-[208px] h-[42px] mx-auto lg:mr-[71px]'
                    alt='loading'
                    src='/baldgenie.png'>
                </img>
            </div>
            <LocationBar />
            {!session &&
                <div className='lg:flex hidden items-center justify-end text-[#454444] xl:ml-[137px]' >

                    <h2 onClick={() => router.push('/partner_with_us')} className='cursor-pointer p-1   rounded-lg text-xs md:text-[16px] font-theme mr-1  '>
                        List your bussiness
                    </h2>
                    |

                    <h2 onClick={() => signIn()} className='cursor-pointer p-1   rounded-lg text-xs md:text-[16px] font-theme  ml-1  '>
                        Sign In
                    </h2>


                </div>
            }


        </div>
    )
}

export default Navbar