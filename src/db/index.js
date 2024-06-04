// mongoose setup in professional approach

import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () =>{
  try {
    const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)

    console.log(`\n MongoDB connected !! DB HOST:${connectInstance.connection.host} \n ${connectInstance}`)
  } catch (error) {
    console.error(error,"facing error");
    process.exit(1) // bydefault process is already available in node which is used to handle process which is running.
  }
}

export default connectDB
