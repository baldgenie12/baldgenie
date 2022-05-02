import React, { useEffect, useState } from 'react'
import {
    StarIcon,
} from '@heroicons/react/solid';
import {
    SortAscendingIcon, SortDescendingIcon, XCircleIcon
} from '@heroicons/react/outline';
import {
    FilterIcon
} from '@heroicons/react/solid';

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
        <div className='text-gray-600   '>

            <h2 className='font-theme text-[14px] font-thin my-5 text-[#696969] '>{`Home > USA  >  Florida  >  Miami  >  33133`}</h2>

            <div className='lg:mt-[32px]  flex space-x-4  my-4  overflow-x-scroll scrollbar-hide items-center md:flex-wrap lg:flex-nowrap	      lg:flex lg:justify-around lg:mr-44 '>
                {categories.map(item => {
                    return (
                        <Link key={item.name} href='/homepage'>
                            <a className='text-scrollbaleitem font-theme text-[16px] whitespace-nowrap  hover:text-red-500'  >{item.name}</a>
                        </Link>

                    )
                })}
            </div>

            <div className='lg:my-[50px] lg:space-x-4  sm:mt-4 flex flex-wrap  items-center justify-between md:justify-start  text-xs sm:text-sm ' >

                <button className="hover:bg-grey   p-1 px-2  inline-flex items-center border-[0.5px] border-[#9C9C9C] rounded">
                    <FilterIcon className='w-[14px] h-[12px] mr-2' />
                    <span className="text-[#454444] text-[14px] font-theme ">Sort by</span>
                </button>
                <button className="  hover:bg-grey   p-1 px-2  inline-flex items-center border-[0.5px] border-[#9C9C9C] rounded">
                    <img className='h-4 opacity-50 mr-1' src='/services/updown.png' />
                    <span className="text-[#707070] text-[14px] font-theme">Distance</span>
                </button>
                <button className="  hover:bg-grey   p-1 px-2  inline-flex items-center border-[0.5px] border-[#9C9C9C] rounded">
                    <img className='h-4 opacity-50 mr-1' src='/services/updown.png' />
                    <span className="text-[#707070] text-[14px] font-theme">Rating</span>
                </button>
                <button className="  hover:bg-grey   p-1 px-2  inline-flex items-center border-[0.5px] border-[#9C9C9C] rounded">
                    <img className='h-4 opacity-50 mr-1' src='/services/updown.png' />
                    <span className="text-[#707070] text-[14px] font-theme">No. of Reviews</span>
                </button>
                <button className="  hover:bg-grey   p-1 px-2  inline-flex items-center border-[0.5px] border-[#9C9C9C] rounded mt-1 lg:mt-0">
                    <XCircleIcon className='h-4 mr-1' />
                    <span className="text-[#707070] text-[14px] font-theme">Releavance</span>
                </button>
            </div>

            <div className='  lg:pr-28'>
                {listItemData.map(item => {
                    return (

                        <div key={item.description} className='border-[0.5px] p-4  border-[#9C9C9C]  my-6 rounded-lg hover:bg-slate-200 '>

                            <div className='flex  items-center justify-between pb-2 border-b-[0.5px] border-[#b7b7b7]'>
                                <div className=' border-r-[0.5px] border-[#b7b7b7] pr-4  lg:px-20'>
                                    <img className='h-[91px] min-w-[94px] ' src='/services/logo1.png' alt='loading' width={100} ></img>
                                </div>
                                <p className='text-xs lg:text-[15px] text-arial text-[#797979] p-2 mb-1 ml-2 lg:ml-8'>{widthState < 500 ? item.description.slice(0, 150) + '...' : item.description}</p>

                            </div>

                            <div className='md:text-sm text-xs pt-4  mt-2 flex flex-col lg:flex-row lg:justify-between justify-center items-start lg:items-center  space-y-2 lg:mx-8 '>
                                <div className='space-y-2'>
                                    <div className='flex space-x-1 items-center'>
                                        <h1 className='font-semibold text-[16px] font-footer text-[#404040] mr-1'>Distance </h1>
                                        :
                                        <h1 className='text-[#707070] text-[16px] font-arial ml-1'>{item.distance}</h1>
                                    </div>

                                    <div className='flex items-center  '>
                                        <h1 className='font-semibold text-[16px] font-footer text-[#404040] mr-1'>Rating</h1>
                                        :
                                        <StarIcon className='w-[18px] text-[#F8B84E]   ml-1' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]  ' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]  ' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]  ' />
                                        <StarIcon className='w-[18px] text-[#F8B84E]  ' />
                                        <h1 className='ml-1 font-arial text-[16px] text-[#707070] '>{item.Rating}</h1>

                                    </div>
                                </div>

                                <div className='flex flex-col space-y-2 '>
                                    <div className='flex space-x-2 items-center'>
                                        <img src='/services/web.png' alt='loading' className='h-[22px] w-[22px]' ></img>
                                        <Link href={item.website}>
                                            <a className='hover:text-red-500 text-[16px] text-[#0079E9] text-footer'>
                                                {item.website}
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='flex space-x-2 items-center'>
                                        <img src='/services/phone.png' alt='loading' className='h-[18px] w-[18px]' ></img>
                                        <Link href={item.website}>
                                            <a className='hover:text-red-500 text-[16px] text-[#707070] text-footer'>
                                                {item.phone}
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                                <div className=' flex space-x-4  pt-2 sm:p-0 '>
                                    <Link href={item.website}>
                                        <div className='flex-col flex  items-center justify-center cursor-pointer'>
                                            <img src='/services/like.png' alt='loading' className='w-[30px] h-[32px]  p-1 pb-2' ></img>
                                            <a className='hover:text-red-500 font-footer text-[16px] text-[#707070]'>
                                                Unlike
                                            </a>
                                        </div>
                                    </Link>
                                    <Link href={item.website}>
                                        <div className='flex-col flex items-center justify-center cursor-pointer'>
                                            <img src='/services/share.png' alt='loading' className='w-[30px] h-[32px]  p-1 pb-2' ></img>
                                            <a className='hover:text-red-500 font-footer text-[16px] text-[#707070]'>
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






        </div>
    )
}
