import React from 'react'

export const Mobile_Support_Hardware = () => {
    return (
        <div>
            <h1 className='my-6 text-lg font-semibold'>Hardware Support</h1>

            {/* ServiceItems */}

            <div className='category'>
                <input className='scale-150' type="checkbox" id="New Mobile/Tablet Screen Replacement" name="New Mobile/Tablet Screen Replacement" />
                <h1 className=' w-[250px] mr-3'>New Mobile/Tablet Screen Replacement</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Mobile/Tablet Screen Replacement" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="New Mobile/Tablet Screen Replacement" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Mobile/Tablet Screen Replacement" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='category'>
                <input className='scale-150' type="checkbox" id="New Mobile/Tablet Others" name="New Mobile/Tablet Others" />
                <h1 className=' w-[250px] mr-3'>New Mobile/Tablet Others</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Mobile/Tablet Others" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="New Mobile/Tablet Others" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="New Mobile/Tablet Others" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>

        </div>
    )
}
