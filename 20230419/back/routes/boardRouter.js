const express = require("express");
const router = express.Router();

const {Board} = require("../db.js");

router.get('/list/:id?', async(req, res) => {
    console.log(req.params.id);
    const boards = await Board.findAll();
    res.json(boards);
});

router.post('/insert', async(req, res) => {
    console.log("req.body.email",req.body.email);
    try{
        await Board.create({
            name : "aaa",
            email : req.body.email,
            password : "password"
        });
    }catch(e){
        console.log(e);
    }finally{
        res.send('insert');
    }
});

module.exports = router;