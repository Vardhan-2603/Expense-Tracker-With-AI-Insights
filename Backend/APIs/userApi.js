import exp from 'express';
import {UserModel} from '../Models/userModel.js'
import {register} from '../Services/authservice.js'
import bcrypt from "bcryptjs";
import { authenticate } from "../Services/authservice.js";

export const userRoute=exp.Router();

// Register user
userRoute.post("/users",async(req,res)=>{
    try{
        let userObj=req.body;
        const newUserObj=await register(userObj);
        console.log(userObj);
        res.status(201).json({message:"User Created",payload:newUserObj});
    }
    catch(error){
        res.status(500).json({message:"Error",payload:error.message});
    }
})

//login
userRoute.post("/login",async(req,res)=>{
    try{
         let authorCred = req.body;
         //call authenticate service
         let {token,user}= await authenticate(authorCred);
         //save token as httponly cookie
         res.cookie("token",token,{
              httpOnly:true,
              sameSite:"lax",
              secure:false,
         });
         //send res
         res.status(201).json({message:"login sucess",payload:user});
    }
    catch(error){
        res.status(500).json({message:"Error",payload:error.message});
    }
})

//logout
userRoute.get("/logout",async(req,res)=>{
    try{
         //clear all the cookies
         //must match orginal settings
         res.clearCookie('token',{
              httpOnly:true,
              secure:false,
              sameSite:'lax'
         });
         res.status(200).json({message:"loged out sucessfully"})
    }
    catch(error){
        res.status(500).json({message:"Error",payload:error.message});
    }
})