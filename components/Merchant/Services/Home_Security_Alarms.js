import React from 'react'

export const Home_Security_Alarms = () => {
  return (
    <div>
      <h1 className='my-6 text-lg font-semibold'>Alarms</h1>

      {/* ServiceItems */}

      <div className='flex items-center space-x-2 mb-4'>
        <input className='scale-150 mr-2' type="checkbox" id="Alarm System Installation & Setup" name="Alarm System Installation & Setup" />
        <h1 className=' w-[250px] mr-3'>Alarm System Installation & Setup</h1>
        <div className='flex items-center space-x-5 text-sm'>
          <div className='flex items-center space-x-2'>
            <input type="radio" className='radio' name="Alarm System Installation & Setup" />
            <p>Flat Fee </p>
            <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
          </div>
          <div className='flex items-center space-x-2'>
            <input type="radio" className='radio ' name="Alarm System Installation & Setup" />
            <p>Hourly Fee </p>
            <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

          </div>
          <div className='flex items-center space-x-2'>
            <input type="radio" className='radio' name="Alarm System Installation & Setup" />
            <p>Custom Fee </p>
          </div>
        </div>

      </div>
      <div className='flex items-center space-x-2 mb-4'>
        <input className='scale-150 mr-2' type="checkbox" id="Alarm System Support" name="Alarm System Support" />
        <h1 className=' w-[250px] mr-3'>Alarm System Support</h1>
        <div className='flex items-center space-x-5 text-sm'>
          <div className='flex items-center space-x-2'>
            <input type="radio" className='radio' name="Alarm System Support" />
            <p>Flat Fee </p>
            <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />
          </div>
          <div className='flex items-center space-x-2'>
            <input type="radio" className='radio ' name="Alarm System Support" />
            <p>Hourly Fee </p>
            <input type="number" className="inputtext w-[120px]" placeholder="Enter Amount" />

          </div>
          <div className='flex items-center space-x-2'>
            <input type="radio" className='radio' name="Alarm System Support" />
            <p>Custom Fee </p>
          </div>
        </div>

      </div>
    </div>
  )
}
