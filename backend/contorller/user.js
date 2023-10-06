const userRouter =require("express").Router();

userRouter.get("/user",async(req,res)=>{
    res.send("login sucessfull")
})


module.exports=userRouter