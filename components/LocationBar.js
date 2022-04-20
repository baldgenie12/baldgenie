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
import videosContext from '../context/videos/videosContext'

export const LocationBar = () => {

    const { location, setlocation } = useContext(videosContext);
    const [locationstate, setlocationstate] = useState('')


    const [loading, setloading] = useState(false)

    const [coordinates, setCoordinates] = useState({})
    const [zipcodeState, setzipcodeState] = useState(1)
    const [locationErrorMsg, setlocationErrorMsg] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setCoordinates({ latitude: position.coords.latitude, longitude: position.coords.longitude })
        }, showError)


        function showError(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    setlocationErrorMsg("User denied the request for Geolocation.")
                    break;
                case error.POSITION_UNAVAILABLE:
                    setlocationErrorMsg("Location information is unavailable.")

                    break;
                case error.TIMEOUT:
                    setlocationErrorMsg("The request to get user location timed out.")

                    break;
                case error.UNKNOWN_ERROR:
                    setlocationErrorMsg("An unknown error occurred.")

                    break;
                default:
                    setlocationErrorMsg("An unknown error occurred.")


            }
        }
    }, [])


    const getLocationHnadler = () => {
        async function fetchData() {

            if (location) {
                return
            }

            if (!coordinates) {
                alert('Refresh Page')
            }

            if (!location) {
                setloading(true)

                var location = {}
                try {
                    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                    location = await response.json()
                    console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`);
                    setlocation(location)
                    // console.log(JSON.stringify(location));
                    setlocationstate(`${location.results[0].address_components[0].long_name}, ${location.results[0].address_components[1].long_name}, ${location.results[0].address_components[2].long_name}`)

                    setloading(false)

                } catch (error) {
                    locationErrorMsg ? alert(locationErrorMsg) : alert(error)
                    setloading(false)

                }
                localStorage.setItem("location", JSON.stringify(location))
            }


        }
        fetchData()
    }

    const zipcodeHandler = (zipcode) => {
        async function fetchData() {

            if (zipcode.length != 5) {
                alert("Enter 5 digit Pincode")
                return
            }

            if (!location) {
                setloading(true)
                var location = {}
                try {



                    const response = await fetch(`/api/zip/${zipcode}`)
                    location = await response.json()
                    if (location.name.error_msg) {
                        alert(location.name.error_msg)
                        setloading(false)
                        setlocation(null)
                        return
                    }

                    setlocation(location)
                    setlocationstate(`${location.name.city}, ${location.name.state} `)
                    console.log(JSON.stringify(location));
                    setloading(false)

                } catch (error) {
                    alert(error)
                    setloading(false)
                    setlocation(null)

                }

                localStorage.setItem("location", JSON.stringify(location))
            }


        }
        fetchData()
    }
    return (
        <div className='lg:w-4/5 lg:mx-auto font-theme mx-2 '>  {/* Location and Search Services  */}



            <div className=' flex flex-col  md:flex-row border-2 border-gray-200   my-2  rounded shadow-xl   md:mx-auto   md:justify-between text-xs    '>

                <div className=' h-6 flex items-center  space-x-1  p-1  my-2 md:border-r-2 border-gray-400 pr-2  '>
                    <LocationMarkerIcon className='h-6 text-red-600' />
                    {location &&
                        <div className=' flex w-full justify-between md:justify-start items-center '>
                            <p className='overflow-hidden  whitespace-nowrap font-semibold text-xs'>{locationstate}</p>
                            <button onClick={() => { setlocation(null) }} className={` text-xs p-1 px-4 bg-theme border-2 rounded-lg  hover:bg-blue-600 text-white ${loading ? "hidden" : ""} ml-4 `}>Change</button>
                        </div>
                    }



                    <div className={`${loading ? "" : "hidden"} w-20 `}>
                        <BeatLoader loading size={10} color={'red'} />
                    </div>

                    {!location &&
                        <div className='grow md:grow-0 flex items-center space-x-1  justify-between md:justify-start  '>
                            <p onClick={getLocationHnadler} className={`whitespace-nowrap    hover:text-red-400 font-semibold text-xs ${loading ? "hidden" : ''} cursor-pointer border-r-2 border-gray-400 pr-2 `}>Detect my location </p>


                            <input onChange={e => setzipcodeState(e.target.value)} className={`w-24 xl:w-24 text-xs  outline-none ${loading ? "hidden" : ""} `} type="number" id="fname" name="fname" placeholder='Enter Zipcode' maxLength="6" />

                            <button onClick={() => { zipcodeHandler(zipcodeState) }} className={`text-xs p-1 px-4 bg-theme border-2 rounded-lg    hover:bg-blue-600 text-white ${loading ? "hidden" : ""} `}>Go</button>
                        </div>
                    }

                </div>


                <div className='grow flex items-center justify-start  space-x-2  p-1 '>
                    <SearchIcon className='h-6 text-gray-500' />
                    <input className='outline-0  text sm:text-md grow' type="text" id="fname" name="fname" placeholder='Search for services' />
                </div>
            </div>
        </div>
    )
}
