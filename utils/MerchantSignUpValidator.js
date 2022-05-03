
export const validator = (data) => {


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
    } = data;



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
        return { error: 'Enter Primary Name..' }
    }

    if (!email) {
        return { error: 'Enter Primary Contact Email..' }
    }

    if (!phone) {

        return { error: 'Enter Primary Person Phone ..' }
    }
    if (phone && phone.length != 10) {

        return { error: 'Enter 10 digit number in Primary Person Phone ..' }
    }


    if (!bussinessName) {
        return { error: 'Enter Business Name..' }
    }

    if (!street) {
        return { error: 'Enter Street name in address' }
    }
    if (!city) {
        return { error: 'Enter city name in address' }
    }
    if (!zipcode) {
        return { error: 'Enter zipcode name in address' }
    }
    if (!state) {
        return { error: 'Enter state name in address' }
    }
    if (!country) {
        return { error: 'Enter country name in address' }
    }
    if (!location) {
        return { error: 'Location denied by user' }
    }

    if (!bussinessHoursCreated) {
        return { error: 'Add Bussiness hours..' }
    }
    if (!worknumber) {
        return { error: 'Enter Work Number..' }
    }
    if (worknumber && worknumber.length != 10) {

        return { error: 'Enter 10 digit number in Worknumber ..' }
    }
    if (!bussinessHoursCreated.length > 0) {
        return { error: 'Add Bussiness hours..' }
    }


    if (!remoteService) {
        return { error: 'Select any option in Remote Service' }
    }
    if (!inStoreService) {
        return { error: 'Select any option in In Store Service' }
    }
    if (!houseCall) {
        return { error: 'Select any option in House Call' }
    }
    if (!pickNdrop) {
        return { error: 'Select any option in Pick Up & Drop' }
    }
    if (!bussinessService) {
        return { error: 'Select any option in Bussiness Service' }
    }

    //------------------------------SERVICES-VALIDATOR--------------------------//

    if (allServices.length < 1 && TV_Mounting_Context.length < 1) {

        return { error: "Atleast Select anyone services" }
    }
    const errorObj = {}
    let selectedServicesCategory = []
    allServices.forEach(subcategory => {
        subcategory.forEach(item => {
            selectedServicesCategory.push(item.category)
            if (item.feeType.length < 1) {
                errorObj = { error: `Select Fee Type of ${item.servicename}` }
            }
            if (item.feeType != "custom") {
                if (item.amount.length < 1) {
                    errorObj = { error: `Enter Fee Amount of ${item.servicename}` }
                }
            }
        })
    });

    

    if (errorObj.error) {
        return errorObj
    } else {

        return { message: "Sucessfull" }
    }

}


function servicesValidator(allServices, TV_Mounting_Context) {
    console.log('====================================');
    console.log("INSIDE");
    console.log('====================================');





    // This is categories user Selected for service  all unique
    let uniqueCategoriesSelected = [...new Set(selectedServicesCategory)];


    //Beautify data for adding in database
    var packedData = []

    // console.log(uniqueCategoriesSelected);
}

