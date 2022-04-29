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
        }}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;