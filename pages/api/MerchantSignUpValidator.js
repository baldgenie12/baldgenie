import Merchants from "../../MongoDatabaseModels/MerchantModel";


export default async function handler(req, res) {


    const {
        nameTitle,
        fullname,
        gender,
        email,
        phone,
        alternate_nameTitle, //Not Mandatory
        alternate_fullname,  //Not Mandatory
        alternate_gender,  //Not Mandatory
        alternate_email,  //Not Mandatory
        alternatephone,   //Not Mandatory
        bussinessName,
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
        website,  //Not Mandatory
        tollfreenumber, //Not Mandatory
        worknumber,
        timezone,
        yearsinbusuiness,
        monthsinbusiness,
        employees,
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
    } = req.body;



    const rough = [Computer_Hardware_Support_Context,
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


    let allServices = []

    rough.forEach(item => {
        if (item.length > 0) {
            allServices.push(item)
        }
    })


    if (!fullname) {
        return res.status(400).json({ error: 'Enter Primary Name..' })
    }

    if (!email) {
        return res.status(400).json({ error: 'Enter Primary Contact Email..' })
    }

    if (!phone) {

        return res.status(400).json({ error: 'Enter Primary Person Phone ..' })
    }
    if (phone && phone.length != 10) {

        return res.status(400).json({ error: 'Enter 10 digit number in Primary Person Phone ..' })
    }


    if (!bussinessName) {
        return res.status(400).json({ error: 'Enter Business Name..' })
    }

    if (!street) {
        return res.status(400).json({ error: 'Enter Street name in address' })
    }
    if (!city) {
        return res.status(400).json({ error: 'Enter city name in address' })
    }
    if (!zipcode) {
        return res.status(400).json({ error: 'Enter zipcode name in address' })
    }
    if (!state) {
        return res.status(400).json({ error: 'Enter state name in address' })
    }
    if (!country) {
        return res.status(400).json({ error: 'Enter country name in address' })
    }
    if (!location) {
        return res.status(400).json({ error: 'Location denied by user' })
    }

    if (!bussinessHoursCreated) {
        return res.status(400).json({ error: 'Add Bussiness hours..' })
    }
    if (!worknumber) {
        return res.status(400).json({ error: 'Enter Work Number..' })
    }
    if (worknumber && worknumber.length != 10) {

        return res.status(400).json({ error: 'Enter 10 digit number in Worknumber ..' })
    }
    if (!bussinessHoursCreated.length > 0) {
        return res.status(400).json({ error: 'Add Bussiness hours..' })
    }


    if (!remoteService) {
        return res.status(400).json({ error: 'Select any option in Remote Service' })
    }
    if (!inStoreService) {
        return res.status(400).json({ error: 'Select any option in In Store Service' })
    }
    if (!houseCall) {
        return res.status(400).json({ error: 'Select any option in House Call' })
    }
    if (!pickNdrop) {
        return res.status(400).json({ error: 'Select any option in Pick Up & Drop' })
    }
    if (!bussinessService) {
        return res.status(400).json({ error: 'Select any option in Bussiness Service' })
    }


    servicesValidator(allServices, TV_Mounting_Context, res)



    const alreadyRegistered = await Merchants.findOne({ email })
    if (alreadyRegistered) {
        res.status(400).json({ error: "Already registered with this E-Mail" })
        return
    }



    return res.status(200).json({ message: "Sucessfull" })

}


function servicesValidator(allServices, TV_Mounting_Context, res) {

    let selectedServicesCategory = []

    if (allServices.length < 1 && TV_Mounting_Context.length < 1) {
        res.status(200).json({ error: "Atleast Select anyone services" })
        return
    }

    allServices.forEach(subcategory => {
        subcategory.forEach(item => {
            selectedServicesCategory.push(item.category)
            if (item.feeType.length < 1) {
                res.status(400).json({ error: `Select Fee Type of ${item.servicename}` })
                return
            }
            if (item.feeType != "custom") {
                if (item.amount.length < 1) {
                    res.status(400).json({ error: `Enter Fee Amount of ${item.servicename}` })
                    return
                }
            }
        })
    });




    // This is categories user Selected for service  all unique
    let uniqueCategoriesSelected = [...new Set(selectedServicesCategory)];


    //Beautify data for adding in database
    var packedData = []

    // console.log(uniqueCategoriesSelected);
}

