import React from 'react'
import { LocationBar } from '../components/LocationBarListingPage'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import {
    SearchIcon, BookmarkIcon, ShareIcon, StarIcon, CheckCircleIcon
} from '@heroicons/react/solid';
const Bussiness = () => {
    return (
        <div className=''>
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

                {/* Bussiness Info */}

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
                                <h2 className='text-[18px] font-extralight font-theme text-[#9f9f9f]'>(9am - 10pm) Today</h2>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-end'>
                        <div className='w-[277px] h-[46px] flex items-center justify-start  space-x-2 p-1 shadow-xl '>
                            <SearchIcon className='w-[26px] h-[26px] text-gray-500 ml-4' />
                            <input className='outline-0 grow font-footer text-[16px]' type="text" id="fname" name="fname" placeholder='Search for services' />
                        </div>

                        <div className='flex space-x-2 mt-10'>
                            <button className='rounded-[6px] flex items-center justify-around border-[0.5px] border-[#9C9C9C] px-2 p-1 text-[14px] font-theme text-[#707070]'>
                                <StarIcon className='w-[18px] h-[18px] text-[#F8B84E] mr-1' />
                                Add Review
                            </button>
                            <button className='rounded-[6px] flex items-center justify-around border-[0.5px] border-[#9C9C9C] px-2 p-1 text-[14px] font-theme text-[#707070]'>
                                <img src='/direction.png' className='w-[18px] h-[18px]  mr-1' />
                                Direction
                            </button>
                            <button className='rounded-[6px] flex items-center justify-around border-[0.5px] border-[#9C9C9C] px-2 p-1 text-[14px] font-theme text-[#707070]'>
                                <BookmarkIcon className='w-[18px] h-[18px] text-[#E82327] mr-1' />
                                Bookmark
                            </button>
                            <button className='rounded-[6px] flex items-center justify-around border-[0.5px] border-[#9C9C9C] px-2 p-1 text-[14px] font-theme text-[#707070]'>
                                <ShareIcon className='w-[18px] h-[18px] text-[#00910E] mr-1' />
                                Share
                            </button>
                        </div>
                    </div>

                </div>

                <p className='text-[18px] text-[#696969] my-[20px] mb-[40px]'>Technology is all around us—connecting us, entertaining us and helping us run our businesses. My Computer Works is here to keep the technology in your life running smoothly with expert solutions ranging from support to recommendations.</p>


                {/* Bussiness Services */}

                <div className='flex items-center space-x-[40px] font-arial '>
                    <h2 className='text-white w-[100px] rounded-[6px] text-[21px] bg-[#0079E9] px-2 border-[0.5px] border-[0079E9]'>Services</h2>
                    <h2 className='text-[#454444] w-[100px] rounded-[6px] text-[21px] '>Reviews</h2>
                    <h2 className='text-[#454444] w-[100px] rounded-[6px] text-[21px] '>Photos</h2>
                    <h2 className='text-[#454444] w-[100px] rounded-[6px] text-[21px] '>Map</h2>
                </div>

                <div className='flex border-t-[0.5px] border-[#1B1B1B] mt-[9px]'>
                    <div className='flex flex-col items-start pt-[50px] pb-[48px] w-[280px] border-r-[0.5px] border-[#1B1B1B] space-y-[30px]'>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/computer.png' className='w-[17px] h-[17px] text-[#000000] mr-[17px]' />
                            Computers
                        </button>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/printer.png' className='w-[18px] h-[20px] text-[#000000] mr-[17px]' />
                            Printers
                        </button>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/wifi-router.png' className='w-[19px] h-[14px] text-[#000000] mr-[17px]' />
                            WiFi & Networking                         </button>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/smartphone.png' className='w-[14px] h-[20px] text-[#000000] mr-[24px]' />
                            Mobiles & Tablets                        </button>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/home-theater.png' className='w-[24px] h-[24px] text-[#000000] mr-[15px]' />
                            Audio & Video
                        </button>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/smart-home.png' className='w-[20px] h-[20px] text-[#000000] mr-[19px]' />
                            Smart Home
                        </button>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/television.png' className='w-[17px] h-[12px] text-[#000000] mr-[19px]' />
                            TV Mounting
                        </button>
                        <button className='rounded-[6px] flex items-center justify-around  px-2 p-1 font-arial text-[#605F5F] text-[23px]'>
                            <img src='/category/home-security.png' className='w-[20px] h-[20px] text-[#000000] mr-[19px]' />
                            Home Security
                        </button>

                    </div>

                    <div className='ml-[48px] mt-[48px]'>
                        <div className='mb-[29px]'>
                            <div className='flex items-center '>
                                <CheckCircleIcon className='h-[20px] w-[20px] text-black mr-[9px]' />
                                <h2 className='text-[20px] font-arial text-[#464646]' >Computer Diagnosis </h2>
                            </div>
                            <h2 className='text-[20px] font-theme text-[#0079E9] mt-[4px] ml-[29px]' >Free</h2>
                        </div>
                        <div className='mb-[29px]'>
                            <div className='flex items-center '>
                                <CheckCircleIcon className='h-[20px] w-[20px] text-black mr-[9px]' />
                                <h2 className='text-[20px] font-arial text-[#464646]' >Computer Repair & Help  </h2>
                            </div>
                            <h2 className='text-[20px] font-theme text-[#0079E9] mt-[4px] ml-[29px]' >Flat Fee - $50</h2>
                        </div>
                        <div className='mb-[29px]'>
                            <div className='flex items-center '>
                                <CheckCircleIcon className='h-[20px] w-[20px] text-black mr-[9px]' />
                                <h2 className='text-[20px] font-arial text-[#464646]' >Slow Computer / Computer Tune-up </h2>
                            </div>
                            <h2 className='text-[20px] font-theme text-[#0079E9] mt-[4px] ml-[29px]' >Hourly - $50/hr</h2>
                        </div>
                        <div className='mb-[29px]'>
                            <div className='flex items-center '>
                                <CheckCircleIcon className='h-[20px] w-[20px] text-black mr-[9px]' />
                                <h2 className='text-[20px] font-arial text-[#464646]' >Virus Removal </h2>
                            </div>
                            <h2 className='text-[20px] font-theme text-[#0079E9] mt-[4px] ml-[29px]' >Call for Pricing</h2>
                        </div>
                      

                    </div>
                </div>



            </div>
        </div>
    )

}

export default Bussiness
