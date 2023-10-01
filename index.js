const express = require("express");

const app = express();

const mainRouter = require('./app/routes');
const port = 3000;

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body

// http router
app.use("/", mainRouter);
app.listen(port, function(){
    console.log(`Server running on port ${port}...`);
})