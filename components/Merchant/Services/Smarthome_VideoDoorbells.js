import React from 'react'

export const Smarthome_VideoDoorbells = () => {
    return (
        <div>
            <h1 className='my-6 text-lg font-semibold'>Video Doorbells</h1>

            {/* ServiceItems */}

            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Video Doorbell Installation" name="Video Doorbell Installation" />
                <h1 className=' w-[250px] mr-3'>Video Doorbell Installation</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Video Doorbell Installation" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Video Doorbell Installation" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Video Doorbell Installation" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='flex items-center space-x-2 mb-4'>
                <input className='scale-150 mr-2' type="checkbox" id="Video Doorbell Support" name="Video Doorbell Support" />
                <h1 className=' w-[250px] mr-3'>Video Doorbell Support</h1>
                <div className='flex items-center space-x-5 text-sm'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Video Doorbell Support" />
                        <p>Flat Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Video Doorbell Support" />
                        <p>Hourly Fee </p>
                        <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Video Doorbell Support" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
           

        </div>
    )
}
