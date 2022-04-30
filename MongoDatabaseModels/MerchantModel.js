import mongoose from 'mongoose'


const MerchantSchema = new mongoose.Schema({
    nameTitle: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },

    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },

    //Alternate_Contact_details

    alternate_nameTitle: {
        type: String,
    },
    alternate_fullname: {
        type: String,
    },
    alternate_middleName: {
        type: String,
    },

    alternate_gender: {
        type: String,
        required: true
    },
    alternate_email: {
        type: String,
        required: true
    },
    alternatephone: {
        type: String,
        required: true,
    },

    // Bussiness Details

    bussinessName: {
        type: String,
        required: true
    },
    businessLogo: {
        type: String,
        required: true
    },
    bussinessImagesArray: [{
        type: String,
        required: true
    }],
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },


    // Location
    latitude: {
        type: Number,
        required: true,
        integer: true
    },
    longitude: {
        type: Number,
        required: true,
        integer: true
    },
    location: {
        type: String,
        required: true
    },
    serviceRadius: {
        type: String,
        required: true
    },

    //Bussiness Hours Created

    bussinessHoursCreated: [{
        days: { type: String, required: true },
        from_hours: { type: String, required: true },
        to_hours: { type: String, required: true },
    }],

    website: {
        type: String,
        required: true
    },

    tollfreenumber: {
        type: String,
        required: true,
    },
    worknumber: {
        type: String,
        required: true,
    },

    // Timing

    worknumber: {
        type: String,
        required: true
    },
    yearsinbusuiness: {
        type: String,
        required: true
    },
    monthsinbusiness: {
        type: String,
        required: true
    },
    employees: {
        type: String,
        required: true
    },
    timezone: {
        type: String,
        required: true
    },


    //Radio Buttons
    remoteService: {
        type: Boolean,
        required: true
    },
    inStoreService: {
        type: Boolean,
        required: true
    },
    houseCall: {
        type: Boolean,
        required: true
    },
    pickNdrop: {
        type: Boolean,
        required: true
    },
    bussinessService: {
        type: Boolean,
        required: true
    },


}, { timestamps: true })

let Merchants = mongoose.models.merchants || mongoose.model('merchants', MerchantSchema)

export default Merchants;