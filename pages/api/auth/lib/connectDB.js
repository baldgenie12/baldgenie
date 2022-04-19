import mongoose from "mongoose";


const connectDB = () => {
    if (mongoose.connection[0]) {
        console.log(mongoose.connection[0]);
        console.log('Alreaady Connected');
        return;
    }

    mongoose.connect(process.env.MONGODB_URI, {}, err => {
        if (err) throw err;
        console.log('Database Connected Sucessfully!');
    })
}

export default connectDB