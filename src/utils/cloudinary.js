import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

(async function (localFilePath) {

  cloudinary.config({
    cloud_name: "dgrydj46q",
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET_KEY
  });

  try {
    if (!localFilePath) return null
    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto'
    }).catch((error) => { console.log(error) });
    console.log(uploadResult);

    return uploadResult
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload operation got failed.
    return null
  }
})();

//create middleware now for the use of multer
