import mongoose from 'mongoose'


const ServiceSchema = new mongoose.Schema({
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
    zipcode: {
        type: Number,
        default: 'Not Added'

    },
    phoneNumber: {
        type: Number,
        default: 'Not Added'
    },
    image: {
        type: String,
        default: 'https://i.stack.imgur.com/34AD2.jpg'
    },
}, { timestamps: true })


export default mongoose.model('servicesList', ServiceSchema);