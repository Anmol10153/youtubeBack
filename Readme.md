# youtube backend

- [data model](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

- Database connection : mongoDB atlas search in google.
    Use shared database in mongodb atlas.

    1. whenever you try to contact with database always use try catch OR promise. 
    2.Database is always in another continent.REMEMBER. means it takes time to contact database so always use ASYNC & AWAIT.


- env variable experimental and direct loading in our application with nodemon : 
  "scripts": {
    "dev": "nodemon -r dotenv/config src/index.js"
  },

  ------------  -r dotenv/config ------------ by this

- MongoDB is connected via db folder as well as index.js file commented code. 

- IIFE function is used in index.js file which is used to immidiately call the function. 

- NOTE : whenever you change anything in the env variable u need to restart the nodemon as it will not read that. 

- NOTE : while debugging always try to start debug with import statements and then the use of import variable in that file.

- Main file : index.js

