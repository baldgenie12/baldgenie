import React, { useContext, useEffect, useRef, useState } from 'react'
import videosContext from '../../../context/videos/videosContext'
import { Computer_Hardware_Support } from '../../../utils/ServicesCategories'


export const CnP_Hardware = () => {


    const CATEGORY ='Computer_Hardware_Support_Context'
    const { Computer_Hardware_Support_Context, setComputer_Hardware_Support_Context } = useContext(videosContext)
    const [servicesArray, setservicesArray] = useState([])

    const stateObj = [
        { category:"Computer_Hardware_Support_Context", servicename: 'Desktop Harddrive Replacement', selected: false, amount: "" },
        { category:"Computer_Hardware_Support_Context", servicename: 'Laptop Harddrive Replacement', selected: false, amount: "" },
        { category:"Computer_Hardware_Support_Context", servicename: 'Desktop RAM Replacement', selected: false, amount: "" },
        { category:"Computer_Hardware_Support_Context", servicename: 'Laptop Keypad Replacement', selected: false, amount: "" },
        { category:"Computer_Hardware_Support_Context", servicename: 'Laptop Screen Replacement', selected: false, amount: "" },
        { category:"Computer_Hardware_Support_Context", servicename: 'Laptop Water Damage', selected: false, amount: "" },
        { category:"Computer_Hardware_Support_Context", servicename: 'No Boot - Harddrive Crashed', selected: false, amount: "" }
    ]

    const [allState, setallState] = useState(stateObj)

    const onChangeClick = (e, state_index) => {

        allState[state_index].selected = e.target.checked
        setallState([...allState])

        const itemPresent = false
        servicesArray.forEach((item, index) => {
            if (e.target.name.trim() === item) {
                itemPresent = true
            }
        })

        if (e.target.checked && !itemPresent) {
            servicesArray.push({
                category:CATEGORY,
                servicename: e.target.name.trim(),
                feeType: "",
                amount: ""
            })
            setservicesArray([...servicesArray])

        } else {

            servicesArray.forEach((item, index) => {
                if (item.servicename === e.target.name.trim()) {
                    servicesArray.splice(index, 1)
                    setservicesArray([...servicesArray])
                }
            })
        }
        setDataToContext()

    }


    const inputRadioHandler_onChange = (e) => {
        const servicename = e.target.name.trim()
        servicesArray.forEach((item, index) => {
            if (item.servicename === servicename) {
                servicesArray[index].feeType = e.target.id

                setservicesArray([...servicesArray])
            }
        })
        setDataToContext()

    }


    const inputAmountHandler_onChange = (e, state_index) => {
        const servicename = e.target.name.trim()
        const FlatAmount_Or_HourlyAmount = e.target.id
        console.log(FlatAmount_Or_HourlyAmount);
        servicesArray.forEach((item, index) => {
            if (item.servicename === servicename) {

                if (item.feeType === FlatAmount_Or_HourlyAmount) {
                    servicesArray[index].amount = e.target.value
                    allState[state_index].amount = e.target.value
                }
                setservicesArray([...servicesArray])
            }
        })
        setallState([...allState])
        setDataToContext()

    }

    const checkAmount = (servicename, flat_or_hourly) => {
        const feeTypeMatched = false
        servicesArray.forEach((item, index) => {
            if (item.servicename === servicename) {
                if (servicesArray[index].feeType === flat_or_hourly) {
                    feeTypeMatched = true
                }
                if (servicesArray[index].feeType.length < 1) {
                    feeTypeMatched = false

                }

            }
        })
        if (feeTypeMatched) {
            return true
        } else {
            return false
        }
    }

    const setDataToContext = () => {

        setComputer_Hardware_Support_Context([...servicesArray])
    }



    return (
        <div>

            <h1 className='my-6 text-lg font-semibold'>Hardware Support</h1>

            {/* ServiceItems */}
            {Computer_Hardware_Support.map((subcategory, index) => {
                return (
                    <div key={subcategory} className='category'>
                        <input onChange={e => { onChangeClick(e, index) }} className='scale-150' type="checkbox" id={subcategory} name={subcategory} />
                        <h1 className=' w-[250px] mr-3'>{subcategory}</h1>
                        <div className={`${allState[index].selected ? "" : "hidden"} subcategory`}>
                            <div className='flex items-center space-x-2'>
                                <input onChange={(e) => { inputRadioHandler_onChange(e) }} type="radio" className='radio' id="flat" name={subcategory} />
                                <p>Flat Fee </p>
                                <input onChange={(e) => { inputAmountHandler_onChange(e, index) }} value={allState[index].amount} id="flat" name={subcategory} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className={`inputtext w-[120px] ${checkAmount(subcategory, "flat") ? "" : "hidden"}`} placeholder="Enter Amount" />
                            </div>
                            <div className='flex items-center space-x-2'>
                                <input onChange={(e) => { inputRadioHandler_onChange(e) }} type="radio" className='radio' id="hourly" name={subcategory} />
                                <p>Hourly Fee </p>
                                <input onChange={(e) => { inputAmountHandler_onChange(e, index) }} value={allState[index].amount} id="hourly" name={subcategory} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className={`inputtext w-[120px] ${checkAmount(subcategory, "hourly") ? "" : "hidden"}`} placeholder="Enter Amount" />

                            </div>
                            <div className='flex items-center space-x-2'>
                                <input onChange={(e) => { inputRadioHandler_onChange(e) }} type="radio" className='radio' id="custom" name={subcategory} />
                                <p>Custom Fee </p>
                            </div>
                        </div>

                    </div>
                )
            })}



        </div>
    )
}
