# File Upload: 
  1. file handling is not done on our server, we will upload in the 3rd parth service OR at AWS server.
  2. for file upload we use UTILITY or Middleware for the code.

  - services:
    1. cloudnary for uploading videos and PDF files. behind the scene it is using aws as a wrapper.
    2. for file upload we need - expressFileUpload package and multer package

- npm install multer cloudinary
- import v2 as cloudinary
 
- Cloudinary is an sdk service we will upload file by multer and store in the localstorage and then take the file from the local server and then upload to the cloudinary. 

multer : 
  req body me file nahi aati h json data and normal data aata h object type. thats why we use multer to handle the file.
