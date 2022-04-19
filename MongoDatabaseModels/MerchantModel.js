import mongoose from 'mongoose'


const MerchantSchema = new mongoose.Schema({
    account_type: {
        type: String,
    },
    name: {
        type: String,
        default: 'guest'
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg'
    },
}, { timestamps: true })

let Dataset = mongoose.models.merchants || mongoose.model('merchants', MerchantSchema)

export default Dataset;