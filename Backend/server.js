import exp from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import { userRoute } from './APIs/userApi.js';
import {expenseRoute} from "./APIs/expensesAPI.js"
import { budgetRoute } from './APIs/budgetAPI.js';
import { aiAPI } from "./APIs/aiAPI.js";
import cors from "cors";


//process.env
config()
const  app=exp()
// add cors to connect with frontend
app.use(cors({origin:['http://localhost:5173'],credentials:true}));
//add body parser middleware
app.use(exp.json());
//add cookiParser
app.use(cookieParser());
// use ai

//connect to db
const connectDb=async()=>{
     try{
     await connect(process.env.DB_URL);
     console.log("DB connection successful");
     app.listen(process.env.PORT,()=>console.log("server 4000 started"));
     }catch(err){
          console.log('Error in DB Connection ',err);
     }
}
connectDb();
//connect-apis
app.use('/user-api',userRoute)
app.use('/expense-api',expenseRoute);
app.use('/budget-api',budgetRoute);
app.use("/api", aiAPI);
//error handling middle ware
app.use((err,req,res,next)=>{
  res.json({message:"Error",payload:err.message});
  next();
})