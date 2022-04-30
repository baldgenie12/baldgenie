

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
        bussinessService
    } = req.body;



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


    return res.status(200).json({ message: "Sucessfull" })

}
