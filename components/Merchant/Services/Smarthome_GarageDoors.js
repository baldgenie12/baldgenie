import React from 'react'

export const Smarthome_GarageDoors = () => {
    return (
        <div>
            <h1 className='my-6 text-lg font-semibold'>Garage Doors</h1>

            {/* ServiceItems */}

            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Garage Installation" name="Smart Garage Installation" />
                <h1 className=' w-[250px] mr-3'>Smart Garage Installation</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Garage Installation" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Garage Installation" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Garage Installation" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Garage Support" name="Smart Garage Support" />
                <h1 className=' w-[250px] mr-3'>Smart Garage Support</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Garage Support" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Garage Support" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Garage Support" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Hub or Speaker Setup" name="Smart Hub or Speaker Setup" />
                <h1 className=' w-[250px] mr-3'>Smart Hub or Speaker Setup</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Hub or Speaker Setup" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Hub or Speaker Setup" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Hub or Speaker Setup" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Hub or Speaker Support" name="Smart Hub or Speaker Support" />
                <h1 className=' w-[250px] mr-3'>Smart Hub or Speaker Support</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Hub or Speaker Support" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Hub or Speaker Support" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Hub or Speaker Support" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
