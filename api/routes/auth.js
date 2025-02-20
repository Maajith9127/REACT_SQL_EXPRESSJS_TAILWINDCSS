


import  express  from "express";
import { db } from "../db.js";



const Authenticate=express.Router()
Authenticate.post("/",(req,res)=>{
   
    console.log("📥 Received request body:", JSON.stringify(req.session.user, null, 2));
if(req.session.user){
 
    const info= JSON.stringify(req.session.user)
    
    
    return res.status(200).json({ message: "Hey i am auth.js", data:info});
}

return res.status(404).json({ message: "Hey You are no longer logged in" });

 

    
    

})





export default Authenticate;