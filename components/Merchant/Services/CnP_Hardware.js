import React from 'react'

export const CnP_Hardware = () => {
    return (
        <div>

            <h1 className='my-6 text-lg font-semibold'>Hardware Support</h1>

            {/* ServiceItems */}

            <div className='category'>
                <input className='scale-150' type="checkbox" id="Desktop Hard Drive Replacement" name="Desktop Hard Drive Replacement" />
                <h1 className=' w-[250px] mr-3'>Desktop Hard Drive Replacement</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Desktop Hard Drive Replacement" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Desktop Hard Drive Replacement" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Desktop Hard Drive Replacement" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>


          


            <div className='category'>
                <input className='scale-150' type="checkbox" id="Desktop RAM Replacement" name="Desktop RAM Replacement" />
                <h1 className=' w-[250px] mr-3'>Desktop RAM Replacement</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Desktop RAM Replacement" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Desktop RAM Replacement" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Desktop RAM Replacement" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='category'>
                <input className='scale-150' type="checkbox" id="Laptop Hard Drive Replacement" name="Laptop Hard Drive Replacement" />
                <h1 className=' w-[250px] mr-3'>Laptop Hard Drive Replacement</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Laptop Hard Drive Replacement" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Laptop Hard Drive Replacement" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Laptop Hard Drive Replacement" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='category'>
                <input className='scale-150' type="checkbox" id="Laptop Keypad Replacement" name="Laptop Keypad Replacement" />
                <h1 className=' w-[250px] mr-3'>Laptop Keypad Replacement</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Laptop Keypad Replacement" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Laptop Keypad Replacement" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Laptop Keypad Replacement" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='category'>
                <input className='scale-150' type="checkbox" id="Laptop Screen Replacement" name="Laptop Screen Replacement" />
                <h1 className=' w-[250px] mr-3'>Laptop Screen Replacement</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Laptop Screen Replacement" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Laptop Screen Replacement" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Laptop Screen Replacement" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
            <div className='category'>
                <input className='scale-150' type="checkbox" id="Printer Repair" name="Printer Repair" />
                <h1 className=' w-[250px] mr-3'>Printer Repair</h1>
                <div className='subcategory'>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Printer Repair" />
                        <p>Flat Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />
                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio ' name="Printer Repair" />
                        <p>Hourly Fee </p>
                        <input type="number" onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} className="inputtext w-[120px]"  placeholder="Enter Amount" />

                    </div>
                    <div className='flex items-center space-x-2'>
                        <input type="radio" className='radio' name="Printer Repair" />
                        <p>Custom Fee </p>
                    </div>
                </div>

            </div>
        
        </div>
    )
}
