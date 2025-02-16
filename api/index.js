import express from "express"
import cors from "cors";
import RegisterRouter from "./routes/register.js";
import loginrouter from "./routes/login.js";
import cookieParser from "cookie-parser";
import session from "express-session";

 const  app=express()



app.use(cors({
    origin: "http://localhost:5173",
    credentials: true 
})); //  Allow frontend (React) to access backend
app.use(express.json());
app.use(cookieParser());

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: true, // Change to true if using HTTPS
        httpOnly: true, // ✅ Prevents JavaScript access (stops XSS attacks)
        sameSite: "Strict", // ✅ Helps prevent CSRF attacks
        maxAge: 1000 * 60 * 30 // ✅ Session expires in 30 minutes
    }
}));



app.use("/register",RegisterRouter)
app.use("/login",loginrouter)

// app.post("/login", (req, res) => {
//     console.log("📥 Received a Post  request from Login Page:", req.body);
    
//     // Just send a response for now
//     res.status(200).json({ message: "✅ Registration data received!" });
// });





const port=8800
app.listen(port,()=>{
    console.log(`This index.js service  will be identified by the port numbers ${port}`);
    
})

