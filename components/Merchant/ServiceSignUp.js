import React from 'react'
import { CnP_Hardware } from './Services/CnP_Hardware'
import { CnP_Software } from './Services/CnP_Software'
import { Home_Security_Alarm } from './Services/Home_Security_Alarms'
import { Home_Security_Camera } from './Services/Home_Security_Cameras'
import { Home_Security_Lock } from './Services/Home_Security_Locks'
import { Mobile_Support_Hardware } from './Services/Mobile_Support_Hardware'
import { Mobile_Support_Software } from './Services/Mobile_Support_Software'
import { Tv_Mounting } from './Services/Tv_Mounting'
import { WifiandNetwork } from './Services/WifiandNetwork'
import { Printer } from './Services/Printers'
import { AudioVideo } from './Services/Audio _Video'

import { Smarthome_Thermostat } from './Services/Smarthome_Thermostats'
import { Smarthome_GarageDoor } from './Services/Smarthome_GarageDoors'
import { Smarthome_VideoDoorbell } from './Services/Smarthome_VideoDoorbells'





const Service = () => {
    return (
        <div>

            <h1 className='my-4 text-2xl font-semibold'>Services Offered</h1>
            <div>
                <CnP_Software />
                <CnP_Hardware />
                <Printer />
                <WifiandNetwork />
                <Mobile_Support_Software />
                <Mobile_Support_Hardware />

                <AudioVideo />

                <Smarthome_Thermostat />
                <Smarthome_GarageDoor />
                <Smarthome_VideoDoorbell />

                <Home_Security_Camera />
                <Home_Security_Lock />
                <Home_Security_Alarm />
                <Tv_Mounting />

            </div>
        </div>
    )
}
export default Service