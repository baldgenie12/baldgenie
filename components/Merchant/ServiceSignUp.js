import React from 'react'
import { Computer_SoftWare_Support } from '../../utils/ServicesCategories'
import { Computer_Hardware_Support } from '../../utils/ServicesCategories'
import { Printers } from '../../utils/ServicesCategories'
import { WiFi_Networking } from '../../utils/ServicesCategories'
import { Mobiles_SoftWare } from '../../utils/ServicesCategories'
import { Mobiles_Hardware } from '../../utils/ServicesCategories'
import { Audio_Video } from '../../utils/ServicesCategories'
import { Smart_Home } from '../../utils/ServicesCategories'
import { TV_Mounting } from '../../utils/ServicesCategories'
import { Home_Security } from '../../utils/ServicesCategories'
import { CnP_Hardware } from './Services/CnP_Hardware'
import { CnP_Software } from './Services/CnP_Software'
import { Home_Security_Alarms } from './Services/Home_Security_Alarms'
import { Home_Security_Cameras } from './Services/Home_Security_Cameras'
import { Mobile_Support_Hardware } from './Services/Mobile_Support_Hardware'
import { Mobile_Support_Software } from './Services/Mobile_Support_Software'
import { Tv_Mounting } from './Services/Tv_Mounting'
import { WifiandNetwork } from './Services/WifiandNetwork'
import { Smarthome_Thermostats } from './Services/Smarthome_Thermostats'
import { Smarthome_GarageDoors } from './Services/Smarthome_GarageDoors'
import { Smarthome_VideoDoorbells } from './Services/Smarthome_VideoDoorbells'




const Service = () => {
    return (
        <div>

            <h1 className='my-4 text-2xl font-semibold'>Services Offered</h1>
            <div>
                <CnP_Software />
                <CnP_Hardware />
                <WifiandNetwork />
                <Mobile_Support_Software />
                <Mobile_Support_Hardware />

                <Smarthome_Thermostats />
                <Smarthome_VideoDoorbells />
                <Smarthome_GarageDoors />

                <Home_Security_Cameras />
                <Home_Security_Alarms />
                <Tv_Mounting />

            </div>
        </div>
    )
}
export default Service