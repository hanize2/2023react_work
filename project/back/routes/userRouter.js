const express = require("express");
const router = express.Router();

const {User} = require("../db.js");

router.get('/list/:id?', async(req, res) => {
    console.log(req.params.id);
    const users= await User.findAll();
    res.json(users);
});

router.post('/insert', async(req, res) => {
    console.log("req.body.email",req.body.email);
    console.log("req.body.password",req.body.password);
    console.log("req.body.name",req.body.name);
    try{
        await User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        })
        .catch(e=>{console.log(e);});
    }catch(e){
        console.log(e);
        res.status(500).json({message:"db insert 실패"});
    }finally{
    }
    res.status(200).json({message:'db insert 성공'});

});

module.exports = router;