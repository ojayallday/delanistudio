const express = require('express');

const router = express.Router();

router.get("/", (req,res)=>{
    console.log("home page accessed")
    res.render("home",{})
})

//Export all routes
//module.exports = router;
exports.router = router;