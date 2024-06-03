import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDB