import videosContext from "./videosContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";






const VideoState = (props) => {

    // PART - 1 ----------------------------------------------------------------------------------------------------

    const [nameTitle, setnameTitle] = useState('Mr.')
    const [fullname, setfullname] = useState('')

    const [gender, setgender] = useState('')
    const [email, setemail] = useState('')

    //Phone
    const [phone, setphone] = useState('')


    const [alternate_nameTitle, set_alternate__nameTitle] = useState('Mr.')
    const [alternate_fullname, setalternate_fullname] = useState('')

    const [alternate_gender, set_alternate_gender] = useState('')
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


    // Location

    const [location, setlocation] = useState('Find my Location')
    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')

    // PART - 2 ----------------------------------------------------------------------------------------------------

    const [bussinessHoursCreated, setbussinessHoursCreated] = useState([])
    const [bussinessHours_AddbtnShow, setbussinessHours_AddbtnShow] = useState(true)



    // Location
    const [serviceRadius, setserviceRadius] = useState('')
    const [website, setwebsite] = useState('')


    // Toll free number
    const [tollfreenumber, settollfreenumber] = useState('')



    //Work number
    const [worknumber, setworknumber] = useState('')

    //Timing
    const [yearsinbusuiness, setyearsinbusuiness] = useState('')
    const [monthsinbusiness, setmonthsinbusiness] = useState('')
    const [employees, setemployees] = useState('')
    const [timezone, settimezone] = useState('')

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
            street, setstreet,
            city, setcity,
            zipcode, setzipcode,
            state, setstate,
            country, setcountry,
            location, setlocation,
            latitude, setlatitude,
            longitude, setlongitude,

        }}>
            {props.children}
        </videosContext.Provider>
    )
}




export default VideoState;