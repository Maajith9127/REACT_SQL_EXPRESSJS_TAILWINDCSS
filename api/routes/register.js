import express from "express";
import { db } from "../db.js";

const RegisterRouter = express.Router();


RegisterRouter.post("/", (req, res) => {
    console.log("📥 Received a POST request from frontend:", req.body);

    const { name, email, password } = req.body;
    console.log(`${name},${email},${password}`);
    

    if (!name || !email || !password) {
        return res.status(400).json({ error: "⚠️ All fields are required!" });
    }

    const checkEmailQuery = "SELECT * FROM userregister WHERE email = ?";
    db.query(checkEmailQuery,[email],(err,result)=>{
        if (err) {
            console.error("Error checking email:", err);
            return res.status(500).json({ message: "Server error, try again later." });
        }

        if (result.length > 0) {
            console.log("The Result is "+result);
            return res.status(400).json({ message: "Email already registered!" });
        }

        const sqlQuery = "INSERT INTO userregister (userName, email, password) VALUES (?, ?, ?)";
        db.query(sqlQuery, [name, email, password], (err, result) => {
            if (err) {
                console.error(" Error inserting data:", err);
                return res.status(500).json({ error: " Server error!" });
            }
    
            
    
    
            console.log(" User Registered:", result);
            res.status(201).json({ message: "Registration successful!" });
        });



    })
    
    
    
    
    
   

    // res.status(200).json({ message: "✅ Registration data received!" });
});






// ✅ Export Router
export default RegisterRouter;
