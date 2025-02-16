import  express  from "express";
import { db } from "../db.js";



const loginrouter=express.Router()
loginrouter.post("/",(req,res)=>{

    console.log(req.body);
    console.log(`The session object looks like ${req.session.id}`);
    
    return res.status(200).json({ message:"Succesfully received login details" });

    
    

})





export default loginrouter;