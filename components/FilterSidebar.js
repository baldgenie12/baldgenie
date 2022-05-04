import React, { useEffect, useState } from 'react'
import {
    ArrowCircleDownIcon, ArrowCircleUpIcon
} from '@heroicons/react/outline';


import {
    StarIcon
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';




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

    const router = useRouter()
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
        <div className=' lg:mr-10 ml-4 lg:ml-10 relative'>


         

            <div onClick={() => openFilterBar ? setopenFilterBar(false) : setopenFilterBar(true)}
                className='flex absolute  right-5 top-[140px] bg-slate-300 w-fit  md:hidden px-4 p-1 items-center space-x-1 rounded text-sm m-1 justify-end  cursor-pointer  '>
                {/* <ArrowCircleUpIcon className='h-4 text-theme' /> */}
                <button className=''  >Filters</button>
                <ArrowCircleDownIcon className='h-4 text-theme' />
            </div>

            {openFilterBar &&


                <div className='h-2/5 right-0 left-0 fixed md:h-fit  md:relative  -bottom-5 md:bottom-0 overflow-y-scroll z-40   scrollbar-hide p-4  border-2 border-b-0  rounded-lg shadow-inner bg-blue-100 md:bg-white md:border-0   '>
                    
                    <div className='  grid grid-cols-2     space-y-4  md:flex md:flex-col mb-4 '>


                        {/* Availability */}
                        <div className='flex flex-col  my-2  space-y-1 items-start justify-center '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Availability</h1>

                            <div className='flex items-center  space-x-1'>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Availability" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">Show Online</label>
                            </div>

                            <div className='flex items-center  space-x-1'>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Availability" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">24/7 Support</label>
                            </div>
                            <div className='flex items-center  space-x-1'>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Availability" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">By Appointment</label>
                            </div>
                        </div>



                        {/* Customer Review */}
                        <div className='flex flex-col my-2  space-y-1 items-start justify-center '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Ratings</h1>

                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <StarIcon className=' w-[16px] text-starcolor ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                                <StarIcon className='text-starcolorgrey w-[16px]  ' />
                            </div>
                        </div>




                        {/* Support Type */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Support Type</h1>


                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1"> Remote Support </label>
                            </div>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1"> Local Instore Support</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1"> House Call</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1"> Pickup & Drop</label>
                            </div>


                        </div>



                        {/* Pricing  */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Pricing</h1>


                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Flat Fee</label>
                                <input className='w-12 text-center text-[12px] border-[0.5px] border-color_filterSidebar_InputBorder outline-none rounded text-color_filterSidebar_priceInput' type="number" id="fname" name="fname" placeholder='max' />
                                <button className='w-[25px]  text-center text-[11px] border-[0.5px] border-color_filterSidebar_InputBorder outline-none rounded text-color_filterSidebar_GoTbtn'>Go</button>
                            </div>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Hourly Fee</label>
                                <input className='w-12 text-center text-[12px] border-[0.5px] border-color_filterSidebar_InputBorder outline-none rounded text-color_filterSidebar_priceInput' type="number" id="fname" name="fname" placeholder='max' />
                                <button className='w-[25px]  text-center text-[11px] border-[0.5px] border-color_filterSidebar_InputBorder outline-none rounded text-color_filterSidebar_GoTbtn'>Go</button>

                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Custom Price</label>
                            </div>



                        </div>


                        {/* Plan Type */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>

                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Plan Type</h1>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">One Time </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Monthly</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Yearly Unlimited</label>
                            </div>


                        </div>


                        {/* Usage Type */}

                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Usage Type</h1>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Personal Use </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Business Use</label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Enterprise</label>
                            </div>
                        </div>



                        {/* Years in Bussiness */}
                        <div>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Years In Business</h1>
                            <div className='sm:flex  sm:space-x-1  items-center '>

                                <div className='flex items-center space-x-1   '>
                                    <select className='text-sm scrollbar-hide text-color_filterSidebar_priceInput outline-none border-[0.5px] border-color_filterSidebar_InputBorder rounded' value={selectedYear} onChange={(event) =>
                                        setselectedYear(event.target.value)}>

                                        {years.map(item => {
                                            return (
                                                <option key={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                    <h2 className='text-sm text-color_filterSidebar'> Years </h2>
                                </div>
                                <div className='flex items-center space-x-1'>
                                    <select className='text-sm scrollbar-hide text-color_filterSidebar_priceInput outline-none border-[0.5px] border-color_filterSidebar_InputBorder rounded' value={selectedMonth} onChange={(event) =>
                                        setselectedMonth(event.target.value)}>

                                        {months.map(item => {
                                            return (
                                                <option key={item}>{item}</option>
                                            )
                                        })}
                                    </select>
                                    <h2 className='text-sm text-color_filterSidebar'> Months </h2>
                                </div>
                            </div>
                        </div>




                        {/* Employee Strength */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Employee Strength</h1>


                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">Solo</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">2 - 5</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">6 - 10</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">11 - 20</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">20 - 50</label>
                            </div>
                            <div className='flex items-center  space-x-1 '>
                                <input className='bg-theme text-theme ' type="radio" id="javascript" name="Employee Strength" value="JavaScript" placeholder='dsfasdfsadfdasf' />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="html">50+</label>
                            </div>

                        </div>



                        {/* Payment Method */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Payment Method</h1>


                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Credit / Debit Card </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">PayPal </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Apple Pay </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Google Pay </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Cash </label>
                            </div>
                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Crypto Currency </label>
                            </div>

                        </div>



                        {/* miscellaneous Method */}
                        <div className='   flex flex-col my-2  space-y-1 items-start justify-center 	  '>
                            <h1 className='font-category text-[17px] font-bold text-color_filterSidebarHead my-1'>Miscellaneous:</h1>

                            <div className='flex items-center space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Free Car Parking </label>
                            </div>
                            <div className='flex items-center  space-x-1'>
                                <input className='mt-0.5' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-[15px] font-category text-color_filterSidebar  ' htmlFor="vehicle1">Wheelchair Access</label>
                            </div>
                        </div>

                    </div>

                </div>
            }

        </div >
    )
}
