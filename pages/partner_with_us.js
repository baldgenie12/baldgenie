import React, { useState } from 'react'
import {
    SearchIcon, LocationMarkerIcon, CheckIcon, XIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';
import Head from 'next/head'
import { serviceRadiusMenu } from '../utils/MerchantSignUp'
import { bussinessHoursMenu } from '../utils/MerchantSignUp'
import { timezoneMenu } from '../utils/MerchantSignUp'
import { yearsinBussinessMenu } from '../utils/MerchantSignUp'
import { monthsinBussinessMenu } from '../utils/MerchantSignUp'
import { employeeStrengthMenu } from '../utils/MerchantSignUp'
import { tollfreeMenu } from '../utils/MerchantSignUp'
import { isUrlValid } from '../utils/MerchantSignUp'
import { validateEmail } from '../utils/MerchantSignUp'


const MerchantSignUP = () => {

    const [loading, setloading] = useState(false)


    const [nameTitle, setnameTitle] = useState('Mr.')
    const [firstName, setfirstName] = useState('')
    const [middleName, setmiddleName] = useState('')
    const [lastName, setlastName] = useState('')

    const [gender, setgender] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')


    const [alternate_nameTitle, set_alternate__nameTitle] = useState('Mr.')
    const [alternate_firstName, set_alternate__firstName] = useState('')
    const [alternate_middleName, set_alternate__middleName] = useState('')
    const [alternate_lastName, set_alternate__lastName] = useState('')

    const [alternate_gender, set_alternate_gender] = useState('')
    const [alternate_email, set_alternate_email] = useState('')
    const [alternate_phone, set_alternate_phone] = useState('')

    // Bussiness Details

    const [street, setstreet] = useState('')
    const [city, setcity] = useState('')
    const [zipcode, setzipcode] = useState('')
    const [state, setstate] = useState('')
    const [country, setcountry] = useState('')


    // Location

    const [location, setlocation] = useState('Find my Location')
    const [serviceRadiusFrom, setserviceRadiusFrom] = useState('')
    const [serviceRadiusTo, setserviceRadiusTo] = useState('')
    const [zipcodesCovered, setzipcodesCovered] = useState('')
    const [website, setwebsite] = useState('')
    const [worknumber, setworknumber] = useState('')

    //Timing

    const [workingdays, setworkingdays] = useState('')
    const [workingHours, setworkingHours] = useState('')
    const [workingMinutes, setworkingMinutes] = useState('')

    const [yearsinbusuiness, setyearsinbusuiness] = useState('')
    const [monthsinbusiness, setmonthsinbusiness] = useState('')
    const [employees, setemployees] = useState('')



    const getLocationHnadler = () => {

        navigator.geolocation.getCurrentPosition(position => {
            fetchData(position.coords.latitude, position.coords.longitude)
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
        async function fetchData(latitude, longitude) {

            if (location) {
                return
            }



            if (!location) {
                setloading(true)

                var location = {}
                try {
                    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                    // const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=40.20197127507498,-100.66331257139588&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`)
                    location = await response.json()
                    console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true&key=AIzaSyBq4_UrU1zgmlP2pmINbfbpu-O7MfY7F1c`);


                    const part = location.plus_code.compound_code.trim()
                    const index = part.indexOf(" ")
                    const part2 = part.substring(index, part.length)

                    setlocation(`${part2}`)
                    setloading(false)

                } catch (error) {
                    locationErrorMsg ? alert(locationErrorMsg) : alert(error)
                    setloading(false)

                }
                localStorage.setItem("location", JSON.stringify(location))
            }


        }
    }


    return (
        <div className=' m-16 ml-28 font-footer'>
            {/* Primary Contact  */}

            <Head>
                <title>Baldgenie - Services at your doorsteps</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Primary Contact Name</h1>
                <select className='shadow-lg p-1 text-sm w-18 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={nameTitle} onChange={e => { setnameTitle(e.target.value) }} >
                    <option className='px-2 py-4'>Mr.</option>
                    <option className='px-2 py-4'>Mrs.</option>
                    <option className='px-2 py-4'>Ms.</option>
                </select>
                <input className="placeholder-gray-600 shadow-lg ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setfirstName(e.target.value)} type="text" required placeholder="First Name" />
                <input className="placeholder-gray-600 shadow-lg ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setmiddleName(e.target.value)} type="text" required placeholder="Middle Name" />
                <input className="placeholder-gray-600 shadow-lg ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setlastName(e.target.value)} type="text" required placeholder="Last Name" />
            </div>


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Gender</h1>
                <select className='shadow-lg p-1 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={gender} onChange={e => { setgender(e.target.value) }} >
                    <option className='px-2 py-4'>Male</option>
                    <option className='px-2 py-4'>Female</option>
                </select>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Primary Contact Email</h1>
                <input className="placeholder-gray-600 shadow-lg  w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setemail(e.target.value)} type="email" required placeholder="Enter Email" />
                <CheckIcon className={`${validateEmail(email) ? "" : "hidden"} icon ml-2 text-green-500`} />
                <XIcon className={`${validateEmail(email) ? "hidden" : email.length > 8 ? "" : "hidden"} icon ml-2 text-red-500`} />

                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Primary Person Phone</h1>
                <input className="placeholder-gray-600 shadow-lg w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setemail(e.target.value)} type="text" required placeholder="Enter Phone No." />
                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>

            {/* Alternate Contact  */}

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Alternate Contact Name</h1>
                <select className='shadow-lg p-1 text-sm w-18 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={alternate_nameTitle} onChange={e => { set_alternate__nameTitle(e.target.value) }} >
                    <option className='px-2 py-4'>Mr.</option>
                    <option className='px-2 py-4'>Mrs.</option>
                    <option className='px-2 py-4'>Ms.</option>
                </select>
                <input className="placeholder-gray-600 shadow-lg ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate__firstName(e.target.value)} type="text" required placeholder="First Name" />
                <input className="placeholder-gray-600 shadow-lg ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate__middleName(e.target.value)} type="text" required placeholder="Middle Name" />
                <input className="placeholder-gray-600 shadow-lg ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate__lastName(e.target.value)} type="text" required placeholder="Last Name" />
            </div>



            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Gender</h1>
                <select className='shadow-lg p-1 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={alternate_gender} onChange={e => { set_alternate_gender(e.target.value) }} >
                    <option className='px-2 py-4'>Male</option>
                    <option className='px-2 py-4'>Female</option>
                </select>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Alternate Contact Email</h1>
                <input className="placeholder-gray-600 shadow-lg  w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate_email(e.target.value)} type="email" required placeholder="Enter Email" />
                <CheckIcon className={`${validateEmail(alternate_email) ? "" : "hidden"} icon ml-2 text-green-500`} />
                <XIcon className={`${validateEmail(alternate_email) ? "hidden" : alternate_email.length > 8 ? "" : "hidden"} icon ml-2 text-red-500`} />

                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Alternate Person Phone</h1>
                <input className="placeholder-gray-600 shadow-lg w-[250px] p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate_phone(e.target.value)} type="text" required placeholder="Enter Phone No." />
                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>


            {/* Business Details */}


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Business Name</h1>
                <input className="placeholder-gray-600 shadow-lg w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate_phone(e.target.value)} type="text" required placeholder="Enter Name" />
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Business Physical Address</h1>

                <input className="placeholder-gray-600 shadow-lg w-[200px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setstreet(e.target.value)} type="text" required placeholder="Street" />
                <input className="placeholder-gray-600 shadow-lg w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setcity(e.target.value)} type="text" required placeholder="City" />
                <input className="placeholder-gray-600 shadow-lg w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setzipcode(e.target.value)} type="number" required placeholder="Zip Code" />
                <input className="placeholder-gray-600 shadow-lg w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setstate(e.target.value)} type="text" required placeholder="State" />
                <input className="placeholder-gray-600 shadow-lg w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setcountry(e.target.value)} type="text" required placeholder="Country" />
            </div>


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3 '>*Geo Location</h1>
                <button onClick={getLocationHnadler} className='hover:bg-gray-200 flex items-center justify-around pl-6 border-[0.5px]  border-black rounded-lg p-1 '>
                    <LocationMarkerIcon className='h-6 text-red-600' />
                    <h1 className="placeholder-gray-600 w-[200px] cursor-pointer  text-sm text-center    outline-none "  >{location}</h1>
                </button>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Service Radius</h1>
                <select className='shadow-lg p-1 px-2 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    {serviceRadiusMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}

                </select>
                <h2 className='ml-2'>Miles</h2>
                <select className='shadow-lg ml-6 p-1 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusTo} onChange={e => { setserviceRadiusTo(e.target.value) }} >
                    <option className='px-2 py-4'>25+</option>
                </select>
                <h2 className='ml-2'>Miles</h2>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Zip Codes Covered</h1>
                <input className="placeholder-gray-600 shadow-lg w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setzipcodesCovered(e.target.value)} type="number" required placeholder="" />
            </div>


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Website Address</h1>
                <input className="placeholder-gray-600 shadow-lg w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => { setwebsite(e.target.value); console.log(website); }} type="text" required placeholder="Enter Address" />
                <CheckIcon className={`${isUrlValid(website) ? "" : "hidden"} icon ml-2 text-green-500`} />
                <XIcon className={`${isUrlValid(website) ? "hidden" : website.length > 5 ? "" : "hidden"} icon ml-2 text-red-500`} />
            </div>
            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Toll Free Number</h1>
                <select className='shadow-lg p-1 px-2 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={workingdays} onChange={e => { setworkingdays(e.target.value) }} >
                    {tollfreeMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}
                </select>
                <span className='ml-2'>-</span>
                <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworkingHours(e.target.value)} type="number" required placeholder="456" />
                <span className='ml-2'>-</span>
                <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworkingMinutes(e.target.value)} type="number" required placeholder="7890" />

            </div>
            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Work Number</h1>
                <input className="placeholder-gray-600 shadow-lg w-[70px]   p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworkingHours(e.target.value)} type="number" required placeholder="123" />
                <span className='ml-2'>-</span>
                <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworkingHours(e.target.value)} type="number" required placeholder="456" />
                <span className='ml-2'>-</span>
                <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworkingMinutes(e.target.value)} type="number" required placeholder="7890" />
            </div>


            <div className='flex items-start justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Business Hours</h1>
                <div className='flex flex-col space-y-4'>
                    <div>

                        <select className='shadow-lg p-1 px-2 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={workingdays} onChange={e => { setworkingdays(e.target.value) }} >
                            {bussinessHoursMenu.map(item => {
                                return (

                                    <option key={item} className='px-2 py-4'>{item}</option>
                                )
                            })}
                        </select>
                        <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworkingHours(e.target.value)} type="number" required placeholder="00" />


                        <span className='ml-2'>-</span>
                        <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworkingMinutes(e.target.value)} type="number" required placeholder="12" />

                    </div>
                    <div>

                        <select className='shadow-lg p-1 px-2 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                            {bussinessHoursMenu.map(item => {
                                return (

                                    <option key={item} className='px-2 py-4'>{item}</option>
                                )
                            })}
                        </select>
                        <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setwebsite(e.target.value)} type="number" required placeholder="00" />


                        <span className='ml-2'>-</span>
                        <input className="placeholder-gray-600 shadow-lg w-[70px] ml-2  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setwebsite(e.target.value)} type="number" required placeholder="12" />

                    </div>

                    <button className='text-blue-500 font-bold text-left w-fit '>ADD</button>
                </div>
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Time Zone</h1>
                <select className='shadow-lg p-1 px-3 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    {timezoneMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}
                </select>

            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Years in Bussiness</h1>
                <select className='shadow-lg p-1 px-2 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={yearsinbusuiness} onChange={e => { setyearsinbusuiness(e.target.value) }} >
                    {yearsinBussinessMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}
                </select>
                <h2 className='ml-2'>Years</h2>
                <select className='shadow-lg ml-6 p-1 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={monthsinbusiness} onChange={e => { setmonthsinbusiness(e.target.value) }} >
                    {monthsinBussinessMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}
                </select>
                <h2 className='ml-2'>Months</h2>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Employee Strength</h1>
                <select className='shadow-lg p-1 px-3 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={employees} onChange={e => { setemployees(e.target.value) }} >
                    {employeeStrengthMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}
                </select>

            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Remote Service</h1>
                <div className='flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>In Store Service</h1>
                <div className='flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>House Call</h1>
                <div className='flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Pick Up & Drop</h1>
                <div className='flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Bussiness Service</h1>
                <div className='flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-center   space-x-1'>
                    <input className='bg-theme text-theme ' type="radio" id="javascript" name="fav_language" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>


        </div>
    )
}
export default MerchantSignUP
