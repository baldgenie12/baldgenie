import React from 'react'

export const Home_Security_Cameras = () => {
    return (
        <div>
            <h1 className='my-6 mt-14 text-lg font-semibold'>Home Security:</h1>
            <h1 className='my-6 text-lg font-semibold'>Cameras</h1>

            {/* ServiceItems */}

            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Security Camera Installation" name="Smart Security Camera Installation" />
                <h1 className=' w-[250px] mr-3'>Smart Security Camera Installation</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Camera Installation" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Security Camera Installation" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Camera Installation" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Security Camera Support" name="Smart Security Camera Support" />
                <h1 className=' w-[250px] mr-3'>Smart Security Camera Support</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Camera Support" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Security Camera Support" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Camera Support" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Security Lock Installation" name="Smart Security Lock Installation" />
                <h1 className=' w-[250px] mr-3'>Smart Security Lock Installation</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Lock Installation" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Security Lock Installation" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Lock Installation" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Smart Security Lock Support" name="Smart Security Lock Support" />
                <h1 className=' w-[250px] mr-3'>Smart Security Lock Support</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Lock Support" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Security Lock Support" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Security Lock Support" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            
        </div >
    )
}
