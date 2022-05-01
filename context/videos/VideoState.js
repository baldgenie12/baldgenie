import videosContext from "./videosContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";






const VideoState = (props) => {

    // PART - 1 ----------------------------------------------------------------------------------------------------

    const [nameTitle, setnameTitle] = useState('Mr.')
    const [fullname, setfullname] = useState('')

    const [gender, setgender] = useState('Male')
    const [email, setemail] = useState('')

    //Phone
    const [phone, setphone] = useState('')


    const [alternate_nameTitle, set_alternate__nameTitle] = useState('Mr.')
    const [alternate_fullname, setalternate_fullname] = useState('')

    const [alternate_gender, set_alternate_gender] = useState('Male')
    const [alternate_email, set_alternate_email] = useState('')

    //AlternatePhone
    const [alternatephone, setalternatephone] = useState('')


    // Bussiness Details
    const [bussinessName, setbussinessName] = useState('')
    const [street, setstreet] = useState('')
    const [city, setcity] = useState('')
    const [zipcode, setzipcode] = useState('')
    const [state, setstate] = useState('')
    const [country, setcountry] = useState('')
    const [businessLogo, setbusinessLogo] = useState('')
    const [bussinessImagesArray, setbussinessImagesArray] = useState([])


    // Location

    const [location, setlocation] = useState('Find my Location')
    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')

    // PART - 2 ----------------------------------------------------------------------------------------------------

    const [bussinessHoursCreated, setbussinessHoursCreated] = useState([])

    // Distance
    const [serviceRadius, setserviceRadius] = useState('<1')
    const [website, setwebsite] = useState('')
    // Toll free number
    const [tollfreenumber, settollfreenumber] = useState('')

    //Work number
    const [worknumber, setworknumber] = useState('')

    //Timing
    const [yearsinbusuiness, setyearsinbusuiness] = useState('0')
    const [monthsinbusiness, setmonthsinbusiness] = useState('1')
    const [employees, setemployees] = useState('Solo')
    const [timezone, settimezone] = useState('Eastern Time')

    // Radio Buttons
    const [remoteService, setremoteService] = useState(null)
    const [inStoreService, setinStoreService] = useState(null)
    const [houseCall, sethouseCall] = useState(null)
    const [pickNdrop, setpickNdrop] = useState(null)
    const [bussinessService, setbussinessService] = useState(null)


    //-----------------------------------------------------------------------------------------------------------------------------------------
    const [services, setservices] = useState([])
    const [Computer_Hardware_Support_Context, setComputer_Hardware_Support_Context] = useState([])
    const [Computer_Software_Support_Context, setComputer_Software_Support_Context] = useState([])
    const [Printers_Context, setPrinters_Context] = useState([])

    const [WiFi_Networking_Context, setWiFi_Networking_Context] = useState([])
    const [Mobiles_SoftWare_Context, setMobiles_SoftWare_Context] = useState([])
    const [Mobiles_Hardware_Context, setMobiles_Hardware_Context] = useState([])

    const [Audio_Video_Context, setAudio_Video_Context] = useState([])
    const [Smart_Home_Thermostats_Context, setSmart_Home_Thermostats_Context] = useState([])
    const [Smart_Home_Video_Doorbells_Context, setSmart_Home_Video_Doorbells_Context] = useState([])
    const [Smart_Home_Garage_Doors_Context, setSmart_Home_Garage_Doors_Context] = useState([])



    const [Home_Security_Cameras_Context, setHome_Security_Cameras_Context] = useState([])
    const [Home_Security_Locks_Context, setHome_Security_Locks_Context] = useState([])
    const [Home_Security_Alarms_Context, setHome_Security_Alarms_Context] = useState([])

    const [TV_Mounting_Context, setTV_Mounting_Context] = useState([])
    return (
        <videosContext.Provider value={{
            nameTitle, setnameTitle,
            fullname, setfullname,
            gender, setgender,
            email, setemail,
            phone, setphone,
            alternate_nameTitle, set_alternate__nameTitle,
            alternate_fullname, setalternate_fullname,
            alternate_gender, set_alternate_gender,
            alternate_email, set_alternate_email,
            alternatephone, setalternatephone,
            bussinessName, setbussinessName,
            businessLogo, setbusinessLogo,
            bussinessImagesArray, setbussinessImagesArray,
            street, setstreet,
            city, setcity,
            zipcode, setzipcode,
            state, setstate,
            country, setcountry,
            location, setlocation,
            latitude, setlatitude,
            longitude, setlongitude,



            bussinessHoursCreated, setbussinessHoursCreated,
            serviceRadius, setserviceRadius,
            website, setwebsite,
            tollfreenumber, settollfreenumber,
            worknumber, setworknumber,
            yearsinbusuiness, setyearsinbusuiness,
            monthsinbusiness, setmonthsinbusiness,
            employees, setemployees,
            timezone, settimezone,
            remoteService, setremoteService,
            inStoreService, setinStoreService,
            houseCall, sethouseCall,
            pickNdrop, setpickNdrop,
            bussinessService, setbussinessService,


            //------------------------------------------Services--------------------------
            services, setservices,
            Computer_Hardware_Support_Context, setComputer_Hardware_Support_Context,
            Computer_Software_Support_Context, setComputer_Software_Support_Context,
            Printers_Context, setPrinters_Context,
            WiFi_Networking_Context, setWiFi_Networking_Context,
            Mobiles_SoftWare_Context, setMobiles_SoftWare_Context,
            Mobiles_Hardware_Context, setMobiles_Hardware_Context,
            Audio_Video_Context, setAudio_Video_Context,

            Smart_Home_Thermostats_Context, setSmart_Home_Thermostats_Context,
            Smart_Home_Video_Doorbells_Context, setSmart_Home_Video_Doorbells_Context,
            Smart_Home_Garage_Doors_Context, setSmart_Home_Garage_Doors_Context,

            TV_Mounting_Context, setTV_Mounting_Context,

            Home_Security_Cameras_Context, setHome_Security_Cameras_Context,
            Home_Security_Locks_Context, setHome_Security_Locks_Context,
            Home_Security_Alarms_Context, setHome_Security_Alarms_Context,

        }}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;