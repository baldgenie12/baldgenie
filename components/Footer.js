import React, { useContext, useEffect, useState } from 'react'


function Footer() {









    const socialMediaIcons = [
        { name: 'Facebook', url: '/socialmedia/facebook.png' },
        { name: 'Instagram', url: '/socialmedia/instagram.png' },
        { name: 'LinkedIn', url: '/socialmedia/linkedin.png' },
        { name: 'Twitter', url: '/socialmedia/twitter.png' },
        { name: 'Youtube', url: '/socialmedia/youtube.png' },
    ]

    return (

        <footer className={``}>
            <div className='flex md:h-[250px] bg-[#1E1E1E] p-6 flex-col md:flex-row items-center justify-center space-y-4 md:justify-around '>

                <div>
                    <div className='mx-auto m-2 my-4 '>
                        <img
                            className='w-[229px] h-[46px]'
                            alt='loading'
                            src='/baldgenie2.png'>
                        </img>
                    </div>
                    <div className='flex space-x-2 items-center justify-center'>
                        {socialMediaIcons.map(item => {
                            return (

                                <div className='rounded-full bg-white ' key={item.name}>
                                    <img
                                        className='p-3'
                                        src={item.url}
                                        alt=''
                                    >
                                    </img>
                                </div>

                            )
                        })}
                    </div>
                </div>

                <div className='text-white md:flex flex-col ml-8 hidden '>
                    <h1 className='font-semibold text-[18px] font-theme my-2'>About Us</h1>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Home</h2>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Faqs</h2>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Terms & Conditions</h2>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Privacy</h2>
                </div>

                <div className='text-white md:flex flex-col ml-8 hidden '>
                    <h1 className='font-semibold text-[18px] font-theme my-2'>Contact Us</h1>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Carriers</h2>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Advertise with Us</h2>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Help</h2>
                    <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Faqs</h2>
                </div>

                <div className='flex items-center md:hidden justify-around w-full'>

                    <div className='text-white'>
                        <h1 className='font-semibold text-[18px] font-theme my-2'>About Us</h1>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Home</h2>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Faqs</h2>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Terms & Conditions</h2>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Privacy</h2>
                    </div>

                    <div className='text-white'>
                        <h1 className='font-semibold text-[18px] font-theme my-2'>Contact Us</h1>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Carriers</h2>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Advertise with Us</h2>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Help</h2>
                        <h2 className='text-[16px] font-footer cursor-pointer hover:text-red-500 my-1'>Faqs</h2>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer