import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../public/temp")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    console.log(file,"checking the file data")
    cb(null, file.fieldname + '-' + uniqueSuffix)
    // cb is the callback function.
  }
})

export const upload = multer({ storage: storage })
