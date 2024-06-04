// database connect mongoose k through
// express included in app.js

/*
import mongoose from "mongoose";
import { DB_NAME } from "./constant";
import express from "express";
const app = express();

// iife function declaration for immidiate call of function
;( async()=>{
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    app.on("error",(error)=>{
      console.log(error);
      throw error
    }) // this is the listner, available only in express.

    app.listen(process.env.PORT, ()=>{
      console.log(`server app is listing, ${process.env.PORT}`)
    })
  } catch (error) {
    console.error(error)
    throw error
  }
})()
*/
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
  {path:'./env'}
)

connectDB();
