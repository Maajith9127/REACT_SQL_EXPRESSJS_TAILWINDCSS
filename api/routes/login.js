


import  express  from "express";
import { db } from "../db.js";



const loginrouter=express.Router()
loginrouter.post("/",(req,res)=>{
    const { email, password } = req.body;
    const sqlquery="SELECT * FROM test.userregister WHERE email = ? AND password = ?"
        
    // return res.status(200).json({ message:"Succesfully received login details" });

    db.query(sqlquery, [email,password], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json(err);
        }

        if (result.length === 0) {
            console.log("Email not found");
            return res.status(401).json({ message: "Email not found" });
        }

        console.log("", result[0]); // Debugging log
        console.log('the session looks like this before login was successfull',req.session);
        const user = result[0];
        req.session.user = { id: user.id, name: user.userName, email: user.email };
        console.log('the session looks like this after login was successfull',req.session);
        // console.log('the cookie looks like '+req.cookies);
        
        return res.status(200).json({ message: "Email exists, now checking password..." ,user});
    });



 

    
    

})





export default loginrouter;