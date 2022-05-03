import Head from 'next/head'
import {
  SearchIcon, LocationMarkerIcon, PrinterIcon, WifiIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';
import { useContext, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { BeatLoader } from 'react-spinners';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LoremIpsum } from 'react-lorem-ipsum';
import Navbar from '../components/Navbar';
import { LocationBar } from '../components/LocationBar';
import videosContext from '../context/videos/videosContext'
import { getSession } from "next-auth/react"



export default function Home() {


  const router = useRouter();


  useEffect(() => {

    async function fetchData() {
      const session = await getSession()
      if (session) {
        console.log(session);
      }
    }
    fetchData();


  }, [])



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

  const serachTerms = ['lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'lorem', 'house security', 'lorem', 'lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'audio video', 'lorem', 'lorem', 'tv mounting', 'lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'lorem', 'house security', 'lorem', 'lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'audio video', 'lorem', 'lorem', 'tv mounting', 'lorem',]



  return (
    <div >
      <Head>
        <title>Baldgenie - Services at your doorsteps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        onClick={() => router.push('/')}
        className='w-full h-[350px]  md:h-[521px] mx-auto '
        alt='loading'
        src='/background.png'>
      </img>

      <main className='mx-4 sm:w-4/5 md:mx-auto    sm:mx-auto  text-gray-600 '>
        <div className='absolute top-4 z-50 right-2'>
          <Navbar />
        </div>

        <div className='m-2  absolute z-50 top-2 md:top-[70px] left-0 right-0'>

          <img
            onClick={() => router.push('/')}
            className='w-[531px] h-[107px] mx-auto mt-16 md:mt-[135px] '
            alt='loading'
            src='/baldgenie2.png'>
          </img>
          <div className='mb-[88px] mt-8 md:mt-[80px]'>
            <LocationBar />
          </div>

        </div>





        {/* All categories */}

        <div className=' my-10   '>
          <h1 className='font-theme text-[32px]'>All Categories</h1>
          <p className='text-[17px] font-footer mt-2'>
            {/* <LoremIpsum p={1} /> */}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare integer penatibus. Natoque cras turpis iaculis ligula accumsan facilisis? Orci et ridiculus porta cras
          </p>


          <div className=' flex flex-wrap justify-between  mt-8   lg:grid lg:grid-cols-4 lg:space-x-0 lg:gap-x-16 '>


            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[0].url}
                  ></img>
                  <p className={`absolute ${categories[0].color} opacity-75 text-9xl rounded-full -right-0 -top-16`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[0].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[1].url}
                  ></img>
                  <p className={`absolute ${categories[1].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[1].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[2].url}
                  ></img>
                  <p className={`absolute ${categories[2].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[2].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    className='mx-auto'
                    src={categories[3].url}
                  ></img>
                  <p className={`absolute ${categories[3].color} opacity-75 text-9xl rounded-full -right-1 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[3].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[4].url}
                  ></img>
                  <p className={`absolute ${categories[4].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[4].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[5].url}
                  ></img>
                  <p className={`absolute ${categories[5].color} opacity-75 text-9xl rounded-full -right-1 -top-12`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[5].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[6].url}
                  ></img>
                  <p className={`absolute ${categories[6].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[6].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg  flex flex-col items-center justify-center space-y-4  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[7].url}
                  ></img>
                  <p className={`absolute ${categories[7].color} opacity-75 text-9xl rounded-full -right-2 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-2 text-[15px] md:text-sm font-theme'>{categories[7].name}</h2>
              </a>
            </Link>

          </div>
        </div>

        {/* Popular Search terms */}
        <div className='my-4 bg-[#F7F7F7] py-6'>

          <h1 className='font-theme text-[28px]'>Popular Search Terms</h1>
          <div className='flex flex-wrap my-4'>
            {serachTerms.map(tag => {
              return (
                <div key={tag} className="flex items-center " >
                  <p className='m-1 text-[15px] font-footer'>{`${tag}`}</p>
                  <span className='bg-black rounded-full p-[3px] mx-3'></span>
                </div>
              )
            })}
          </div>
        </div>


        {/* What our customer says */}
        <div className='my-8'>
          <h1 className='text-xl md:text-[32px] font-theme'>What our customer&apos; says</h1>
          <h2 className=' text-[17px] font-footer my-2'>Proin consequat integer venenatis maximus litora ornare integer penatibus. Natoque cras turpis iaculis ligula</h2>

          <div className='md:flex'></div>


        </div>


        {/* Customer reviews  */}

        <div className='md:flex font-footer mb-6 md:justify-between justify-center '>


           <div className='my-4 p-6  w-[325px] mx-auto md:mx-0   rounded-[15px] shadow-xl border-2   border-gray-300 shadow-[#58BEFC]'>

            <h1 className='text-[13px] font-theme pb-2'>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-[47px] h-[47px] relative '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-start ml-3'>
                <h2 className='text-center text-[14px] font-theme'>John Smith</h2>
                <h3 className='text-[13px] font-extralight'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>
           <div className='my-4 p-6  w-[325px] mx-auto md:mx-0   rounded-[15px] shadow-xl border-2   border-gray-300 shadow-[#58BEFC]'>

            <h1 className='text-[13px] font-theme pb-2'>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-[47px] h-[47px] relative '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-start ml-3'>
                <h2 className='text-center text-[14px] font-theme'>John Smith</h2>
                <h3 className='text-[13px] font-extralight'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>

           <div className='my-4 p-6  w-[325px] mx-auto md:mx-0   rounded-[15px] shadow-xl border-2   border-gray-300 shadow-[#58BEFC]'>

            <h1 className='text-[13px] font-theme pb-2'>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-[47px] h-[47px] relative '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-start ml-3'>
                <h2 className='text-center text-[14px] font-theme'>John Smith</h2>
                <h3 className='text-[13px] font-extralight'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>


        </div>
      </main>



    </div>
  )
}
