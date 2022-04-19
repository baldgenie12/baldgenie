import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FilterSidebar } from '../components/FilterSidebar'
import { LocationBar } from '../components/LocationBar'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import { ServicesLists } from '../components/ServicesLists'
import {
    FilterIcon, SortAscendingIcon, SortDescendingIcon, XCircleIcon
} from '@heroicons/react/outline';

const categories = [
    { name: 'Computers', url: '/category/computer.png', color: 'text-red-500' },
    { name: 'Printers', url: '/category/printer.png', color: 'text-blue-500' },
    { name: 'WIFI & Networking', url: '/category/wifi-router.png', color: 'text-green-500' },
    { name: 'Mobiles & Tablets', url: '/category/smartphone.png', color: 'text-yellow-500' },
    { name: 'Audio & Video', url: '/category/home-theater.png', color: 'text-lime-500' },
    { name: 'Smart Home', url: '/category/smart-home.png', color: 'text-pink-500' },
    { name: 'TV Mounting', url: '/category/television.png', color: 'text-orange-500' },
    { name: 'Home Security', url: '/category/home-security.png', color: 'text-red-500' },
]

const Homepage = () => {

    const router = useRouter()
    return (
        <div className=''>

            <Head>
                <title>Baldgenie - Services at your doorsteps</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Navbar /> */}

            <Navbar />
            <div className='mx-auto  lg:flex  lg:flex-row  justify-center items-center lg:mx-12 '>
                <div onClick={() => router.push('/')} className='w-48 mx-auto'>
                    <img
                        className=''
                        alt='loading'
                        src='/baldgenie.png'>
                    </img>
                </div>

                <div className='grow mx-4 lg:mx-16'>
                    <LocationBar />

                </div>
            </div>
           
            <div className='w-full flex flex-col md:flex-row '>
                <FilterSidebar />
                <div className='grow '>
                    <ServicesLists />
                </div>
            </div>

        </div>
    )
}
export default Homepage