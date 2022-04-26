import React, { useEffect, useState } from 'react'
import {
    SearchIcon, LocationMarkerIcon, CheckIcon, XIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';
import Head from 'next/head'
import { serviceRadiusMenu } from '../../utils/MerchantSignUp'
import { bussinessHoursMenu } from '../../utils/MerchantSignUp'
import { timezoneMenu } from '../../utils/MerchantSignUp'
import { yearsinBussinessMenu } from '../../utils/MerchantSignUp'
import { monthsinBussinessMenu } from '../../utils/MerchantSignUp'
import { employeeStrengthMenu } from '../../utils/MerchantSignUp'
import { tollfreeMenu } from '../../utils/MerchantSignUp'
import { isUrlValid } from '../../utils/MerchantSignUp'
import { validateEmail } from '../../utils/MerchantSignUp'
import { hoursMenu } from '../../utils/MerchantSignUp'
import Services from '../../components/Merchant/ServiceSignUp';


export const Gen_info_PART1 = () => {

    const [nameTitle, setnameTitle] = useState('Mr.')
    const [firstName, setfirstName] = useState('')
    const [middleName, setmiddleName] = useState('')
    const [lastName, setlastName] = useState('')

    const [gender, setgender] = useState('')
    const [email, setemail] = useState('')

    //Phone
    const [phone_firstblock, setphone_firstblock] = useState('')
    const [phone_secondblock, setphone_secondblock] = useState('')
    const [phone_thirdblock, setphone_thirdblock] = useState('')


    const [alternate_nameTitle, set_alternate__nameTitle] = useState('Mr.')
    const [alternate_firstName, set_alternate__firstName] = useState('')
    const [alternate_middleName, set_alternate__middleName] = useState('')
    const [alternate_lastName, set_alternate__lastName] = useState('')

    const [alternate_gender, set_alternate_gender] = useState('')
    const [alternate_email, set_alternate_email] = useState('')

    //AlternatePhone
    const [alternate_phone_firstblock, setalternate_phone_firstblock] = useState('')
    const [alternate_phone_secondblock, setalternate_phone_secondblock] = useState('')
    const [alternate_phone_thirdblock, setalternate_phone_thirdblock] = useState('')


    // Bussiness Details
    const [bussinessName, setbussinessName] = useState('')
    const [street, setstreet] = useState('')
    const [city, setcity] = useState('')
    const [zipcode, setzipcode] = useState('')
    const [state, setstate] = useState('')
    const [country, setcountry] = useState('')


    // Location

    const [location, setlocation] = useState('Find my Location')
    const [loading, setloading] = useState(false)

    useEffect(() => {
        // const localStorage_location = JSON.parse(localStorage.getItem("location"))
        // if (localStorage_location.plus_code) {
        //     const part = localStorage_location.plus_code.compound_code.trim()
        //     const index = part.indexOf(" ")
        //     const part2 = part.substring(index, part.length)
        //     setlocation(part2)
        //     return
        // }
    }, [])


    const getLocationHnadler = () => {

        navigator.geolocation.getCurrentPosition(position => {
            fetchData(position.coords.latitude, position.coords.longitude)
        }, showError)


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

        async function fetchData(latitude, longitude) {

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


    const maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    return (
        <div>
            <div className=''>


                <div className='flex items-center justify-start my-4 m-2'>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Primary Contact Name</h1>
                    <select className=' text-sm w-18 select' value={nameTitle} onChange={e => { setnameTitle(e.target.value) }} >
                        <option className='px-2 py-4'>Mr.</option>
                        <option className='px-2 py-4'>Mrs.</option>
                        <option className='px-2 py-4'>Ms.</option>
                    </select>
                    <input className="inputtext ml-2 " onChange={e => setfirstName(e.target.value)} type="text" placeholder="First Name" />
                    <input className="inputtext ml-2 " onChange={e => setmiddleName(e.target.value)} type="text" placeholder="Middle Name" />
                    <input className="inputtext ml-2 " onChange={e => setlastName(e.target.value)} type="text" placeholder="Last Name" />
                </div>


                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Gender</h1>
                    <select className=' text-sm w-22 select' value={gender} onChange={e => { setgender(e.target.value) }} >
                        <option className='px-2 py-4'>Male</option>
                        <option className='px-2 py-4'>Female</option>
                    </select>
                </div>

                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Primary Contact Email</h1>
                    <input className="inputtext  w-[250px]  " onChange={e => setemail(e.target.value)} type="email" placeholder="Enter Email" />
                    <CheckIcon className={`${validateEmail(email) ? "" : "hidden"} icon ml-2 text-green-500`} />
                    <XIcon className={`${validateEmail(email) ? "hidden" : email.length > 8 ? "" : "hidden"} icon ml-2 text-red-500`} />

                    <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
                </div>

                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Primary Person Phone</h1>
                    <input className="inputtext w-[50px]" value="+1" type="text" />
                    <span className='mx-1'>-</span>
                    <input
                        className="inputtext w-[60px]"
                        type="text"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        placeholder="123"
                        maxLength="3"
                        onInput={maxLengthCheck}
                        onChange={e => setphone_firstblock(e.target.value)
                        }
                    />
                    <span className='mx-1'>-</span>
                    <input
                        className="inputtext w-[60px]"
                        type="text"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        placeholder="456"
                        maxLength="3"
                        onInput={maxLengthCheck}
                        onChange={e => setphone_secondblock(e.target.value)
                        }
                    />
                    <span className='mx-1'>-</span>
                    <input
                        className="inputtext w-[70px]"
                        type="text"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        placeholder="7890"
                        maxLength="4"
                        onInput={maxLengthCheck}
                        onChange={e => setphone_thirdblock(e.target.value)
                        }
                    />
                    <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
                </div>

                {/* Alternate Contact  */}

                <div className='flex items-center justify-start my-4 m-2'>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>Alternate Contact Name</h1>
                    <select className=' text-sm w-18 select' value={alternate_nameTitle} onChange={e => { set_alternate__nameTitle(e.target.value) }} >
                        <option className='px-2 py-4'>Mr.</option>
                        <option className='px-2 py-4'>Mrs.</option>
                        <option className='px-2 py-4'>Ms.</option>
                    </select>
                    <input className="inputtext ml-2 " onChange={e => set_alternate__firstName(e.target.value)} type="text" placeholder="First Name" />
                    <input className="inputtext ml-2 " onChange={e => set_alternate__middleName(e.target.value)} type="text" placeholder="Middle Name" />
                    <input className="inputtext ml-2 " onChange={e => set_alternate__lastName(e.target.value)} type="text" placeholder="Last Name" />
                </div>



                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>Gender</h1>
                    <select className=' text-sm w-22 select' value={alternate_gender} onChange={e => { set_alternate_gender(e.target.value) }} >
                        <option className='px-2 py-4'>Male</option>
                        <option className='px-2 py-4'>Female</option>
                    </select>
                </div>

                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>Alternate Contact Email</h1>
                    <input className="inputtext w-[250px]  " onChange={e => set_alternate_email(e.target.value)} type="email" placeholder="Enter Email" />
                    <CheckIcon className={`${validateEmail(alternate_email) ? "" : "hidden"} icon ml-2 text-green-500`} />
                    <XIcon className={`${validateEmail(alternate_email) ? "hidden" : alternate_email.length > 8 ? "" : "hidden"} icon ml-2 text-red-500`} />

                    <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
                </div>

                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>Alternate Person Phone</h1>
                    <input className="inputtext w-[50px]" value="+1" type="text" />
                    <span className='mx-1'>-</span>
                    <input
                        className="inputtext w-[60px]"
                        type="text"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        placeholder="123"
                        maxLength="3"
                        onInput={maxLengthCheck}
                        onChange={e => setalternate_phone_firstblock(e.target.value)
                        }
                    />
                    <span className='mx-1'>-</span>
                    <input
                        className="inputtext w-[60px]"
                        type="text"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        placeholder="456"
                        maxLength="3"
                        onInput={maxLengthCheck}
                        onChange={e => setalternate_phone_secondblock(e.target.value)
                        }
                    />
                    <span className='mx-1'>-</span>
                    <input
                        className="inputtext w-[70px]"
                        type="text"
                        onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                        placeholder="7890"
                        maxLength="4"
                        onInput={maxLengthCheck}
                        onChange={e => setalternate_phone_thirdblock(e.target.value)
                        }
                    /> <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
                </div>


                {/* Business Details */}


                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Business Name</h1>
                    <input className="inputtext w-[250px]  " onChange={e => setbussinessName(e.target.value)} type="text" placeholder="Enter Name" />
                </div>

                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Business Logo</h1>
                    <input className="inputtext w-[250px]  " type="file" accept="image/*" />

                    <p className='ml-2 text-sm text-gray-600'>(200px x 200px logo image size  )</p>

                </div>
                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Business Images</h1>
                    <input className="inputtext w-[250px]  " type="file" multiple accept="image/*" />

                    <p className='ml-2 text-sm text-gray-600'>(Upto 20 Images)</p>

                </div>


                <div className='flex items-center justify-start my-4 m-2'>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3'>*Business Physical Address</h1>

                    <input className="inputtext w-[200px]  " onChange={e => setstreet(e.target.value)} type="text" placeholder="Street" />
                    <input className="inputtext w-[100px] ml-2 " onChange={e => setcity(e.target.value)} type="text" placeholder="City" />
                    <input className="inputtext w-[100px] ml-2 " onChange={e => setzipcode(e.target.value)} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} placeholder="Zip Code" />
                    <input className="inputtext w-[100px] ml-2 " onChange={e => setstate(e.target.value)} type="text" placeholder="State" />
                    <input className="inputtext w-[100px] ml-2 " onChange={e => setcountry(e.target.value)} type="text" placeholder="Country" />
                </div>


                <div className='flex items-center justify-start my-4 m-2 '>
                    <span className="dot"></span>
                    <h1 className='w-[230px] mr-3 '>*Geo Location</h1>
                    <button onClick={getLocationHnadler} className='hover:bg-gray-200 flex items-center justify-around pl-6 border-[0.5px]  border-black rounded-lg p-1 '>
                        <LocationMarkerIcon className='h-6 text-red-600' />
                        <h1 className="placeholder-gray-600 w-[200px] cursor-pointer  text-sm text-center outline-none "  >{location}</h1>
                    </button>
                </div>

            </div>

        </div>
    )
}