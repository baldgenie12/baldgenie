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
    } = req.body.data;


    const { allServices, uniqueCategoriesSelected } = req.body.seviceData


    const { logo, images } = req.body.images;
    const businessLogo = logo;
    const bussinessImagesArray = images;



    const packedData = {
        nameTitle: nameTitle,
        fullname: fullname,
        gender: gender,
        email: email,
        phone: phone,
        alternate_nameTitle: alternate_nameTitle,
        alternate_fullname: alternate_fullname,
        alternate_gender: alternate_gender,
        alternate_email: alternate_email,
        alternatephone: alternatephone,
        bussinessName: bussinessName,
        businessLogo: businessLogo,
        bussinessImagesArray: bussinessImagesArray,
        street: street,
        city: city,
        zipcode: zipcode,
        state: state,
        country: country,
        location: location,
        latitude: latitude,
        longitude: longitude,

        bussinessHoursCreated: bussinessHoursCreated,
        serviceRadius: serviceRadius,
        website: website,
        tollfreenumber: tollfreenumber,
        worknumber: worknumber,
        timezone: timezone,
        yearsinbusuiness: yearsinbusuiness,
        monthsinbusiness: monthsinbusiness,
        employees: employees,
        remoteService: remoteService,
        inStoreService: inStoreService,
        houseCall: houseCall,
        pickNdrop: pickNdrop,
        bussinessService: bussinessService,
        uniqueCategoriesSelected: uniqueCategoriesSelected,
        allServices: allServices,

    }


    console.log(packedData);

    const user = new Merchants(packedData)
    await user.save()
    console.log("Data Submitted");


    return res.status(200).json({ message: "Data Uploaded" })

}
