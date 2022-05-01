import React, { useContext, useState } from 'react'
import { TV_Mounting } from '../../../utils/ServicesCategories'
import videosContext from '../../../context/videos/videosContext'
import { serialize } from 'bson'

export const Tv_Mounting = () => {

    const { TV_Mounting_Context, setTV_Mounting_Context } = useContext(videosContext)

    console.log(TV_Mounting_Context);

    const onChangeClick = (e) => {
        var categoryPresentIndex = null
        let array = TV_Mounting_Context
        TV_Mounting_Context.forEach((element, index) => {
            if (element === e.target.id) {
                categoryPresentIndex = index
            }
        });

        if (categoryPresentIndex != null) {
            console.log('inside');
            array.splice(categoryPresentIndex, 1)
        } else {
            array.push(e.target.id)
        }

        setTV_Mounting_Context([...array])
    }


    return (
        <div>
            <h1 className='my-6 mt-14 text-lg font-semibold'>TV Mounting:</h1>

            {/* ServiceItems */}

            {TV_Mounting.map((subcategory, index) => {
                return (
                    <div key={subcategory} className='category'>
                        <input onChange={e => { onChangeClick(e) }} className='scale-150' type="checkbox" id={subcategory} name={subcategory} />
                        <h1 className=' w-[250px] mr-3'>{subcategory}</h1>
                    </div>
                )
            })}


        </div>
    )
}




[
    { servicename: 'TV Mounting upto 32’’', selected: false, amount: '' },
    {
        servicename: 'TV Mounting upto 33’’- 60’’',
        selected: false,
        amount: ''
    },
    {
        servicename: 'TV Mounting More Than 61’’',
        selected: false,
        amount: ''
    },
    {
        servicename: 'TV Dismount or Remount',
        selected: false,
        amount: ''
    }
]