import React from 'react'

import { Computer_SoftWare_Support } from '../utils/ServicesCategories'
import { Computer_Hardware_Support } from '../utils/ServicesCategories'
import { Printers } from '../utils/ServicesCategories'
import { WiFi_Networking } from '../utils/ServicesCategories'
import { Mobiles_SoftWare } from '../utils/ServicesCategories'
import { Mobiles_Hardware } from '../utils/ServicesCategories'
import { Audio_Video } from '../utils/ServicesCategories'
import { Smart_Home } from '../utils/ServicesCategories'
import { TV_Mounting } from '../utils/ServicesCategories'
import { Home_Security } from '../utils/ServicesCategories'

export const AllCategories = () => {
    return (
        <div className='flex space-x-6 justify-around mx-auto lg:mx-[20px] font-category font-normal'>
            <div className=''>
                <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                    <img src='./category/computer.png' alt='loading' className='w-[30px] h-[33px]' />
                    <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>Computers</h1>
                </div>
                <h2 className='font-medium mt-6 text-[22px]'>Software Support</h2>
                <div className='mt-[30px] pl-1'>
                    {Computer_SoftWare_Support.map(item => {
                        return (
                            <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                        )
                    })}
                </div>
                <h2 className='font-medium mt-6 text-[22px]'>Hardware Support</h2>
                <div className='mt-[30px] pl-1'>
                    {Computer_Hardware_Support.map(item => {
                        return (
                            <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                        )
                    })}
                </div>

                <div>
                    <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                        <img src='./category/printer.png' alt='loading' className='h-[35px] w-[35px]' />
                        <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>Printers</h1>
                    </div>
                    <div className='mt-[30px] pl-1'>
                        {Printers.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>

                </div>

            </div>

            <div>


                <div>
                    <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                        <img src='./category/wifi-router.png' alt='loading' className='h-[40px] w-[40px]' />
                        <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>WIFI & Networking</h1>
                    </div>
                    <div className='mt-[30px] pl-1'>
                        {WiFi_Networking.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                        <img src='./category/smartphone.png' alt='loading' className='h-[32px] w-[23px]' />
                        <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>Mobiles & Tablets</h1>
                    </div>
                    <h2 className='font-medium mt-6 text-[22px]'>Software Support</h2>
                    <div className='mt-[30px] pl-1'>
                        {Mobiles_SoftWare.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>
                    <h2 className='font-medium mt-6 text-[22px]'>Hardware Support</h2>
                    <div className='mt-[30px] pl-1'>
                        {Mobiles_Hardware.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                        <img src='./category/home-theater.png' alt='loading' className='w-[39px] h-[40px]' />
                        <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>Audio & Video</h1>
                    </div>
                    <div className='mt-[30px] pl-1'>
                        {Audio_Video.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>
                </div>

            </div>


            <div>
                <div>
                    <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                        <img src='./category/smart-home.png' alt='loading' className='w-[40px] h-[38px]' />
                        <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>Smart Home</h1>
                    </div>
                    <div className='mt-[30px] pl-1'>
                        {Smart_Home.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>
                </div>


                <div>
                    <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                        <img src='./category/television.png' alt='loading' className='w-[37px] h-[40px]' />
                        <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>TV Mounting</h1>
                    </div>
                    <div className='mt-[30px] pl-1'>
                        {TV_Mounting.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>
                </div>


                <div>
                    <div className='flex items-center justify-center w-fit space-x-3 mt-8'>
                        <img src='./category/home-security.png' alt='loading' className='h-[40px] w-[40px]' />
                        <h1 className='border-b-[3px] border-blue-500 text-[24px]  '>Home Security</h1>
                    </div>
                    <div className='mt-[30px] pl-1'>
                        {Home_Security.map(item => {
                            return (
                                <h2 key={item} className='my-3 text-category text-[20px] hover:text-red-500 cursor-pointer'>{item}</h2>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
