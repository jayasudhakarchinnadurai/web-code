const express = require("express");
const app_server = require("./app.js");
const cors=require("cors")
require("dotenv").config()
const Node_sever = express();
Node_sever.use(cors())
Node_sever.use("/",app_server)
Node_sever.listen(process.env.PORT ,()=>console.log(`your server start ${process.env.PORT}`));