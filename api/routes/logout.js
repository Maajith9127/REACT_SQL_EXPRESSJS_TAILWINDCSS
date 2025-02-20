import express from "express";

const logoutRouter = express.Router();

logoutRouter.post("/", (req, res) => {

    req.session.destroy((err) => {
        if (err) {
            console.error("Error destroying session:", err);
            return res.status(500).json({ message: "Logout failed" });
        }
        // ✅ Remove session cookie from the browser
        res.clearCookie("connect.sid", { path: "/" ,domain: "localhost"});

    return res.status(200).json({ message: "Logged out successfully" });
});

}
)

export default logoutRouter;
