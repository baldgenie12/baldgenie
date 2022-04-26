import React from 'react'

export const Smarthome_Thermostats = () => {
  return (
    <div>
            <h1 className='my-6 mt-14 text-lg font-semibold'>Smart Home:</h1>
            <h1 className='my-6 text-lg font-semibold'>Thermostats</h1>

            {/* ServiceItems */}

            <div className='category'>
                <input className='scale-150' type="checkbox" id="Smart Thermostat Setup & Installation" name="Smart Thermostat Setup & Installation" />
                <h1 className=' w-[250px] mr-3'>Smart Thermostat Setup & Installation</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Thermostat Setup & Installation" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Thermostat Setup & Installation" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Thermostat Setup & Installation" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='category'>
                <input className='scale-150' type="checkbox" id="Smart Thermostat Support" name="Smart Thermostat Support" />
                <h1 className=' w-[250px] mr-3'>Smart Thermostat Support</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Thermostat Support" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Smart Thermostat Support" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]" placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Smart Thermostat Support" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>

        </div>
  )
}
