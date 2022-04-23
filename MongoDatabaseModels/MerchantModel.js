import mongoose from 'mongoose'


const MerchantSchema = new mongoose.Schema({
    nameTitle: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
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
        type: Number,
        required: true,
        integer: true
    },

    //Alternate_Contact_details

    alternate_nameTitle: {
        type: String,
        required: true
    },
    alternate_firstName: {
        type: String,
        required: true
    },
    alternate_middleName: {
        type: String,
        required: true
    },
    alternate_lastName: {
        type: String,
        required: true
    },
    alternate_gender: {
        type: String,
        required: true
    },
    alternate_email: {
        type: String,
        required: true
    },
    alternate_phone: {
        type: Number,
        required: true,
        integer: true
    },

    // Bussiness Details

    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true,
        integer: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    alternate_phone: {
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
    serviceRadiusFrom: {
        type: String,
        required: true
    },
    zipcodesCovered: {
        type: Number,
        required: true,
        integer: true
    },
    website: {
        type: String,
        required: true
    },
    worknumber: {
        type: Number,
        required: true,
        integer: true
    },

    // Timing

    workingdays: {
        type: String,
        required: true
    },
    workingHours: {
        type: String,
        required: true
    },
    workingMinutes: {
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

}, { timestamps: true })

let Dataset = mongoose.models.merchants || mongoose.model('merchants', MerchantSchema)

export default Dataset;