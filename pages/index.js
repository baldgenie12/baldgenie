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


  useEffect(async () => {
    const session = await getSession()
    console.log(session);

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


      <Navbar />
      <main className=' sm:w-4/5    sm:mx-auto  text-gray-600 font-theme  '>

        <div className='w-3/5  sm:w-2/5 md:w-1/5 mx-auto m-2 my-4'>

          <img
            onClick={() => router.push('/')}
            className=''
            alt='loading'
            src='/baldgenie.png'>
          </img>
        </div>

        {/* Location Bar  */}

        <LocationBar />



        {/* All categories */}

        <div className=' my-10   '>
          <h1 className='font-semibold text-lg'>All Categories</h1>
          <p className='text-sm'>
            {/* <LoremIpsum p={1} /> */}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare integer penatibus. Natoque cras turpis iaculis ligula accumsan facilisis? Orci et ridiculus porta cras
          </p>


          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8    '>



            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[0].url}
                  ></img>
                  <p className={`absolute ${categories[0].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[0].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[1].url}
                  ></img>
                  <p className={`absolute ${categories[1].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[1].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[2].url}
                  ></img>
                  <p className={`absolute ${categories[2].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[2].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4   mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    className='mx-auto'
                    src={categories[3].url}
                  ></img>
                  <p className={`absolute ${categories[3].color} opacity-75 text-9xl rounded-full -right-1 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[3].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[4].url}
                  ></img>
                  <p className={`absolute ${categories[4].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[4].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[5].url}
                  ></img>
                  <p className={`absolute ${categories[5].color} opacity-75 text-9xl rounded-full -right-1 -top-12`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[5].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[6].url}
                  ></img>
                  <p className={`absolute ${categories[6].color} opacity-75 text-9xl rounded-full -right-3 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[6].name}</h2>
              </a>
            </Link>
            <Link href='/listing'>
              <a className='w-40 h-36 p-4  mb-6 lg:w-44 xl:w-56 lg:py-6 lg:px-8    rounded-lg shadow-lg border-2  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer'>
                <div className='w-16 relative'>
                  <img
                    src={categories[7].url}
                  ></img>
                  <p className={`absolute ${categories[7].color} opacity-75 text-9xl rounded-full -right-2 -top-14`}>.</p>
                </div>
                <h2 className='text-center mt-1 text-xs md:text-sm font-semibold'>{categories[7].name}</h2>
              </a>
            </Link>

          </div>
        </div>

        {/* Popular Search terms */}
        <div className='my-4'>

          <h1 className='font-semibold text-lg'>Popular Search Terms</h1>
          <div className='flex flex-wrap bg-gray-200 my-4'>
            {serachTerms.map(tag => {
              return (
                <p key={tag} className='m-1 text-sm'>{`.  ${tag}`}</p>
              )
            })}
          </div>
        </div>


        {/* What our customer says */}
        <div className='my-8'>
          <h1 className='font-semibold text-xl md:text-3xl'>What our customer&apos; says</h1>
          <h2 className=' text-md'>Proin consequat integer venenatis maximus litora ornare integer penatibus. Natoque cras turpis iaculis ligula</h2>

          <div className='md:flex'></div>


        </div>


        {/* Customer reviews  */}

        <div className='md:flex font-footer'>


          <div className='m-4 p-4 rounded-lg shadow-xl border-2   border-gray-300 shadow-blue-200'>

            <h1>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-16 relative '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-center ml-2'>
                <h2 className='text-center text-sm font-semibold'>John Smith</h2>
                <h3 className='text-xs'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>
          <div className='m-4 p-4 rounded-lg shadow-xl border-2   border-gray-300 shadow-blue-200'>

            <h1>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-16 relative border-2 '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-center ml-2'>
                <h2 className='text-center text-sm font-semibold'>John Smith</h2>
                <h3 className='text-xs'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>
          <div className='m-4 p-4 rounded-lg shadow-xl border-2   border-gray-300 shadow-blue-200 '>

            <h1>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-16 relative border-2 '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-center ml-2'>
                <h2 className='text-center text-sm font-semibold'>John Smith</h2>
                <h3 className='text-xs'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>

        </div>
      </main>



    </div>
  )
}
