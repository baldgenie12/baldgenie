import React from 'react'

export const Mobile_Support_Software = () => {
    return (
        <div>

            <h1 className='my-6 mt-14 text-lg font-semibold'>Mobile Support:</h1>
            <h1 className='my-6 text-lg font-semibold'>Software Support</h1>

            {/* ServiceItems */}

            <div className='flex items-center space-x-4 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="New Mobile/Tablet Device Setup" name="New Mobile/Tablet Device Setup" />
                <h1 className=' w-[250px] mr-3'>New Mobile/Tablet Device Setup</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Mobile/Tablet Device Setup" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="New Mobile/Tablet Device Setup" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Mobile/Tablet Device Setup" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-4 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Mobile/Tablet Device Suppor" name="Mobile/Tablet Device Suppor" />
                <h1 className=' w-[250px] mr-3'>Mobile/Tablet Device Suppor</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Mobile/Tablet Device Suppor" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Mobile/Tablet Device Suppor" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Mobile/Tablet Device Suppor" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
