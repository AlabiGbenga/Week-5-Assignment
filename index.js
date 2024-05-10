// First of all, we have to install node.js which is a javascript runtime environment
// then we check wether the node have been installed by going to command prompt and typing node -v
// it will show the version of node installed
// Then, go and create new folder for the project and open the folder with vs code
// After that initialize the project, by typing "npm init  --y" to create package.json file
// Then, install express by typing npm install express in the terminal and the express have been installed
// package-lock.json and node_modules will appear, then package.json file will include express on the list of 
// dependencies. node_modules will appear on the file segment, this is all the files a project needs to run
// Then, we go ahead and create our server.
// Then, install nodemon as a dev depencencies inorder to restart our server every time we need our server to be restarted

//Express
const express = require("express")
    const app = express()
   const dotenv = require("dotenv")
   const fn = require("./controler")
dotenv.config()
const PORT = process.env.PORT || 8000

    app.listen(PORT, ()=>{
        console.log("server started running on ${PORT}")
    })

    // app.get("/users", (req, res)=>{
    //     res.json(users)
    // })

    app.get("post", fn.handleGetRequest.)

    app.get("post", fn.handlePostRequest.)


