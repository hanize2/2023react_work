const express = require('express');
const cors = require('cors');

const User = require("./user");

const app = express();
const port = 9000;
app.use(cors());
app.use(express.json());

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json('  users/id');
});

app.post('/users/insert', async(req, res) => {
    console.log("req.body.email",req.body.email);
    try{
        await User.create({
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


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
