import React from 'react'
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

export const LocationBar = () => {

    const [locationstate, setlocationstate] = useState('')


    const [loading, setloading] = useState(false)

    const [zipcodeState, setzipcodeState] = useState(1)
    const [locationErrorMsg, setlocationErrorMsg] = useState('')
    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.")

                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.")

                break;
            case error.UNKNOWN_ERROR:
                alert("An unknown error occurred.")

                break;
            default:
                alert("An unknown error occurred.")


        }
    }

    useEffect(() => {

        const localStorage_location = JSON.parse(localStorage.getItem("location"))
        try {
            if (localStorage_location) {
                const part = localStorage_location.plus_code.compound_code.trim()
                const index = part.indexOf(" ")
                const part2 = part.substring(index, part.length)
                setlocationstate(part2)
                setloading(false)
                return
            }
        } catch (error) {

        }

    }, [])



    const getLocationHnadler = () => {
        async function fetchData(coordinates) {
            setloading(true)
            var location = {}
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                // const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.20197127507498,-100.66331257139588&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                location = await response.json()
                console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`);

                const part = location.plus_code.compound_code.trim()
                const index = part.indexOf(" ")
                const part2 = part.substring(index, part.length)

                setlocationstate(`${part2}`)
                setloading(false)
            } catch (error) {
                locationErrorMsg ? alert(locationErrorMsg) : alert(error)
                setloading(false)
            }
            localStorage.setItem("location", JSON.stringify(location))

        }

        navigator.geolocation.getCurrentPosition(position => {
            const coordinates = { latitude: position.coords.latitude, longitude: position.coords.longitude }
            fetchData(coordinates)

        }, showError)


    }

    const zipcodeHandler = (zipcode) => {
        async function fetchData() {
            setloading(true)
            var location = {}
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&sensor=false&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                location = await response.json()
                if (location.results[0]) {
                    const part = location.results[0].formatted_address
                    if (!part.includes("USA")) {
                        setloading(false)
                        alert("Pincode not found, try something different")
                        return
                    }
                    setlocationstate(part)
                    setloading(false)

                } else {
                    setloading(false)
                    alert("Pincode not found, try something different")
                }
            } catch (error) {
                locationErrorMsg ? alert(locationErrorMsg) : alert(error)
                setloading(false)
            }
            localStorage.setItem("location", JSON.stringify(location))

        }
        fetchData()
    }
    return (
        <div className='md:w-4/5 md:mx-auto font-theme  '>  {/* Location and Search Services  */}



            <div className='grow lg:w-[850px] bg-white py-1 md:py-0 pl-2 md:h-[46px] flex flex-col  md:flex-row    my-2  rounded-[8px] shadow-xl   md:mx-auto   md:justify-between text-xs  lg:items-center   '>

                <div className=' h-6 flex items-center  space-x-1  p-1  my-2 md:border-r-2 border-gray-400 pr-2 lg:pr-4  '>
                    <img src='/location.png' className=' lg:mx-3 w-[17px] h-[24px] border-b-[3px] border-gray-200' />
                    {locationstate &&
                        <div className=' flex w-full justify-between md:justify-start items-center '>
                            <p className='overflow-hidden  whitespace-nowrap  text-[14px] font-footer pl-2'>{locationstate}</p>
                            <button onClick={() => { setlocationstate(null) }} className={` text-[16px] font-footer p-1 px-4 bg-theme border-2 rounded-lg  hover:bg-blue-600 text-white ${loading ? "hidden" : ""} ml-4 `}>Change</button>
                        </div>
                    }



                    <div className={`${loading ? "" : "hidden"} w-20 `}>
                        <BeatLoader loading size={10} color={'red'} />
                    </div>

                    {!locationstate &&
                        <div className='grow lg:grow-0 flex items-center space-x-1  justify-between lg:justify-start   '>
                            <div className='flex space-x-2'>
                                <p onClick={getLocationHnadler} className={`whitespace-nowrap text-[#7E7E7E] pl-2    hover:text-red-400 text-[14px] font-footer ${loading ? "hidden" : ''} cursor-pointer border-r-2 border-gray-400 pr-2 `}>Detect my location </p>
                                <input onChange={e => setzipcodeState(e.target.value)} className={`w-24 xl:w-24 text-[14px] font-footer text-[#7E7E7E]   outline-none ${loading ? "hidden" : ""} `} type="number" id="fname" name="fname" placeholder='Enter Zipcode' maxLength="6" />
                            </div>

                            <button onClick={() => { zipcodeHandler(zipcodeState) }} className={`text-xs p-1 px-4 bg-theme border-2 rounded-lg    hover:bg-blue-600 text-white ${loading ? "hidden" : ""} `}>Go</button>
                        </div>
                    }

                </div>


                <div className='grow flex items-center justify-start  space-x-2  p-1 lg:ml-2 '>
                    <SearchIcon className='w-[21px] h-[21px] text-gray-500' />
                    <input className='outline-0 grow font-footer text-[16px]' type="text" id="fname" name="fname" placeholder='Search for services' />
                </div>
            </div>

        </div>
    )
}
