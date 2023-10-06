const express = require("express");
const app_server =express();
const body_parser =require("body-parser")
const userRouter = require("./contorller/user.js");
require("./db.js")
app_server.use(body_parser.json());
app_server.use(body_parser.urlencoded({extended:true}))

app_server.use("/api",userRouter);


module.exports=app_server