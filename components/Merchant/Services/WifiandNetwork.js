import React from 'react'

export const WifiandNetwork = () => {
    return (
        <div>
           
           <h1 className='my-6 mt-14 text-lg font-semibold'>Wifi and Network:</h1>

            {/* ServiceItems */}

            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="New Wifi Connection Setup" name="New Wifi Connection Setup" />
                <h1 className=' w-[250px] mr-3'>New Wifi Connection Setup</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Wifi Connection Setup" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="New Wifi Connection Setup" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Wifi Connection Setup" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Wifi & network support" name="Wifi & network support" />
                <h1 className=' w-[250px] mr-3'>Wifi & network support</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Wifi & network support" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Wifi & network support" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Wifi & network support" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Wifi Signal Extension" name="Wifi Signal Extension" />
                <h1 className=' w-[250px] mr-3'>Wifi Signal Extension</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Wifi Signal Extension" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Wifi Signal Extension" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Wifi Signal Extension" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
