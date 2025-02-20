import express from "express";

const trial = express.Router();

trial.post("/", (req, res) => {
    try {
        // const string=JSON.stringify(req)
        console.log("Yes the request contains cookies ",req.cookies);
        
            return res.status(200).json({ message: "Trial successfully" });
        } 
        catch (error) {
            
            return res.status(404).json({ message: "Trial Unsuccessfully" });
    }

}
)

export default trial;
