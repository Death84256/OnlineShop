require("dotenv").config();

const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
var { expressjwt: jwt } = require("express-jwt");

const {checkAdmin, checkUser} = require("../models/db.js");

const router = express.Router();

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try{
        const admin = await checkAdmin(username,password);
        const user = await checkUser(username,password);
        if(!admin && !user){
            return res.status(401).send({message:"Invalid Credentials"});
        }else if(admin){
            res.status(200).json({message: "Login successful as Admin"})
        }
        else{
            res.status(200).json({message: "Login successful as User"})
        }
        
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
});
module.exports = router;