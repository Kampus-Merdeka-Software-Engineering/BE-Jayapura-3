const express = require("express");
const connection = require('./app/model/index')
const app = express();

const mainRouter = require('./app/routes');
const port = 3000;

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

// http router
app.use("/", mainRouter);
app.listen(port, function(){
    console.log("server start on", port)
    connection.authenticate()
    .then(function(){
        console.log("Database terhubung")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
})