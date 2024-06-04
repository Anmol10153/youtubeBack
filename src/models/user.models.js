import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: { //cloudnary service is used to store images and image url
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  watchHistory: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Video"
    }],
    required: true,
    lowercase: true,
    trim: true,
    index: true
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  refreshTokens: {
    type: String,
  },
}, { timestamps: true });

// this handles the database value which is already stored

userSchema.pre("save", async function (err, req, res, next) {
  // if(!this.isModified("password")) return next() // negative check
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10)
  }
  next()
})

// method calling in model
userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
  jwt.sign(
    {
      _id:this._id,
      email:this.email,
      username: this.username,
      fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
userSchema.methods.generateRefreshToken = function(){
  jwt.sign(
    {
      _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User = mongoose.model('User', userSchema)
