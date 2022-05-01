import React, { useContext, useState } from 'react'
import {
    SearchIcon, LocationMarkerIcon, CheckIcon, XIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';
import Head from 'next/head'
import Services from '../components/Merchant/ServiceSignUp';
import { Gen_info_PART1 } from '../components/Merchant/Gen_info_PART1';
import { Gen_info_PART2 } from '../components/Merchant/Gen_info_PART2';
import videosContext from '../context/videos/videosContext';
import { ref, getDownloadURL, uploadBytes, getMetadata } from "firebase/storage";
import { storage } from '../firebase';
import { BeatLoader } from 'react-spinners';


const MerchantSignUP = () => {

    const [loading, setloading] = useState(false)

    const {
        Computer_Hardware_Support_Context,
        Computer_Software_Support_Context,
        Printers_Context,
        WiFi_Networking_Context,
        Mobiles_SoftWare_Context,
        Mobiles_Hardware_Context,
        Audio_Video_Context,

        Smart_Home_Thermostats_Context,
        Smart_Home_Video_Doorbells_Context,
        Smart_Home_Garage_Doors_Context,

        TV_Mounting_Context,

        Home_Security_Cameras_Context,
        Home_Security_Locks_Context,
        Home_Security_Alarms_Context,

    } = useContext(videosContext)


    const {
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
    } = useContext(videosContext)


    const dataObjReady = {
        nameTitle,
        fullname,
        gender,
        email,
        phone,
        alternate_nameTitle,
        alternate_fullname,
        alternate_gender,
        alternate_email,
        alternatephone,
        bussinessName,
        businessLogo,
        bussinessImagesArray,
        street,
        city,
        zipcode,
        state,
        country,
        location,
        latitude,
        longitude,

        bussinessHoursCreated,
        serviceRadius,
        website,
        tollfreenumber,
        worknumber,
        yearsinbusuiness,
        monthsinbusiness,
        employees,
        timezone,
        remoteService,
        inStoreService,
        houseCall,
        pickNdrop,
        bussinessService,

        Computer_Hardware_Support_Context,
        Computer_Software_Support_Context,
        Printers_Context,
        WiFi_Networking_Context,
        Mobiles_SoftWare_Context,
        Mobiles_Hardware_Context,
        Audio_Video_Context,

        Smart_Home_Thermostats_Context,
        Smart_Home_Video_Doorbells_Context,
        Smart_Home_Garage_Doors_Context,

        TV_Mounting_Context,

        Home_Security_Cameras_Context,
        Home_Security_Locks_Context,
        Home_Security_Alarms_Context,
    }


    const handleOnSubmit = async (e) => {
        const rawResponse = await fetch('/api/MerchantSignUpValidator', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataObjReady)
        });
        const content = await rawResponse.json();
        if (content.error) {
            return alert(content.error)
        }
        setloading(true)

        try {
            const response = await uploadImagesFirebase(businessLogo, bussinessImagesArray, email)
            if (response.error) {
                return
            }
            await finallyUploadDatato_MongoDB(response)
            console.log('Images Uploaded to firebase Sucessfully!');
            setloading(false)

        } catch (error) {
            alert(error)
        }

    }


    async function uploadImagesFirebase(businessLogo, bussinessImagesArray, email) {
        var array = []

        // Only for LOGO
        if (!businessLogo) {
            alert('Upload Business Logo image')
            return { error: "Upload Image" }
        }
        const imageref = ref(storage, `Baldgnie_Merchants/images/logo`)
        const metadata = {
            contentType: 'image/jpeg',
        };
        await uploadBytes(imageref, businessLogo, metadata)
        const logourl = await getDownloadURL(imageref)

        if (!bussinessImagesArray) {
            return { logo: logourl }
        }

        // For more Business Images
        async function runCode(index) {

            if (index < bussinessImagesArray.length) {
                const imageref = ref(storage, `Baldgnie_Merchants/images/${'Image' + (index + 1).toString()}`)

                await uploadBytes(imageref, bussinessImagesArray[index], metadata)
                const url = await getDownloadURL(imageref)
                // console.log(`Images-${index}  : ${url} `);
                array.push(url)
                await runCode(index + 1)
                if (index === bussinessImagesArray.length - 1) {
                }
            }

        }

        await runCode(0)
        return { logo: logourl, images: array }

    }


    const finallyUploadDatato_MongoDB = async (imageObj) => {

        const getServiceData = servicesDataProcessing()

        const Response = await fetch('/api/MerchantSignUpUpload', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: dataObjReady, images: imageObj, seviceData: getServiceData })
        });
        const dataa = await Response.json();
        if (dataa.error) {
            return alert(dataa.error)
        }
        alert(dataa.message)


    }


    function servicesDataProcessing() {
        let rough = [Computer_Hardware_Support_Context,
            Computer_Software_Support_Context,
            Printers_Context,
            WiFi_Networking_Context,
            Mobiles_SoftWare_Context,
            Mobiles_Hardware_Context,
            Audio_Video_Context,

            Smart_Home_Thermostats_Context,
            Smart_Home_Video_Doorbells_Context,
            Smart_Home_Garage_Doors_Context,

            Home_Security_Cameras_Context,
            Home_Security_Locks_Context,
            Home_Security_Alarms_Context,]


        let allServicess = []

        rough.forEach(array => {
            if (array.length > 0) {
                allServicess.push(array)
            }
        })
        let selectedServicesCategory = []
        allServicess.forEach(subcategory => {
            subcategory.forEach(item => {
                selectedServicesCategory.push(item.category)
            })
        });
        let uniqueCategoriesSelectedd = [...new Set(selectedServicesCategory)];


        return { allServices: allServicess, uniqueCategoriesSelected: uniqueCategoriesSelectedd }
    }




    return (
        <div className=' m-12 ml-28 font-footer'>
            {/* Primary Contact  */}

            <Head>
                <title>Baldgenie - Services at your doorsteps</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <h1 className=' mr-3 font-semibold text-xl m-6 ml-4'>{`{* symbol --> Mandatory}`}</h1>



            <Gen_info_PART1 />
            <Gen_info_PART2 />

            <div className='mt-16'>
                <Services />
            </div>
            <div className='flex items-center justify-center w-fit mx-auto space-x-3'>
                <div className={`${loading ? "hidden" : ""}  `}>
                    <button onClick={(e) => handleOnSubmit(e)} className="group mx-auto relative text-lg  flex justify-center py-2 px-8 border border-transparent  font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">Submit</button>
                </div>
                <div className={`${loading ? "" : "hidden"} w-20 `}>
                    <BeatLoader loading size={20} color={'blue'} />
                </div>
            </div>
        </div>
    )
}
export default MerchantSignUP
