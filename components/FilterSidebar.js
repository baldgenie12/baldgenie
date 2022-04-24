import React, { useEffect, useState } from 'react'
import {
    StarIcon, ArrowCircleDownIcon, ArrowCircleUpIcon
} from '@heroicons/react/outline';




const availability = ['Show All', 'Show Online', '24/7 Support', 'By Appointment']
const customer_review = []
const pricing = ['Flat Fee', 'Hourly Fee', 'Custom Price']
const support_type = ['Remote Support ', 'Local Instore Support', 'House Call', 'Pickup & Drop']
const plan_type = ['One Time ', 'Monthly', 'Yearly Unlimited']
const usage_type = ['Personal Use ', 'Business Use', 'Enterprise']
const years_in_business = []
const employee_strength = ['Solo', '2 - 5', '6 - 10', '11 - 20', '20 - 50', '50+']
const payment_method = ['Credit / Debit Card', 'PayPal', 'Apple Pay', 'Google Pay', 'Cash', 'Crypto Currency']

const years = ['0', '1', '2', '3', '4', '5', '5', '6', '7', '8', '9', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25']

const months = ['1', '2', '3', '4', '5', '5', '6', '7', '8', '9', '9']



export const FilterSidebar = () => {

    const [openFilterBar, setopenFilterBar] = useState(false)

    //Years in Business Dropdown menu
    const [selectedYear, setselectedYear] = useState('All')
    const [selectedMonth, setselectedMonth] = useState('ALl')

    useEffect(() => {
        window.addEventListener("resize", function () {

        });
        if (window.innerWidth < 750) {
            setopenFilterBar(false)
        } else {
            setopenFilterBar(true)
        }
    }, [])


    return (
        <div className=' lg:mr-10 ml-4 lg:ml-16'>


            <div onClick={() => openFilterBar ? setopenFilterBar(false) : setopenFilterBar(true)} 
            className='flex  md:hidden px-4 p-1 items-center space-x-1 rounded text-sm m-1 justify-end w-full cursor-pointer  '>
                {/* <ArrowCircleUpIcon className='h-4 text-theme' /> */}
                <button className=''  >Filters</button>
                <ArrowCircleDownIcon className='h-4 text-theme' />
            </div>

            {openFilterBar &&

                <div className='h-2/5 right-0 left-0 fixed md:h-fit  md:relative  -bottom-5 md:bottom-0 overflow-y-scroll z-40   scrollbar-hide p-4  border-2 border-b-0 border-theme rounded-lg shadow-inner bg-blue-100 md:bg-white md:border-0  '>

                    <div className='  grid grid-cols-2     space-y-4  md:flex md:flex-col mb-4 '>


                        {/* Availability */}
                        <div className='flex flex-col  my-2  space-y-1 items-start justify-center '>
                            <h1 className='font-semibold'>Availability</h1>

                            <div className='flex items-center  space-x-1'>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Availability" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">Show Online</label>
                            </div>

                            <div className='flex items-center  space-x-1'>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Availability" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">24/7 Support</label>
                            </div>
                            <div className='flex items-center  space-x-1'>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Availability" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">By Appointment</label>
                            </div>
                        </div>



                        {/* Customer Review */}
                        <div className='flex flex-col my-2  space-y-1 items-start justify-center '>
                            <h1 className='font-semibold'>Ratings</h1>

                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className='h-4 text-yellow-600 ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                                <StarIcon className='text-gray-400 h-4  ' />
                            </div>
                        </div>




                        {/* Support Type */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-semibold'>Support Type</h1>


                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1"> Remote Support </label>
                            </div>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1"> Local Instore Support</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1"> House Call</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1"> Pickup & Drop</label>
                            </div>


                        </div>



                        {/* Pricing  */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-semibold'>Pricing</h1>


                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Flat Fee</label>
                                <input className='w-12 text-center text-xs border-2 border-gray-300 outline-none rounded' type="number" id="fname" name="fname" placeholder='max' />
                            </div>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Hourly Fee</label>
                                <input className='w-12 text-center text-xs border-2 border-gray-300 outline-none rounded' type="number" id="fname" name="fname" placeholder='max' />
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Custom Price</label>
                            </div>



                        </div>


                        {/* Plan Type */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>

                            <h1 className='font-semibold'>Plan Type</h1>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">One Time </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Monthly</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Yearly Unlimited</label>
                            </div>


                        </div>


                        {/* Usage Type */}

                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-semibold'>Usage Type</h1>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Personal Use </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Business Use</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Enterprise</label>
                            </div>
                        </div>



                        {/* Years in Bussiness */}
                        <div>
                            <h1 className='font-semibold'>Years In Business</h1>
                            <div className='sm:flex  sm:space-x-1  items-center space-y-1'>

                                <div className='flex items-center space-x-1   '>
                                    <select className='text-sm scrollbar-hide text-gray-800 outline-none border-2 border-gray-300 rounded' value={selectedYear} onChange={(event) =>
                                        setselectedYear(event.target.value)}>

                                        {years.map(item => {
                                            return (
                                                <option key={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                    <h2 className='text-sm text-gray-700'> Years </h2>
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <select className='text-sm scrollbar-hide text-gray-800 outline-none border-2 border-gray-300 rounded' value={selectedMonth} onChange={(event) =>
                                        setselectedMonth(event.target.value)}>

                                        {months.map(item => {
                                            return (
                                                <option key={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                    <h2 className='text-sm text-gray-700'> Months </h2>
                                </div>
                            </div>
                        </div>




                        {/* Employee Strength */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-semibold'>Employee Strength</h1>


                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">Solo</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">2 - 5</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">6 - 10</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">11 - 20</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">20 - 50</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-sm ' htmlFor="html">50+</label>
                            </div>

                        </div>



                        {/* Payment Method */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-semibold'>Payment Method</h1>


                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Credit / Debit Card </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">PayPal </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Apple Pay </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Google Pay </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Cash </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Crypto Currency </label>
                            </div>

                        </div>



                        {/* miscellaneous Method */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-semibold'>Miscellaneous:</h1>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Free Car Parking </label>
                            </div>
                            <div className='flex items-center  space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-gray-700' htmlFor="vehicle1">Wheelchair Access</label>
                            </div>
                        </div>

                    </div>

                </div>
            }

        </div >
    )
}
