import React from 'react'

export const CnP_Software = () => {
    return (
        <div>

            <h1 className='text-xl font-semibold mt-10'>Computers & Printers:</h1>
            <div>

                <h1 className='my-4 text-lg font-semibold'>Software Support</h1>

                {/* ServiceItems */}

                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Computer Diagnosis" name="Computer Diagnosis" />
                    <h1 className=' w-[250px] mr-3'>Computer Diagnosis</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Computer Diagnosis" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Computer Diagnosis" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Computer Diagnosis" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Computer Repair & Help" name="Computer Repair & Help" />
                    <h1 className=' w-[250px] mr-3'>Computer Repair & Help</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Computer Repair & Help" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Computer Repair & Help" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Computer Repair & Help" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Slow Computer Fix/Computer Tune-up" name="Slow Computer Fix/Computer Tune-up" />
                    <h1 className=' w-[250px] mr-3'>Slow Computer Fix/Computer Tune-up</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Slow Computer Fix/Computer Tune-up" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Slow Computer Fix/Computer Tune-up" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Slow Computer Fix/Computer Tune-up" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>

                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Virus Removal" name="Virus Removal" />
                    <h1 className=' w-[250px] mr-3'>Virus Removal</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Virus Removal" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Virus Removal" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Virus Removal" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Email Support" name="Email Support" />
                    <h1 className=' w-[250px] mr-3'>Email Support</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Email Support" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Email Support" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Email Support" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="No Boot" name="No Boot" />
                    <h1 className=' w-[250px] mr-3'>No Boot</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="No Boot" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="No Boot" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="No Boot" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="New Computer Setup" name="New Computer Setup" />
                    <h1 className=' w-[250px] mr-3'>New Computer Setup</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="New Computer Setup" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="New Computer Setup" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="New Computer Setup" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="OS Upgrade/Reinstall" name="OS Upgrade/Reinstall" />
                    <h1 className=' w-[250px] mr-3'>OS Upgrade/Reinstall</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="OS Upgrade/Reinstall" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="OS Upgrade/Reinstall" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="OS Upgrade/Reinstall" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Browser Support" name="Browser Support" />
                    <h1 className=' w-[250px] mr-3'>Browser Support</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Browser Support" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Browser Support" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Browser Support" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Software Uninstall/Reinstall" name="Software Uninstall/Reinstall" />
                    <h1 className=' w-[250px] mr-3'>Software Uninstall/Reinstall</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Software Uninstall/Reinstall" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Software Uninstall/Reinstall" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Software Uninstall/Reinstall" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>

                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="No Sound" name="No Sound" />
                    <h1 className=' w-[250px] mr-3'>No Sound</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="No Sound" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="No Sound" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="No Sound" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>

                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Data Backup or Transfer" name="Data Backup or Transfer" />
                    <h1 className=' w-[250px] mr-3'>Data Backup or Transfer</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Data Backup or Transfer" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Data Backup or Transfer" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Data Backup or Transfer" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Computer Training" name="Computer Training" />
                    <h1 className=' w-[250px] mr-3'>Computer Training</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Computer Training" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Computer Training" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Computer Training" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Printer Setup" name="Printer Setup" />
                    <h1 className=' w-[250px] mr-3'>Printer Setup</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Printer Setup" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Printer Setup" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Printer Setup" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>
                <div className='flex items-center space-x-2 mb-4'>
                    <input className='scale-150 mr-2' type="checkbox" id="Printer Troubleshooting" name="Printer Troubleshooting" />
                    <h1 className=' w-[250px] mr-3'>Printer Troubleshooting</h1>
                    <div className='flex items-center space-x-5 text-sm'>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Printer Troubleshooting" />
                            <p>Flat Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio ' name="Printer Troubleshooting" />
                            <p>Hourly Fee </p>
                            <input type="number" className="inputtext w-[120px]"  placeholder="Enter Amount" />

                        </div>
                        <div className='flex items-center space-x-2'>
                            <input type="radio" className='radio' name="Printer Troubleshooting" />
                            <p>Custom Fee </p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}
