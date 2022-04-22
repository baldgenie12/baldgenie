import React, { useState } from 'react'
import {
    SearchIcon, LocationMarkerIcon, PrinterIcon, WifiIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';

const MerchantSignUP = () => {


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







    return (
        <div className=' m-16 ml-28'>
            {/* Primary Contact  */}

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Primary Contact Name</h1>
                <select className='p-1 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={nameTitle} onChange={e => { setnameTitle(e.target.value) }} >
                    <option className='font-semibold py-4'>Mr.</option>
                    <option className='font-semibold py-4'>Mrs.</option>
                    <option className='font-semibold py-4'>Ms.</option>
                </select>
                <input className="placeholder-gray-600 ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setfirstName(e.target.value)} type="text" required placeholder="First Name" />
                <input className="placeholder-gray-600 ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setmiddleName(e.target.value)} type="text" required placeholder="Middle Name" />
                <input className="placeholder-gray-600 ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setlastName(e.target.value)} type="text" required placeholder="Last Name" />
            </div>


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Gender</h1>
                <select className='p-1 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={gender} onChange={e => { setgender(e.target.value) }} >
                    <option className='font-semibold py-4'>Male</option>
                    <option className='font-semibold py-4'>Female</option>
                </select>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Primary Contact Email</h1>
                <input className="placeholder-gray-600  w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setemail(e.target.value)} type="text" required placeholder="Enter Email" />
                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Primary Person Phone</h1>
                <input className="placeholder-gray-600 w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setemail(e.target.value)} type="text" required placeholder="Enter Phone No." />
                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>

            {/* Alternate Contact  */}

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Alternate Contact Name</h1>
                <select className='p-1 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={alternate_nameTitle} onChange={e => { set_alternate__nameTitle(e.target.value) }} >
                    <option className='font-semibold py-4'>Mr.</option>
                    <option className='font-semibold py-4'>Mrs.</option>
                    <option className='font-semibold py-4'>Ms.</option>
                </select>
                <input className="placeholder-gray-600 ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate__firstName(e.target.value)} type="text" required placeholder="First Name" />
                <input className="placeholder-gray-600 ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate__middleName(e.target.value)} type="text" required placeholder="Middle Name" />
                <input className="placeholder-gray-600 ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate__lastName(e.target.value)} type="text" required placeholder="Last Name" />
            </div>



            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Gender</h1>
                <select className='p-1 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={alternate_gender} onChange={e => { set_alternate_gender(e.target.value) }} >
                    <option className='font-semibold py-4'>Male</option>
                    <option className='font-semibold py-4'>Female</option>
                </select>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Alternate Contact Email</h1>
                <input className="placeholder-gray-600  w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate_email(e.target.value)} type="text" required placeholder="Enter Email" />
                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Alternate Person Phone</h1>
                <input className="placeholder-gray-600 w-[250px] p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate_phone(e.target.value)} type="text" required placeholder="Enter Phone No." />
                <p className='ml-2 text-sm text-gray-600'>(for us to contact you and will not be made public)</p>
            </div>


            {/* Business Details */}


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Business Name</h1>
                <input className="placeholder-gray-600 w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => set_alternate_phone(e.target.value)} type="text" required placeholder="Enter Name" />
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Business Physical Address</h1>

                <input className="placeholder-gray-600 w-[200px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setstreet(e.target.value)} type="text" required placeholder="Street" />
                <input className="placeholder-gray-600 w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setcity(e.target.value)} type="text" required placeholder="City" />
                <input className="placeholder-gray-600 w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setzipcode(e.target.value)} type="number" required placeholder="Zip Code" />
                <input className="placeholder-gray-600 w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setstate(e.target.value)} type="text" required placeholder="State" />
                <input className="placeholder-gray-600 w-[100px] ml-2 p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setcountry(e.target.value)} type="text" required placeholder="Country" />
            </div>


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3 '>*Geo Location</h1>
                <button className='hover:bg-gray-200 flex items-center justify-around pl-6 border-[0.5px]  border-black rounded-lg p-1 '>
                    <LocationMarkerIcon className='h-6 text-red-600' />
                    <h1 className="placeholder-gray-600 w-[200px] cursor-pointer  text-sm text-center    outline-none "  >{location}</h1>
                </button>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Service Radius</h1>
                <select className='p-1 px-2 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    <option className='font-semibold py-4'>01</option>

                </select>
                <h2 className='ml-2'>Miles</h2>
                <select className='ml-6 p-1 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusTo} onChange={e => { setserviceRadiusTo(e.target.value) }} >
                    <option className='font-semibold py-4'>25+</option>
                </select>
                <h2 className='ml-2'>Miles</h2>
            </div>

            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Zip Codes Covered</h1>
                <input className="placeholder-gray-600 w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setzipcodesCovered(e.target.value)} type="text" required placeholder="" />
            </div>


            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Website Address</h1>
                <input className="placeholder-gray-600 w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setwebsite(e.target.value)} type="text" required placeholder="Enter Address" />
            </div>
            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Work Number</h1>
                <input className="placeholder-gray-600 w-[250px]  p-1 text-sm text-center  rounded-lg   outline-none border-[0.5px]  border-gray-600 " onChange={e => setworknumber(e.target.value)} type="number" required placeholder="123-899-8888" />
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Business Hours</h1>
                <select className='p-1 px-2 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    <option className='font-semibold py-4'>All Days</option>
                </select>
                <select className='ml-6 p-1 px-2 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusTo} onChange={e => { setserviceRadiusTo(e.target.value) }} >
                    <option className='font-semibold py-4'>00</option>
                </select>
                <span className='ml-2'>-</span>
                <select className='ml-2 p-1 px-2 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusTo} onChange={e => { setserviceRadiusTo(e.target.value) }} >
                    <option className='font-semibold py-4'>12</option>
                </select>
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Time Zone</h1>
                <select className='p-1 px-3 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    <option className='font-semibold py-4'>Eastern</option>
                </select>

            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Years in Bussiness</h1>
                <select className='p-1 px-2 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    <option className='font-semibold py-4'>01</option>

                </select>
                <h2 className='ml-2'>Years</h2>
                <select className='ml-6 p-1 text-sm w-16 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusTo} onChange={e => { setserviceRadiusTo(e.target.value) }} >
                    <option className='font-semibold py-4'>25+</option>
                </select>
                <h2 className='ml-2'>Months</h2>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Employee Strength</h1>
                <select className='p-1 px-3 text-sm w-22 rounded-lg   outline-none border-[0.5px]  border-gray-600 ' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    <option className='font-semibold py-4'>Solo</option>
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
