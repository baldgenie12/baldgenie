import React from 'react'
import { LocationBar } from '../components/LocationBarListingPage'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import {
    SearchIcon, LocationMarkerIcon, PrinterIcon, WifiIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';
const Bussiness = () => {
    return (
        <div>
            <Navbar />
            <h2 className='font-theme text-[14px] font-thin my-5 text-[#696969] mx-10 lg:ml-[320px]'>{`Home > USA  >  Florida  >  Miami  >  33133`}</h2>
            <div className='mx-10 md:mx-20'>


                {/* Banner */}
                <div className='flex items-center justify-between px-[54px] h-[356px] border-[0.5px] rounded-[8px] border-[#313131]'>
                    <img src='/bussinessPage/logo.png' alt='' className='w-[437px] h-[150px] ml-[54px] my-auto' />

                    <div className='grid grid-cols-2 gap-14 gap-x-28 '>
                        <img src='/bussinessPage/c3.png' alt='' className='w-[198px] h-[109px]' />
                        <img src='/bussinessPage/c1.png' alt='' className='w-[118px] h-[118px]' />
                        <img src='/bussinessPage/c2.png' alt='' className='w-[189px] h-[110px]' />
                        <img src='/bussinessPage/c4.png' alt='' className='w-[202px] h-[40px]' />

                    </div>
                </div>

                <div className='flex justify-between items-start mt-[29px]'>
                    <div className=''>
                        <h1 className='text-[28px] font-theme text-[#454444]'>247 PC REPAIR</h1>
                        <h2 className='text-[20px] font-thin font-theme text-[#696969] my-1'>Sector 48, Miami</h2>

                        <div className='flex space-x-3 items-center my-3'>
                            <img src='/services/web.png' className='w-[26px] h-[26px]' />
                            <Link href='/'>
                                <a className='hover:text-red-500 text-[20px] text-[#0079E9] font-theme'>
                                    https://www.247pcrepair.com
                                </a>
                            </Link>
                        </div>
                        <div className='flex space-x-3 items-center my-3'>
                            <img src='/services/phone.png' className='w-[22px] h-[22px]' />
                            <div className='flex'>
                                <Link href='/'>
                                    <a className='hover:text-red-500 text-[20px] text-[#707070]  font-theme'>
                                        1-800-346-8752  (Toll free)
                                    </a>
                                </Link>
                                <h2 className='text-[20px] font-extralight font-theme text-[#E82327] ml-4 mx-2'>Open Now</h2>
                                <h2 className='text-[18px] font-extralight font-theme text-[#707070]'>(9am - 10pm) Today</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='w-[277px] h-[46px] flex items-center justify-start  space-x-2 p-1 shadow-xl '>
                            <SearchIcon className='w-[26px] h-[26px] text-gray-500 ml-4' />
                            <input className='outline-0 grow font-footer text-[16px]' type="text" id="fname" name="fname" placeholder='Search for services' />
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )

}

export default Bussiness
