import React, { useEffect, useState } from 'react'
import {
    StarIcon,
} from '@heroicons/react/outline';
import {
    FilterIcon, SortAscendingIcon, SortDescendingIcon, XCircleIcon
} from '@heroicons/react/outline';

import Image from 'next/image';
import { LoremIpsum } from 'react-lorem-ipsum';
import Link from 'next/link'

const categories = [
    { name: 'Computers', url: '/category/computer.png', color: 'text-red-500' },
    { name: 'Printers', url: '/category/printer.png', color: 'text-blue-500' },
    { name: 'WIFI & Networking', url: '/category/wifi-router.png', color: 'text-green-500' },
    { name: 'Mobiles & Tablets', url: '/category/smartphone.png', color: 'text-yellow-600' },
    { name: 'Audio & Video', url: '/category/home-theater.png', color: 'text-lime-500' },
    { name: 'Smart Home', url: '/category/smart-home.png', color: 'text-pink-500' },
    { name: 'TV Mounting', url: '/category/television.png', color: 'text-orange-500' },
    { name: 'Home Security', url: '/category/home-security.png', color: 'text-red-500' },
]
const listItemData = [
    {
        logo1: '/services/logo1.png',
        logo2: '/services/logo2.png',
        description: `247PCRepair is about your computer's health! We remotely provide instant top-notch solutions to computer hardware and software related problems received from our clients residing world over.instant top-notch solutions to computer hardware and software related problems `,
        distance: 'Remote Support',
        Rating: `4.9 (786)`,
        website: `https://www.247pcrepair.com
    `,
        phone: '1-800-346-8752'

    },
    {
        logo1: '/services/logo1.png',
        logo2: '/services/logo2.png',
        description: `247PCRepair is about your computer's health! We remotely provide instant top-notch solutions to computer hardware and software related problems received from our clients residing world over.instant top-notch solutions to computer hardware and software related problems `,
        distance: 'Remote Support',
        Rating: `4.9 (786)`,
        website: `https://www.247pcrepair.com
    `,
        phone: '1-800-346-8752'

    },
    {
        logo1: '/services/logo1.png',
        logo2: '/services/logo2.png',
        description: `247PCRepair is about your computer's health! We remotely provide instant top-notch solutions to computer hardware and software related problems received from our clients residing world over.instant top-notch solutions to computer hardware and software related problems `,
        distance: 'Remote Support',
        Rating: `4.9 (786)`,
        website: `https://www.247pcrepair.com
    `,
        phone: '1-800-346-8752'

    },
]



export const ServicesLists = () => {

    const [widthState, setwidth] = useState(0)
    useEffect(() => {

        setwidth(window.innerWidth)

    }, [])

    return (
        <div className='sm:mx-auto text-gray-600 lg:ml-10 lg:mr-32   '>

            <div className='flex space-x-4  m-4  overflow-x-scroll scrollbar-hide items-center   lg:w-fit ml-3 lg:ml-2.5  '>
                {categories.map(item => {
                    return (
                        <Link key={item.name} href='/homepage'>
                            <a className='whitespace-nowrap font-semibold hover:text-red-500'  >{item.name}</a>
                        </Link>

                    )
                })}
            </div>

            <div className='sm:mt-4 flex flex-wrap  items-center justify-start text-xs sm:text-sm space-x-2 text-gray-400' >

                <button className="ml-2 bg-grey-light hover:text-red-500  hover:bg-grey text-grey-darkest font-semibold p-1 px-2  inline-flex items-center border-2 border-gray-300 rounded">
                    <FilterIcon className='h-4' />
                    <span>Sort by</span>
                </button>
                <button className="bg-grey-light hover:text-red-500  hover:bg-grey text-grey-darkest font-semibold p-1 px-2  inline-flex items-center border-2 border-gray-300 rounded">
                    <img className='h-4 opacity-50' src='/services/updown.png' />
                    <span>Distance</span>
                </button>
                <button className="bg-grey-light hover:text-red-500  hover:bg-grey text-grey-darkest font-semibold p-1 px-2  inline-flex items-center border-2 border-gray-300 rounded">
                    <img className='h-4 opacity-50' src='/services/updown.png' />
                    <span>Rating</span>
                </button>
                <button className="bg-grey-light hover:text-red-500  hover:bg-grey text-grey-darkest font-semibold p-1 px-2  inline-flex items-center border-2 border-gray-300 rounded">
                    <img className='h-4 opacity-50' src='/services/updown.png' />
                    <span>No. of Reviews</span>
                </button>
                <button className="bg-grey-light hover:text-red-500  hover:bg-grey text-grey-darkest font-semibold p-1 px-2  inline-flex items-center border-2 border-gray-300 rounded mt-1 sm:mt-0">
                    <XCircleIcon className='h-4' />
                    <span>Releavance</span>
                </button>
            </div>


            {listItemData.map(item => {
                return (
                    <div key={item.description} className='border-2 border-gray-200 m-2 my-6 rounded-lg hover:bg-slate-200 p-2'>

                        <div className='flex items-center justify-between pb-2 border-b-2 border-gray-200  '>
                            <img className='sm:m-4 sm:mx-16' src='/services/logo1.png' alt='loading' width={100} ></img>
                            <p className='text-xs sm:text-lg p-2 mb-1 '>{widthState < 500 ? item.description.slice(0, 150) + '...' : item.description}</p>
                            <img className='sm:m-4 sm:mx-6' src='/services/logo2.png' alt='loading' width={80}></img>

                        </div>

                        <div className='md:text-sm text-xs mx-4 mt-2 flex flex-col sm:flex-row sm:justify-between justify-center items-start  space-y-1 '>
                            <div className=''>
                                <div className='flex space-x-1 items-center'>
                                    <h1 className='font-semibold'>Distance: </h1>
                                    <h1 className=''>{item.distance}</h1>
                                </div>
                                <div className='flex items-center  '>
                                    <h1 className='font-semibold mr-1'>Rating:</h1>
                                    <StarIcon className='h-4 text-yellow-600' />
                                    <StarIcon className='h-4 text-yellow-600' />
                                    <StarIcon className='h-4 text-yellow-600' />
                                    <StarIcon className='h-4 text-yellow-600' />
                                    <StarIcon className='h-4 text-yellow-600' />
                                    <h1 className='ml-1 '>{item.Rating}</h1>

                                </div>
                            </div>

                            <div className='flex flex-col space-y-1 '>
                                <div className='flex space-x-2 items-center'>
                                    <img src='/services/web.png' alt='loading' className='h-4' ></img>
                                    <Link href={item.website}>
                                        <a className='hover:text-red-500'>
                                            {item.website}
                                        </a>
                                    </Link>
                                </div>
                                <div className='flex space-x-2 items-center'>
                                    <img src='/services/phone.png' alt='loading' className='h-4' ></img>
                                    <Link href={item.website}>
                                        <a className='hover:text-red-500'>
                                            {item.phone}
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className=' flex space-x-4  pt-2 sm:p-0'>
                                <Link href={item.website}>
                                    <div className='  items-center justify-center cursor-pointer'>
                                        <img src='/services/like.png' alt='loading' className='h-4 pl-1' ></img>
                                        <a className='hover:text-red-500'>
                                            unlike
                                        </a>
                                    </div>
                                </Link>
                                <Link href={item.website}>
                                    <div className=' items-center justify-center cursor-pointer'>
                                        <img src='/services/share.png' alt='loading' className='h-4 pl-1' ></img>
                                        <a className='hover:text-red-500'>
                                            Share
                                        </a>
                                    </div>
                                </Link>
                            </div>

                        </div>


                    </div>
                )
            })}






        </div>
    )
}
