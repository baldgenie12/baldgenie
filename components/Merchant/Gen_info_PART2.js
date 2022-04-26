import React, { useState } from 'react'
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


export const Gen_info_PART2 = () => {
    


    const [bussinessHoursCreated, setbussinessHoursCreated] = useState([])
    const [bussinessHours_AddbtnShow, setbussinessHours_AddbtnShow] = useState(true)
    const removeBussinessHoursCreatedOnclick = (index) => {
        setbussinessHours_AddbtnShow(true)
        bussinessHoursCreated.splice(index, 1); // 2nd parameter means remove one item only
        setbussinessHoursCreated([...bussinessHoursCreated])

    }


    // Location

    const [location, setlocation] = useState('Find my Location')
    const [serviceRadiusFrom, setserviceRadiusFrom] = useState('')
    const [serviceRadiusTo, setserviceRadiusTo] = useState('')
    const [zipcodesCovered, setzipcodesCovered] = useState('')
    const [website, setwebsite] = useState('')
    const [worknumber, setworknumber] = useState('')

    //Timing

    const [workingdays, setworkingdays] = useState('All days')
    const [workingHoursFrom, setworkingHoursFrom] = useState('00:00')
    const [workingHoursTO, setworkingHoursTO] = useState('00:00')

    const [yearsinbusuiness, setyearsinbusuiness] = useState('')
    const [monthsinbusiness, setmonthsinbusiness] = useState('')
    const [employees, setemployees] = useState('')



 
    return (
        <div> <div className=''>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Service Radius</h1>
                <select className=' px-2 text-sm w-[90px] select' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
                    {serviceRadiusMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}

                </select>
                <h2 className='ml-2'>Miles</h2>

            </div>




            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Website Address</h1>
                <input className="inputtext w-[250px]  " onChange={e => { setwebsite(e.target.value); console.log(website); }} type="text" placeholder="Enter Address" />
                <CheckIcon className={`${isUrlValid(website) ? "" : "hidden"} icon ml-2 text-green-500`} />
                <XIcon className={`${isUrlValid(website) ? "hidden" : website.length > 5 ? "" : "hidden"} icon ml-2 text-red-500`} />
            </div>
            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Toll Free Number</h1>
                <select className=' px-2 text-sm w-22 select' value={workingdays} onChange={e => { setworkingdays(e.target.value) }} >
                    {tollfreeMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}
                </select>
                <span className='ml-2'>-</span>
                <input className="inputtext w-[70px] ml-2  " onChange={e => setworkingHours(e.target.value)} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} placeholder="456" />
                <span className='ml-2'>-</span>
                <input className="inputtext w-[70px] ml-2  " onChange={e => setworkingMinutes(e.target.value)} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} placeholder="7890" />

            </div>
            <div className='flex items-center justify-start my-4 m-2 '>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Work Number</h1>
                <input className="inputtext w-[70px]" onChange={e => setworkingHours(e.target.value)} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} placeholder="123" />
                <span className='ml-2'>-</span>
                <input className="inputtext w-[70px] ml-2  " onChange={e => setworkingHours(e.target.value)} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} placeholder="456" />
                <span className='ml-2'>-</span>
                <input className="inputtext w-[70px] ml-2  " onChange={e => setworkingMinutes(e.target.value)} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} placeholder="7890" />
            </div>


            <div className='flex items-start justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>*Business Hours</h1>
                <div className='flex flex-col  justify-center space-y-2'>
                    <div>
                        {bussinessHoursCreated.map((obj, index) => {
                            return (
                                <div className='flex  mb-2' key={obj.days}>
                                    <input className="inputtext p-1 px-2 text-sm w-[167px]  text-center  select" type="text" value={obj.days} />
                                    <span className='mx-1'>-</span>
                                    <input className="inputtext w-[90px] ml-2  " type="text" value={obj.from_hours} />
                                    <span className='mx-1'>-</span>
                                    <input className="inputtext w-[90px] ml-2  " type="text" value={obj.to_hours} />
                                    <XIcon onClick={() => { removeBussinessHoursCreatedOnclick(index) }} className='h-6 ml-2 cursor-pointer' />
                                </div>
                            )
                        })}


                    </div>
                    <div className='flex flex-col space-y-2'>
                        <div className={`${bussinessHours_AddbtnShow ? "" : "hidden"}`}>

                            <select className=' px-2 text-sm w-22 select' value={workingdays} onChange={e => { setworkingdays(e.target.value) }} >
                                {bussinessHoursMenu.map(item => {
                                    return (

                                        <option key={item} className='px-2 py-4'>{item}</option>
                                    )
                                })}
                            </select>
                            <span className='mx-2'>-</span>

                            <select className=' px-2 text-sm w-[90px] select' value={workingHoursFrom} onChange={e => { setworkingHoursFrom(e.target.value) }} >
                                {hoursMenu.map(item => {
                                    return (

                                        <option key={item} className='px-2 py-4'>{item}</option>
                                    )
                                })}
                            </select>


                            <span className='mx-2'>-</span>
                            <select className=' px-2 text-sm w-[90px] select' value={workingHoursTO} onChange={e => { setworkingHoursTO(e.target.value) }} >
                                {hoursMenu.map(item => {
                                    return (

                                        <option key={item} className='px-2 py-4'>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='flex space-x-3'>
                            <button onClick={() => {
                                var array = [];
                                array.push({ days: workingdays, from_hours: workingHoursFrom, to_hours: workingHoursTO })
                                setbussinessHoursCreated([...bussinessHoursCreated, ...array])
                            }} className={`${bussinessHours_AddbtnShow ? "" : "hidden"} text-blue-500 font-bold text-left w-fit `}>ADD</button>
                            <button onClick={() => {
                                if (bussinessHoursCreated.length < 1) {
                                    var array = [];
                                    array.push({ days: workingdays, from_hours: workingHoursFrom, to_hours: workingHoursTO })
                                    setbussinessHoursCreated([...bussinessHoursCreated, ...array])
                                }
                                setbussinessHours_AddbtnShow(false)
                            }} className='text-blue-500 font-bold text-left w-fit '>{bussinessHours_AddbtnShow ? "SAVE" : "SAVED"}</button>
                        </div>
                    </div>
                </div>

            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Time Zone</h1>
                <select className=' px-3 text-sm w-22 select' value={serviceRadiusFrom} onChange={e => { setserviceRadiusFrom(e.target.value) }} >
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
                <select className=' px-2 text-sm w-16 select' value={yearsinbusuiness} onChange={e => { setyearsinbusuiness(e.target.value) }} >
                    {yearsinBussinessMenu.map(item => {
                        return (

                            <option key={item} className='px-2 py-4'>{item}</option>
                        )
                    })}
                </select>
                <h2 className='ml-2'>Years</h2>
                <select className='shadow-lg ml-6 p-1 text-sm w-16 select' value={monthsinbusiness} onChange={e => { setmonthsinbusiness(e.target.value) }} >
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
                <select className=' px-3 text-sm w-22 select' value={employees} onChange={e => { setemployees(e.target.value) }} >
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
                <div className='flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="Remote_Service" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="Remote_Service" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>In Store Service</h1>
                <div className='flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="In_Store_Service" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="In_Store_Service" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>House Call</h1>
                <div className='flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="House Call" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="House Call" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>


            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Pick Up & Drop</h1>
                <div className='flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="Pick Up & Drop" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="Pick Up & Drop" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>

            <div className='flex items-center justify-start my-4 m-2'>
                <span className="dot"></span>
                <h1 className='w-[230px] mr-3'>Bussiness Service</h1>
                <div className='flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2 ' type="radio" id="javascript" name="Bussiness Service" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">Yes</label>
                </div>

                <div className='ml-6 flex items-centerspace-x-1'>
                    <input className='bg-theme text-theme  scale-150 mr-2  ' type="radio" id="javascript" name="Bussiness Service" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                    <label className='' htmlFor="html">No</label>
                </div>
            </div>


        </div></div>
    )
}
