 import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

//  express se app banti h
const app = express();

// configuration of cors. USE method is used for the middleware invoking
// app.use(cors()) // we can apply condition on cors as well

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials:true
}))

app.use(express.json({limit:"10kb"}))
app.use(express.urlencoded({extended:true, limit:"10kb"}))
app.use(express.static("anmol_public"))
app.use(cookieParser())

export default app
