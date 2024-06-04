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
import app from "./app.js";

dotenv.config({path:'./env'})

// in promise, then and catch we will use callback function.
connectDB() // db should have to connect
.then(()=>{
  app.on("error",(error)=>{
    console.log(error,"mongo listen error")
    throw error
  })
  app.listen(process.env.PORT || 8000, ()=>{
    console.log( `app is running on port ${process.env.port}`)
  }); // app need to listen
})
.catch((err)=>{
  console.log(`Mongo DB connection failed`,err);
});
